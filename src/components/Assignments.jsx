
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AssignmentCard from "./AssignmentCard";
import GetUser from "../context/GetUser";

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);
  const { user } = GetUser();

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">📘 All Assignments</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {assignments?.map((assignment) => (
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
        ))}
      </div>
    </div>
  );
};

export default Assignments;
