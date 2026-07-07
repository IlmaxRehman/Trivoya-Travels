const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export default async function sitemap() {
  const res = await fetch(`${API_BASE}/api/tours/`, {
    cache: "no-store",
  });

  const tours = await res.json();

  const tourPages = tours.map((tour) => ({
    url: `https://trivoyatravels.com/tours/${tour.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://trivoyatravels.com",
      lastModified: new Date(),
    },
    {
      url: "https://trivoyatravels.com/tours",
      lastModified: new Date(),
    },
    ...tourPages,
  ];
}