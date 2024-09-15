import React from 'react'
import Image from 'next/image'
import smcu from '/public/smcu.png'

const Navbar = () => {  
  
  const links = ["#Home","#Aboutus","#Location","#Contact","#Teammembers",];
  const myButtons = ["Home","About us","Location","Contact","Team members",];
 
  const buttons = links.map((el, i) => (<a href={el}>{myButtons[i]}</a>));
  
  return <div> {buttons} </div>;}
  
  export default Navbar
