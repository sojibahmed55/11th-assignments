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
//     axios.get(`https://11th-assignment-server-three.vercel.app/my-assignment/?email=${email}`,
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
import MyAttemptsCard from "./MyAttemptsCard";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
// import LoadingSpinner from "./LoadingSpinner";

const MyAttempts = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setToken(user?.accessToken);
    setEmail(user?.email);
  }, [user]);

  useEffect(() => {
    if (email && token) {
      setLoading(true);
      axios
        .get(
          `https://11th-assignment-server-three.vercel.app/my-assignment/?email=${email}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [email, token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="p-6 min-h-screen">
          <h2 className="text-3xl font-bold mb-6 text-center">
            My Assignment Attempts
          </h2>

          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200">
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
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No data found</p>
      )}
    </>
  );
};

export default MyAttempts;
