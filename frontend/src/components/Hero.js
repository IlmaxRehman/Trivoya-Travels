import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full">

      <Image
        src="/images/hero/taj.jpg"
        alt="Taj Mahal sunrise tour in Agra India"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

        <div className="text-center text-white max-w-2xl px-6">

          <h1 className="text-5xl font-bold mb-6">
            Taj Mahal & Golden Triangle Tours
          </h1>

          <p className="text-lg mb-8">
            Discover India's most iconic destinations including Agra, Delhi
            and Jaipur with expert guides and private tours.
          </p>

          <a
            href="/tours"
            className="bg-orange-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-orange-600 transition"
          >
            Explore Tours
          </a>

        </div>

      </div>

    </section>
  )
}