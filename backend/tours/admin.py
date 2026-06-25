from django.contrib import admin
from .models import (
    Tour,
    TourImage,
    Category,
    BlogPost,
    Booking,
)


class TourImageInline(admin.TabularInline):
    model = TourImage
    extra = 1


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "city",
        "category",
        "price",
        "featured",
        "is_active",
        "display_order",
    )

    list_filter = (
        "city",
        "featured",
        "is_active",
        "category",
    )

    search_fields = (
        "name",
        "description",
        "short_description",
    )

    list_editable = (
        "featured",
        "is_active",
        "display_order",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    ordering = (
        "display_order",
        "name",
    )

    inlines = [TourImageInline]


@admin.register(TourImage)
class TourImageAdmin(admin.ModelAdmin):
    list_display = (
        "tour",
        "caption",
        "display_order",
    )

    list_editable = (
        "display_order",
    )


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "is_published",
        "created_at",
    )

    list_filter = (
        "is_published",
    )

    search_fields = (
        "title",
        "content",
    )

    prepopulated_fields = {
        "slug": ("title",)
    }


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "tour",
        "travel_date",
        "travellers",
        "created_at",
    )

    list_filter = (
        "travel_date",
    )

    search_fields = (
        "name",
        "phone",
        "email",
    )