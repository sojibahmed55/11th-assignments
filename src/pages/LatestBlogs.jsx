import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React: A Step-by-Step Guide",
    excerpt:
      "Learn React from scratch with this comprehensive tutorial, perfect for beginners and intermediate developers alike.",
    date: "August 10, 2025",
    author: "Sojib Ahmed",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "10 Tips for Writing Clean JavaScript Code",
    excerpt:
      "Improve your coding habits with these essential tips to write maintainable and efficient JavaScript.",
    date: "August 8, 2025",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "How to Prepare for Coding Assignments Like a Pro",
    excerpt:
      "Strategies and tools to help you ace your coding assignments with confidence and style.",
    date: "August 5, 2025",
    author: "Michael Smith",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map(({ id, title, excerpt, date, author, image }) => (
            <div
              key={id}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <div className="text-sm text-gray-500 flex justify-between items-center">
                  <span>{date}</span>
                  <span>By {author}</span>
                </div>
                <button className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
