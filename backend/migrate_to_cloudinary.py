import os
from pathlib import Path

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

import django
django.setup()

import cloudinary.uploader

from tours.models import Tour, TourImage, BlogPost

BASE_DIR = Path(__file__).resolve().parent


def migrate(instance, field_name):
    field = getattr(instance, field_name)

    if not field:
        return

    local_file = BASE_DIR / "media" / field.name

    if not local_file.exists():
        print(f"❌ Missing: {local_file}")
        return

    print(f"⬆ Uploading {local_file.name}")

    result = cloudinary.uploader.upload(str(local_file))

    field.name = result["public_id"]
    instance.save(update_fields=[field_name])

    print("✅ Done")


print("Migrating Tour Hero Images...")
for obj in Tour.objects.all():
    migrate(obj, "hero_image")

print("Migrating Gallery Images...")
for obj in TourImage.objects.all():
    migrate(obj, "image")

print("Migrating Blog Featured Images...")
for obj in BlogPost.objects.all():
    migrate(obj, "featured_image")

print("\n🎉 Migration Complete!")