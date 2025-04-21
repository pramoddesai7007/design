import React from "react";
import blogImg1 from "../../../public/blog1.jpeg";
import blogImg2 from "../../../public/blog2.jpeg";
import blogImg3 from "../../../public/blog3.jpeg";
import blogImg4 from "../../../public/blog4.jpeg";
import blogImg5 from "../../../public/blog5.jpeg";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: blogImg1,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 2,
      image: blogImg2,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 3,
      image: blogImg3,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 4,
      image: blogImg4,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 5,
      image: blogImg3,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 6,
      image: blogImg1,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      id: 7,
      image: blogImg5,
      title: "Dorem ipsum dolor sit amet, consectetur adipiscing.",
      description:
        "Worem ipsum dolor sit amet, consectetur adipis elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];

  return (
    <div className="bg-[#222222] py-28 sm:py-36">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
      <button className="mb-3 sm:mb-4 px-5 sm:px-6 py-2 border border-gray-500 rounded-full text-sm sm:text-base text-white bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)]">
        Our Blogs
      </button>

      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto leading-snug sm:leading-tight font-poppins text-center">
        <span className="whitespace-normal sm:whitespace-nowrap">
          Discover tips to boost your <span className="text-[#F76517]">productivity  </span>
        </span>
        <br className="hidden sm:block" />
        Effortlessly
      </h2>
    </div>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-12">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full mt-6"
          >
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="rounded-md object-cover h-48 w-full"
            />
            <div className="mt-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">
                {blog.title}
              </h3>
              <p className="text-sm text-[#5A5A5A] mb-4">
                {blog.description}
              </p>
              <a
                href="#"
                className="text-[#F76517] text-sm font-medium uppercase tracking-wide hover:underline"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Blog;
