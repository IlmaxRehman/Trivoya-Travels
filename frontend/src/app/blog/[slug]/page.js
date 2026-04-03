async function getPost(slug) {

  const res = await fetch(`http://127.0.0.1:8000/api/blog/${slug}/`, {
    cache: "no-store"
  })

  return res.json()
}

export default async function BlogPost({ params }) {

  const { slug } = await params
  const post = await getPost(slug)

  return (

    <div className="max-w-4xl mx-auto py-16 px-6">

      <img
        src={post.featured_image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-6">
        {post.title}
      </h1>

      <p className="text-gray-700 leading-relaxed">
        {post.content}
      </p>

    </div>

  )
}