// import { useContext, useEffect, useState } from "react";
// import MyAttemptsCard from "./MyAttemptsCard";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

// const MyAttempts = () => {
//   const [data, setData] = useState([]);
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');
//   const { user } = useContext(AuthContext);
//   useEffect(() => {
//     setToken(user?.accessToken)
//     setEmail(user?.email)
//   }, [user])
//   useEffect(() => {
//     axios.get(`http://localhost:5000/my-assignment/?email=${email}`,
//       { headers: { Authorization: `Bearer ${token}`, } })
//       .then((data) => setData(data.data));
//   }, [email, token]);

//   return (<>
//     {
//       data.length > 0 ?
//         <div className="p-6 min-h-screen" >
//           <h2 className="text-3xl font-bold mb-6 text-center">My Assignment Attempts</h2>

//           <div className="overflow-x-auto">
//             <table className="table table-zebra w-full">
//               <thead className="bg-base-200">
//                 <tr>
//                   <th>Title</th>
//                   <th>Status</th>
//                   <th>Total Marks</th>
//                   <th>Obtained</th>
//                   <th>Feedback</th>
//                   <th>Examiner</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((dt) => (
//                   <MyAttemptsCard key={dt._id} dt={dt} />
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div >
//         : ""
//     }
//   </>
//   );
// };

// export default MyAttempts;


import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import MyAttemptsCard from "./MyAttemptsCard";

const MyAttempts = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setToken(user?.accessToken);
    setEmail(user?.email);
  }, [user]);

  useEffect(() => {
    if (email && token) {
      axios
        .get(`http://localhost:5000/my-assignment/?email=${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.error("Error loading data:", err));
    }
  }, [email, token]);

  return (
    <div className="p-6 min-h-screen bg-base-100 text-base-content">
      {data.length > 0 ? (
        <>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">My Assignment Attempts</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Your attempt history is shown below.
            </p>
          </div>

          <div className="overflow-x-auto border border-base-300 rounded-xl shadow">
            <table className="table w-full text-center bg-base-200 text-base-content">
              <thead className="bg-base-300 font-semibold text-sm uppercase tracking-wider">
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Total Marks</th>
                  <th>Obtained</th>
                  <th>Feedback</th>
                  <th>Examiner</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt) => (
                  <MyAttemptsCard key={dt._id} dt={dt} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            No attempts found yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyAttempts;

