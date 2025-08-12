// import React, { useState } from "react";
// import { useLoaderData } from "react-router";
// import AssignmentCard from "./AssignmentCard";
// import GetUser from "../context/GetUser";
// import { ChevronDown } from "lucide-react";

// const difficultyOptions = [
//   { label: "All Levels", value: "all", color: "bg-gray-400" },
//   { label: "Easy", value: "easy", color: "bg-green-500" },
//   { label: "Medium", value: "medium", color: "bg-yellow-500" },
//   { label: "Hard", value: "hard", color: "bg-red-500" },
// ];

// const Assignments = () => {
//   const initialAssignments = useLoaderData();
//   const [assignments, setAssignments] = useState(initialAssignments);
//   const [filter, setFilter] = useState("all");
//   const { user } = GetUser();

//   const [openDropdown, setOpenDropdown] = useState(false);

//   const filteredAssignments =
//     filter === "all"
//       ? assignments
//       : assignments.filter(
//           (assignment) => assignment.difficulty?.toLowerCase() === filter
//         );

//   const currentOption = difficultyOptions.find((opt) => opt.value === filter);

//   return (
//     <div className="max-w-[1600px] mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
//         📘 All Assignments
//       </h1>

//       {/* Dropdown Filter */}
//       <div className="relative flex justify-center mb-10">
//   <button
//     onClick={() => setOpenDropdown(!openDropdown)}
//     className="flex items-center cursor-pointer gap-2 px-6 py-2 rounded-full shadow-lg border border-gray-300 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300 ease-in-out"
//   >
//     <span className={`w-3 h-3 rounded-full ${currentOption.color} ring-2 ring-white`}></span>
//     {currentOption.label}
//     <ChevronDown size={18} className="text-white" />
//   </button>

//   {openDropdown && (
//     <div className="absolute top-14 z-50 w-44 bg-white/80 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl overflow-hidden animate-fadeIn">
//       {difficultyOptions.map((option) => (
//         <div
//           key={option.value}
//           onClick={() => {
//             setFilter(option.value);
//             setOpenDropdown(false);
//           }}
//           className={`flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-200 
//           hover:bg-indigo-50 
//           ${filter === option.value ? "bg-gradient-to-r from-indigo-100 to-pink-100 font-semibold text-indigo-600" : "text-gray-700"}`}
//         >
//           <span className={`w-3 h-3 rounded-full ${option.color}`}></span>
//           {option.label}
//         </div>
//       ))}
//     </div>
//   )}
// </div>


//       {/* Assignments Display */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredAssignments?.length > 0 ? (
//           filteredAssignments.map((assignment) => (
//             <AssignmentCard
//               key={assignment._id}
//               assignment={assignment}
//               userEmail={user?.email}
//               assignments={assignments}
//               setAssignments={setAssignments}
//               onDelete={(id) =>
//                 setAssignments((prev) => prev.filter((a) => a._id !== id))
//               }
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No assignments found for selected difficulty.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Assignments;



import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AssignmentCard from "./AssignmentCard";
import GetUser from "../context/GetUser";
import { ChevronDown } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";

const difficultyOptions = [
  { label: "All Levels", value: "all", color: "bg-gray-400" },
  { label: "Easy", value: "easy", color: "bg-green-500" },
  { label: "Medium", value: "medium", color: "bg-yellow-500" },
  { label: "Hard", value: "hard", color: "bg-red-500" },
];

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState("all");
  const { user } = GetUser();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredAssignments =
    filter === "all"
      ? assignments
      : assignments.filter(
          (assignment) => assignment.difficulty?.toLowerCase() === filter
        );

  const currentOption = difficultyOptions.find((opt) => opt.value === filter);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        📘 All Assignments
      </h1>

      {/* Dropdown Filter */}
      <div className="relative flex justify-center mb-10">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="flex items-center cursor-pointer gap-2 px-6 py-2 rounded-full shadow-lg border border-gray-300 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transition duration-300 ease-in-out"
        >
          <span
            className={`w-3 h-3 rounded-full ${currentOption.color} ring-2 ring-white`}
          ></span>
          {currentOption.label}
          <ChevronDown size={18} className="text-white" />
        </button>

        {openDropdown && (
          <div className="absolute top-14 z-50 w-44 bg-white/80 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl overflow-hidden animate-fadeIn">
            {difficultyOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setFilter(option.value);
                  setOpenDropdown(false);
                }}
                className={`flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-200 
                hover:bg-indigo-50 
                ${
                  filter === option.value
                    ? "bg-gradient-to-r from-indigo-100 to-pink-100 font-semibold text-indigo-600"
                    : "text-gray-700"
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${option.color}`}
                ></span>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Assignments Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAssignments?.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              userEmail={user?.email}
              assignments={assignments}
              setAssignments={setAssignments}
              onDelete={(id) =>
                setAssignments((prev) => prev.filter((a) => a._id !== id))
              }
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No assignments found for selected difficulty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Assignments;
