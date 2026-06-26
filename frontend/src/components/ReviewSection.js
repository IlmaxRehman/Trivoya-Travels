import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Emily Johnson",
      country: "United Kingdom",
      image: "/images/reviews/review1.jpg",
      text: "Amazing Taj Mahal sunrise tour! Our guide explained the history beautifully and everything was perfectly organized.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      country: "United States",
      image: "/images/reviews/review2.jpg",
      text: "The Golden Triangle tour was fantastic. Comfortable car, great guide and seamless experience from Delhi to Agra and Jaipur.",
      rating: 5,
    },
    {
      name: "Sophia Wilson",
      country: "Australia",
      image: "/images/reviews/review3.jpg",
      text: "One of the best travel experiences I've had in India. Watching the Taj Mahal at sunrise was unforgettable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-3">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Thousands of happy travelers have explored India's Golden Triangle
            with Trivoya Travels.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >

              <FaQuoteLeft className="text-orange-500 text-3xl mb-5" />

              <div className="flex gap-1 mb-5">

                {[...Array(review.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8 mb-8 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">

                <div className="relative w-16 h-16 rounded-full overflow-hidden">

                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.country}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}