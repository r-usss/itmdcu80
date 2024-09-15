import React from 'react'


const Navbar = () => {  
  
  const links = ["#home","#aboutus","#location","#contact","#teammembers",];
  const myButtons = ["Home","About us","Location","Contact","Team members",];
 
  const buttons = links.map((el, i) => (<a href={el}>{myButtons[i]}</a>));
  
  return <div className="w-1/6 bg-green-600 h-12 text-center"> {buttons} </div> ;}
  export default Navbar
  