import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { House, Info, Menu, Moon, Sun } from "lucide-react";

export default function Navbar({
  title,
  home,
  about,
  darkMode,
  toggleDarkMode,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand Title */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </span>
        </Link>

        {/* Desktop Links aligned with brand on the left */}
        <div className="hidden md:flex items-start space-x-6 ml-8">
          <Link
            to="/"
            className={`text-sm font-bold flex items-center gap-2 transition-all duration-200 ${
              isActive("/")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }`}
          >
            <House className="h-5 w-5" />
            {home}
          </Link>
          <Link
            to="/about"
            className={`text-sm font-bold flex items-center gap-2 transition-all duration-200 ${
              isActive("/about")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            }`}
          >
            <Info className="h-5 w-5" />
            {about}
          </Link>
        </div>

        {/* Right Side Group: Toggle + Mobile Menu */}
        <div className="flex items-center space-x-4 rtl:space-x-forward md:order-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:ring-slate-700 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-slate-600"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:ring-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:hidden mt-4`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-xl bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 py-2 px-3 rounded-lg ${
                  isActive("/")
                    ? "text-white bg-blue-600 font-bold"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-700 font-bold"
                }`}
              >
                <House className="h-5 w-5" />
                {home}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 py-2 px-3 rounded-lg mt-1 ${
                  isActive("/about")
                    ? "text-white bg-blue-600 font-bold"
                    : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-700 font-bold"
                }`}
              >
                <Info className="h-5 w-5" />
                {about}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
  home: "Home",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
  home: "Home",
};
