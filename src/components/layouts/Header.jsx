import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Modal from "../common/Modal";
import Logo from "../common/Logo";

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
  {
    name: "Google My Business Setup & Review System",
    path: "/google-my-business-setup-review-system",
  },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinkClass = (path) =>
    `relative font-medium transition-all duration-300 ${
      currentPath === path
        ? "text-brand-orange"
        : "text-white hover:text-brand-orange"
    }`;

    const underline = (
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1.5 bg-brand-orange rounded-full transition-all duration-300" />
    );
    

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Header for Large Screens */}
      <header className="hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1166px] h-[80px] rounded-full bg-[#0000001F] backdrop-blur-[80px] px-4 md:px-8 text-white z-50 transition-all duration-300">
        <div className="flex items-center justify-between h-full w-full">
          {/* Left Section */}
          <div className="flex items-center gap-4 md:w-1/5">
            <Logo />
          </div>

          {/* Center Navigation */}
          <nav className="flex items-center justify-center gap-10 text-sm xl:text-base md:w-3/5">
            <Link to="/" className={navLinkClass("/")}>
              Home
              {currentPath === "/" && underline}
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`transition duration-300 ${
                  currentPath.startsWith("/services")
                    ? "text-brand-orange"
                    : "text-white hover:text-brand-orange"
                }`}
              >
                Services ▾
              </button>

              {isDropdownOpen && (
                <div className="absolute top-12 left-0 w-[600px] h-[360px] grid grid-cols-2 bg-brand-gray text-white border border-gray-500 rounded-2xl p-6 shadow-xl z-50 overflow-y-auto">
                  {serviceLinks.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => setIsDropdownOpen(false)}
                      className="hover:text-brand-orange py-2 transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className={navLinkClass("/blog")}>
              Blogs
              {currentPath === "/blog" && underline}
            </Link>

            <Link to="/about" className={navLinkClass("/about")}>
              About Us
              {currentPath === "/about" && underline}
            </Link>

            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact Us
              {currentPath === "/contact" && underline}
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center justify-end md:w-1/5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-orange text-white px-4 md:px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition"
            >
              Work with us
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="lg:hidden w-full bg-black py-2 px-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center"
          >
            <FaBars className="text-black text-lg" />
          </button>
         
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white text-sm font-semibold rounded-full px-4 py-2 hover:bg-orange-600"
        >
          Work with us
        </button>
      </div>

      {/* Sidebar and Modal */}
      {isSidebarOpen && <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
