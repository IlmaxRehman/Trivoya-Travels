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

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">

      {/* Image */}

      <div className="relative h-56 overflow-hidden bg-gray-200">

        {tour.hero_image ? (
          <img
            src={tour.hero_image}
            alt={tour.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}

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
          <span>{tour.duration}</span>
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

            {tour.discount_price ? (
              <div>
                <div className="flex items-center gap-2">

                  <span className="text-3xl font-bold text-orange-500">
                    ₹{Number(tour.discount_price).toLocaleString("en-IN")}
                  </span>

                  <span className="text-lg text-gray-400 line-through">
                    ₹{Number(tour.price).toLocaleString("en-IN")}
                  </span>

                </div>

                <span className="inline-block mt-2 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
                  Save ₹
                  {(
                    Number(tour.price) -
                    Number(tour.discount_price)
                  ).toLocaleString("en-IN")}
                </span>
              </div>
            ) : (
              <h3 className="text-3xl font-bold text-orange-500">
                ₹{Number(tour.price).toLocaleString("en-IN")}
              </h3>
            )}

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