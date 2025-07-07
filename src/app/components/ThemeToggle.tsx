"use client";
import sun from "/public/sun.png";
import moon from "/public/moon icon.png";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

const ThemeToggle = () => {

    const[darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
       
    }, []);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <div className="relative w-16 h-8 flex item-center bg-gray-500 cursor-pointer rounded-r-lg rounded-l-lg p-1 mt-1 mr-4" 
        onClick={() => setDarkMode(!darkMode)}
        >
        <Image className="text-white"
      src={moon} 
      alt="moon" 
      width={25} 
      height={40} 
        />
        <div className="absolute bg-white dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ml-1 mr-2 " 
        style = { 
            darkMode ? {right:"2px"} : {left:"2px"}
        }>

        </div>
        <Image className=" text-yellow-400"
       alt="Sun" 
       src={sun} 
       width={25} 
       height={35} 
        />
        </div>
        
       
     
  );
};

export default  ThemeToggle