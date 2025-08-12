import React, { useState, useEffect, useRef } from "react";

const slides = [

  {
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1920&q=80",
    title: "Master Clean & Efficient Coding",
    description:
      "Write maintainable and scalable code following industry best practices and design patterns.",
    buttonText: "Start Learning",
    buttonLink: "#clean-code",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    title: "Design Stunning User Interfaces",
    description:
      "Create responsive, user-friendly UI with Tailwind CSS and DaisyUI for a flawless experience.",
    buttonText: "Explore Design",
    buttonLink: "#uiux",
  },
  {
    image:
      "https://i.ibb.co.com/PZ0xGPLm/elnaz-asadi-4rt-GBHt-Cdc-unsplash.jpg",
    title: "Collaborate & Build Projects",
    description:
      "Work in teams using Git and agile methodologies to deliver high-quality software products.",
    buttonText: "Join the Team",
    buttonLink: "#collaboration",
  },


];

const Slider =()=> {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto select-none pt-9">
      <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[16/9]">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-75"
              loading="lazy"
              draggable={false}
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center px-8 md:px-20 lg:px-32">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 max-w-xl">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
                {slide.description}
              </p>
              <a
                href={slide.buttonLink}
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 transition"
        >
          ›
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-4 h-4 rounded-full transition ${
                idx === current ? "bg-pink-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Slider;