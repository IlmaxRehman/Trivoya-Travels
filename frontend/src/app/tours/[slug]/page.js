async function getTour(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/tours/${slug}/`, {
    cache: "no-store",
  })

  return res.json()
}

export default async function TourPage({ params }) {

  const { slug } = await params   // IMPORTANT FIX

  const tour = await getTour(slug)

  const message = `Hi, I'm interested in the ${tour.name}`
  const whatsappLink =
    `https://wa.me/917409970085?text=${encodeURIComponent(message)}`

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
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">

       <h2 className="text-2xl font-semibold mb-4">Tour Highlights</h2>

       <ul className="space-y-2 text-gray-700">

       <li>✔ Private air-conditioned car pickup</li>
       <li>✔ Professional English speaking guide</li>
       <li>✔ Sunrise visit to the Taj Mahal</li>
       <li>✔ Visit Agra Fort UNESCO World Heritage Site</li>
       <li>✔ Hotel pickup and drop-off included</li>

       </ul>

      </div>

      <a
        href={whatsappLink}
        target="_blank"
        className="inline-block mt-4 bg-green-500 text-white px-6 py-3 rounded-lg"
      >
        Book on WhatsApp
      </a>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <p>{tour.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Itinerary</h2>
        <p>{tour.itinerary}</p>
      </div>

    </div>
  )
}