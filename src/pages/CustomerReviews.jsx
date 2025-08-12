import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image:
        "https://randomuser.me/api/portraits/women/45.jpg",
      review:
        "Absolutely love this product! The quality is top-notch and delivery was quick. I’ll definitely be ordering again.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Smith",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Great customer service and the item matched exactly what was described. Very satisfied with my purchase.",
      rating: 4,
    },
    {
      id: 3,
      name: "Emily Davis",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "The design is beautiful and feels premium. Highly recommend to anyone looking for quality products.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-200"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {review.name}
              </h3>
              <p className="text-gray-600 mb-4">{review.review}</p>
              <div className="flex justify-center">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
