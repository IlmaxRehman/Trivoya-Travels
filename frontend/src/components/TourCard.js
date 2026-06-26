import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

export default function TourCard({ tour }) {
  if (!tour) return null;

  const getImage = () => {
    const name = tour.slug || "";

    if (name.includes("sunrise")) return "/images/tours/taj-tour.jpg";
    if (name.includes("delhi")) return "/images/tours/golden-triangle.jpg";
    if (name.includes("agra")) return "/images/tours/agra-fort.jpg";

    return "/images/placeholder.jpg";
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">

      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={getImage()}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {tour.featured && (

          <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg">

            <FaStar />

            Featured

          </div>

        )}

        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold">

          <FaMapMarkerAlt className="text-orange-500" />

          <span className="capitalize">{tour.city}</span>

        </div>

      </div>

      {/* Content */}

      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition">

          {tour.name}

        </h3>

        <div className="flex items-center gap-2 text-gray-500 mb-5">

          <FaClock className="text-orange-500" />

          {tour.duration}

        </div>

        <div className="space-y-3 mb-6">

          <div className="flex items-center gap-3">

            <FaCheckCircle className="text-green-500" />

            <span>Hotel Pickup Included</span>

          </div>

          <div className="flex items-center gap-3">

            <FaCheckCircle className="text-green-500" />

            <span>Professional Tour Guide</span>

          </div>

          <div className="flex items-center gap-3">

            <FaCheckCircle className="text-green-500" />

            <span>Comfortable AC Vehicle</span>

          </div>

        </div>

        <p className="text-gray-600 leading-7 line-clamp-3 mb-6">

          {tour.short_description || tour.description}

        </p>

        <div className="mt-auto flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">

              Starting From

            </p>

            <h3 className="text-3xl font-bold text-orange-500">

              ₹{tour.price}

            </h3>

          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
          >

            View

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </div>
  );
}