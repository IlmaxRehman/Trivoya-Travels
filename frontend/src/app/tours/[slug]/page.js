const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

async function getTour(slug) {
  const res = await fetch(`${API_BASE}/api/tours/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tour");
  }

  return res.json();
}

export default async function TourPage({ params }) {
  const { slug } = await params;

  const tour = await getTour(slug);

  const message = `Hi, I'm interested in the ${tour.name}`;

  const whatsappLink =
    `https://wa.me/917409970085?text=${encodeURIComponent(message)}`;

  const highlights = tour.highlights
    ? tour.highlights.split("\n").filter(Boolean)
    : [];

  const inclusions = tour.inclusions
    ? tour.inclusions.split("\n").filter(Boolean)
    : [];

  const exclusions = tour.exclusions
    ? tour.exclusions.split("\n").filter(Boolean)
    : [];

  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[60vh] md:h-[650px] overflow-hidden bg-black">

       {tour.hero_image && (
        <img
         src={tour.hero_image}
         alt={tour.name}
         className="absolute inset-0 w-full h-full object-cover object-center"
         loading="eager"
        />
       )}

       <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />

       <div className="absolute inset-0 flex items-center justify-center">

        <div className="max-w-5xl px-6 text-center text-white">

         <p className="uppercase tracking-[6px] text-orange-300 font-semibold mb-4">
           TRIVOYA TRAVELS
         </p>

         <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {tour.name}
         </h1>

         <div className="flex flex-wrap justify-center gap-4 mb-8">

          <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-3">
          {tour.city}
          </div>

         <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-3">
          {tour.duration}
         </div>

         <div className="bg-white/15 backdrop-blur-md rounded-full px-5 py-3">
            Private Tour
         </div>

        </div>

        <div className="flex items-center justify-center gap-4">

         {tour.discount_price ? (
          <>
            <span className="text-5xl font-bold text-orange-400">
              ₹{Number(tour.discount_price).toLocaleString("en-IN")}
            </span>

            <span className="text-2xl line-through text-gray-300">
              ₹{Number(tour.price).toLocaleString("en-IN")}
            </span>
          </>
        ) : (
          <span className="text-5xl font-bold text-orange-400">
            ₹{Number(tour.price).toLocaleString("en-IN")}
          </span>
        )}

      </div>

    </div>

  </div>

</section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}

          <div className="lg:col-span-2">

            {/* OVERVIEW */}

            <div className="mb-16">

              <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                TOUR OVERVIEW
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8">
                Experience Highlights
              </h2>

              <div
                className="prose prose-lg max-w-none
                prose-headings:text-gray-900
                prose-p:text-gray-600
                prose-p:leading-8
                prose-p:mb-6"
                dangerouslySetInnerHTML={{
                  __html: tour.description,
                }}
              />

            </div>
                        {/* HIGHLIGHTS */}

            <div className="mb-16">

              <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                WHY YOU'LL LOVE IT
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8">
                Tour Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {highlights.length > 0 ? (

                  highlights.map((item, index) => (

                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                    >

                      <div className="flex gap-4">

                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                          ✓
                        </div>

                        <p className="text-gray-700 leading-7">
                          {item}
                        </p>

                      </div>

                    </div>

                  ))

                ) : (

                  <p className="text-gray-500">
                    Highlights will be updated soon.
                  </p>

                )}

              </div>

            </div>

            {/* INCLUDED / EXCLUDED */}

            <div className="mb-16">

             <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
               TOUR DETAILS
             </span>

             <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8">
              What's Included
             </h2>

             <div className="grid md:grid-cols-2 gap-8">

               <div className="rounded-3xl bg-white p-8 shadow-sm">

               <h3 className="text-2xl font-bold mb-6">
                 Included
               </h3>

               <ul className="space-y-4">

               {inclusions.map((item, index) => (

                <li
                  key={index}
                  className="flex gap-3"
                >

                 <span className="text-green-600 font-bold text-lg">
                   ✓
                 </span>

                 <span className="text-gray-700">
                  {item}
                 </span>

                </li>

               ))}

              </ul>   

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-6">
                Not Included
              </h3>

              <ul className="space-y-4">

               {exclusions.map((item, index) => (

                <li
                   key={index}
                   className="flex gap-3"
                >

                 <span className="text-red-500 font-bold text-lg">
                   ✕
                 </span>

                 <span className="text-gray-700">
                   {item}
                 </span>

                </li>

               ))}

              </ul>

            </div>

          </div>

        </div>

            {/* ITINERARY */}

            <div className="mb-16">

              <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                TOUR PLAN
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8">
                Day Plan
              </h2>

              <div className="bg-white rounded-3xl shadow-sm p-8">

                <div
                  className="prose prose-lg max-w-none
                  prose-p:text-gray-600
                  prose-p:leading-8
                  prose-headings:text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: tour.itinerary,
                  }}
                />

              </div>

            </div>

            {/* GALLERY */}

            {tour.gallery?.length > 0 && (

              <div className="mb-16">

                <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
                  TOUR GALLERY
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8">
                  Travel Moments
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  {tour.gallery.map((image) => (

                    <div
                      key={image.id}
                      className="overflow-hidden rounded-3xl shadow-md"
                    >

                      <img
                        src={image.image}
                        alt={image.caption || tour.name}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition duration-500"
                      />

                    </div>

                  ))}

                </div>

              </div>

            )}

          </div>
                      {/* SIDEBAR */}

          <div>

            <div className="lg:sticky lg:top-24 overflow-hidden rounded-3xl bg-white shadow-xl">

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">

                <p className="uppercase tracking-[4px] text-sm mb-2">
                  Starting From
                </p>

                {tour.discount_price ? (

                  <>

                    <div className="flex items-end gap-3">

                      <h3 className="text-5xl font-bold">
                        ₹{Number(tour.discount_price).toLocaleString("en-IN")}
                      </h3>

                      <span className="line-through text-orange-100 text-xl mb-1">
                        ₹{Number(tour.price).toLocaleString("en-IN")}
                      </span>

                    </div>

                  </>

                ) : (

                  <h3 className="text-5xl font-bold">
                    ₹{Number(tour.price).toLocaleString("en-IN")}
                  </h3>

                )}

              </div>

              <div className="p-8">

                <div className="space-y-5">

                  <div className="flex justify-between border-b pb-4">

                    <span className="text-gray-500">
                      Duration
                    </span>

                    <span className="font-semibold">
                      {tour.duration}
                    </span>

                  </div>

                  <div className="flex justify-between border-b pb-4">

                    <span className="text-gray-500">
                      Destination
                    </span>

                    <span className="font-semibold capitalize">
                      {tour.city}
                    </span>

                  </div>

                  <div className="flex justify-between border-b pb-4">

                    <span className="text-gray-500">
                      Tour Type
                    </span>

                    <span className="font-semibold">
                      Private
                    </span>

                  </div>

                  <div className="flex justify-between border-b pb-4">

                    <span className="text-gray-500">
                      Guide
                    </span>

                    <span className="font-semibold">
                      Included
                    </span>

                  </div>

                  <div className="flex justify-between border-b pb-6">

                    <span className="text-gray-500">
                      Pickup
                    </span>

                    <span className="font-semibold">
                      Included
                    </span>

                  </div>

                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-2xl bg-green-500 py-4 text-center font-semibold text-white transition hover:bg-green-600"
                >
                  Book on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}