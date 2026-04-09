import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full pt-16">

      {/* Background Image */}

      <Image
        src="/images/hero/taj.jpg"
        alt="Golden Triangle tour with Taj Mahal sunrise in Agra India"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">

        <div className="text-center text-white max-w-3xl px-6">

          {/* Headline */}

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Golden Triangle & Taj Mahal Tours
          </h1>

          {/* Tagline */}

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Private guided tours across Delhi, Agra and Jaipur.
            Experience the Taj Mahal at sunrise with expert local guides.
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/tours"
              className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Explore Packages
            </a>

            <a
              href="https://wa.me/911234567890"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Quote
            </a>

          </div>

          {/* Trust Bar */}

          <div className="grid grid-cols-3 gap-6 mt-12 text-sm md:text-base">

            <div>
              <p className="font-bold text-xl">10K+</p>
              <p className="text-gray-300">Happy Travellers</p>
            </div>

            <div>
              <p className="font-bold text-xl">4.9 ★</p>
              <p className="text-gray-300">Average Rating</p>
            </div>

            <div>
              <p className="font-bold text-xl">8+ Years</p>
              <p className="text-gray-300">Tour Experience</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}