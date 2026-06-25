"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

export default function CityToursPage({
  city,
  title,
  description,
  hero,
}) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTours() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/tours/?city=${city}`
        );

        const data = await res.json();

        setTours(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTours();
  }, [city]);

  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">

        <Image
          src={hero}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="text-center text-white max-w-4xl px-6">

            <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
              DISCOVER
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              {description}
            </p>

          </div>

        </div>

      </section>

      {/* TOURS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14 text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Tours
            </h2>

            <p className="text-gray-600 mt-4">
              Handpicked experiences curated by Trivoya Travels.
            </p>

          </div>

          {loading ? (

            <div className="text-center py-20">

              <p className="text-lg text-gray-500">
                Loading tours...
              </p>

            </div>

          ) : tours.length === 0 ? (

            <div className="text-center py-20">

              <h3 className="text-3xl font-bold mb-4">
                No Tours Found
              </h3>

              <p className="text-gray-600">
                Tours for this destination will appear here.
              </p>

            </div>

          ) : (

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

              {tours.map((tour) => (

                <div
                  key={tour.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
                >

                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={tour.hero_image}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    {tour.featured && (

                      <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">

                        <FaStar />

                        Featured

                      </div>

                    )}

                  </div>

                  <div className="p-7">

                    <h3 className="text-2xl font-bold mb-3">
                      {tour.name}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {tour.short_description}
                    </p>
                                        <div className="space-y-3 mb-7">

                      <div className="flex items-center gap-3 text-gray-600">

                        <FaClock className="text-orange-500" />

                        <span>{tour.duration}</span>

                      </div>

                      <div className="flex items-center gap-3 text-gray-600">

                        <FaMapMarkerAlt className="text-orange-500" />

                        <span className="capitalize">
                          {tour.city}
                        </span>

                      </div>

                    </div>

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-sm text-gray-500">
                          Starting From
                        </p>

                        <h4 className="text-3xl font-bold text-orange-500">
                          ₹{tour.price}
                        </h4>

                      </div>

                      <Link
                        href={`/tours/${tour.slug}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
                      >

                        View Details

                        <FaArrowRight />

                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </div>
  );
}