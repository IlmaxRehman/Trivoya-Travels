import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://127.0.0.1:8000";

async function getPost(slug) {
  const res = await fetch(
    `${BACKEND_URL}/api/blog/${slug}/`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);

  const readingTime = Math.max(
    1,
    Math.ceil(
      (post.content || "")
        .replace(/<[^>]*>/g, "")
        .split(/\s+/).length / 200
    )
  );

  // Convert relative CKEditor image paths to absolute backend URLs
  const html = (post.content || "").replace(
    /src="\/media\//g,
    `src="${BACKEND_URL}/media/`
  );

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section className="relative h-[45vh] md:h-[500px] overflow-hidden">

        {post.featured_image ? (
          <img
            src={post.featured_image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="max-w-4xl px-6 text-center text-white">

            <div className="flex justify-center gap-8 text-sm mb-6">

              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                {new Date(post.created_at).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <FaClock />
                {readingTime} min read
              </div>

            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {post.title}
            </h1>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-600 font-semibold mb-10"
        >
          <FaArrowLeft />
          Back to Blogs
        </Link>

        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <div
            className="
              prose
              prose-lg
              max-w-none
              prose-headings:text-gray-900
              prose-p:text-gray-700
              prose-p:leading-8
              prose-li:leading-8
              prose-strong:text-gray-900
              prose-img:rounded-2xl
              prose-img:shadow-lg
              prose-img:mx-auto
              prose-img:w-full
            "
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />

        </article>

      </section>

    </div>
  );
}