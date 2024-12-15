import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ toggleTheme }) => {
  const [isMobile, setIsMobile] = useState(false); // State to handle mobile menu toggle
  const location = useLocation(); // Get current route information

  const toggleMenu = () => {
    setIsMobile((prev) => !prev); // Toggle mobile menu state
  };

  const closeMenu = () => {
    setIsMobile(false); // Close the menu when a link is clicked
  };

  const getPageTitle = () => {
    switch (location.pathname.toLowerCase()) { // Make it case-insensitive
      case '/home':
        return 'Home';
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/highlight':
        return 'Highlight';
      case '/skills':
        return 'Skills';
      case '/contact':
        return 'Contact';
      default:
        return 'Mayar Qutishat'; // Default page title
    }
  };

  return (
    <header>
      <h1>{getPageTitle()}</h1> {/* Display the current page title */}
      <nav>
        {/* Hamburger menu for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
        </div>
        
        {/* Navigation links */}
        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/highlight" onClick={closeMenu}>Highlight</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        
        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
