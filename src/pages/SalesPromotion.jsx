
import React from "react";
import Countdown from "react-countdown";

const SalesPromotion = () => {

  const targetDate = Date.now() + 12 * 24 * 60 * 60 * 1000; 

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // When countdown is complete
      return <span className="text-3xl font-bold text-red-600">Offer expired!</span>;
    } else {
      return (
        <div className="flex justify-center gap-6 mb-10 text-3xl font-mono text-blue-600">
          <div>
            <span className="block text-5xl font-bold">{days}</span>
            <span className="uppercase text-sm tracking-wide">Days</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{hours}</span>
            <span className="uppercase text-sm tracking-wide">Hours</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{minutes}</span>
            <span className="uppercase text-sm tracking-wide">Minutes</span>
          </div>
          <div>
            <span className="block text-5xl font-bold">{seconds}</span>
            <span className="uppercase text-sm tracking-wide">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-6">Limited Time Offer!</h2>
        <p className="text-lg text-blue-600 max-w-xl mx-auto mb-8">
          Get 30% off on all premium assignment bundles. Upgrade your learning experience with exclusive content and expert guidance.
        </p>

        {/* Countdown Timer */}
        <Countdown date={targetDate} renderer={renderer} />

        <button className="px-8 py-4 bg-pink-500 rounded-full text-xl font-semibold hover:bg-pink-600 transition">
          Grab The Deal
        </button>
      </div>
    </section>
  );
};

export default SalesPromotion;

