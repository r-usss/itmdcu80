"use client";
import React, { useState } from "react";
import Image from "next/image";
import smcu from "/public/smcu.png";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const list = [
    { sec: "  Home", scroll: "#home" },
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
      {/* for desktop */}
      <div
        className="flex shadow-2xl"
        style={{ position: "fixed", right: 0, left: 0 }}
      >
        <div className="h-12 bg-white dark:bg-gray-500 rounded-l-lg">
          <Image src={smcu} alt="smcu" width={50} height={50} />
        </div>
        <div className="w-1/6 h-12 bg-white dark:bg-gray-500 text-left dark:text-white pt-2">
          <strong> SMCU IT </strong>
        </div>
        
        {list.map((item, index) => (
          <div className="hidden hover:text-white dark:bg-pink-400 pl-8 pt-2 md:flex w-1/6 bg-green-600  h-12 text-center ">
            <a href={item.scroll}>
              <strong>{item.sec}</strong>
            </a>
          </div>
        ))}
        <div className="hidden md:flex bg-green-600 dark:bg-pink-400 h-12 rounded-r-lg">
          <ThemeToggle />
        </div>

        {/* for mobile */}
        <div className="md:hidden bg-green-600 dark:bg-pink-400 h-12 pl-8 pt-1  ">
            <ThemeToggle />
        </div>
        <div className="md:hidden w-5/6 bg-green-600 dark:bg-pink-400 rounded-r-lg">
            <button
              className="text-black dark:text-white focus:outline-none "
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 block"
                style={{ position: "fixed", right: 20 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > 
                
                {isOpen ? (
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    // strokeLinecap="round"
                    // strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="rounded-lg rounded-r-rg flex flex-col items-center bg-white dark:bg-gray-500 dark:text-white fixed md:hidden my-14 mx-5 shadow-2xl"
          style={{ position: "fixed", right: 0, left: 0 }}
        >
          {list.map((item, index) => (
            <div className="hover:text-white pt-1 pb-1">
              <a href={item.scroll}>
                <strong>{item.sec}</strong>
              </a>
            </div>
          ))}
          
        </div>
      )}
    </>
  );
};

export default Navbar;
