import React, { useState, useEffect, memo } from 'react';
import { FaUsers, FaHandshake, FaGlobe, FaChartLine, FaLeaf, FaEye, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ReactTyped as Typed } from 'react-typed';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import './assets/CSS-Files/Home.css';
import Nav from './Nav';

const sections = [
  { title: 'ESSC Egypt For Engineering', description: 'ESSC is one of the fastest growing companies in Egypt, which works professionally to cover the requirements in the fields of Fire Fighting installation and maintenance, General supplies and contracting, in addition to providing Safety and Environmental Consultations to various institutions, industrial and non-industrial sectors as well as maritime services.' },
  { title: 'ESSC Egypt and Fire Alarm', description: 'We provide reliable technical support services to existing projects and facilities that aim to improve their productivity and provide the best services while preserving the environment, employees and the surrounding community through the ESSCS excellent work.' },
  { title: 'ESSC Egypt', description: 'Looking for full support during all project phases, including General Supplies, Safety Consultations, Environmental Consultancy, and Fire Fighting System Maintenance and Installation.' },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  

  return (
    <section className="about-section" id="About">
      <Nav />
      {/* Hero Section */}
      <motion.header
        id="hero"
        className="hero-section"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="hero-content">
          <motion.h1
            key={currentIndex}
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typed strings={[sections[currentIndex].title]} typeSpeed={50} backSpeed={30} loop={false} />
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {sections[currentIndex].description}
          </motion.p>
          <div className="dots">
            {sections.map((_, idx) => (
              <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)}></span>
            ))}
          </div>
          <motion.div 
        className="social-icons" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[{ icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100077738543970" }, { icon: <FaWhatsapp />, link: "#" }, { icon: <FaEnvelope />, link: "mailto:egyptessc@gmail.com" }, { icon: <FaPhone />, link: "tel:#" }].map((social, index) => (
          <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
        </div>
      </motion.header>

      {/* Stats Section */}
      <motion.div 
        className="stats-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        {[{ label: 'Products', value: 23 }, { label: 'Years Of Experience', value: 12 }, { label: 'Employees', value: 74 }].map((stat, index) => (
          <motion.div 
            className="stat-box"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2><CountUp start={0} end={stat.value} duration={5} /></h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About Content */}
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="about-title">ESSC Egypt</h1>
        <h3 className="about-subtitle">Your Safety is Our Priority</h3>
        <p>Founded in 2013, ESSC Egypt is a leader in Fire Fighting & Fire Alarm solutions. Since 2016, we’ve partnered with top brands, offering a complete range of fire protection systems.</p>
        <p>Our expert engineers and technicians ensure high-quality, efficient fire safety maintenance, keeping lives and property protected.</p>
        <motion.div className="buttons" whileHover={{ scale: 1.05 }}>
          <button className="black-btn" onClick={() => navigate('/Works')}>More About Company »</button>
        </motion.div>
      </motion.div>
      <motion.div 
        className="social-icons" 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[{ icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100077738543970" }, { icon: <FaWhatsapp />, link: "https://wa.me/your-number" }, { icon: <FaEnvelope />, link: "mailto:egyptessc@gmail.com" }, { icon: <FaPhone />, link: "tel:+01280773379" }].map((social, index) => (
          <motion.a key={index} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Mission Section */}
      <div className="mission-container">
        <h1 className="mission-title">Our Mission</h1>
        <p className="mission-intro">We are committed to fulfilling our responsibilities towards all stakeholders...</p>
        <div className="mission-cards">
          {[{ icon: <FaUsers className="mission-icon"/>, title: "Customers", text: "We create value and ensure satisfaction by delivering world-class quality." },
          { icon: <FaChartLine className="mission-icon"/>, title: "Shareholders", text: "We maximize their ROI and ensure sustainable business growth." },
          { icon: <FaHandshake className="mission-icon"  />, title: "Business Partners", text: "We build successful partnerships for mutual growth." },
          { icon: <FaGlobe className="mission-icon" />, title: "Employees", text: "We foster an inspirational culture to maintain outstanding performance." },
          { icon: <FaLeaf className="mission-icon"/>, title: "Environment", text: "We uphold sustainable practices that align with environmental responsibility." }].map((item, index) => (
            <motion.div 
              className="mission-card" 
              key={index} 
              whileHover={{ rotateY: 20, scale: 1.05 }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-content">
        <h2 className="vision-title">
          <FaEye className="vision-icon" /> Our Vision
        </h2>
        <p className="vision-intro">
          ECCS has since its foundation proven its capabilities and competencies in a highly competitive business to achieve a recognizable market share as a modern company.
        </p>
        <div className="vision-box">
          <p>
            At ESSC, we believe that people's capabilities and passion for success are the most valuable assets ever. We built a team of ambitious partners who share our vision of being at the forefront of **environmental consulting services** and **firefighting systems installation and maintenance** across Egypt and the MENA region by **2025**.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
