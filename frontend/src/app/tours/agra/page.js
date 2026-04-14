"use client"

import { useEffect, useState } from "react"
import TourCard from "@/components/TourCard"

export default function AgraTours() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tours/?city=agra`)
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center mb-4">
          Agra Tour Packages
        </h1>

        {/* SEO Text */}

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover the beauty of Agra with our expertly curated tour packages.
          Visit the Taj Mahal, Agra Fort and explore Mughal history with professional guides.
        </p>

        {/* Tours */}

        <div className="grid md:grid-cols-3 gap-8">

          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}

        </div>

      </div>

    </section>
  )
}