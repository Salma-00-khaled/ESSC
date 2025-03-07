import React from "react";
import "./assets/CSS-Files/Nav.css"; // Import the CSS file

const Nav = () => {
  return (
    <header className="navbar">
      <nav>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li className="active">
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./Products">Products</a>
          </li>
          <li>
            <a href="./Works">Projects</a>
          </li>
          <li>
            <a href="./Contact">Contact US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;