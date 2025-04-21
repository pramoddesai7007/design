import React from "react";
import heroImage from "../../../public/man1.png";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <section className="relative bg-brand-gray text-white px-4 sm:px-8 lg:px-20 py-12 overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-18 left-18 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        Our
      </div>
      <div className="absolute bottom-8 left-[60%] transform -translate-x-1/2 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        Services
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0 ml-0 sm:ml-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm text-white bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)] backdrop-blur-md border border-white/10 shadow-md">
            Our Services
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Our Design Services:{" "}
            <span className="text-brand-orange">Crafted For Your Success</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="h-px w-full max-w-[200px] bg-gray-600" />
            <span className="text-gray-600 text-xl">&gt;</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-0 bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 mt-2 rounded-full transition-all"
          >
            CONTACT US <ChevronRight className="text-sm" />
          </Link>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <img
            src={heroImage}
            alt="Thumbs up guy"
            className="w-[350px] sm:w-[400px] lg:w-[480px] object-contain rounded-lg grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
