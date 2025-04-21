import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/logo_removebgg.png" alt="Logo" className="h-12" />
    </Link>
  );
};

export default Logo;
