from rest_framework import serializers
from .models import  Tour
from .models import BlogPost


class TourSerializer(serializers.ModelSerializer):

    hero_image = serializers.ImageField(use_url=True)
    class Meta:
        model = Tour
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'