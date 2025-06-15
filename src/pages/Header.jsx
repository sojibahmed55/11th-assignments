// import React, { useContext, useState } from "react";
// // import { NavLink, Link } from "react-router";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";
// import Swal from "sweetalert2";
// import { AuthContext } from "../context/AuthContext";
// import { Menu, X } from "lucide-react";
// import { Link, NavLink } from "react-router";
// // import { FaMoon } from "react-icons/fa";
// // import { IoMdSunny } from "react-icons/io";

// const Header = () => {
//   const { user } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // const [isDark, setIsDark] = useState(
//   //   localStorage.getItem("isDark") === "true"
//   // );
//   // useEffect(() => {
//   //   localStorage.setItem("isDark", isDark);
//   // }, [isDark]);
//   // const handleChange = () => {
//   //   setIsDark(!isDark);
//   // };

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Swal.fire({
//           title: "Logged out!",
//           text: "You have been successfully logged out.",
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to log out. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Roommate", path: "/roommate" },
//     { name: "Browse Listing", path: "/browse-listings" },
//     { name: "My Listings", path: "/my-listings" },
//   ];

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="https://i.ibb.co/WWBSf9ns/istockphoto-1884947552-612x612.jpg"
//             alt="logo"
//             className="w-10 h-10 rounded-full"
//           />
//           <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
//         </Link>

//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//           {navItems.map(({ name, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className="relative group transition duration-300 hover:text-blue-600"
//             >
//               {({ isActive }) => (
//                 <span>
//                   {name}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                   ></span>

//                 </span>

//               )}
//             </NavLink>

//           ))}
//           {/* <div>
//           <label className="swap swap-rotate">
//             <input
//               type="checkbox"
//               className="theme-controller"
//               value="coffee"
//             />
//             <FaMoon className="swap-on h-6 w-6" />
//             <IoMdSunny className="swap-off h-6 w-6" />
//           </label>
//           <input
//             type="checkbox"
//             value="dark"
//             checked={isDark}
//             onChange={handleChange}
//             className="toggle theme-controller"
//           />
//         </div> */}
//         </nav>

//         <div className="hidden md:block">
//           {user ? (
//             <div className="group relative cursor-pointer">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border-2 border-blue-500"
//               />
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
//                 <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
//                   {user.displayName || "Unknown User"}
//                 </p>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-x-2">
//               <Link to="/login">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/register">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
//           <nav className="flex flex-col gap-3 text-gray-700 font-medium">
//             {navItems.map(({ name, path }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `px-2 py-1 rounded hover:bg-blue-50 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}
//           </nav>
//           <div>
//             {user ? (
//               <div className="mt-4 flex items-center justify-between border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                     alt="user"
//                     className="w-10 h-10 rounded-full border"
//                   />
//                   <p className="text-gray-700 text-sm font-medium">
//                     {user.displayName || "Unknown User"}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-sm text-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex gap-2 mt-4">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                   <button className="btn btn-outline btn-primary w-full">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/register" onClick={() => setIsMenuOpen(false)}>
//                   <button className="btn btn-outline btn-primary w-full">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// import React, { useContext, useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";
// import Swal from "sweetalert2";
// import { AuthContext } from "../context/AuthContext";
// import { Menu, X } from "lucide-react";
// import { Link, NavLink } from "react-router";

// const Header = () => {
//   const { user } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Swal.fire({
//           title: "Logged out!",
//           text: "You have been successfully logged out.",
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         });
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to log out. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   // ONLY Private Nav Items (shown only if user is logged in)
//   const privateNavItems = [
//     { name: "My Listings", path: "/my-listings" },
//     { name: "Create Assignment", path: "/create-assignment" },
//     { name: "Pending Assignments", path: "/pending-assignments" },
//     { name: "My Attempted Assignments", path: "/my-attempts" },
//   ];

//   const renderNavLinks = (items) =>
//     items.map(({ name, path }) => (
//       <NavLink
//         key={path}
//         to={path}
//         className="relative group transition duration-300 hover:text-blue-600"
//       >
//         {({ isActive }) => (
//           <span>
//             {name}
//             <span
//               className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
//                 isActive ? "w-full" : "w-0 group-hover:w-full"
//               }`}
//             ></span>
//           </span>
//         )}
//       </NavLink>
//     ));

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="https://i.ibb.co/WWBSf9ns/istockphoto-1884947552-612x612.jpg"
//             alt="logo"
//             className="w-10 h-10 rounded-full"
//           />
//           <span className="text-2xl font-bold text-blue-700">RoomieFind</span>
//         </Link>

//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Desktop Nav - only private nav if logged in */}
//         <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
//           {user && renderNavLinks(privateNavItems)}
//         </nav>

//         {/* User Profile or Login/Register */}
//         <div className="hidden md:block">
//           {user ? (
//             <div className="group relative cursor-pointer">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border-2 border-blue-500"
//               />
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
//                 <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
//                   {user.displayName || "Unknown User"}
//                 </p>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-x-3">
//               <Link to="/login">
//                 <button className="px-5 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/register">
//                 <button className="px-5 py-2 rounded-full border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
//           <nav className="flex flex-col gap-3 text-gray-700 font-medium">
//             {user &&
//               privateNavItems.map(({ name, path }) => (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={({ isActive }) =>
//                     `px-2 py-1 rounded hover:bg-blue-50 ${
//                       isActive ? "text-blue-600 font-semibold" : ""
//                     }`
//                   }
//                 >
//                   {name}
//                 </NavLink>
//               ))}
//           </nav>

//           {/* Mobile User Info or Login/Register */}
//           <div>
//             {user ? (
//               <div className="mt-4 flex items-center justify-between border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                     alt="user"
//                     className="w-10 h-10 rounded-full border"
//                   />
//                   <p className="text-gray-700 text-sm font-medium">
//                     {user.displayName || "Unknown User"}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-sm text-red-500 hover:underline"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col gap-2 mt-4">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                   <button className="w-full px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition duration-300">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/register" onClick={() => setIsMenuOpen(false)}>
//                   <button className="w-full px-4 py-2 rounded-full border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold transition duration-300">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// import React, { useContext, useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";
// import Swal from "sweetalert2";
// import { AuthContext } from "../context/AuthContext";
// import { Menu, X } from "lucide-react";
// import { Link, NavLink } from "react-router";

// const Header = () => {
//   const { user } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         Swal.fire({
//           title: "Logged out!",
//           text: "You have been successfully logged out.",
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//           timerProgressBar: true,
//         });
//       })
//       .catch(() => {
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to log out. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   };

//   const navItems = [
//     { name: "Assignments", path: "/assignments" },
//   ];

//   const privateNavItems = [
//     { name: "Pending Assignments", path: "/pending-assignments" },
//     { name: "Create Assignments", path: "/create-assignments" },
//     { name: "My Attempted Assignments", path: "/my-attempts" },
//   ];

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">

//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src=""
//             alt="logo"
//             className="w-10 h-10 rounded-full"
//           />
//           <span className="text-2xl font-bold text-blue-700"></span>
//         </Link>

//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
//           {navItems.map(({ name, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className="relative group transition duration-300 hover:text-blue-600"
//             >
//               {({ isActive }) => (
//                 <>
//                   <span>
//                     {name}
//                     <span
//                       className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
//                         isActive ? "w-full" : "w-0 group-hover:w-full"
//                       }`}
//                     ></span>
//                   </span>
//                 </>
//               )}
//             </NavLink>
//           ))}

//           {/* Private Links */}
//           {user && privateNavItems.map(({ name, path }) => (
//             <NavLink
//               key={path}
//               to={path}
//               className="relative group transition duration-300 hover:text-blue-600"
//             >
//               {({ isActive }) => (
//                 <>
//                   <span>
//                     {name}
//                     <span
//                       className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
//                         isActive ? "w-full" : "w-0 group-hover:w-full"
//                       }`}
//                     ></span>
//                   </span>
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Right Side: Login or Profile */}
//         <div className="hidden md:block">
//           {user ? (
//             <div className="group relative cursor-pointer inline-block">
//               <img
//                 src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                 alt="profile"
//                 className="w-10 h-10 rounded-full border-2 border-blue-500"
//               />
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
//                 <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
//                   {user.displayName || "Unknown User"}
//                 </p>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="space-x-2">
//               <Link to="/login">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Login
//                 </button>
//               </Link>
//               <Link to="/register">
//                 <button className="btn btn-outline btn-primary px-6">
//                   Register
//                 </button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
//           <nav className="flex flex-col gap-3 text-gray-700 font-medium">
//             {navItems.map(({ name, path }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `px-2 py-1 rounded hover:bg-blue-50 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}

//             {user && privateNavItems.map(({ name, path }) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={({ isActive }) =>
//                   `px-2 py-1 rounded hover:bg-blue-50 ${
//                     isActive ? "text-blue-600 font-semibold" : ""
//                   }`
//                 }
//               >
//                 {name}
//               </NavLink>
//             ))}
//           </nav>

//           <div>
//             {user ? (
//               <div className="mt-4 flex items-center justify-between border-t pt-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
//                     alt="user"
//                     className="w-10 h-10 rounded-full border"
//                   />
//                   <p className="text-gray-700 text-sm font-medium">
//                     {user.displayName || "Unknown User"}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-sm text-red-500"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex gap-2 mt-4">
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>
//                   <button className="btn btn-outline btn-primary w-full">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/register" onClick={() => setIsMenuOpen(false)}>
//                   <button className="btn btn-outline btn-primary w-full">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to log out. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Website Name */}
        <h2 className="flex items-center gap-2">
          <img src="" alt="logo" className="w-10 h-10 rounded-full" />
          <span className="text-2xl font-bold text-blue-700"></span>
        </h2>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group transition duration-300 hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-full"></span>
          </NavLink>

          <NavLink
            to="/assignments"
            className={({ isActive }) =>
              `relative group transition duration-300 hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Assignments
            <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-full"></span>
          </NavLink>

          {user && (
            <NavLink
              to="/pending-assignments"
              className={({ isActive }) =>
                `relative group transition duration-300 hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Pending Assignments
              <span className="absolute left-0 -bottom-1 h-0.5 bg-blue-600 w-full"></span>
            </NavLink>
          )}
        </nav>

        {/* Right side login/profile */}
        <div className="hidden md:block">
          {user ? (
            <div className="group relative cursor-pointer inline-block">
              <img
                src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                alt="profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
                <p className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">
                  {user.displayName || "Unknown User"}
                </p>

                <Link
                  to="/create-assignment"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Create Assignments
                </Link>
                <Link
                  to="/my-attempts"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Attempted Assignments
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/login">
                <button className="btn btn-outline btn-primary px-6">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline btn-primary px-6">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <NavLink
              to="/assignments"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-2 py-1 rounded hover:bg-blue-50 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Assignments
            </NavLink>

            {user && (
              <NavLink
                to="/pending-assignments"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-1 rounded hover:bg-blue-50 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                Pending Assignments
              </NavLink>
            )}
          </nav>

          <div>
            {user ? (
              <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL || "https://i.ibb.co/4Zg2z2M/user.png"}
                    alt="user"
                    className="w-10 h-10 rounded-full border"
                  />
                  <p className="text-gray-700 text-sm font-medium">
                    {user.displayName || "Unknown User"}
                  </p>
                </div>
                <Link
                  to="/create-assignments"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                >
                  Create Assignments
                </Link>
                <Link
                  to="/my-attempts"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                >
                  My Attempted Assignments
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-sm text-red-500 px-4 py-2 text-left hover:bg-gray-100 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2 mt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-outline btn-primary w-full">
                    Login
                  </button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <button className="btn btn-outline btn-primary w-full">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
