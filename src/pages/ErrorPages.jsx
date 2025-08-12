import React from 'react';

const ErrorPages = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-6">
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>
      <p className="text-2xl md:text-3xl mt-4 font-semibold tracking-widest drop-shadow-md">
        Oops! Page Not Found
      </p>
      <p className="mt-2 text-lg max-w-md text-center drop-shadow-sm">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-8 bg-white text-purple-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300"
      >
        Go Back
      </button>
      <div className="mt-10 w-full max-w-md">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Lost in space animation"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
    );
};

export default ErrorPages;