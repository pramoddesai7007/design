import React from "react";
import {  ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 lg:px-20 relative overflow-hidden">
      {/* Background Typography */}
      <h1 className="absolute top-32 sm:top-28 left-4 sm:left-24 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
        Our
      </h1>
      <h1 className="absolute top-60 sm:top-[62%] right-1/4 sm:right-96 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
        Blogs
      </h1>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div>
        <button className="mb-4 px-6 py-2 rounded-full border border-white/10 text-sm text-white bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)] backdrop-blur-md shadow-md">
        Our Blogs
      </button>
        
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore <span className="text-white">tips</span>, <span className="text-white">trends</span>, and <span className="text-orange-500">personal insights</span>
          </h2>
          <p className="text-gray-400 max-w-xl mb-8">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
          </p>

          <button className="bg-brand-orange text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all">
             <Link to="/blog" className="flex items-center gap-0 text-white"> 
             LEARN MORE <ChevronRight className="text-sm" />
             </Link>
          </button>
         
        </div>

        {/* Right Side Images */}
        <div className="flex flex-col lg:flex-row gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden"
            >
              <img
                src="/blog1.jpeg"
                alt="Blog Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-sm mb-2">
                  Dorem ipsum dolor sit amet, consectetur adipiscing.
                </h3>
                <p className="text-gray-600 text-xs mb-2">
                  Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <a href="#" className="text-orange-500 text-xs font-semibold">
                  VIEW MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;