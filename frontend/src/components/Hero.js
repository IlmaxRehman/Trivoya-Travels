export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      
      <img
        src="https://images.unsplash.com/photo-1564507592333-c60657eea523"
        alt="Taj Mahal"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Discover India with Trivoya Travels
        </h1>

        <p className="text-lg mb-6">
          Private Taj Mahal tours, Golden Triangle journeys and unforgettable experiences across India.
        </p>

        <a
          href="/tours"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Explore Tours
        </a>
      </div>

    </section>
  )
}