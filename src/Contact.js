import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMapPin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./assets/CSS-Files/Contact.css";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="contact-container">
        
        {/* Left Side - Contact Details */}
        <motion.div 
          className="contact-details"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <h3 className="contact-title">HEAD OFFICE</h3>

          {[
            { icon: <FaMapMarkerAlt className="icon-red" />, label: "Address", value: "13 St. Fata Smouha, Sidi Gaber, Alexandria, Egypt" },
            { icon: <FaPhone className="icon-black" />, label: "Telephone", value: "03 5037440" },
            { icon: <FaEnvelope className="icon-black" />, label: "Email", value: <a href="mailto:egyptessc@gmail.com" className="email-link">egyptessc@gmail.com</a> }
          ].map((item, index) => (
            <motion.p 
              key={index} 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            >
              {item.icon} <strong>{item.label}:</strong> {item.value}
            </motion.p>
          ))}

          {/* Social Media Icons */}
          <motion.div 
            className="social-icons" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1, duration: 1 }}
          >
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100077738543970" },
              { icon: <FaWhatsapp />, link: "https://wa.me/#" },
              { icon: <FaEnvelope />, link: "mailto:egyptessc@gmail.com" },
              { icon: <FaPhone />, link: "tel:#" }
            ].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Enlarged Map with Animated Link */}
        <motion.div 
          className="map-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          {/* Google Map */}
          <motion.iframe
            title="Head Office Location"
            src="https://www.google.com/maps?q=31.2437,29.9668&hl=en&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          ></motion.iframe>

          {/* Animated Link Overlay */}
          <motion.a
            href="https://maps.app.goo.gl/Vnr6XxWApM2tkpkD6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
            whileHover={{ scale: 1.1, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaMapPin className="mr-3 text-3xl" /> View on Google Maps
          </motion.a>
        </motion.div>
      
      </div>
    </motion.section>
  );
};

export default Contact;
