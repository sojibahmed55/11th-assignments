import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Lottie from "lottie-react";

import animation from '../assets/lotties/animation.json'

const Hero = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            📚 Empowering MERN Stack Learners
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Group Study,
            </span>{" "}
            <br />
            <span className="relative inline-block">
              <span className="text-indigo-600">Simplified</span>
              <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 280 15"
                fill="none"
              >
                <path
                  d="M1 13C15 3 35 12 50 6C70 -1 90 13 110 6C130 -1 150 13 170 6C190 -1 210 13 230 6C250 -1 270 13 280 6"
                  stroke="#7c3aed"
                  strokeWidth="3"
                />
              </svg>
            </span>
            <span className="text-black">.</span>
          </h1>
          <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent text-lg">
            Submit, evaluate, and collaborate on assignments with friends.
            Perfect for MERN stack learners sharpening real-world dev skills.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/assignments">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                Explore Assignments
              </button>
            </Link>
            <Link to="/create-assignment">
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            type: "spring",
            bounce: 0.3,
          }}
          whileHover={{ scale: 1.03 }}
        >
          <Lottie animationData={animation} loop={true}></Lottie>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 text-center text-xl text-emerald-600"
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
        }}
      >
        ↓ Scroll to explore
      </motion.div>
    </div>
  );
};

export default Hero;


