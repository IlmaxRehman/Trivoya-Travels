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
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[60vh] w-full">

        <img
          src={tour.hero_image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {tour.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {tour.duration} • From {tour.price}
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                📍 {tour.city || "India"}
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                🕒 {tour.duration}
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl">
                👨 Professional Guide
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}

          <div className="lg:col-span-2">

            {/* OVERVIEW */}

            <div className="mb-16">

              <h2 className="text-3xl font-bold mb-6">
                Tour Overview
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                {tour.description}
              </p>

            </div>

            {/* HIGHLIGHTS */}

            <div className="mb-16">

              <h2 className="text-3xl font-bold mb-6">
                Tour Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="bg-white p-5 rounded-xl border shadow-sm">
                  ✓ Taj Mahal Visit
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm">
                  ✓ Professional Guide
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm">
                  ✓ Hotel Pickup
                </div>

                <div className="bg-white p-5 rounded-xl border shadow-sm">
                  ✓ AC Transport
                </div>

              </div>

            </div>

            {/* ITINERARY */}

            <div className="mb-16">

              <h2 className="text-3xl font-bold mb-10">
                Itinerary
              </h2>

              <div className="space-y-8">

                {tour.itinerary?.split("→").map((step, index) => (

                  <div
                    key={index}
                    className="flex gap-5 items-start"
                  >

                    <div className="flex flex-col items-center">

                      <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {index !== tour.itinerary.split("→").length - 1 && (
                        <div className="w-[2px] h-14 bg-orange-200 mt-2"></div>
                      )}

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg text-gray-900">
                        {step.trim()}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Tour activity
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* SIDEBAR */}

          <div>

            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border overflow-hidden">

              <div className="bg-orange-500 text-white p-6">

                <p className="uppercase tracking-widest text-sm">
                  Starting From
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  {tour.price}
                </h3>

              </div>

              <div className="p-6 space-y-5">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Duration
                  </span>

                  <span className="font-semibold">
                    {tour.duration}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Location
                  </span>

                  <span className="font-semibold capitalize">
                    {tour.city || "India"}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Guide
                  </span>

                  <span className="font-semibold">
                    Included
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Transport
                  </span>

                  <span className="font-semibold">
                    AC Vehicle
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">
                    Pickup
                  </span>

                  <span className="font-semibold">
                    Included
                  </span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  Book on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}