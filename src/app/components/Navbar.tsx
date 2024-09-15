import React from 'react'

const Navbar = () => {  
  
  const links = ["#home","#aboutus","#location","#contact","#teammembers",];
  const myButtons = ["Home","About us","Location","Contact","Team members",];
 
  const buttons = links.map((el, i) => (<a href={el}>{myButtons[i]}</a>));
  
  return <div> {buttons} </div>;}
  
  export default Navbar

