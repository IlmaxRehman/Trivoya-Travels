import { FaCheckCircle } from "react-icons/fa";

export default function BookingSuccessModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">

        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Booking Request Sent!
        </h2>

        <p className="text-gray-600 leading-7 mb-8">
          Thank you for choosing Trivoya Travels.
          Our travel expert will contact you shortly to confirm your booking.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Continue Exploring
        </button>

      </div>

    </div>
  );
}