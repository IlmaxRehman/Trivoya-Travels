async function getTour(slug) {
  const res = await fetch(`http://127.0.0.1:8000/api/tours/${slug}/`, {
    cache: "no-store",
  })

  return res.json()
}

export default async function TourPage({ params }) {

  const { slug } = await params
  const tour = await getTour(slug)

  const message = `Hi, I'm interested in the ${tour.name}`
  const whatsappLink =
    `https://wa.me/917409970085?text=${encodeURIComponent(message)}`

  return (
    <div>

      {/* 🔥 HERO */}

      <div className="relative h-[60vh] w-full">

        <img
          src="/images/tours/taj-tour.jpg"
          alt={tour.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-6">
            {tour.name}
          </h1>

        </div>

      </div>

      {/* 🔥 CONTENT */}

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}

        <div className="md:col-span-2">

          {/* Overview */}

          <h2 className="text-2xl font-semibold mb-4">
            Tour Overview
          </h2>

          <p className="text-gray-700 mb-6">
            {tour.description}
          </p>

          {/* Highlights */}

          <div className="bg-gray-50 p-6 rounded-xl mb-8">

            <h3 className="text-xl font-semibold mb-4">
              Tour Highlights
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Private air-conditioned car</li>
              <li>✔ Professional tour guide</li>
              <li>✔ Hotel pickup & drop</li>
              <li>✔ Comfortable travel experience</li>
            </ul>

          </div>

          {/* Itinerary */}

          <h2 className="text-2xl font-semibold mb-4">
            Itinerary
          </h2>

          <p className="text-gray-700 whitespace-pre-line">
            {tour.itinerary}
          </p>

        </div>

        {/* RIGHT SIDE (BOOKING BOX) */}

        <div className="bg-white border rounded-xl shadow-md p-6 h-fit sticky top-24">

          <h3 className="text-xl font-semibold mb-4">
            Book This Tour
          </h3>

          <p className="text-gray-500 mb-2">
            Duration: {tour.duration}
          </p>

          <p className="text-2xl text-orange-500 font-bold mb-6">
            {tour.price}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            className="block text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Book on WhatsApp
          </a>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Instant confirmation via WhatsApp
          </p>

        </div>

      </div>

    </div>
  )
}