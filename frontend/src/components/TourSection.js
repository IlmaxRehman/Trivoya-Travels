"use client"

import { useEffect, useState } from "react"
import TourCard from "./TourCard"

export default function TourSection() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/tours/")
      .then((res) => res.json())
      .then((data) => {
        setTours(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))

  }, [])

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Taj Mahal & Golden Triangle Tour Packages
        </h2>

        {/* SEO text */}

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover our most popular India tour packages including Taj Mahal
          sunrise tours, Golden Triangle itineraries, private Agra day trips
          and luxury heritage experiences.
        </p>

        {/* Loading */}

        {loading && (
          <p className="text-center text-gray-500">
            Loading tours...
          </p>
        )}

        {/* Tours Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}

        </div>

      </div>

    </section>
  )
}
