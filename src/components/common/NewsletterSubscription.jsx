import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required.");
      setSubmitted(false);
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
      console.log("Subscribed with email:", email);
      setEmail(""); 
    }
  };

  return (
    <div className="w-full py-12 px-6 sm:px-12 relative z-30">
      <div className="max-w-6xl mx-auto bg-[#FFF0E8] border border-[#FFD1B9] rounded-[34px] p-8 md:p-16 text-center">
        <p className="text-2xl md:text-[34px] font-semibold text-black leading-snug mb-8">
          Stay Updated with the Latest Design Trends
          <br />
          <span>
            <span className="text-brand-orange">Subscribe </span>
            <span className="text-black">to Our Newsletter!</span>
          </span>
        </p>

        <div className="relative max-w-sm mx-auto w-full">
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setSubmitted(false);
            }}
            className={`w-full px-6 py-3 pr-32 rounded-full border ${
              error ? "border-red-500" : "border-[#F1F1F1]"
            } text-gray-700`}
          />
          <button
            onClick={handleSubscribe}
            className="absolute right-1 top-1 bottom-1 px-4 bg-brand-orange text-white rounded-full font-semibold text-sm"
          >
            Subscribe
          </button>
        </div>

        {/* Error or Success Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
        )}
        {submitted && !error && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            You're subscribed!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
