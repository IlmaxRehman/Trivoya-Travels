import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative h-[65vh] min-h-[550px] overflow-hidden">

      <Image
        src="/images/blog/hero.jpg"
        alt="Trivoya Travel Blog"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="text-center text-white max-w-4xl px-6">

          <p className="uppercase tracking-[8px] text-orange-400 font-semibold mb-6">

            TRAVEL BLOG

          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">

            Travel Stories & Guides

          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">

            Discover destination guides, travel inspiration,
            hidden gems and unforgettable experiences across
            India with Trivoya Travels.

          </p>

        </div>

      </div>

    </section>
  );
}