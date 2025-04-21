import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
<div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-10 backdrop-blur-sm pt-20 px-4">
<div className="bg-white text-black rounded-xl w-full max-w-2xl p-6 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Work with us</h2>
        <p className="text-gray-600 mb-6">
          Get in touch with us today to create a stunning and customized website
          that perfectly reflects your brand and services.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Write Message . . ."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full mb-6"
            required
          ></textarea>

          <div className="flex gap-4 w-full">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 px-6 py-3 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-6 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
