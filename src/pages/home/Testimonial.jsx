import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Bhavesh Sukam",
    company: "Abc Pvt. Ltd",
    image: "/client1.jpeg",
    rating: 5,
    description:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan. Nullam non justo ut nunc commodo auctor. Morbi gravida velit sit amet erat facilisis. Cras at sem ac elit efficitur fringilla. Proin ac dolor leo. Fusce vehicula ante a bibendum lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
  },
  {
    id: 2,
    name: "Aditi Shukla",
    company: "XYZ Pvt. Ltd",
    image: "/client2.jpeg",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum lorem. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus. Mauris ut lacinia elit. Vestibulum ante ipsum primis in faucibus orci luctus. Nulla facilisi. Etiam viverra at arcu ac auctor. Aenean varius nisl at dui sagittis, vel tincidunt neque tincidunt. Duis eu enim a ligula consequat tincidunt vitae in elit. Phasellus vel lorem nulla.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    company: "Tech Innovations",
    image: "/client3.jpeg",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Maecenas eget condimentum velit, sit amet feugiat lectus. Integer eu orci eu justo gravida facilisis. In id nisi id arcu egestas dictum. Aenean ac odio sit amet neque bibendum lacinia. Sed malesuada, risus nec pretium interdum. Integer ut laoreet mauris. Pellentesque euismod sollicitudin orci, vel hendrerit eros euismod et.",
  },
  {
    id: 4,
    name: "Rina Patel",
    company: "Design Studios",
    image: "/client1.jpeg",
    rating: 4,
    description:
      "Sed euismod lectus ac sollicitudin ullamcorper. Nam feugiat sit amet neque non tincidunt. Ut vitae feugiat sapien. Integer rutrum lorem erat, at vulputate nulla. Donec ultricies, sapien vel pellentesque euismod, turpis metus pulvinar quam. Integer consequat nisi vel enim malesuada, at porttitor felis vulputate. Aliquam erat volutpat. Vivamus id dolor et nisi faucibus varius. Etiam viverra at arcu ac auctor. Aenean varius nisl at dui sagittis, vel tincidunt neque tincidunt.",
  },
  {
    id: 5,
    name: "Ankit Verma",
    company: "Web Solutions",
    image: "/client2.jpeg",
    rating: 3,
    description:
      "Nulla facilisi. Aliquam erat volutpat. Vivamus id dolor et nisi faucibus varius. Etiam viverra at arcu ac auctor. Aenean varius nisl at dui sagittis, vel tincidunt neque tincidunt. Duis eu enim a ligula consequat tincidunt vitae in elit. Integer malesuada, risus nec pretium interdum. Sed dignissim, metus nec fringilla accumsan. Curabitur vel bibendum lorem. Cras ac nisl sit amet arcu suscipit tincidunt. Maecenas eget condimentum velit, sit amet feugiat lectus.",
  },
  {
    id: 6,
    name: "Maya Sharma",
    company: "Software Solutions",
    image: "/client3.jpeg",
    rating: 5,
    description:
      "Proin ac dolor leo. Fusce vehicula ante a bibendum lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin malesuada, risus nec pretium interdum. Cras at sem ac elit efficitur fringilla. Phasellus vel lorem nulla. Vivamus id dolor et nisi faucibus varius. Etiam viverra at arcu ac auctor. Aenean varius nisl at dui sagittis, vel tincidunt neque tincidunt. Duis eu enim a ligula consequat tincidunt vitae in elit.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-10 sm:py-14 px-2 bg-gray-100 text-center bg-[url('/path-to-your-gray-pattern.svg')] bg-cover bg-no-repeat bg-fixed">   
     <h1 className="absolute top-32 sm:top-24 left-4 sm:left-32 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
      Our
    </h1>
    <h1 className="absolute top-60 sm:top-96 right-1/4 sm:right-32 text-[60px] sm:text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-10 select-none pointer-events-none leading-none z-0">
      Testimonials
    </h1>

      <span className="inline-block px-4 py-1 bg-gray-200 border border-gray-300 rounded-full text-gray-700 text-sm mb-4">
        Our Testimonials
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Real stories from our <span className="text-orange-500">satisfied customers</span>
      </h2>

      <div className="relative w-full overflow-hidden px-4">
        <div className="flex transition-transform duration-500 ease-in-out justify-center gap-0 max-w-6xl mx-auto">
          {/* Left card - half shown */}
          <div className="hidden md:block absolute left-0 transform translate-x-[-50%] opacity-50 shrink-0 bg-gray-700 text-gray-300 rounded-xl px-2 py-3 text-sm w-1/3 h-full">
            {testimonials[(current - 1 + testimonials.length) % testimonials.length].description.slice(0, 200)}...
          </div>

          {/* Center card - wider */}
          <div className="bg-black text-white rounded-2xl p-6 w-full md:w-2/3 shrink-0 shadow-lg z-10 h-full">
            <p className="mb-6 text-sm">{testimonials[current].description}</p>
            <div className="flex flex-col items-center">
              <img
                src={testimonials[current].image}
                className="w-12 h-12 rounded-full mb-2"
                alt={testimonials[current].name}
              />
              <p className="font-semibold">{testimonials[current].name}</p>
              <span className="text-xs text-gray-400">{testimonials[current].company}</span>
              <div className="mt-2 flex gap-1 text-yellow-400">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          {/* Right card - half shown */}
          <div className="hidden md:block absolute right-0 transform translate-x-[50%] opacity-50 shrink-0 bg-gray-700 text-gray-300 rounded-xl px-2 py-3 text-sm w-1/3 h-full">
            {testimonials[(current + 1) % testimonials.length].description.slice(0, 200)}...
          </div>
        </div>
      </div>

      {/* Dots ABOVE arrows */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-orange-500 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Arrows BELOW dots */}
      <div className="mt-6 flex justify-center gap-4">
        <button onClick={prev} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="bg-gray-200 hover:bg-orange-600 hover:text-white p-2 rounded-full">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
