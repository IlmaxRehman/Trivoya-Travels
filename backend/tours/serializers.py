from rest_framework import serializers
from .models import (
    Tour,
    TourImage,
    BlogPost,
    Booking,
    Category,
)


class TourImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourImage
        fields = [
            "id",
            "image",
            "caption",
            "display_order",
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class TourSerializer(serializers.ModelSerializer):

    hero_image = serializers.ImageField(use_url=True)
    gallery = TourImageSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Tour
        fields = "__all__"


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = "__all__"