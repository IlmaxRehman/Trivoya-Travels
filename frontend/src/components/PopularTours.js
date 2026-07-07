"use client";

import { useEffect, useState } from "react";
import TourCard from "./TourCard";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default function PopularTours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function loadTours() {
      try {
        const res = await fetch(`${API_BASE}/api/tours/`);

        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }

        const data = await res.json();
        console.log("API_BASE:", API_BASE);
        console.log("Tours API Response:", data);
        console.log("Featured Tours:", data.filter((tour) => tour.featured));

        // Show featured tours first
        const featuredTours = data.filter((tour) => tour.featured);

        if (featuredTours.length >= 3) {
          setTours(featuredTours.slice(0, 3));
        } else {
          // Fill remaining cards with other tours
          const remaining = data.filter((tour) => !tour.featured);
          setTours([...featuredTours, ...remaining].slice(0, 3));
        }
      } catch (err) {
        console.error("Failed to load tours:", err);
      }
    }

    loadTours();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Popular Tours
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most loved travel experiences, carefully curated to
            showcase the very best of North India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}