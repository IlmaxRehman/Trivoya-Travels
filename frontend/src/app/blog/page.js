"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function BlogPage() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blog/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-10">
        Travel Blog
      </h1>

      <div className="space-y-8">

        {posts.map((post) => (

          <div key={post.id} className="border-b pb-6">

            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-orange-600"
            >
              {post.title}
            </Link>

            <p className="text-gray-500 mt-2">
              {post.content.substring(0,120)}...
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}