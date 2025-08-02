
import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";


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


  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  const handleChange = () => {
    setIsDark(!isDark);
  };



  const navLinkStyle = ({ isActive }) =>
    `pb-1 border-b-2 transition-all duration-300 ${
      isActive
        ? "text-blue-600  border-blue-600 font-semibold"
        : "border-transparent hover:text-blue-600 hover:border-blue-400"
    }`;

  return (
    <header className=" shadow-md sticky top-0 z-50 backdrop-blur-2xl ">
     
      <div className=" max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
    
        <h2 className="flex items-center gap-2">
          <img
            src="https://www.shutterstock.com/image-vector/creative-modern-img-letter-logo-260nw-1780496255.jpg"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-blue-700">Assignment</span>
        </h2>

      
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex gap-6  font-medium items-center">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/assignments" className={navLinkStyle}>
            Assignments
          </NavLink>
          {user && (
            <NavLink to="/pending-assignment" className={navLinkStyle}>
              Pending Assignments
            </NavLink>
          )}
        </nav>
        <div>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="coffee"
            />
            <FaMoon className="swap-on h-6 w-6" />
            <IoMdSunny className="swap-off h-6 w-6" />
          </label>
          <input
            type="checkbox"
            value="dark"
            checked={isDark}
            onChange={handleChange}
            className="toggle theme-controller"
          />
        </div>

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


      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink
              to="/assignments"
              onClick={() => setIsMenuOpen(false)}
              className={navLinkStyle}
            >
              Assignments
            </NavLink>
            {user && (
              <NavLink
                to="/pending-assignment"
                onClick={() => setIsMenuOpen(false)}
                className={navLinkStyle}
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
                  to="/create-assignment"
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



// import React, { useContext, useState, useRef, useEffect } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { NavLink, useNavigate } from "react-router";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
// import logov from "../../public/volunteer-652383_1280.webp";
// import home from "../../public/home50.png";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   const handleLogout = () => {
//     logout().then(() => {
//       setShowDropdown(false);
//       navigate("/");
//     });
//   };

//   // Dark mode logic
//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("isDark") === "true"
//   );

//   useEffect(() => {
//     localStorage.setItem("isDark", isDark);
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDark]);

//   const handleChange = () => {
//     setIsDark(!isDark);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const activeClass = "text-blue-600 dark:text-yellow-300 font-bold";
//   const defaultClass = "hover:text-blue-600 dark:hover:text-yellow-300";

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md text-black dark:text-white">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="flex items-center gap-2">
//           <NavLink to="/">
//             <img src={logov} className="w-10" alt="Logo" />
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="sm:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Center Menu */}
//         <div
//           className={`sm:flex gap-5 items-center absolute sm:static top-[70px] left-0 w-full sm:w-auto bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent px-4 py-4 sm:py-0 transition-all duration-300 z-40 ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//             <div className="flex items-center gap-1">
//               <img src={home} className="w-3 h-3" alt="home" />
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   isActive ? activeClass : defaultClass
//                 }
//               >
//                 Home
//               </NavLink>
//             </div>
//             <NavLink
//               to="/all-posts"
//               className={({ isActive }) =>
//                 isActive ? activeClass : defaultClass
//               }
//             >
//               All Volunteer Needs
//             </NavLink>

//             {/* Mobile-only auth links */}
//             <div className="sm:hidden flex flex-col gap-2">
//               {user ? (
//                 <>
//                   <NavLink to="/add-post" className="text-sm">
//                     Add Volunteer Need
//                   </NavLink>
//                   <NavLink to="/manage-posts" className="text-sm">
//                     Manage Posts
//                   </NavLink>
//                   <button
//                     onClick={handleLogout}
//                     className="text-sm text-red-500"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <NavLink
//                     to="/login"
//                     className="text-sm bg-blue-600 text-white px-4 py-2 rounded text-center"
//                   >
//                     Login
//                   </NavLink>
//                   <NavLink
//                     to="/register"
//                     className="text-sm bg-green-600 text-white px-4 py-2 rounded text-center"
//                   >
//                     Register
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Dark Mode Toggle & Auth (Desktop only) */}
//         <div className="hidden sm:flex items-center gap-4">
//           {/* ✅ Only One Dark Mode Toggle (Right Side) */}
//           <input
//             type="checkbox"
//             value="dark"
//             checked={isDark}
//             onChange={handleChange}
//             className="toggle theme-controller"
//           />

//           {/* Auth Buttons / Profile Dropdown */}
//           {user ? (
//             <div className="relative" ref={dropdownRef}>
//               <img
//                 src={user.photoURL || "https://i.ibb.co/yRwt5jY/user.png"}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full border cursor-pointer"
//                 onClick={() => setShowDropdown((prev) => !prev)}
//               />
//               {showDropdown && (
//                 <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow rounded w-48 z-50">
//                   <p className="text-sm mb-2 truncate">{user.displayName}</p>
//                   <NavLink
//                     to="/add-post"
//                     className="block text-sm hover:text-blue-600 dark:hover:text-yellow-300 mb-1"
//                     onClick={() => setShowDropdown(false)}
//                   >
//                     Add Volunteer Need Post
//                   </NavLink>
//                   <NavLink
//                     to="/manage-posts"
//                     className="block text-sm hover:text-blue-600 dark:hover:text-yellow-300 mb-2"
//                     onClick={() => setShowDropdown(false)}
//                   >
//                     Manage My Posts
//                   </NavLink>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <NavLink
//                 to="/login"
//                 className="text-sm bg-blue-600 text-white px-4 py-2 rounded"
//               >
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className="text-sm bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Register
//               </NavLink>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;