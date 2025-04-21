import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="relative flex flex-col lg:flex-row lg:flex-row-reverse items-center justify-between px-6 lg:px-20 py-6 lg:py-16 bg-white overflow-hidden mb-10 sm:mb-0">
     <div className="absolute top-28 left-96 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        About
      </div>
      <div className="absolute top-72 left-[60%] transform -translate-x-1/2 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        Us
      </div>     

      {/* Right Content */}
      <div className="w-full lg:w-1/2 relative z-10 space-y-6 mt-8 lg:mt-0">
        {/* Label */}
        <div className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-full shadow">
          About Us
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          DESIGN FOR YOU -{" "}
          <span className="text-brand-orange">
            Where Creativity Meets Excellence
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          Welcome to Design 4 U, your partner in navigating the digital landscape.
          We specialize in supporting small businesses in creating a strong online presence
          through a blend of innovative design and strategic digital solutions.
          Located in Pune, we're dedicated to helping businesses optimize social media,
          design compelling visuals, manage customer data, and boost visibility through
          Google My Business. Our focus is on affordability and effectiveness, bringing
          you powerful digital solutions without the heavy cost.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4 w-full">
          <span className="block mt-2 text-right pr-4 text-xl text-gray-400">
            → 
          </span>
        </div>

        {/* Button */}
        <button className="bg-brand-orange text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all">
        <Link to="/about" className="flex items-center gap-0 text-white"> 
          LEARN MORE <ChevronRight className="text-sm" />
        </Link>
      </button>

        {/* Pen Icon */}
        <div className="absolute lg:top-[-22%] top-[-10%] right-[-8%] lg:right-[-8%] mx-auto w-24 md:w-40">
        <img src="/pencil.png" alt="pen" className="w-full" />
      </div>
    </div>

      {/* Images Block */}
      <div className="relative w-[90%] lg:w-[45%] h-48 sm:h-96 mt-16 lg:mt-0">
        {/* Large Image */}
        <img
          src="/blog2.jpeg"
          alt="Large"
          className="w-full h-full object-cover "
        />

        {/* Small Image 1 */}
        <div className="absolute -top-8 sm:-top-14 left-0 sm:left-0 w-36 h-32 sm:w-60 sm:h-60 shadow-lg overflow-hidden z-20 border border-white ">
          <img
            src="/blog4.jpeg"
            alt="Small1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Image 2 */}
        <div className="absolute -bottom-8 sm:-bottom-14 right-0 sm:right-0 w-36 h-32 sm:w-60 sm:h-60 shadow-lg overflow-hidden z-20 border border-white ">
          <img
            src="/blog3.jpeg"
            alt="Small2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
