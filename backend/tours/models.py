from django.db import models


class Tour(models.Model):

    CITY_CHOICES = [
        ("agra", "Agra"),
        ("delhi", "Delhi"),
        ("jaipur", "Jaipur"),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    city = models.CharField(
        max_length=20,
        choices=CITY_CHOICES
    )

    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=50)

    description = models.TextField()
    itinerary = models.TextField()

    hero_image = models.ImageField(upload_to="tours/")

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class BlogPost(models.Model):

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    content = models.TextField()
    featured_image = models.URLField()

    created_at = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title