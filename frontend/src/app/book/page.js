
"use client";
import Image from "next/image";
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
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
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

    <div
      className="bg-gray-50"
      style={{
        background:
          "linear-gradient(to bottom,#f8fafc 0%,#ffffff 60%,#f8fafc 100%)",
      }}
    >
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">

  <Image
    src="/images/booking/booking-hero.jpg"
    alt="Book Your Tour"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 h-full flex items-center justify-center">

    <div className="text-center text-white max-w-4xl px-6">

      <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
        BOOK YOUR TOUR
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Reserve Your Experience
      </h1>

      <p className="text-lg md:text-xl text-gray-200">
        Complete your booking in just a few steps and let us create an unforgettable journey for you.
      </p>

    </div>

  </div>
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden"></section>
      <Image
      src="/images/booking/booking-hero.jpg"
      alt="Book Your Tour"
      fill
      priority
      className="object-cover" />

      <div className="absolute inset-0 bg-black/60"></div>
       <div className="relative z-10 h-full flex items-center justify-center">
         <div className="text-center text-white max-w-4xl px-6">
           <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
            BOOK YOUR TOUR
           </p> 
           <h1  className="text-5xl md:text-7xl font-extrabold mb-6">
            Reserve Your Experience
           </h1>

           <p className="text-lg md:text-xl text-gray-200">
            Complete your booking in just a few steps and let us create an unforgettable journey for you.
           </p>
         </div>
        </div>
        </section>
      <div className="max-w-4xl mx-auto px-6 py-20">

        
         

         
        

        {/* FEATURES */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition">

            <FaCheckCircle className="text-4xl text-orange-500 mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Instant Confirmation
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Fast booking confirmation from our travel specialists.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition">

            <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Secure Booking
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Safe payments and complete privacy for every booking.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center hover:shadow-xl transition">

            <FaHeadset className="text-4xl text-orange-500 mx-auto mb-4" />

            <h3 className="font-bold text-lg mb-2">
              Local Experts
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Personalized support from experienced local guides.
            </p>

          </div>

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
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />

            </div>

            <div className="relative">

              <FaSuitcaseRolling className="absolute left-4 top-4 text-orange-500" />

              <select
                name="tour"
                value={form.tour}
                onChange={handleChange}
                required
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 font-semibold transition disabled:opacity-70"
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


         