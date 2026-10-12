
import logging

from django.conf import settings
from django.core.mail import send_mail
from django.db import transaction
from rest_framework import generics

from .models import Tour, BlogPost, Booking
from .serializers import TourSerializer, BlogPostSerializer, BookingSerializer

logger = logging.getLogger(__name__)


class TourListView(generics.ListAPIView):
    serializer_class = TourSerializer

    def get_queryset(self):
        queryset = Tour.objects.filter(is_active=True)
        city = self.request.query_params.get("city")

        if city:
            queryset = queryset.filter(city__icontains=city)

        return queryset


class TourDetailView(generics.RetrieveAPIView):
    queryset = Tour.objects.filter(is_active=True)
    serializer_class = TourSerializer
    lookup_field = "slug"


class BlogListView(generics.ListAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer


class BlogDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    lookup_field = "slug"


def send_booking_notifications(booking_id):
    """Email the business and customer after a booking is saved."""
    try:
        booking = Booking.objects.select_related("tour").get(pk=booking_id)
    except Booking.DoesNotExist:
        logger.error("Cannot email: booking %s was not found.", booking_id)
        return

    # Don't attempt SMTP until credentials are configured.
    if not all([
        settings.EMAIL_HOST,
        settings.EMAIL_HOST_USER,
        settings.EMAIL_HOST_PASSWORD,
        settings.DEFAULT_FROM_EMAIL,
    ]):
        logger.warning(
            "Booking %s was saved, but email was skipped: SMTP settings are incomplete.",
            booking_id,
        )
        return

    date = booking.travel_date.strftime("%d %B %Y")
    customer_email = (booking.email or "").strip()
    owner_email = getattr(settings, "BOOKING_NOTIFICATION_EMAIL", "").strip()

    # 1. Notify the business owner.
    if owner_email:
        owner_subject = f"New Trivoya booking inquiry — {booking.tour.name}"
        owner_message = (
            "A new booking inquiry has been submitted on Trivoya Travels.\n\n"
            f"Booking ID: {booking.pk}\n"
            f"Customer name: {booking.name}\n"
            f"Phone: {booking.phone}\n"
            f"Email: {customer_email or 'Not provided'}\n"
            f"Tour: {booking.tour.name}\n"
            f"Travel date: {date}\n"
            f"Number of travellers: {booking.travellers}\n"
            f"Message: {booking.message or 'No additional message'}\n\n"
            "This is an inquiry; contact the customer to discuss availability "
            "and confirm the booking."
        )

        try:
            send_mail(
                subject=owner_subject,
                message=owner_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[owner_email],
                fail_silently=False,
                reply_to=[customer_email] if customer_email else [],
            )
        except Exception:
            logger.exception(
                "Could not send the owner notification for booking %s.",
                booking_id,
            )
    else:
        logger.warning(
            "Booking %s was saved, but BOOKING_NOTIFICATION_EMAIL is empty.",
            booking_id,
        )

    # 2. Acknowledge the customer's inquiry, if they supplied an email.
    if customer_email:
        customer_subject = "We received your Trivoya booking inquiry"
        customer_message = (
            f"Hello {booking.name},\n\n"
            "Thank you for contacting Trivoya Travels. We have received "
            "your booking inquiry with the following details:\n\n"
            f"Tour: {booking.tour.name}\n"
            f"Travel date: {date}\n"
            f"Number of travellers: {booking.travellers}\n\n"
            "Our team will review your inquiry and contact you to discuss "
            "availability and next steps. Your booking is not confirmed yet.\n\n"
            "Thank you,\n"
            "Trivoya Travels"
        )

        try:
            send_mail(
                subject=customer_subject,
                message=customer_message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[customer_email],
                fail_silently=False,
            )
        except Exception:
            logger.exception(
                "Could not send the customer acknowledgement for booking %s.",
                booking_id,
            )


class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def perform_create(self, serializer):
        booking = serializer.save()

        # Only attempt email after the database transaction commits.
        transaction.on_commit(
            lambda booking_id=booking.pk: send_booking_notifications(booking_id)
        )
