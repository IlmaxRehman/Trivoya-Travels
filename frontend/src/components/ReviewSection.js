export default function ReviewSection() {

  const reviews = [
    {
      name: "Emily Johnson",
      text: "Amazing Taj Mahal tour! Our guide was very knowledgeable.",
    },
    {
      name: "Michael Brown",
      text: "Everything was perfectly organized. Highly recommended!",
    },
    {
      name: "Sophia Wilson",
      text: "One of the best travel experiences I've had in India.",
    },
  ]

  return (
    <section className="py-16 px-8 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Travelers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((review, index) => (

          <div key={index} className="bg-white p-6 rounded-lg shadow">

            <p className="text-yellow-500 mb-2">★★★★★</p>

            <p className="text-gray-700 mb-4">
              "{review.text}"
            </p>

            <p className="font-semibold">
              {review.name}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}