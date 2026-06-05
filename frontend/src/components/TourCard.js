import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">

        <Image
          src={getImage()}
          alt={tour.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* CITY BADGE */}
        {tour.city && (
          <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            📍 {tour.city}
          </span>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">

        {/* TITLE */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition">
          {tour.name}
        </h3>

        {/* META */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">

          {tour.duration && (
            <span>🕒 {tour.duration}</span>
          )}

        </div>

        {/* HIGHLIGHTS */}
        <div className="space-y-2 mb-5 text-sm text-gray-600">

          <p>✓ Hotel Pickup</p>
          <p>✓ Professional Guide</p>
          <p>✓ AC Transport</p>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-5">
          {tour.description}
        </p>

        {/* FOOTER */}
        <div className="mt-auto">

          <div className="mb-4">

            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Starting From
            </p>

            <p className="text-3xl font-bold text-orange-500">
              ${tour.price}
            </p>

          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="block w-full text-center bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            View Tour
          </Link>

        </div>

      </div>
    </div>
  );
}