export default function DestinationSection() {

  const destinations = [
    {
      name: "Agra",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523"
    },
    {
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5"
    },
    {
      name: "Jaipur",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41"
    }
  ]

  return (
    <section className="py-16 px-8">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {destinations.map((dest) => (

          <div key={dest.name} className="relative rounded-xl overflow-hidden">

            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              <h3 className="text-white text-2xl font-bold">
                {dest.name}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}