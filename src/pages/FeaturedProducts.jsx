import React from "react";

const products = [
  {
    id: 1,
    name: "Premium Study Desk",
    description: "Ergonomically designed desk for long study sessions.",
    price: "$120",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    name: "High-Performance Laptop",
    description: "Perfect for coding, assignments, and research work.",
    price: "$899",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    description: "Stay focused while studying anywhere.",
    price: "$199",
    image: "https://via.placeholder.com/300x200"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
        <p className="text-gray-600 mb-10">
          Explore our most recommended products to make your assignment journey smoother and more productive.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
