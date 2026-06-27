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

        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }

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

      {/* Hero */}

      <section className="relative h-[45vh] md:h-[500px] overflow-hidden">

        <Image
          src={hero}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-4xl px-6 text-center text-white">

            <p className="mb-4 uppercase tracking-[6px] text-orange-300 font-semibold">
              DISCOVER
            </p>

            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold">
              {title}
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-gray-200 leading-8">
              {description}
            </p>

          </div>

        </div>

      </section>

      {/* Tours */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-gray-900">
              Popular Tours
            </h2>

            <p className="mt-4 text-gray-600">
              Handpicked experiences curated by Trivoya Travels.
            </p>

          </div>

          {loading ? (

            <div className="py-20 text-center">

              <p className="text-lg text-gray-500">
                Loading tours...
              </p>

            </div>

          ) : tours.length === 0 ? (

            <div className="py-20 text-center">

              <h3 className="mb-4 text-3xl font-bold">
                No Tours Found
              </h3>

              <p className="text-gray-600">
                Tours for this destination will appear here.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                              {tours.map((tour) => (

                <div
                  key={tour.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >

                  {/* Tour Image */}

                  <div className="relative h-64 overflow-hidden bg-gray-100">

                    <img
                      src={tour.hero_image}
                      alt={tour.name}
                      onError={(e) => {
                      console.log("IMAGE FAILED", tour.hero_image);
                      e.target.style.border = "4px solid red";
                    }}
                      onLoad={() => console.log("IMAGE LOADED")}
                      className="w-full h-full object-cover"
                    />

                    {tour.featured && (

                      <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">

                        <FaStar />

                        Featured

                      </div>

                    )}

                  </div>

                  {/* Content */}

                  <div className="p-7 flex flex-col">

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">

                      {tour.name}

                    </h3>

                    <p className="text-gray-600 leading-7 mb-6">

                      {tour.short_description}

                    </p>

                    <div className="mt-6 space-y-3">

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

                    <div className="mt-auto pt-7 flex items-end justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-wider text-gray-500">

                          Starting From

                        </p>

                        {tour.discount_price ? (

                          <div className="mt-1">

                             <h4 className="text-3xl font-bold text-orange-500">
                              ₹{Number(tour.discount_price).toLocaleString("en-IN")}
                            </h4>

                            <p className="text-gray-400 line-through text-sm">
                               ₹{Number(tour.price).toLocaleString("en-IN")}
                            </p>

                        </div>

                    ) : (

                        <h4 className="text-3xl font-bold text-orange-500 mt-1">
                          ₹{Number(tour.price).toLocaleString("en-IN")}
                        </h4>

                    )}

                      </div>

                      <Link
                        href={`/tours/${tour.slug}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
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