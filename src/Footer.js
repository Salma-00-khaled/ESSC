import React from 'react';
import { Link } from 'react-router-dom';
import './assets/CSS-Files/Footer.css'; // Ensures styles are properly applied

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Company */}
        <div className="footer-section">
          <h3>About Company</h3>
          <p>
            Since its establishment in 2019, ESSC Egypt has built a strong market presence through its expertise in safety and environmental protection.
            With a team of experts boasting over 20 years of experience, the company operates with a deep understanding of national and international regulations, ensuring top-tier services and solutions across various sectors.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="footer-section">
          <h3>Helpful Links</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Products">Products</Link></p>
          <p><Link to="/Works">Projects</Link></p>
          <p><Link to="/Contact">Contacts</Link></p>
        </div>

        {/* Find Us */}
        <div className="footer-section find-us">
          <h3>Find US</h3>
          <p>
            <span >Head Office:</span> 13 Fata Smouha - Sidi Gaber, Alexandria, Egypt.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved for ESSC Egypt © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
