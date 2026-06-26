"use client";
import { useEffect, useState } from "react";
import { createBooking, getTours } from "@/services/api";
import BookingSuccessModal from "@/components/BookingSuccessModal";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaSuitcaseRolling,
} from "react-icons/fa";

export default function BookingPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    travel_date: "",
    travellers: 1,
    message: "",
    tour: "",
  });

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  useEffect(() => {
    getTours().then(setTours);
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
    async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {

      await createBooking(form);

      setShowSuccessModal(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        travel_date: "",
        travellers: 1,
        message: "",
        tour: "",
      });

    } catch (err) {

      console.error(err);
      alert("Something went wrong. Please try again.");

    }

    setLoading(false);
  }

  return (

    <div className="bg-gray-50 min-h-screen py-20">

      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-3">
            BOOK YOUR TOUR
          </p>

          <h1 className="text-5xl font-bold text-gray-900">
            Reserve Your Experience
          </h1>

          <p className="text-gray-600 mt-4">
            Complete the form below and we'll contact you shortly.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div className="relative">

              <FaUser className="absolute left-4 top-4 text-orange-500" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              />

            </div>

            <div className="relative">

              <FaPhoneAlt className="absolute left-4 top-4 text-orange-500" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              />

            </div>

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-orange-500" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              />

            </div>

            <div className="relative">

              <FaCalendarAlt className="absolute left-4 top-4 text-orange-500" />

              <input
                type="date"
                name="travel_date"
                value={form.travel_date}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              />

            </div>

            <div className="relative">

              <FaUsers className="absolute left-4 top-4 text-orange-500" />

              <input
                type="number"
                min="1"
                name="travellers"
                value={form.travellers}
                onChange={handleChange}
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              />

            </div>

            <div className="relative">

              <FaSuitcaseRolling className="absolute left-4 top-4 text-orange-500" />

              <select
                name="tour"
                value={form.tour}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3"
              >

                <option value="">
                  Select Tour
                </option>

                {tours.map((tour) => (

                  <option
                    key={tour.id}
                    value={tour.id}
                  >

                    {tour.name}

                  </option>

                ))}

              </select>

            </div>

          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Special Requests"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-semibold transition"
          >

            {loading ? "Submitting..." : "Book Now"}

          </button>

        </form>

      </div>

      <BookingSuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

    </div>

  );

}