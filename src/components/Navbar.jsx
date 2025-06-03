import React from 'react'
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };
  return (
    <div className='flex container justify-between items-center'>
        <img src="/logo.svg" alt="logo" />
        <ul className='max-sm:hidden list-none flex gap-10 *:text-xl *:font-semibold *:hover:opacity-70'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
        </ul>
        {isOpen && (
        <ul className='max-sm:absolute sm:hidden z-10 max-sm:bg-white p-10 top-0 left-0 bottom-0 max-sm:flex-col max-sm:gap-5 list-none flex gap-10 *:text-xl *:font-semibold *:hover:opacity-70'>
            <li><a href="#" className='flex items-center justify-between'><span className='hidden max-sm:flex'><i className='fa fa-home'></i></span>Home</a></li>
            <li><a href="#">About me</a></li>
        </ul>
        )}
        <button onClick={toggleMenu} className='hidden max-sm:flex'><i className='fa fa-bars fa-xl '></i></button>
    </div>
  )
}

export default Navbar