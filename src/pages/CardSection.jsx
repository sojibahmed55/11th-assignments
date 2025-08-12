import React from "react";

const cards = [
  {
    title: "Clean Code Principles",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
    description:
      "Learn how to write code that's easy to read, maintain, and scale.",
  },
  {
    title: "Responsive UI Design",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    description:
      "Master responsive layouts using Tailwind CSS for flawless interfaces.",
  },
  {
    title: "React Component Architecture",
    image:
      "https://images.unsplash.com/photo-1537432376769-5b87a0c96d63?auto=format&fit=crop&w=600&q=80",
    description:
      "Build reusable and dynamic components with React hooks and context.",
  },
  {
    title: "Version Control with Git",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    description:
      "Collaborate seamlessly using Git and GitHub for your projects.",
  },
];

const CardSection =()=>  {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
        What You Will Learn
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
            style={{ height: "350px" }} // fixed height for all cards
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 flex-grow">{card.description}</p>
              <button
                className="mt-4 inline-block text-white btn btn-primary hover:text-white font-semibold"
                aria-label={`See more about ${card.title}`}
              >
                See more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CardSection;