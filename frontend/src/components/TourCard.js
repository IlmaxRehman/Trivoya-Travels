import Image from "next/image"
import Link from "next/link"

export default function TourCard({ tour }) {

  if (!tour) return null

  // 🔥 LOCAL IMAGE MAPPING (NO ERRORS EVER)

  const getImage = () => {
    const name = tour.slug || ""

    if (name.includes("sunrise")) return "/images/tours/taj-tour.jpg"
    if (name.includes("delhi")) return "/images/tours/golden-triangle.jpg"
    if (name.includes("agra")) return "/images/tours/agra-fort.jpg"

    return "/images/placeholder.jpg"
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border group">

      {/* IMAGE */}

      <div className="relative h-56 w-full overflow-hidden">

        <Image
          src={getImage()}
          alt={tour.name || "Tour Image"}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* CITY BADGE */}

        {tour.city && (
          <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {tour.city.toUpperCase()}
          </span>
        )}

      </div>

      {/* CONTENT */}

      <div className="p-5 flex flex-col justify-between">

        <h3 className="text-lg font-semibold mb-2 leading-snug group-hover:text-orange-500 transition">
          {tour.name}
        </h3>

        {tour.duration && (
          <p className="text-sm text-gray-500 mb-2">
            ⏱ {tour.duration}
          </p>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex items-center justify-between mt-auto">

          <span className="text-orange-500 font-bold text-lg">
            From {tour.price}
          </span>

          <Link
            href={`/tours/${tour.slug}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
          >
            View Tour
          </Link>

        </div>

      </div>

    </div>
  )
}