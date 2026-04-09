"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}

        <a href="/" className="flex items-center">

          <div className="relative h-14 w-48">

            <Image
              src="/images/trivoya_logo.png"
              alt="Trivoya Travels Logo"
              fill
              priority
              className="object-contain"
            />

          </div>

        </a>

        {/* Navigation */}

        <ul className="hidden md:flex gap-10 font-medium text-white md:text-white">

          <li>
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/tours" className="hover:text-orange-500 transition">
              Tours
            </a>
          </li>

          <li>
            <a href="/about" className="hover:text-orange-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </li>

        </ul>

      </nav>
    </header>
  )
}