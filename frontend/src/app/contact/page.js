import Image from "next/image";
import ContactForm from "../../components/ContactForm";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Contact Trivoya Travels",
  description:
    "Get in touch with Trivoya Travels for Taj Mahal tours, Golden Triangle packages and personalized travel experiences.",
};

export default function ContactPage() {
  return (
    <div>

      {/* HERO */}

      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">

        <Image
          src="/images/contact/contact-hero.png"
          alt="Contact Trivoya Travels"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="text-center text-white px-6 max-w-4xl">

            <p className="uppercase tracking-[5px] text-orange-300 font-semibold mb-4">
              CONTACT US
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Contact Trivoya Travels
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Let's plan your perfect Taj Mahal and Golden Triangle journey.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-bold mb-10 text-gray-900">
                Get In Touch
              </h2>

              <div className="space-y-6">

                <div className="bg-gray-50 rounded-2xl p-6 flex gap-4">

                  <FaPhoneAlt className="text-orange-500 text-xl mt-1" />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Phone
                    </h3>

                    <a
                      href="tel:+917409970085"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      +91 74099 70085
                    </a>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex gap-4">

                  <FaEnvelope className="text-orange-500 text-xl mt-1" />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Email
                    </h3>

                    <a
                      href="mailto:trivoyatravelss@gmail.com"
                      className="text-gray-600 hover:text-orange-500 transition"
                    >
                      trivoyatravelss@gmail.com
                    </a>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex gap-4">

                  <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Location
                    </h3>

                    <p className="text-gray-600">
                      Agra, Uttar Pradesh, India
                    </p>

                  </div>

                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex gap-4">

                  <FaClock className="text-orange-500 text-xl mt-1" />

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Business Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday - Sunday
                      <br />
                      8:00 AM – 9:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Send a Message
              </h2>

              <ContactForm />

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}

      <section className="pb-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-gray-900">
              Find Us
            </h2>

            <p className="text-gray-600 mt-4">
              Located in Agra, serving travelers across India.
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">

            <iframe
              src="https://maps.google.com/maps?q=Agra&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* WHATSAPP CTA */}

      <section className="py-16 bg-orange-500 text-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Quick Response?
          </h2>

          <p className="text-lg text-orange-100 mb-8">
            Chat directly with our travel experts on WhatsApp.
          </p>

          <a
            href="https://wa.me/917409970085"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >

            <FaWhatsapp className="text-2xl" />

            Chat on WhatsApp

          </a>

        </div>

      </section>

    </div>
  );
}