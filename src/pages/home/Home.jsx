import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import About from "./AboutUs";
import OurServices from "./OurServices";
import ServiceTabs from "./ServiceTabs";
import ClientsSection from "./ClientsSection";
import Testimonial from "./Testimonial";
import Blog from "./BlogSection";

const phrases = [
  { text: "Crafted for Your Success", gradient: "from-pink-400 to-yellow-400" },
  { text: "Made to Fit Your Business", gradient: "from-purple-500 to-red-500" },
  { text: "Designs That Speak to You", gradient: "from-yellow-400 to-blue-500" },
];

const rotatingWords = [
  "Graphic Design",
  "Software Development",
  "UI/UX Design",
  "Video Editing",
  "Digital Marketing",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [rotateIndex, setRotateIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const current = phrases[index].text;
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotateIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-brand-gray text-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 md:px-16 lg:px-20 py-12 relative pt-32 sm:pt-40 overflow-hidden">
        {/* Background Words */}
        <div className="absolute top-28 left-4 sm:left-12 text-[50px] sm:text-[100px] lg:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
          Creative
        </div>
        <div className="absolute top-[350px] sm:top-72 left-1/2 transform -translate-x-1/2 text-[50px] sm:text-[100px] lg:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
          Design
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-left z-10">
          <button className="px-6 sm:px-8 py-2 rounded-full text-sm text-white bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)] backdrop-blur-md border border-white/10 shadow-md">
            Design for You
          </button>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Creative Design Solutions for Your
          </h1>

          <div className="text-xl sm:text-3xl md:text-4xl font-bold flex flex-wrap items-center gap-2">
            <span className="text-white">Business | </span>
            <span
              className={`bg-gradient-to-r ${phrases[index].gradient} bg-clip-text text-transparent min-w-[160px] sm:min-w-[200px]`}
            >
              {displayedText}
              <span className="text-white animate-pulse"></span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full max-w-full sm:max-w-2xl rounded-full overflow-hidden bg-[#1f1f1f] py-2 px-4">
            <FaSearch className="text-gray-400" />
            <span className="text-gray-400 text-sm">Search</span>
            <span className="text-white text-sm font-medium truncate max-w-[120px] sm:max-w-none">
              &quot;{rotatingWords[rotateIndex]}&quot;
            </span>
            <button className="ml-auto bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold text-sm px-4 py-1.5 rounded-full mt-2 sm:mt-0">
              GET QUOTE
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 z-10">
          <img
            src="/hero1.png"
            alt="Designer working"
            className="w-[240px] sm:w-[300px] md:w-[350px] object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <OurServices />
      <ServiceTabs />
      <ClientsSection />
      <Blog />
      <Testimonial />
    </main>
  );
};

export default Home;
