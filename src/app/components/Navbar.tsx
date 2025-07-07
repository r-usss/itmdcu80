"use client";
import React, { useState } from "react";
import Image from "next/image";
import smcu from "/public/smcu.png";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const list = [
    { sec: "Home", scroll: "#home" },
    { sec: "About Us", scroll: "#aboutus" },
    { sec: "Location", scroll: "#location" },
    { sec: "Contact", scroll: "#contact" },
    { sec: "Team members", scroll: "#teammembers" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar container */}
      <nav
  className="fixed top-0 left-0 right-0 flex items-center shadow-2xl backdrop-blur-md bg-transparent dark:bg-transparent z-50"
  style={{ height: 48 }} // consistent height
>
  {/* Logo and Title container with white background */}
  <div className="flex items-center h-full bg-white rounded-l-lg">
    <div className="flex items-center justify-center px-3 h-full">
      <Image src={smcu} alt="smcu" width={40} height={40} />
    </div>

    <div className="hidden md:flex items-center px-4 h-full w-40 text-left text-black font-bold">
      <span>SMCU IT</span>
    </div>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex flex-grow h-full">
    <ul className="flex w-full h-full">
      {list.map((item, index) => (
        <li key={index} className="flex-1 h-full">
          <a
            href={item.scroll}
            className="flex items-center justify-center w-full h-full text-black dark:text-white hover:bg-gray-600 hover:text-white px-3 transition-colors duration-300">
          
            {item.sec}
          </a>
        </li>
      ))}
      <li className="flex items-center justify-center h-full hover:bg-gray-600 hover:text-white rounded-r-lg px-3 transition-colors duration-300">
        <ThemeToggle />
      </li>
    </ul>
  </div>

        {/* Mobile Theme Toggle */}
        <div className="md:hidden flex items-center h-full bg-gray-800 px-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center h-full bg-gray-800 px-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed top-12 left-0 right-0 bg-white dark:bg-gray-700 shadow-2xl rounded-b-lg z-40 flex flex-col"
          style={{ margin: "0 1rem" }}
        >
          {list.map((item, index) => (
            <a
              key={index}
              href={item.scroll}
              className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center text-gray-800 dark:text-white hover:bg-green-600 hover:text-white font-semibold transition-colors duration-300"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {item.sec}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
