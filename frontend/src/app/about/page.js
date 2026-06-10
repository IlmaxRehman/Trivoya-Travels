export const metadata = {
  title: "About Trivoya Travels",
  description:
    "Learn about Trivoya Travels and our mission to provide memorable travel experiences across Agra, Delhi and Jaipur.",
};

export default function AboutPage() {
  return (
    <div>
      
      {/* HERO */}

      <section className="relative h-[85vh] min-h-[700px] overflow-hidden">

        <img
          src="/images/about/about-hero.png"
          alt="About Trivoya Travels"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center pt-16">

          <div className="text-center text-white px-6 max-w-4xl">

            <span className="uppercase tracking-[6px] text-orange-300 text-base font-bold">
              ABOUT TRIVOYA
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Creating Unforgettable
              <br />
              Journeys Across India
            </h1>

            <p className="text-lg md:text-xl text-gray-200">
              Discover the Taj Mahal, Golden Triangle and India's rich heritage
              with trusted local experts and personalized experiences.
            </p>

          </div>

        </div>

      </section>

      {/* STORY */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="text-orange-500 uppercase tracking-[6px] text-base font-bold">
              Our Story
            </span>

            <h2 className="text-5xl md:text-6xl font-extrabold mt-4 mb-8 text-gray-900">
              Passionate About Authentic Travel
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Trivoya Travels was founded with one goal: helping travelers
              experience the real beauty, culture and heritage of India through
              carefully crafted journeys.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              From the iconic Taj Mahal in Agra to the royal palaces of Jaipur
              and the vibrant streets of Delhi, we create memorable experiences
              designed around comfort, authenticity and local expertise.
            </p>

          </div>

          {/* IMAGE */}

          <div className="mt-14 flex justify-center">
           <img
             src="/images/about/guide_about.png"
             alt="test"
             className="mx-auto w-[700px] h-[280px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-14">

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                500+
              </h3>
              <p className="text-gray-600 mt-2">
                Happy Travelers
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                50+
              </h3>
              <p className="text-gray-600 mt-2">
                Tours Completed
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                4.9★
              </h3>
              <p className="text-gray-600 mt-2">
                Customer Rating
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                8+
              </h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
            Why Travelers Choose Trivoya
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-semibold text-xl mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Experienced local guides with deep cultural knowledge.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-semibold text-xl mb-3">
                Private Transport
              </h3>
              <p className="text-gray-600">
                Comfortable vehicles and stress-free travel planning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-xl mb-3">
                Personalized Tours
              </h3>
              <p className="text-gray-600">
                Flexible itineraries built around your interests.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-xl mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated assistance throughout your journey.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-orange-500 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore India?
          </h2>

          <p className="text-lg text-orange-100 mb-8">
            Let us help you plan the perfect Taj Mahal or Golden Triangle experience.
          </p>

          <a
            href="https://wa.me/917409970085"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Contact on WhatsApp
          </a>

        </div>

      </section>

    </div>
  );
}