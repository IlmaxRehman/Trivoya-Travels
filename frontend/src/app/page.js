import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="relative h-[85vh] w-full">

        <Image
          src="/images/hero/taj.jpg"
          alt="Taj Mahal Tour"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

          <div className="text-center text-white max-w-2xl">

            <h1 className="text-5xl font-bold mb-6">
              Explore India With Trivoya Travels
            </h1>

            <p className="text-lg mb-8">
              Private Taj Mahal tours, Golden Triangle packages and guided
              experiences across Agra, Delhi and Jaipur.
            </p>

            <a
              href="/tours"
              className="bg-orange-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-orange-600 transition"
            >
              Explore Tours
            </a>

          </div>

        </div>

      </section>

      {/* POPULAR TOURS */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Popular Tours
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/images/tours/taj-tour.jpg"
              width={400}
              height={250}
              alt="Taj Mahal Tour"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                Taj Mahal Sunrise Tour
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Witness the breathtaking Taj Mahal at sunrise with our expert guide.
              </p>
              <button className="text-orange-500 font-medium">
                View Details
              </button>
            </div>
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/images/tours/golden-triangle.jpg"
              width={400}
              height={250}
              alt="Golden Triangle Tour"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                Golden Triangle Tour
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Explore Delhi, Agra and Jaipur in our most popular 3-day tour.
              </p>
              <button className="text-orange-500 font-medium">
                View Details
              </button>
            </div>
          </div>

          <div className="shadow-lg rounded-xl overflow-hidden">
            <Image
              src="/images/tours/agra-fort.jpg"
              width={400}
              height={250}
              alt="Agra Fort Tour"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                Agra Fort & Taj Tour
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Discover Agra's historic wonders including the Taj Mahal and Agra Fort.
              </p>
              <button className="text-orange-500 font-medium">
                View Details
              </button>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}