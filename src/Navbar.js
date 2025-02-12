import React from 'react';
import './Navbar.css';


function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Section with id '${id}' not found.`);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection('About')}>Home</li>
        <li onClick={() => scrollToSection('Works')}>Works</li>
        <li onClick={() => scrollToSection('Products')}>Products</li>
        

        <li onClick={() => scrollToSection('Why')}>Why ESSC</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
