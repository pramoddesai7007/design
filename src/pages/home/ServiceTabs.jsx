import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const serviceData = {
  "Graphic Design": {
    image: "/graphicdesign.jpg",
  },
  "UI/UX Design": {
    image: "/uiuxdesign.jpg",
  },
  "Video Editing": {
    image: "/videoediting.jpg",
  },
  "Digital Marketing": {
    image: "/digitalmarketing.jpg",
  },
  "Software Developing": {
    image: "/softwaredeveloping.jpg",
  },
};

// This function matches your route setup
const getServicePath = (service) => {
  switch (service) {
    case "Graphic Design":
      return "/graphic-design";
    case "UI/UX Design":
      return "/uiux-design";
    case "Video Editing":
      return "/video-editing";
    case "Digital Marketing":
      return "/digital-marketing";
    case "Software Developing":
      return "/software-developing";
    default:
      return "/";
  }
};

const ServiceSection = ({ service, data, setActiveService }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      setActiveService(service);
    }
  }, [inView]);

  const handleExploreClick = () => {
    navigate(getServicePath(service));
  };

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center snap-start relative"
    >
      <div className="relative z-10 text-center text-white space-y-6 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">{service}</h2>
        <button
          onClick={handleExploreClick}
          className="bg-brand-orange text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all"
        >
          Explore Program <ChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default function ServiceTabs() {
  const [activeService, setActiveService] = useState("Graphic Design");

  return (
    <div
      className="flex h-[100vh] overflow-hidden transition-all duration-500 relative"
      style={{
        backgroundImage: `url(${serviceData[activeService].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-lg z-0" />

      {/* Sidebar */}
      <div className="w-1/5 text-white flex justify-center items-center py-6 z-10 relative">
        <div className="flex flex-col items-center space-y-6">
          {Object.keys(serviceData).map((service, index) => (
            <div key={service} className="flex flex-col items-center">
              {index !== 0 && (
                <div className="h-6 border-l-2 border-dotted border-white" />
              )}
              <button
                className={`w-16 h-16 rounded-full flex items-center justify-center text-center text-sm font-medium transition-all duration-300
                  ${
                    activeService === service
                      ? "bg-brand-orange text-white font-bold scale-105"
                      : "bg-transparent text-white border-2 border-white"
                  }`}
                onClick={() => setActiveService(service)}
              >
                {service.split(" ")[0]}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-4/5 h-screen overflow-y-scroll snap-y snap-mandatory relative z-10">
        {Object.entries(serviceData).map(([service, data]) => (
          <ServiceSection
            key={service}
            service={service}
            data={data}
            setActiveService={setActiveService}
          />
        ))}
      </div>
    </div>
  );
}
