async function getTour(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/tours/${slug}/`)
  return res.json()
}

export default async function TourPage({ params }) {

  const tour = await getTour(params.slug)

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      <img
        src={tour.hero_image}
        alt={tour.name}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-6">{tour.name}</h1>

      <p className="text-gray-500 mt-2">{tour.duration}</p>

      <p className="text-orange-600 text-xl font-semibold mt-2">
        {tour.price}
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{tour.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Itinerary</h2>
        <p>{tour.itinerary}</p>
      </div>

    </div>
  )
}