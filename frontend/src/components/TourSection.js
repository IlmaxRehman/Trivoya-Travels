import Image from "next/image"

export default function TourSection() {

  const categories = [
    {
      name: "Agra Tours",
      image: "/images/destinations/agra.jpg",
      link: "/tours/agra"
    },
    {
      name: "Delhi Tours",
      image: "/images/destinations/delhi.jpg",
      link: "/tours/delhi"
    },
    {
      name: "Jaipur Tours",
      image: "/images/destinations/jaipur.jpg",
      link: "/tours/jaipur"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our Tour Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {categories.map((cat, index) => (

            <a
              key={index}
              href={cat.link}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >

              <div className="relative h-80 w-full">

                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

              </div>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                <h3 className="text-white text-2xl font-semibold">
                  {cat.name}
                </h3>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}