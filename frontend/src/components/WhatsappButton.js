"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const message =
    "Hi! I'm interested in booking a tour with Trivoya Travels.";

  return (
    <a
      href={`https://wa.me/917409970085?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

      <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">

        <FaWhatsapp className="text-white text-4xl" />

      </div>
    </a>
  );
}