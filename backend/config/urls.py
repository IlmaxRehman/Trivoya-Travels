from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from tours.views import (
    TourListView,
    TourDetailView,
    BlogListView,
    BlogDetailView,
    BookingCreateView,
)

urlpatterns = [

    path("admin/", admin.site.urls),

    # Public APIs

    path("api/tours/", TourListView.as_view()),
    path("api/tours/<slug:slug>/", TourDetailView.as_view()),

    path("api/blog/", BlogListView.as_view()),
    path("api/blog/<slug:slug>/", BlogDetailView.as_view()),

    path("api/bookings/", BookingCreateView.as_view()),

    # JWT

    path("api/token/", TokenObtainPairView.as_view()),
    path("api/token/refresh/", TokenRefreshView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)