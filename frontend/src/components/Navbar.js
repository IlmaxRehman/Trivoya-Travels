"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const openMenu = () => {
        clearTimeout(window.__tourTimeout);
        setTourOpen(true);
  };

  const closeMenu = () => {
     window.__tourTimeout = setTimeout(() => {
     setTourOpen(false);
     }, 200);
  };
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navColor = scrolled ? "text-gray-800" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center">

            <div className="relative h-12 w-48">

              <Image
                src="/images/logo.png"
                alt="Trivoya Travels"
                fill
                sizes="192px"
                priority
                className="object-contain"
              />

            </div>

          </Link>

          {/* Desktop */}

          <ul
            className={`hidden lg:flex items-center gap-8 font-medium transition ${navColor}`}
          >

            <li>
              <Link
                href="/"
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li
              className="relative "
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >

              <button className="flex items-center gap-2 hover:text-orange-500 transition">

                Tours

                <FaChevronDown className="text-xs" />

              </button>

              {tourOpen && (
                <div className="absolute left-0 top-full pt-4 w-64">
                 <div className="rounded-2xl bg-white shadow-2xl py-3 text-gray-700">

                 <Link
                    href="/tours"
                    className="block px-6 py-3 hover:bg-orange-50"
                  >
                   All Tours
                  </Link>

                  <Link
                    href="/tours/agra"
                    className="block px-6 py-3 hover:bg-orange-50"
                  >
                   Agra Tours
                  </Link>

                  <Link
                    href="/tours/delhi"
                    className="block px-6 py-3 hover:bg-orange-50"
                  >
                     Delhi Tours
                  </Link>

                  <Link
                    href="/tours/jaipur"
                    className="block px-6 py-3 hover:bg-orange-50"
                  >
                   Jaipur Tours
                  </Link>

                  </div>
                </div>
              )}

            </li>

            <li>
              <Link
                href="/blog"
                className="hover:text-orange-500 transition"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="hover:text-orange-500 transition"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-orange-500 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>

            <li>

              <Link
                href="/book"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full flex items-center gap-2 transition shadow-lg"
              >

                <FaPlaneDeparture />

                Book Now

              </Link>

            </li>

          </ul>

          {/* Mobile Button */}

          <button
            className={`lg:hidden text-2xl ${navColor}`}
            onClick={() => setMenuOpen(true)}
          >

            <FaBars />

          </button>

        </nav>

      </header>
            {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b">

          <h2 className="text-xl font-bold text-gray-800">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-700"
          >

            <FaTimes />

          </button>

        </div>

        <div className="flex flex-col p-6 gap-2">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg font-medium hover:text-orange-500"
          >
            Home
          </Link>

          {/* Mobile Tours */}

          <button
            onClick={() => setMobileToursOpen(!mobileToursOpen)}
            className="flex items-center justify-between py-3 text-lg font-medium hover:text-orange-500"
          >

            Tours

            <FaChevronDown
              className={`transition ${
                mobileToursOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {mobileToursOpen && (

            <div className="ml-4 flex flex-col">

              <Link
                href="/tours"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-gray-600 hover:text-orange-500"
              >
                All Tours
              </Link>

              <Link
                href="/tours/agra"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-gray-600 hover:text-orange-500"
              >
                Agra Tours
              </Link>

              <Link
                href="/tours/delhi"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-gray-600 hover:text-orange-500"
              >
                Delhi Tours
              </Link>

              <Link
                href="/tours/jaipur"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-gray-600 hover:text-orange-500"
              >
                Jaipur Tours
              </Link>

            </div>

          )}

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg font-medium hover:text-orange-500"
          >
            Blogs
          </Link>

          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg font-medium hover:text-orange-500"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg font-medium hover:text-orange-500"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-lg font-medium hover:text-orange-500"
          >
            Contact
          </Link>

          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-4 flex items-center justify-center gap-3 font-semibold transition"
          >

            <FaPlaneDeparture />

            Book Now

          </Link>

        </div>

      </div>

      {/* Overlay */}

      {menuOpen && (

        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
        />

      )}

    </>
  );
}