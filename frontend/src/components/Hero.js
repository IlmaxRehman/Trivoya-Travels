"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {

  const images = [
    "/images/hero/taj.jpg",
    "/images/hero/agra-fort.jpg",
    "/images/hero/delhi.jpg",
    "/images/hero/amber.jpg"
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)

  }, [])

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background images */}

      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="Golden Triangle tour India"
          fill
          priority={i === 0}
          className={`object-cover transition-all duration-7000 ${
          i === index
            ? "opacity-100 scale-110"
            : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white to-transparent"></div>

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

        <div className="text-center text-white max-w-3xl px-6">

          {/* Headline */}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Golden Triangle & Taj Mahal Tours
          </h1>

          {/* Subtitle */}

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Private guided tours across Delhi, Agra and Jaipur.
            Experience the Taj Mahal at sunrise with expert local guides.
          </p>

          {/* Buttons */}

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

          {/* Trust indicators */}

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