"use client"

import { useEffect, useState } from "react"
import TourCard from "@/components/TourCard"

export default function ToursPage() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tours/")
      .then((res) => res.json())
      .then((data) => setTours(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Our Tours
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}

      </div>

    </div>
  )
}