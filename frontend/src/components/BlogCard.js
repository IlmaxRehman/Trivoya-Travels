import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

export default function BlogCard({ post }) {
  console.log(post);
  const plainText = (post.content || "").replace(/<[^>]*>/g, "");

  const readingTime = Math.max(
    1,
    Math.ceil(plainText.split(" ").length / 200)
  );

  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">

      <div className="relative h-64 overflow-hidden bg-gray-200">

        {post.featured_image && (
          <img
           src={post.featured_image}
           alt={post.title}
           className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        )}

      </div>

      <div className="p-7">

        <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-orange-500" />
            <span>
              {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            <span>{readingTime} min read</span>
          </div>

        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-600 leading-7 mb-8 line-clamp-3">
          {plainText}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-3 font-semibold text-orange-500 hover:text-orange-600 transition"
        >
          Read Article
          <FaArrowRight />
        </Link>

      </div>

    </article>
  );
}