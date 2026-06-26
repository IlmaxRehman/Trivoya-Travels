import Link from "next/link";
import Image from "next/image";
import { FaHome, FaCompass } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="max-w-2xl text-center">

        <div className="relative w-40 h-40 mx-auto mb-8">

          <Image
            src="/images/logo.png"
            alt="Trivoya Travels"
            fill
            className="object-contain"
            priority
          />

        </div>

        <h1 className="text-8xl font-extrabold text-orange-500 mb-4">
          404
        </h1>

        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg leading-8 mb-10">
          Looks like you've taken a wrong turn.
          Let's get you back to exploring India's most incredible destinations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            href="/tours"
            className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaCompass />
            Explore Tours
          </Link>

        </div>

      </div>

    </div>
  );
}