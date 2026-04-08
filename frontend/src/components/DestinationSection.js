import Image from "next/image"

export default function Destinations() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Explore Golden Triangle Destinations
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover India's most iconic cities — Agra, Delhi and Jaipur —
          featuring world famous landmarks like the Taj Mahal, Amber Fort
          and India Gate.
        </p>

        {/* Destination Grid */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Agra */}

          <a
            href="/tours?city=agra"
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >

            <div className="relative h-72 w-full">

              <Image
                src="/images/destinations/agra.jpg"
                alt="Taj Mahal sunrise in Agra India"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">

              <h3 className="text-xl font-semibold">
                Agra Tours
              </h3>

              <p className="text-sm text-gray-200">
                Taj Mahal • Agra Fort • Mehtab Bagh
              </p>

            </div>

          </a>

          {/* Jaipur */}

          <a
            href="/tours?city=jaipur"
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >

            <div className="relative h-72 w-full">

              <Image
                src="/images/destinations/jaipur.jpg"
                alt="Hawa Mahal palace in Jaipur Rajasthan"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">

              <h3 className="text-xl font-semibold">
                Jaipur Tours
              </h3>

              <p className="text-sm text-gray-200">
                Amber Fort • City Palace • Hawa Mahal
              </p>

            </div>

          </a>

          {/* Delhi */}

          <a
            href="/tours?city=delhi"
            className="group relative rounded-xl overflow-hidden shadow-lg"
          >

            <div className="relative h-72 w-full">

              <Image
                src="/images/destinations/delhi.jpg"
                alt="India Gate landmark in New Delhi India"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">

              <h3 className="text-xl font-semibold">
                Delhi Tours
              </h3>

              <p className="text-sm text-gray-200">
                India Gate • Red Fort • Qutub Minar
              </p>

            </div>

          </a>

        </div>

      </div>

    </section>
  )
}