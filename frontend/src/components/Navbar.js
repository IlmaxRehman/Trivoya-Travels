"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* Logo */}

          <a href="/" className="flex items-center">

            <div className="relative h-12 w-44">

              <Image
                src="/images/logo.png"
                alt="Trivoya Travels Logo"
                fill
                sizes="200px"
                priority
                className="object-contain"
              />

            </div>

          </a>

          {/* Desktop Navigation */}

          <ul
            className={`hidden md:flex gap-8 font-medium text-base transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >

            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/tours" className="hover:text-orange-500">Tours</a></li>
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>

          </ul>

          {/* Mobile Menu Button */}

          <button
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

        </nav>
      </header>

      {/* Mobile Slide Menu */}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="p-6 flex justify-between items-center border-b">

          <span className="font-bold text-lg">Menu</span>

          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

        </div>

        <ul className="flex flex-col gap-6 p-6 text-gray-800 font-medium">

          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/tours" onClick={() => setMenuOpen(false)}>Tours</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        </ul>

      </div>
    </>
  )
}