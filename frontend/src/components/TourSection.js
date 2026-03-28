"use client"

import { useEffect, useState } from "react"
import TourCard from "./TourCard"

export default function TourSection() {

  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tours/")
      .then((res) => res.json())
      .then((data) => setTours(data))
  }, [])

  return (
    <section className="py-16 px-8 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Tours
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}

      </div>

    </section>
  )
}