import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-lg font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
