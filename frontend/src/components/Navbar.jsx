import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "text-white font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-linear-to-b from-black/90 to-transparent">

      {/* Logo */}
      <NavLink to="/" className="text-red-600 text-3xl font-extrabold">
        NETFLIX
      </NavLink>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-7 text-sm">

        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/tv-shows" className={navLinkStyle}>
          TV Shows
        </NavLink>

        <NavLink to="/movies" className={navLinkStyle}>
          Movies
        </NavLink>

        <NavLink to="/my-list" className={navLinkStyle}>
          My List
        </NavLink>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <button className="text-gray-300 hover:text-white text-xl">
          🔍
        </button>

        {/* Profile */}
        <button className="w-9 h-9 rounded bg-red-600 text-white font-bold">
          P
        </button>

      </div>

    </nav>
  );
};

export default Navbar;