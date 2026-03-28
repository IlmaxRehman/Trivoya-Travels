export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">

      <img
        src={tour.hero_image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        <h3 className="text-lg font-semibold">{tour.name}</h3>

        <p className="text-gray-500">{tour.duration}</p>

        <p className="text-orange-600 font-bold mt-2">{tour.price}</p>

        <a
          href={`/tours/${tour.slug}`}
          className="inline-block mt-3 bg-orange-500 text-white px-4 py-2 rounded"
        >
          View Details
        </a>

      </div>
    </div>
  )
}