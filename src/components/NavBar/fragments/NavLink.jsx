import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ icon, link, label, onClick }) => {
  return (
    <Link
      className="hidden md:inline hover:text-yellow-300 transition-colors"
      to={link}
      onClick={onClick}
    >
      <i className={`bi ${icon} me-2 `}></i>
      {label}
    </Link>
  );
};

export default NavLink;
