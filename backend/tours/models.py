from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Tour(models.Model):

    CITY_CHOICES = [
        ("agra", "Agra"),
        ("delhi", "Delhi"),
        ("jaipur", "Jaipur"),
    ]

    city = models.CharField(
        max_length=20,
        choices=CITY_CHOICES,
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)

    short_description = models.CharField(max_length=300)

    description = models.TextField()

    itinerary = models.TextField()

    highlights = models.TextField(
        blank=True,
        help_text="One highlight per line"
    )

    inclusions = models.TextField(
        blank=True,
        help_text="One inclusion per line"
    )

    exclusions = models.TextField(
        blank=True,
        help_text="One exclusion per line"
    )

    duration = models.CharField(max_length=50)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    discount_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
    )

    hero_image = models.ImageField(upload_to="tours/hero/")

    featured = models.BooleanField(default=False)

    display_order = models.PositiveIntegerField(default=0)

    seo_title = models.CharField(
        max_length=200,
        blank=True,
    )

    seo_description = models.TextField(
        blank=True,
    )

    meta_keywords = models.CharField(
        max_length=300,
        blank=True,
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name


class TourImage(models.Model):

    tour = models.ForeignKey(
        Tour,
        related_name="gallery",
        on_delete=models.CASCADE,
    )

    image = models.ImageField(upload_to="tours/gallery/")

    caption = models.CharField(
        max_length=200,
        blank=True,
    )

    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return f"{self.tour.name} Image"


class BlogPost(models.Model):

    title = models.CharField(max_length=200)

    slug = models.SlugField(unique=True)

    content = models.TextField(
         help_text="You can write the full blog article here."
    )

    featured_image = models.ImageField(
         upload_to="blogs/",
         blank=True,
         null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Booking(models.Model):

    name = models.CharField(max_length=200)

    phone = models.CharField(max_length=20)

    email = models.EmailField(
        blank=True,
        null=True,
    )

    tour = models.ForeignKey(
        Tour,
        on_delete=models.CASCADE,
    )

    travel_date = models.DateField()

    travellers = models.IntegerField(default=1)

    message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.tour.name}"