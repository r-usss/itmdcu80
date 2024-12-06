import React from "react";
import Image from "next/image";
import smcu from "/public/smcu.png";

const Navbar = () => {
  const list = [
    { sec: "Home", scroll: "#home" },
    { sec: "About Us", scroll: "#aboutus" },
    { sec: "Location", scroll: "#location" },
    { sec: "Contact", scroll: "#contact" },
    { sec: "Team members", scroll: "#teammembers" },
  ];
  return (
    <>
      <div className="flex" style={{position: 'fixed', right: 0,left: 0}}>
        <div className="h-12 bg-white rounded-l-lg">
          <Image src={smcu} alt="smcu" width={50} height={50} />
        </div>
        <div className="w-1/6 h-12 bg-white text-left">
          <strong> SMCU IT </strong>
        </div>
        {list.map((item, index) => (
          <div className="w-1/6 bg-green-600 h-12 text-center">
            <a href={item.scroll}>
              <strong>{item.sec}</strong>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
