from django.contrib import admin
from django.utils.html import format_html

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
        "hero_preview",
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

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }

    ordering = (
        "display_order",
        "name",
    )

    inlines = [TourImageInline]

    def hero_preview(self, obj):
        if obj.hero_image:
            return format_html(
                '<img src="{}" width="90" style="border-radius:8px;" />',
                obj.hero_image.url,
            )
        return "-"

    hero_preview.short_description = "Hero Image"


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
        "featured_preview",
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

    def featured_preview(self, obj):
        if obj.featured_image:
            return format_html(
                '<img src="{}" width="90" style="border-radius:8px;" />',
                obj.featured_image.url,
            )
        return "-"

    featured_preview.short_description = "Image"


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
        "tour",
    )

    search_fields = (
        "name",
        "phone",
        "email",
    )