export const metadata = {
  title: "Contact Trivoya Travels",
  description:
    "Get in touch with Trivoya Travels for Taj Mahal tours, Golden Triangle packages and personalized travel experiences.",
};

export default function ContactPage() {
  return (
    <div>

      {/* HERO */}

      <section className="bg-orange-500 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Trivoya Travels
          </h1>

          <p className="text-xl text-orange-100">
            Let's plan your perfect India journey.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}

            <div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-lg">
                    📞 Phone
                  </h3>
                  <p className="text-gray-600">
                    +91 74099 70085
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    📧 Email
                  </h3>
                  <p className="text-gray-600">
                    info@trivoyatravels.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    📍 Location
                  </h3>
                  <p className="text-gray-600">
                    Agra, Uttar Pradesh, India
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">

              <h2 className="text-2xl font-bold mb-6">
                Send a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your trip"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                ></textarea>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* WHATSAPP CTA */}

      <section className="py-20 bg-orange-500 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-4">
            Need a Quick Response?
          </h2>

          <p className="text-orange-100 mb-8">
            Chat with us directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/917409970085"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </section>

    </div>
  );
}