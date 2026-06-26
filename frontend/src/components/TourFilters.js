"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

export default function TourFilters({ tours }) {

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredTours = useMemo(() => {

    return tours.filter((tour) => {

      const matchesSearch =
        tour.name.toLowerCase().includes(search.toLowerCase());

      const matchesCity =
        city === "all" || tour.city === city;

      const matchesFeatured =
        !featuredOnly || tour.featured;

      return (
        matchesSearch &&
        matchesCity &&
        matchesFeatured
      );

    });

  }, [tours, search, city, featuredOnly]);

  return (

    <>

      {/* FILTER BAR */}

      <div className="bg-white rounded-3xl shadow-lg p-6 mb-14">

        <div className="grid lg:grid-cols-4 gap-5">

          {/* Search */}

          <div className="relative">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

            <input
              type="text"
              placeholder="Search tours..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          {/* City */}

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >

            <option value="all">All Cities</option>

            <option value="agra">Agra</option>

            <option value="delhi">Delhi</option>

            <option value="jaipur">Jaipur</option>

          </select>

          {/* Featured */}

          <button
            onClick={() => setFeaturedOnly(!featuredOnly)}
            className={`rounded-xl py-3 font-semibold transition ${
              featuredOnly
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-orange-100"
            }`}
          >

            ⭐ Featured Tours

          </button>

          {/* Results */}

          <div className="flex items-center justify-center rounded-xl bg-gray-50 font-semibold text-gray-700">

            {filteredTours.length} Tour(s) Found

          </div>

        </div>

      </div>
            {/* TOURS */}

      {filteredTours.length === 0 ? (

        <div className="text-center py-20">

          <h3 className="text-3xl font-bold mb-4">
            No Tours Found
          </h3>

          <p className="text-gray-600">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {filteredTours.map((tour) => (

            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={tour.hero_image}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {tour.featured && (

                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">

                    <FaStar />

                    Featured

                  </div>

                )}

              </div>

              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold mb-3">

                  {tour.name}

                </h3>

                <p className="text-gray-600 mb-5">

                  {tour.short_description}

                </p>

                <div className="space-y-3 mb-6">

                  <div className="flex items-center gap-3">

                    <FaClock className="text-orange-500" />

                    <span>{tour.duration}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaMapMarkerAlt className="text-orange-500" />

                    <span className="capitalize">
                      {tour.city}
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <FaCheckCircle className="text-green-500" />

                    <span>Hotel Pickup Included</span>

                  </div>

                </div>

                <div className="mt-auto flex items-center justify-between">

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
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition"
                  >

                    View

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </>

  );

}