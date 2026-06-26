"use client";

import { useEffect, useState } from "react";

import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";




export default function BlogPage() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadBlogs() {

      try {

        const res = await fetch("http://127.0.0.1:8000/api/blog/");

        const data = await res.json();

        setPosts(data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadBlogs();

  }, []);

  return (

    <div className="bg-gray-50 min-h-screen">

      <BlogHero />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">

            Latest Articles

          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">

            Travel inspiration, destination guides and expert tips to
            help you plan your perfect journey across India.

          </p>

        </div>

        {loading ? (

          <div className="text-center py-20">

            <p className="text-lg text-gray-500">

              Loading articles...

            </p>

          </div>

        ) : posts.length === 0 ? (

          <div className="text-center py-20">

            <h3 className="text-3xl font-bold mb-4">

              No Blogs Yet

            </h3>

            <p className="text-gray-600">

              Blog articles added from the admin panel will appear here.

            </p>

          </div>

        ) : (

          <>

            {/* Featured Blog */}

            <div className="mb-16">

              <BlogCard post={posts[0]} />

            </div>

            {/* Remaining Blogs */}

            {posts.length > 1 && (

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

                {posts.slice(1).map((post) => (

                  <BlogCard
                    key={post.id}
                    post={post}
                  />

                ))}

              </div>

            )}

          </>

        )}

      </section>

    </div>

  );

}