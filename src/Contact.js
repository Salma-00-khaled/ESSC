import React from "react";
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaEnvelope, FaMapPin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./assets/CSS-Files/Contact.css";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* Left Side - Contact Details */}
        <div className="contact-details">
          <h3 className="contact-title">HEAD OFFICE</h3>

          <p className="contact-info">
            <FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong>  
            13 St. Fata Smouha, Sidi Gaber, Alexandria, Egypt
          </p>
          <p className="contact-info">
            <FaPhone className="icon-black" /> <strong>Telephone:</strong> 03 5037440
          </p>
         
          <p className="contact-info">
            <FaEnvelope className="icon-black" /> <strong>Email:</strong>
            <a href="mailto:egyptessc@gmail.com" className="email-link"> egyptessc@gmail.com</a>
          </p>
          <motion.div 
        className="social-icons" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[{ icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100077738543970" }, { icon: <FaWhatsapp />, link: "https://wa.me/+201280773379" }, { icon: <FaEnvelope />, link: "mailto:egyptessc@gmail.com" }, { icon: <FaPhone />, link: "tel:+201280773379" }].map((social, index) => (
          <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
        </div>

    

        {/* Right Side - Enlarged Map with Animated Link */}
        <div className="map-container">
          {/* Google Map */}
          <iframe
            title="Head Office Location"
            src="https://www.google.com/maps?q=31.2437,29.9668&hl=en&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>

          {/* Animated Link Overlay */}
          <a
            href="https://maps.app.goo.gl/Vnr6XxWApM2tkpkD6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <FaMapPin className="mr-3 text-3xl" /> View on Google Maps
          </a>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
