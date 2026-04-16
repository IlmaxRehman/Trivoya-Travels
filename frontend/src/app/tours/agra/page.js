"use client"

import { useEffect, useState } from "react"
import TourCard from "@/components/TourCard"
import Image from "next/image"

export default function AgraTours() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/tours/?city=agra`)
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  return (
    <div>

      {/* 🔥 HERO SECTION */}

      <section className="relative h-[50vh] w-full">

        <Image
          src="/images/destinations/agra.jpg"
          alt="Agra Tours"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <div className="text-center text-white px-6">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agra Tour Packages
            </h1>

            <p className="max-w-2xl text-lg text-gray-200">
              Explore the Taj Mahal, Agra Fort and experience Mughal history with expert guides.
            </p>

          </div>

        </div>

      </section>

      {/* 🔥 TOURS */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {tours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}