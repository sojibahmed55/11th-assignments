import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We provide high-quality assignments, tutorials, and resources to help
            students excel in their studies and projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/assignments" className="hover:text-pink-500 transition">
                Assignments
              </a>
            </li>
            <li>
              <a href="/reviews" className="hover:text-pink-500 transition">
                Reviews
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
          <p className="text-gray-400 text-sm">Email: support@assignmenthub.com</p>
          <p className="text-gray-400 text-sm mt-1">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400 text-sm mt-1">Address: 123 Learning St, Knowledge City</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.292 4.292 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9 12.16 12.16 0 01-8.82-4.47 4.28 4.28 0 001.32 5.72 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54 12.14 12.14 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.32 8.32 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9 14v-6h-3v6h3zm-1.5-6.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 17v-3a3 3 0 00-6 0v3h3v-2a1 1 0 012 0v2h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Assignment Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
