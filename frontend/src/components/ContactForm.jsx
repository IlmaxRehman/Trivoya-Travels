"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-5">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        rows="5"
        name="message"
        placeholder="Tell us about your trip"
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
      ></textarea>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        Send Message
      </button>

    </form>
  );
}

