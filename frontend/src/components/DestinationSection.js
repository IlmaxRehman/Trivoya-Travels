import Image from "next/image"

export default function Destinations() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Top Destinations in India
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Agra */}

          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <Image
              src="/images/destinations/agra.jpg"
              width={400}
              height={300}
              alt="Taj Mahal in Agra India"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">

              <h3 className="text-xl font-semibold">
                Agra Tours
              </h3>

            </div>

          </div>

          {/* Jaipur */}

          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <Image
              src="/images/destinations/jaipur.jpg"
              width={400}
              height={300}
              alt="Hawa Mahal Jaipur Rajasthan"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">

              <h3 className="text-xl font-semibold">
                Jaipur Tours
              </h3>

            </div>

          </div>

          {/* Delhi */}

          <div className="relative rounded-xl overflow-hidden shadow-lg">

            <Image
              src="/images/destinations/delhi.jpg"
              width={400}
              height={300}
              alt="India Gate Delhi India"
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">

              <h3 className="text-xl font-semibold">
                Delhi Tours
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}