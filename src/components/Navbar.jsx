import React, { useState } from 'react'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('extended');
};

  return (
    <nav>
      <div className={`navbar ${isOpen ? 'extended' : ''}`}>
        <img src="/assets/Icon Logo.webp" alt="logo" className="logo" />
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li className="mobile-button">
            <Button name="SCHEDULE" link="#contact" />
          </li>
        </ul>

        <div className="desktop-button">
          <Button name="SCHEDULE" link="#contact" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="line line1" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path className="line line2" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path className="line line3" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
