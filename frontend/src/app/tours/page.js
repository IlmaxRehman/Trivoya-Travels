import Image from "next/image"

export default function Tours() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Explore Our Tours
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Tour Card */}

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

            <p className="text-gray-600 text-sm mb-4">
              Experience the iconic Taj Mahal at sunrise with our expert guide.
            </p>

            <div className="flex justify-between items-center">

              <span className="text-orange-500 font-bold">
                $49
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600">
                View Tour
              </button>

            </div>
          </div>
        </div>

        {/* Card 2 */}

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

            <p className="text-gray-600 text-sm mb-4">
              Discover Delhi, Agra and Jaipur in one unforgettable journey.
            </p>

            <div className="flex justify-between items-center">

              <span className="text-orange-500 font-bold">
                $199
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600">
                View Tour
              </button>

            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="shadow-lg rounded-xl overflow-hidden">
          <Image
            src="/images/tours/agra-fort.jpg"
            width={400}
            height={250}
            alt="Agra Fort Tour"
          />

          <div className="p-5">
            <h3 className="font-semibold text-lg mb-2">
              Taj & Agra Fort Tour
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Explore the Taj Mahal and historic Agra Fort with local experts.
            </p>

            <div className="flex justify-between items-center">

              <span className="text-orange-500 font-bold">
                $79
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600">
                View Tour
              </button>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}