
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import artistImage from '../../../public/contact1.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    alert('Message Sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#222222] pt-20 sm:pt-36 px-4 sm:px-0">
      <div className="absolute top-28 left-4 sm:top-28 sm:left-12 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        Contact
      </div>
      <div className="absolute top-[100%] left-[70%] sm:top-[100%] sm:left-[70%] transform -translate-x-1/2 text-[70px] sm:text-[160px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#303030] opacity-5 select-none pointer-events-none z-0 leading-tight">
        Us
      </div>

      {/* Section One */}
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center group">
            <img
              src={artistImage}
              alt="Artist"
              className="w-full max-w-md object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col gap-6 text-white">
            <div className="p-[1px] rounded-full border border-gray-300 w-fit">
            <div className="px-6 py-2 rounded-full backdrop-blur-md bg-[linear-gradient(to_right,_#1a1a1ab2,_#4e4e4eb2)] text-sm font-medium text-white">
            Contact us
          </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">We'll respond to you in an hour.</h2>
            <p className="text-[#B9B9B9] text-base max-w-xl">
              Neque porro est qui dolorem ipsum quia quaed inventor veritatis et. Neque porro est qui dolorem ipsum quia quaed.
            </p>

            <div className="bg-[#FFFFFF14] border border-gray-400/50 rounded-xl p-6 w-full max-w-2xl">
              <p className="text-lg mb-4 font-semibold">Get in Touch</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-lg bg-[#222222] text-white placeholder:text-[#B9B9B9] border border-gray-500 focus:outline-none"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-lg bg-[#222222] text-white placeholder:text-[#B9B9B9] border border-gray-500 focus:outline-none"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-32 px-4 py-3 rounded-lg bg-[#222222] text-white placeholder:text-[#B9B9B9] border border-gray-500 resize-none focus:outline-none"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-fit bg-[#F76517] text-white font-medium rounded-full px-10 py-3 hover:bg-[#e65510] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="bg-[#FEFEFE] mt-16 py-12 px-4 sm:px-16">
        <div className="w-full  flex flex-col gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-black">Always Here to Help You</h2>
            <p className="text-[#454545] text-base mt-2 max-w-2xl">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: 'Location',
                  desc: 'No 42/A, Vakhar Bhag High School Road, Sangli - 416416'
                },
                {
                  icon: <FaPhoneAlt />,
                  title: 'Contact',
                  desc: '+1 234 567 890'
                },
                {
                  icon: <FaEnvelope />,
                  title: 'Email',
                  desc: 'contact@example.com'
                },
                {
                  icon: <FaClock />,
                  title: 'Working Hours',
                  desc: 'Mon - Fri: 9AM - 6PM\nSun - Closed'
                }
              ].map(({ icon, title, desc }, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-[#F76517] flex items-center justify-center rounded">
                    {React.cloneElement(icon, { className: 'text-white text-xl' })}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{title}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

           {/* Map Section */}
            <div className="bg-black/80 rounded-xl h-80 flex items-center justify-center text-white text-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.5018590282577!2d74.5359221!3d16.8628567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc118152daca41f:0xaf60d44dce556491!2sSangli+High+School,+Sangli,+Maharashtra+416416!5e0!3m2!1sen!2sin!4v1684700220232!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: "none" }}
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
