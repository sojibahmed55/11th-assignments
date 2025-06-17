// import React, { useEffect, useState } from "react";
// import MyAttemptsCard from "./MyAttemptsCard";

// const MyAttempts = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/myattemps")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   });
//   return <div>
//     <div>
//       {
//         data.map(dt => <MyAttemptsCard></MyAttemptsCard>)
//       }
//     </div>
//   </div>;
// };

// export default MyAttempts;






import React, { useEffect, useState } from "react";
import MyAttemptsCard from "./MyAttemptsCard";


const MyAttempts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myattemps")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50">
      <h2 className="text-3xl font-bold mb-6 text-center">My Assignment Attempts</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Assignment ID</th>
              <th>Google Doc</th>
              <th>Note</th>
              <th>Status</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dt, index) => (
              <MyAttemptsCard key={dt._id} dt={dt} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAttempts;

