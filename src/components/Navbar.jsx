import { useState, useCallback } from 'react'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = useCallback(() => {
  setIsOpen(!isOpen);
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('extended');
}, [isOpen]);

const handleNavClick = useCallback((e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
  setIsOpen(false);
  document.querySelector('.hamburger')?.classList.remove('active');
  document.querySelector('.navbar')?.classList.remove('extended');
}, []);

  return (
    <nav>
      <div className={`navbar ${isOpen ? 'extended' : ''}`}>
        <img 
          src="/assets/Icon Logo.webp" 
          alt="Code Vantage Logo" 
          className="logo" 
          loading="eager"
          decoding="async"
        />
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
          <li><a onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><a onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
          <li><a onClick={(e) => handleNavClick(e, 'process')}>Process</a></li>
          <li><a onClick={(e) => handleNavClick(e, 'faqs')}>FAQs</a></li>
          <li className="mobile-button">
            <Button name="SCHEDULE" />
          </li>
        </ul>

        <div className="desktop-button">
          <Button name="SCHEDULE"/>
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
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
