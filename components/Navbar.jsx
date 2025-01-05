import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src="\assets\Icon Logo.webp" alt="" className="logo" />
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
        <Button name='Schedule' link='#'/>
      </div>
    </nav>
  )
}

export default Navbar
