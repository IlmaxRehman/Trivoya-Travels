import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}

        <div>

          <div className="relative h-12 w-44 mb-6">

            <Image
              src="/images/logo.png"
              alt="Trivoya Travels"
              fill
              className="object-contain"
            />

          </div>

          <p className="text-gray-400 leading-7 text-sm">

            Explore India's most iconic destinations with
            Trivoya Travels. From the breathtaking Taj Mahal
            to the majestic forts of Rajasthan, we create
            unforgettable travel experiences with trusted
            local experts.

          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917409970085"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Company Links */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-orange-400">
                About
              </Link>
            </li>

            <li>
              <Link href="/tours" className="hover:text-orange-400">
                Tours
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-orange-400">
                Blogs
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-orange-400">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>

          </ul>

        </div>
                {/* Popular Tours */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Popular Tours
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <Link href="/tours" className="hover:text-orange-400">
                All Tours
              </Link>
            </li>

            <li>
              <Link href="/tours/agra" className="hover:text-orange-400">
                Agra Tours
              </Link>
            </li>

            <li>
              <Link href="/tours/delhi" className="hover:text-orange-400">
                Delhi Tours
              </Link>
            </li>

            <li>
              <Link href="/tours/jaipur" className="hover:text-orange-400">
                Jaipur Tours
              </Link>
            </li>

            <li>
              <Link href="/tours" className="hover:text-orange-400">
                Golden Triangle
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-start gap-3">

              <FaEnvelope className="text-orange-500 mt-1" />

              <span>trivoyatravelss@gmail.com</span>

            </div>

            <div className="flex items-start gap-3">

              <FaPhoneAlt className="text-orange-500 mt-1" />

              <span>+91 7409970085</span>

            </div>

            <div className="flex items-start gap-3">

              <FaWhatsapp className="text-green-500 mt-1" />

              <span>WhatsApp Support Available</span>

            </div>

            <div className="flex items-start gap-3">

              <FaMapMarkerAlt className="text-orange-500 mt-1" />

              <span>Agra, Uttar Pradesh, India</span>

            </div>

            <div className="flex items-start gap-3">

              <FaClock className="text-orange-500 mt-1" />

              <span>Mon – Sun | 8:00 AM – 9:00 PM</span>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">

            © {new Date().getFullYear()} Trivoya Travels. All Rights Reserved.

          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-orange-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-orange-400"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cancellation-policy"
              className="text-gray-500 hover:text-orange-400"
            >
              Cancellation Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}