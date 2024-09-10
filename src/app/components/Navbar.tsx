import React from 'react'
import Image from 'next/image'
import itdiv from '/public/smcu.png'

const Navbar = () => {
  return (
    <>
        <div className ="flex ">
        <div className ="w-1/6 h-12 rounded-l-lg ">
            <Image src={itdiv} alt="smcu" width={70} height={70}/>
                </div>
                <div className="w-1/6 h-12  ">
                <strong> SMCU IT </strong>
                </div>
                <div className="w-1/6 bg-green-600 h-12  ">
                <a href="#home">
                <strong>Home</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 ">
                <a href="#aboutus">
                <strong>About us</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 ">
                <a href="#location">
                <strong>Location</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 ">
                <a href="#contact">
                <strong>Contact</strong>
                </a>
                </div>
                <div className="w-1/6 bg-green-600 h-12 rounded-r-lg">
                <a href="#teammembers">
                <strong>Teammember</strong>
                </a>
            </div>
        </div>
    </>
  )
}

export default Navbar