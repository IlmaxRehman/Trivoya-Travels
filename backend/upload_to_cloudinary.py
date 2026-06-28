import os
from pathlib import Path

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

import django
django.setup()

from django.core.files import File
from tours.models import Tour, TourImage, BlogPost


BASE_DIR = Path(__file__).resolve().parent


def upload(instance, field_name):
    field = getattr(instance, field_name)

    if not field:
        return

    local_path = BASE_DIR / field.name

    if not local_path.exists():
        print(f"Missing: {local_path}")
        return

    print(f"Uploading {local_path}")

    # Remove old reference first
    field.delete(save=False)

    with open(local_path, "rb") as f:
        field.save(
            os.path.basename(local_path),
            File(f),
            save=True,
        )


print("\nTour Hero Images")
for obj in Tour.objects.all():
    upload(obj, "hero_image")

print("\nGallery Images")
for obj in TourImage.objects.all():
    upload(obj, "image")

print("\nBlog Images")
for obj in BlogPost.objects.all():
    upload(obj, "featured_image")

print("\nDone!")