
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import axios from "axios";

const assignments = [
  {
    id: 1,
    title: "React CRUD App",
    difficulty: "Medium",
    deadline: "23 June 2025",
  },
  {
    id: 2,
    title: "Data Structures Analysis",
    difficulty: "Hard",
    deadline: "30 June 2025",
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    difficulty: "Easy",
    deadline: "15 June 2025",
  },
];

const difficultyColors = {
  Easy: "text-green-500",
  Medium: "text-yellow-500",
  Hard: "text-red-500",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};



const AnimatedCounter = ({ value }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);
    let current = start;
    const step = () => {
      current += increment;
      if (current < value) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    step();
  }, [value]);
  return <span>{count}</span>;
};

const AssignmentSection = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("http://localhost:5000/assignments").then((d) => setData(d.data));
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-16 space-y-24">

      <section className="text-center space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Level Up Your Skills with Assignments
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Submit, track, and conquer every challenge like a boss.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.6)",
          }}
          className="mt-6 inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-shadow duration-300"
        >
          Get Started <ArrowRightCircle size={22} />
        </motion.button>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-700 tracking-wide">
          📋 Latest Assignments
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {assignments.map(({ id, title, difficulty, deadline }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)",
              }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-md cursor-pointer flex flex-col justify-between transition"
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 text-pink-600">
                  {title}
                </h3>
                <p className="text-gray-600 mb-1">
                  Difficulty:{" "}
                  <span
                    className={`font-semibold ${difficultyColors[difficulty]}`}
                  >
                    {difficulty}
                  </span>
                </p>
                <p className="text-gray-500">Deadline: {deadline}</p>
              </div>
              <button className="mt-6 flex items-center gap-2 text-pink-600 font-semibold text-base hover:underline self-start">
                View Details <ArrowRightCircle size={20} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 py-16 rounded-3xl shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

          <div className="md:flex-1 text-center md:text-left">
            <h3 className="text-6xl font-extrabold text-pink-600 drop-shadow-lg">
              Total Assignment{data.length > 1 ? "s" : ""}: <span className="text-blue-600">{data.length}</span>
            </h3>
            <p className="mt-4 text-lg font-semibold text-gray-700 italic max-w-md mx-auto md:mx-0">
              Every assignment you submit is a step closer to mastery — a brick in your fortress of knowledge, a ripple in the ocean of your future success.
            </p>
          </div>

          <div className="md:flex-1 bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-pink-300 max-w-md text-gray-800 font-medium leading-relaxed tracking-wide text-center">
            <p>
              ✨ <span className="text-pink-600 font-bold">Did you know?</span>  
              Assignments are not just tasks — they are your personal battlegrounds where skills sharpen and confidence ignites.  
              Embrace the grind, cherish the challenge, and watch how every effort blooms into brilliance.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AssignmentSection;





