import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  const [showServices, setShowServices] = useState(false);

  const serviceLinks = [
    { name: "Graphic Design", path: "/graphic-design" },
    { name: "UIUX Design", path: "/uiux-design" },
    { name: "Video Editing", path: "/video-editing" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Software Developing", path: "/software-developing" },
    { name: "Content Creation", path: "/content-creation" },
    { name: "Social Media Optimization", path: "/social-media-optimization" },
    { name: "Creative Design Support", path: "/creative-design-support" },
    { name: "Customer Data Solutions", path: "/customer-data-solutions" },
    { name: "Digital Business Cards", path: "/digital-business-cards" },
    { name: "Google My Business Setup & Review System", path: "/google-my-business-setup-review-system" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      <div className="bg-white w-72 h-full p-5 rounded-tr-2xl rounded-br-2xl shadow-lg">
        <h2 className="text-orange-500 font-bold mb-5 text-lg border border-blue-400 px-2 py-1 rounded">
          Menu
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <Link to="/" onClick={closeSidebar}>Home</Link>
          </li>
          <hr className="border-t border-gray-300 my-2" />
          <li>
            <button
              className="flex justify-between w-full items-center"
              onClick={() => setShowServices(!showServices)}
            >
              <span>Services</span>
              <span className="text-xl text-gray-700">{showServices ? "−" : "+"}</span>
            </button>
            {showServices && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-500">
                {serviceLinks.map(({ name, path }, idx) => (
                  <li key={idx}>
                    <Link
                      to={path}
                      onClick={closeSidebar}
                      className="hover:text-orange-500"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <hr className="border-t border-gray-300 my-2" />
          <li><Link to="/blog" onClick={closeSidebar}>Blog</Link></li>
          <hr className="border-t border-gray-300 my-2" />
          <li><Link to="/about" onClick={closeSidebar}>About Us</Link></li>
          <hr className="border-t border-gray-300 my-2" />
          <li><Link to="/contact" onClick={closeSidebar}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex-1" onClick={closeSidebar} />
    </div>
  );
};

export default Sidebar;
