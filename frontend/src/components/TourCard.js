import Image from "next/image"

export default function TourCard({ image, title, description, price }) {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden bg-white">

      <Image
        src={image}
        width={400}
        height={250}
        alt={title}
      />

      <div className="p-5">

        <h3 className="font-semibold text-lg mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        <div className="flex justify-between items-center">

          <span className="text-orange-500 font-bold">
            ${price}
          </span>

          <a
            href="/tours"
            className="text-orange-500 font-medium"
          >
            View Details
          </a>

        </div>

      </div>

    </div>
  )
}