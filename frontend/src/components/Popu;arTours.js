import TourCard from "./TourCard"

export default function PopularTours() {
  return (

    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Popular Taj Mahal & Golden Triangle Tours
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <TourCard
          image="/images/tours/taj-tour.jpg"
          title="Taj Mahal Sunrise Tour"
          description="Witness the breathtaking Taj Mahal at sunrise with our expert guide."
          price="49"
        />

        <TourCard
          image="/images/tours/golden-triangle.jpg"
          title="Golden Triangle Tour"
          description="Explore Delhi, Agra and Jaipur in our most popular multi-day tour."
          price="199"
        />

        <TourCard
          image="/images/tours/agra-fort.jpg"
          title="Taj Mahal & Agra Fort Tour"
          description="Discover Agra's historic wonders including the Taj Mahal and Agra Fort."
          price="79"
        />

      </div>

    </section>
  )
}