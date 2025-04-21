import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clientData = [
    {
      img: "/client1.jpeg",
      name: "Bhavesh Sukam",
      title: "CEO of ABC Pvt Ltd",
    },
    {
      img: "/client2.jpeg",
      name: "Jane Smith",
      title: "Founder of XYZ Ltd",
    },
    {
      img: "/client3.jpeg",
      name: "Michael Johnson",
      title: "Director at DEF Inc",
    },
  ];

  const getClientAt = (index) => clientData[index];

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 md:px-8 py-6 sm:py-16 bg-gray-100">
    <h1 className="absolute top-32 sm:top-28 left-4 sm:left-24 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
        Our
      </h1>
      <h1 className="absolute top-60 sm:top-[68%] right-1/4 sm:right-72 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
        Clients
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-16">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <span className="inline-block px-4 py-1 bg-gray-200 border border-gray-300 rounded-full text-gray-700 text-sm mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Delivering Excellence to Our Valued{" "}
            <span className="text-brand-orange">Clients</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>

          <div className="flex items-center justify-between mb-8">
            <hr className="border-t-2 border-gray-300 w-full" />
            <span className="text-gray-600"> &gt; </span>
          </div>

          <div className="text-center md:text-left">
            <button className="bg-brand-orange text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all">
              <Link to="/client" className="flex items-center gap-2 text-white">
                LEARN MORE <ChevronRight className="text-sm" />
              </Link>
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="w-full md:w-1/2 flex gap-4 items-center">
          {/* Big Image */}
          <div className="w-32 h-56 md:w-72 md:h-96 bg-white border rounded-xl overflow-hidden shadow relative grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src={getClientAt(activeIndex).img}
              alt={getClientAt(activeIndex).name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-2 text-white text-xs sm:text-sm">
              <p className="font-semibold">{getClientAt(activeIndex).name}</p>
              <p>{getClientAt(activeIndex).title}</p>
            </div>
          </div>

          {/* Small Image 1 */}
          <div className="w-24 h-36 md:w-1/3 md:h-60 mt-20 sm:mt-32 bg-white border rounded-xl overflow-hidden shadow relative grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src={getClientAt((activeIndex + 1) % clientData.length).img}
              alt={getClientAt((activeIndex + 1) % clientData.length).name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Image 2 */}
          <div className="w-24 h-36 md:w-1/3 md:h-60 mt-20 sm:mt-32 bg-white border rounded-xl overflow-hidden shadow relative grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src={getClientAt((activeIndex + 2) % clientData.length).img}
              alt={getClientAt((activeIndex + 2) % clientData.length).name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Dots and Arrows Container */}
      <div className="flex flex-col items-center mt-4 sm:ml-48">
        {/* Dots */}
        <div className="flex gap-2 justify-center">
          {clientData.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === activeIndex ? "bg-brand-orange" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="bg-gray-200 hover:bg-orange-600 hover:text-white p-2 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
