import {
  FaLandmark,
  FaCarSide,
  FaStar,
  FaHeadset,
} from "react-icons/fa";

export const metadata = {
  title: "About Trivoya Travels",
  description:
    "Learn about Trivoya Travels and our mission to provide memorable travel experiences across Agra, Delhi and Jaipur.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative h-[80vh] min-h-[650px] overflow-hidden">

        <img
          src="/images/about/about-hero.png"
          alt="About Trivoya Travels"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center pt-16">

          <div className="text-center text-white max-w-4xl px-6">

            <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
              ABOUT TRIVOYA
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Creating Unforgettable
              <br />
              Journeys Across India
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Discover the Taj Mahal, Golden Triangle and India's rich heritage
              with trusted local experts and personalized experiences.
            </p>

          </div>

        </div>

      </section>

      {/* STORY */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-5 mb-8">
              Passionate About Authentic Travel
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-6">
              Trivoya Travels was founded with one goal: helping travelers
              experience the real beauty, culture and heritage of India through
              carefully crafted journeys.
            </p>

            <p className="text-lg text-gray-700 leading-8">
              From the iconic Taj Mahal in Agra to the royal palaces of Jaipur
              and the vibrant streets of Delhi, we create memorable experiences
              designed around comfort, authenticity and local expertise.
            </p>

          </div>

          <div className="mt-16">

            <img
              src="/images/about/guide_about.png"
              alt="Travel Guide"
              className="w-full max-w-5xl h-[350px] object-cover rounded-3xl shadow-2xl mx-auto"
            />

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            <div className="bg-orange-50 rounded-2xl p-7 text-center">
              <h3 className="text-4xl font-bold text-orange-500">500+</h3>
              <p className="text-gray-600 mt-2">Happy Travelers</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-7 text-center">
              <h3 className="text-4xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-600 mt-2">Tours Completed</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-7 text-center">
              <h3 className="text-4xl font-bold text-orange-500">4.9★</h3>
              <p className="text-gray-600 mt-2">Customer Rating</p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-7 text-center">
              <h3 className="text-4xl font-bold text-orange-500">8+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

          </div>

        </div>

      </section>
            {/* WHY CHOOSE US */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Travelers Choose Trivoya
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-5">
              Every journey is carefully planned to provide comfort, authenticity
              and unforgettable memories with trusted local experts.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">

              <FaLandmark className="text-5xl text-orange-500 mx-auto mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Local Expertise
              </h3>

              <p className="text-gray-600 leading-7">
                Experienced local guides with deep knowledge of India's history,
                culture and hidden gems.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">

              <FaCarSide className="text-5xl text-orange-500 mx-auto mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Private Transport
              </h3>

              <p className="text-gray-600 leading-7">
                Comfortable private vehicles with professional drivers for a
                smooth travel experience.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">

              <FaStar className="text-5xl text-orange-500 mx-auto mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Tours
              </h3>

              <p className="text-gray-600 leading-7">
                Flexible itineraries tailored to your interests, schedule and
                travel style.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">

              <FaHeadset className="text-5xl text-orange-500 mx-auto mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>

              <p className="text-gray-600 leading-7">
                Our team is always available before, during and after your trip
                whenever you need assistance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore India?
          </h2>

          <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-10">
            Let us help you plan the perfect Taj Mahal, Agra or Golden Triangle
            experience with a personalized itinerary.
          </p>

          <a
            href="https://wa.me/917409970085"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Contact on WhatsApp
          </a>

        </div>

      </section>

    </div>
  );
}