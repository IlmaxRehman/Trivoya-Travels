import Image from "next/image"

export default function TourCard({ tour }) {

  if (!tour) return null

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Image */}

      <div className="relative h-60 w-full">

        <Image
          src={tour.hero_image || "/images/placeholder.jpg"}
          alt={(tour.title || "Tour package") + " Taj Mahal tour"}
          fill
          className="object-cover"
        />

      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-lg font-semibold mb-2">
          {tour.title || "Tour Package"}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.description || ""}
        </p>

        <div className="flex justify-between items-center">

          <span className="text-orange-500 font-bold text-lg">
            ${tour.price || ""}
          </span>

          <a
            href={`/tours/${tour.id}`}
            className="text-orange-500 font-medium hover:underline"
          >
            View Details
          </a>

        </div>

      </div>

    </div>
  )
}