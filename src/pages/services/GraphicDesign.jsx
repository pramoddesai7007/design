import React, { useState } from "react";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Design for you?",
      answer:
        "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      question: "What tools do you use for graphic design?",
      answer:
        "We use Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, and Canva depending on the project.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Basic logos take 3–5 days. Full branding may take 1–2 weeks depending on scope.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Yes! We provide up to 3 rounds of revisions to ensure your satisfaction.",
    },
    {
      question: "What file formats will I receive?",
      answer:
        "You'll receive standard web and print formats like JPG, PNG, PDF, and vector files such as AI/SVG.",
    },
  ];

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen px-4 lg:px-14 py-32 ">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left/Main Content */}
        <div className="lg:col-span-2 space-y-6">
        <div className="h-72 rounded-lg overflow-hidden">
          <img
            src="/graphicdesign.jpg" 
            alt="UI/UX Design"
            className="object-cover w-full h-full"
          />
        </div>

          <h1 className="text-3xl font-bold">
            <span className="text-brand-orange">Graphic</span> Design
          </h1>
          <p className="text-gray-300">
            We create visually stunning and brand-aligned designs that leave a
            lasting impression. From logos to marketing collateral, our creative
            team ensures high-quality, engaging visuals that resonate with your
            audience.
          </p>

          {/* Why Choose Us */}
          <div className="bg-[#2c2c2c] p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold mb-4">Why Choose ?</h2>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <ul className="list-disc list-inside space-y-2 text-gray-300 flex-1">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero.
                </li>
              </ul>

              <div className="w-full lg:w-64 h-48 rounded-lg overflow-hidden">
                <img
                  src="/graphicdesign.jpg"
                  alt="Why Choose Us"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Frequently Asked Questions ?
            </h2>
            <div className="space-y-4 text-gray-300">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <div
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <p className="font-medium">
                        {index + 1}. {faq.question}
                      </p>
                      <span className="text-brand-orange text-2xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    {isOpen && (
                      <p className="text-sm mt-2">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar */}
        <div className="space-y-6 h-fit sticky top-10 self-start">
          {/* Other Services */}
          <div className="bg-[#2c2c2c] p-4 rounded-lg border border-gray-500">
            <h3 className="text-lg font-semibold mb-4">Others Services</h3>
            <div className="space-y-4">
              {[
                {
                  name: "UIUX Designing",
                  img: "/uiuxdesign.jpg",
                  path: "/services/uiux-design",
                },
                {
                  name: "Video Editing",
                  img: "/videoediting.jpg",
                  path: "/services/video-editing",
                },
                {
                  name: "Digital Marketing",
                  img: "/digitalmarketing.jpg",
                  path: "/services/digital-marketing",
                },
                {
                  name: "Software Developing",
                  img: "/softwaredeveloping.jpg",
                  path: "/services/software-developing",
                },
              ].map((service, index) => (
                <Link
                  to={service.path}
                  key={index}
                  className="flex gap-4 hover:text-brand-orange"
                >
                  <div className="w-16 h-16 bg-gray-400 rounded-md overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{service.name}</p>
                    <p className="text-gray-400 text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-[#2c2c2c] p-4 rounded-lg space-y-2 text-sm border border-gray-500">
            <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
            <p>
              <span className="font-medium">Address :</span>
              <br />
              No 42/A, Vakhar Bhag High School Road, Vakhar Bhag, Sangli -
              416416
            </p>
            <p>
              <span className="font-medium">Call :</span> +91 9876543210
            </p>
            <p>
              <span className="font-medium">Mail :</span> support@d4u.agency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
