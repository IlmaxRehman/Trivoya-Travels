import Image from "next/image";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
  "/images/gallery/gallery13.jpg",
  "/images/gallery/gallery14.jpg"
];

export default function GalleryPage() {
  return (
    <div className="bg-gray-50">

      {/* Hero */}

      <section className="relative h-[60vh]">

        <Image
          src="/images/gallery/hero.jpg"
          alt="Gallery"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[8px] text-orange-400 font-semibold mb-4">
              GALLERY
            </p>

            <h1 className="text-6xl font-extrabold">
              Travel Memories
            </h1>

            <p className="mt-5 text-xl text-gray-200 max-w-2xl mx-auto px-6">
              Every picture tells a story. Explore unforgettable moments
              captured across Agra, Delhi and Jaipur.
            </p>

          </div>

        </div>

      </section>

      {/* Images */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {images.map((img, index) => (

            <div
              key={index}
              className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group"
            >

              <Image
                src={img}
                alt={`Gallery ${index}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}