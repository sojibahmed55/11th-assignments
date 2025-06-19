// components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#1a1c2c] via-[#2f3542] to-[#0f2027] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-extrabold text-cyan-400 mb-4 tracking-wide">
            NovaSphere
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Elevating ideas into digital experiences. Crafting future-ready web
            solutions with passion, precision & purpose.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-4 uppercase tracking-wider">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Solutions</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-4 uppercase tracking-wider">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">API Reference</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-teal-300 mb-4 uppercase tracking-wider">
            Connect
          </h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-cyan-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-400"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-400"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-5 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} NovaSphere Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
