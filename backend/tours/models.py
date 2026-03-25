from django.db import models

# Create your models here.
class Tour(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    duration = models.CharField(max_length=50)
    price = models.CharField(max_length=50)

    description = models.TextField()

    itinerary = models.TextField()

    hero_image = models.URLField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_created=True)

    def __str__(self):
        return self.name