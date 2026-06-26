import Image from "next/image";
import Link from "next/link";

import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa";

async function getPost(slug) {

  const res = await fetch(
    `http://127.0.0.1:8000/api/blog/${slug}/`,
    {
      cache: "no-store",
    }
  );

  return res.json();

}

export default async function BlogPost({ params }) {

  const { slug } = await params;

  const post = await getPost(slug);

  const readingTime = Math.max(
    1,
    Math.ceil(post.content.split(" ").length / 200)
  );

  return (

    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}

      <section className="relative h-[60vh] overflow-hidden">

        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white max-w-4xl px-6">

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

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

              {post.title}

            </h1>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-orange-500 hover:text-orange-600 font-semibold mb-12"
        >

          <FaArrowLeft />

          Back to Blogs

        </Link>

        <article className="bg-white rounded-3xl shadow-xl p-10 md:p-14">

          <div className="prose prose-lg max-w-none prose-orange">

            <p className="text-gray-700 leading-9 whitespace-pre-line text-lg">

              {post.content}

            </p>

          </div>

        </article>

      </section>

    </div>

  );

}