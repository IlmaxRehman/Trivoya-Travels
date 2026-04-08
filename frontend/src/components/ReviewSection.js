export default function ReviewSection() {

  const reviews = [
    {
      name: "Emily Johnson",
      country: "United Kingdom",
      text: "Amazing Taj Mahal sunrise tour! Our guide explained the history beautifully and everything was perfectly organized.",
      rating: 5
    },
    {
      name: "Michael Brown",
      country: "United States",
      text: "The Golden Triangle tour was fantastic. Comfortable car, great guide and seamless experience from Delhi to Agra and Jaipur.",
      rating: 5
    },
    {
      name: "Sophia Wilson",
      country: "Australia",
      text: "One of the best travel experiences I've had in India. Watching the Taj Mahal at sunrise was unforgettable.",
      rating: 5
    },
  ]

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Traveler Reviews
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Hear from travelers who experienced our Taj Mahal and Golden Triangle
          tours with Trivoya Travels.
        </p>

        {/* Reviews */}

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >

              {/* Stars */}

              <p className="text-yellow-500 mb-3 text-lg">
                {"★".repeat(review.rating)}
              </p>

              {/* Review text */}

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* Name */}

              <p className="font-semibold text-sm">
                {review.name}
              </p>

              <p className="text-gray-500 text-xs">
                {review.country}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}