import Image from "next/image"

export default function TourCard({ tour }) {

  if (!tour) return null

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border">

      {/* Image */}

      <div className="relative h-56 w-full">

        <Image
          src={tour.hero_image || "/images/placeholder.jpg"}
          alt={(tour.name || "Tour") + " Taj Mahal tour"}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />

        {/* City Badge */}

        {tour.city && (
          <span className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow">
            {tour.city.toUpperCase()}
          </span>
        )}

      </div>

      {/* Content */}

      <div className="p-5 flex flex-col justify-between h-50">

        {/* Title */}

        <h3 className="text-lg font-semibold mb-2 leading-snug">
          {tour.name || "Tour Package"}
        </h3>

        {/* Duration */}

        {tour.duration && (
          <p className="text-sm text-gray-500 mb-2">
            ⏱ {tour.duration}
          </p>
        )}

        {/* Description */}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description || ""}
        </p>

        {/* Bottom */}

        <div className="flex items-center justify-between mt-auto">

          {/* Price */}

          <span className="text-orange-500 font-bold text-lg">
            From ${tour.price}
          </span>

          {/* CTA */}

          <a
            href={`/tour/${tour.slug}`}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition"
          >
            View Tour
          </a>

        </div>

      </div>

    </div>
  )
}