import React from 'react';
import aboutImg from "../../../public/about1.png";
import bgVideo from "../../../public/motion.mp4";
import missionImg from "../../../public/mission.gif";
import visionImg from "../../../public/vision.gif";
import Testimonial from "../home/Testimonial";

const About = () => {
  return (
    <>
      {/* Main Container  */}
      <div className="bg-[#1b1b1b] pt-10 sm:pt-24">
        {/* Background Topology */}
        <div className="bg-[#1b1b1b] text-white relative">
          {/* Background Topology SVG */}
          <div className="absolute inset-0 z-0">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-full absolute bottom-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0,320L1440,160L1440,0L0,0Z"
                opacity="0.1"
              />
            </svg>
          </div>
          
          {/* "About Us" on the Background */}
          <div className="absolute top-24 left-4 sm:top-24 sm:left-72 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
            About
            </div>
          <div className="absolute top-40 left-[80%] sm:top-64 sm:left-[80%] transform -translate-x-1/2 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
              Us
            </div>


          <div className="max-w-[1920px] mx-auto px-4 py-16 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image section */}
              <div className="flex justify-center relative">
              <img
              src={aboutImg}
              alt="About"
              className="w-[286px] h-[321px] object-cover rounded-lg shadow-lg z-10 relative grayscale hover:grayscale-0 transition duration-500"
            />
              </div>

              {/* Info section */}
              <div>
              <button className="mb-4 px-6 py-2 border border-gray-500 rounded-full text-sm text-white bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)]">
              About Us
            </button>

                <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight">
                  We’re Strategic <span className="text-orange-500">Design & Developing</span><br />
                  Services Company
                </h1>

                <p className="text-base text-gray-300 mb-6">
                  Welcome to <strong>Design 4 U</strong>, your partner in navigating the digital landscape. We specialize in supporting small businesses in creating a strong online presence through a blend of innovative design and strategic digital solutions. Located in Pune, we’re dedicated to helping businesses optimize social media, design compelling visuals, manage customer data, and boost visibility through Google My Business. Our focus is on affordability and effectiveness, bringing you powerful digital solutions without the heavy cost.
                </p>

                {/* Happy Clients Pill */}
                <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full w-fit shadow-lg">
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/30?img=1" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/30?img=2" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/30?img=3" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://i.pravatar.cc/30?img=4" className="w-7 h-7 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-sm font-medium">300+ Happy Clients</span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-[#2a2a2a] mt-12 p-6 rounded-xl">
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-gray-400 mt-2">Completed Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">300+</h3>
                <p className="text-sm text-gray-400 mt-2">Our Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-sm text-gray-400 mt-2">Satisfied Customer</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-sm text-gray-400 mt-2">Top Designers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Section with Background Video */}
        <div className="relative w-full h-[420px] mx-auto relative overflow-hidden">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80 z-10" />
          {/* Mission & Vision Cards */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="w-full max-w-[1100px] px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mission */}
              <div className="p-6 md:p-8 rounded-[16px] bg-white/10 backdrop-blur-[19.9px] shadow-md flex flex-col gap-4 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-[56px] h-[56px]">
                    <img src={missionImg} alt="Mission" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-sm md:text-base">
                  Our mission is to make digital tools accessible for every small business by offering services that enhance visibility, trust, and growth.
                </p>
              </div>
              {/* Vision */}
              <div className="p-6 md:p-8 rounded-[16px] bg-white/10 backdrop-blur-[19.9px] shadow-md flex flex-col gap-4 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-[56px] h-[56px]">
                    <img src={visionImg} alt="Vision" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-sm md:text-base">
                  To empower small businesses with a seamless, affordable digital presence that connects them with their audience, builds trust, and drives growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <Testimonial />
      </div>
    </>
  );
};

export default About;
