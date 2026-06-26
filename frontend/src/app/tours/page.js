import Image from "next/image";
import TourFilters from "@/components/TourFilters";
import { getTours } from "@/services/api";

export const metadata = {
  title: "Tours | Trivoya Travels",
  description:
    "Explore unforgettable tours across Agra, Delhi and Jaipur with Trivoya Travels.",
};

export default async function ToursPage() {
  const tours = await getTours();

  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[65vh] min-h-[550px] overflow-hidden">

        <Image
          src="/images/tours/tours-hero.jpg"
          alt="Explore Tours"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="text-center text-white max-w-4xl px-6">

            <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
              TRIVOYA TRAVELS
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Explore Incredible India
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Handpicked experiences across Agra, Delhi, Jaipur and beyond.
            </p>

          </div>

        </div>

      </section>

      {/* TOURS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900">
              All Tour Packages
            </h2>

            <p className="text-gray-600 mt-4">
              Discover unforgettable travel experiences crafted by Trivoya
              Travels.
            </p>

          </div>

          <TourFilters tours={tours} />

        </div>

      </section>

    </div>
  );
}