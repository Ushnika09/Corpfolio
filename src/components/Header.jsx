import React, { useState } from "react";
import { Link, Links } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-3 bg-white/70 backdrop-blur-md shadow-md">

        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          {/* Logo Icon */}
          <div className="p-2.5 px-4.5 rounded-2xl bg-gradient-to-tr from-blue-400 to-blue-500 flex items-center justify-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              C
            </span>
          </div>

          {/*Tagline */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-3xl font-bold bg-gradient-to-tr from-blue-400 to-blue-500 bg-clip-text text-transparent">
              CorpFolio
            </h1>
            <span className="text-sm font-medium text-blue-500/80">
              Insights That Matter
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-15 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Slide-in Menu */}
          <div className="fixed top-0 left-0 h-full w-84 bg-white/90 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 flex flex-col p-6 gap-6">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-700 mb-4"
            >
              <FaTimes size={24} />
            </button>

            {/* Links with icons */}
            <Link
              to="/"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaHome /> Home
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle /> About
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
