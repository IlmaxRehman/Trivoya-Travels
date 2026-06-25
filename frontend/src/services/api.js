const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function getTours() {
  const res = await fetch(`${API_BASE}/api/tours/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch tours");

  return res.json();
}

export async function getTour(slug) {
  const res = await fetch(`${API_BASE}/api/tours/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch tour");

  return res.json();
}

export async function getBlogs() {
  const res = await fetch(`${API_BASE}/api/blog/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");

  return res.json();
}

export async function getBlog(slug) {
  const res = await fetch(`${API_BASE}/api/blog/${slug}/`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
}

export async function createBooking(data) {
  const res = await fetch(`${API_BASE}/bookings/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}