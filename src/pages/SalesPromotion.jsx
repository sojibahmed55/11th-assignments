import React from "react";

const SalesPromotion = () => {
  return (
    <section className="py-16  text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6">
          Limited Time Offer!  
        </h2>
        <p className="text-lg text-blue-600 max-w-xl mx-auto mb-8">
          Get 30% off on all premium assignment bundles. Upgrade your learning experience with exclusive content and expert guidance.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mb-10 text-3xl font-mono">
          <div>
            <span className="block text-5xl text-blue-600 font-bold">12</span>
            <span className="uppercase text-sm text-blue-600 tracking-wide">Days</span>
          </div>
          <div>
            <span className="block text-5xl text-blue-600 font-bold">08</span>
            <span className="uppercase text-sm text-blue-600 tracking-wide">Hours</span>
          </div>
          <div>
            <span className="block text-5xl text-blue-600 font-bold">34</span>
            <span className="uppercase text-sm text-blue-600 tracking-wide">Minutes</span>
          </div>
          <div>
            <span className="block text-5xl text-blue-600 font-bold">50</span>
            <span className="uppercase text-sm text-blue-600 tracking-wide">Seconds</span>
          </div>
        </div>

        <button className="px-8 py-4 bg-pink-500 rounded-full text-xl font-semibold hover:bg-pink-600 transition">
          Grab The Deal
        </button>
      </div>
    </section>
  );
};

export default SalesPromotion;
