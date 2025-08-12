// import React from "react";

// const cardData = [
//   {
//     title: "Clean Code Principles",
//     image:
//       "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
//     description:
//       "Learn how to write code that's easy to read, maintain, and scale.",
//   },
//   {
//     title: "Responsive UI Design",
//     image:
//       "https://i.ibb.co.com/FqgzmYZq/responsive-web-design.png",
//     description:
//       "Master responsive layouts using Tailwind CSS for flawless interfaces.",
//   },
//   {
//     title: "React Component Architecture",
//     image:
//       "https://i.ibb.co.com/xS24hTR1/Best-Practices-for-Implementing-Components-in-React.png",
//     description:
//       "Build reusable and dynamic components with React hooks and context.",
//   },
//   {
//     title: "Version Control with Git",
//     image:
//       "https://i.ibb.co.com/rRvt9z0B/Streamlining-Development-The-CI-CD-Backend-Plan-You-Need-Managing-Version-Control-with-Git.webp",
//     description:
//       "Collaborate seamlessly using Git and GitHub for your projects.",
//   },
// ];

// const blogPosts = [
//   {
//     id: 1,
//     title: "Mastering React: A Step-by-Step Guide",
//     excerpt:
//       "Learn React from scratch with this comprehensive tutorial, perfect for beginners and intermediate developers alike.",
//     date: "August 10, 2025",
//     author: "Sojib Ahmed",
//     image:
//       "https://i.ibb.co.com/6JGkjPtj/1713694070899.jpg",
//   },
//   {
//     id: 2,
//     title: "10 Tips for Writing Clean JavaScript Code",
//     excerpt:
//       "Improve your coding habits with these essential tips to write maintainable and efficient JavaScript.",
//     date: "August 8, 2025",
//     author: "Sarah Johnson",
//     image:
//       "https://i.ibb.co.com/20Z7mv1b/javascript-clean-code.png",
//   },
//   {
//     id: 3,
//     title: "How to Prepare for Coding Assignments Like a Pro",
//     excerpt:
//       "Strategies and tools to help you ace your coding assignments with confidence and style.",
//     date: "August 5, 2025",
//     author: "Michael Smith",
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const featuredProducts = [
//   {
//     id: 1,
//     name: "Premium Study Desk",
//     description: "Ergonomically designed desk for long study sessions.",
//     price: "$120",
//     image: "https://i.ibb.co.com/Y4F5s9FB/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-libra.jpg",
//   },
//   {
//     id: 2,
//     name: "High-Performance Laptop",
//     description: "Perfect for coding, assignments, and research work.",
//     price: "$899",
//     image: "https://i.ibb.co.com/QFgkWYgc/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg",
//   },
//   {
//     id: 3,
//     name: "Noise-Cancelling Headphones",
//     description: "Stay focused while studying anywhere.",
//     price: "$199",
//     image: "https://i.ibb.co.com/nsX3M6g7/A3062-Z21-DTC-banner-en-1280-584-pc-1.webp",
//   },
// ];

// const customerReviews = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     review:
//       "Absolutely love this product! The quality is top-notch and delivery was quick. I’ll definitely be ordering again.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Michael Smith",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     review:
//       "Great customer service and the item matched exactly what was described. Very satisfied with my purchase.",
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Emily Davis",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     review:
//       "The design is beautiful and feels premium. Highly recommend to anyone looking for quality products.",
//     rating: 5,
//   },
// ];

// const Card = ({ title, image, description, buttonText = "See more" }) => (
//   <div
//     className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//     style={{ height: "350px" }}
//   >
//     <div className="h-40 w-full overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
//         loading="lazy"
//       />
//     </div>
//     <div className="p-6 flex flex-col flex-grow">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
//       <p className="text-gray-600 flex-grow">{description}</p>
//       <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition">
//         {buttonText} →
//       </button>
//     </div>
//   </div>
// );

// const LandingPage = () => {
//   return (
//     <div className=" min-h-screen">
//       {/* Featured Products Section */}
//       <section className="py-12 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-6 text-cyan-600">
//           Featured Products
//         </h2>
//         <p className="text-center text-cyan-600 mb-10 max-w-3xl mx-auto">
//           Explore our most recommended products to make your assignment journey smoother and more productive.
//         </p>
//         <div className="grid gap-8 md:grid-cols-3">
//           {featuredProducts.map(({ id, name, description, price, image }) => (
//             <div
//               key={id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//               style={{ height: "350px" }}
//             >
//               <div className="h-40 w-full overflow-hidden">
//                 <img
//                   src={image}
//                   alt={name}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {name}
//                 </h3>
//                 <p className="text-gray-600 flex-grow">{description}</p>
//                 <div className="mt-4 flex justify-between items-center">
//                   <span className="text-lg font-bold text-blue-600">{price}</span>
//                   <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* What You Will Learn Section */}
//       <section className="py-12 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10 text-cyan-600">
//           What You Will Learn
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {cardData.map(({ title, image, description }, idx) => (
//             <Card
//               key={idx}
//               title={title}
//               image={image}
//               description={description}
//               buttonText="See more"
//             />
//           ))}
//         </div>
//       </section>

//       {/* Latest Articles Section */}
//       <section className="py-12 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10 text-cyan-600">
//           Latest Articles
//         </h2>
//         <div className="grid gap-8 md:grid-cols-3">
//           {blogPosts.map(({ id, title, excerpt, date, author, image }) => (
//             <div
//               key={id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
//               style={{ height: "350px" }}
//             >
//               <div className="h-40 w-full overflow-hidden">
//                 <img
//                   src={image}
//                   alt={title}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 flex-grow">{excerpt}</p>
//                 <div className="mt-4 flex justify-between text-sm text-gray-500">
//                   <span>{date}</span>
//                   <span>By {author}</span>
//                 </div>
//                 <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Customer Reviews Section */}
//       <section className="py-12 max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10 text-cyan-600">
//           What Our Customers Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {customerReviews.map(({ id, name, image, review, rating }) => (
//             <div
//               key={id}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
//               style={{ height: "350px" }}
//             >
//               <img
//                 src={image}
//                 alt={name}
//                 className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-pink-200"
//                 loading="lazy"
//               />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
//               <p className="text-gray-600 flex-grow">{review}</p>
//               <div className="flex justify-center mt-4 space-x-1">
//                 {Array.from({ length: rating }).map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-5 h-5 text-yellow-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;



