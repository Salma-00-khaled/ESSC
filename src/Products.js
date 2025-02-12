import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Products.css";
import fireExtinguisher from "./assets/products/fireExtinguisher.jpg";
import sprinkler from "./assets/products/Sprinkler.jpg";
import sprinkler3 from "./assets/products/Sprinkler3.jpg";
import sprinkler2 from "./assets/products/Sprinkler2.jpg";
import sprinkler4 from "./assets/products/Sprinkler4.jpg";
import CleanAgentFM200 from "./assets/products/CleanAgentFM200.jpg";
import FireHoseReel1inch from "./assets/products/FireHoseReel1inch.jpg";
import FireHoseCabinet from "./assets/products/FireHoseCabinet.jpg";
import FireHose25Inch from "./assets/products/FireHose25Inch.jpg";
import BeamDetector from "./assets/products/BeamDetector.jpg";
import FireHydrant25Inch from "./assets/products/FireHydrant25Inch.jpg";
import FireBell from "./assets/products/FireBell.jpg";
import FireNozzle25Inch from "./assets/products/FireNozzle25Inch.jpg";
import FireProAerosol from "./assets/products/FireProAerosol.jpg";
import HeatDetector from "./assets/products/HeatDetector.jpg";
import MainControlFirePanel from "./assets/products/MainControlFirePanel.jpg";
import ManualRelease from "./assets/products/ManualRelease.jpg";  
import SmokeDetector from "./assets/products/SmokeDetector.jpg"; 
import SoundandFlasher from "./assets/products/SoundandFlasher.jpg";
import SeamlessSteelpipe40schedule from "./assets/products/SeamlessSteelpipe40schedule.jpg";
import WetChemicalFireSuppressionSystem from "./assets/products/WetChemicalFireSuppressionSystem.jpg";
import AutomaticCO2FireSuppressionSystem from "./assets/products/AutomaticCO2FireSuppressionSystem.jpg";
import CO2FireSearchCylindersolenoidValve from "./assets/products/CO2FireSearchCylindersolenoidValve.jpg";
// Sample Product Data
const products = [
    { id: 1, name: "Fire Extinguisher", image: fireExtinguisher, description: "High-quality fire extinguisher suitable for all environments." },
    { id: 2, name: "Sprinkler ", image: sprinkler, description: "Automatic sprinkler system for fire emergencies." },
    { id: 3, name: "Sprinkler ", image: sprinkler2, description: "Automatic sprinkler system for fire emergencies." },
    { id: 4, name: "Sprinkler ", image: sprinkler3, description: "Automatic sprinkler system for fire emergencies." },
    { id: 5, name: "Sprinkler", image: sprinkler4, description: "Automatic sprinkler system for fire emergencies." },
    { id: 6, name: "Clean Agent FM200", image: CleanAgentFM200, description: "Uses gas to quickly extinguish fires without residue, ideal for server rooms and critical areas." }, 
    { id: 7, name: "Fire Hose Reel 1 inch", image: FireHoseReel1inch, description: "A retractable hose system for quick access to water in emergencies." },
    { id: 8, name: "Fire Hose Cabinet", image: FireHoseCabinet, description: "A protective box that houses the fire hose reel for easy access and safety." },
    { id: 9, name: "Fire Hose 2.5 Inch", image: FireHose25Inch, description: "Automatic sprinkler system for fire emergencies." },
    { id: 10, name: "Beam Detector", image: BeamDetector, description: "Optical beam smoke detector for large areas, providing early fire detection." },
    { id: 11, name: "Fire Hydrant 2.5 Inch ", image: FireHydrant25Inch, description: "High-pressure water outlet for fire suppression and emergency response." },
    { id: 12, name: "Fire Bell ", image: FireBell, description: "Loud, durable alarm bell for fire alerts and emergency notifications." },
    { id: 13, name: "Fire Nozzle 2.5 Inch ", image: FireNozzle25Inch, description: "Adjustable fire hose nozzle for controlled and efficient water flow." },
    { id: 14, name: "Fire Pro Aerosol", image: FireProAerosol, description: " Compact aerosol fire suppression system for enclosed spaces." },
    { id: 15, name: "Heat Detector", image: HeatDetector, description: "Temperature-sensitive device that detects fire through heat changes." },
    { id: 16, name: "Main Control Fire Panel", image: MainControlFirePanel, description: "Centralized fire alarm system for monitoring and control." },
    { id: 17, name: "Manual Release", image: ManualRelease, description: "Emergency manual release system for fire suppression activation." },
    { id: 18, name: "Seamless Steel pipe 40 schedule", image: SeamlessSteelpipe40schedule, description: "Heavy-duty fire protection piping for high-pressure systems." },
    { id: 19, name: "Smoke Detector", image: SmokeDetector, description: " Sensitive sensor that detects smoke for early fire warning." },
    { id: 20, name: "Soundand Flasher", image: SoundandFlasher, description: "Audible and visual alarm for fire emergencies and evacuations." },
    { id: 21, name: "Wet Chemical Fire Suppression System", image: WetChemicalFireSuppressionSystem, description: "Designed for kitchen fires, it sprays a chemical agent to suppress grease and oil fires while preventing re-ignition" },
    { id: 22, name: "Automatic CO2 Fire Suppression System", image: AutomaticCO2FireSuppressionSystem, description: "Uses carbon dioxide to extinguish fires by removing oxygen, ideal for industrial areas and electrical rooms." },
    { id: 23, name: "CO2 Fire Search Cylinder & solenoid Valve", image: CO2FireSearchCylindersolenoidValve, description: " A compact CO₂ system with automatic activation, used for protecting electrical panels and enclosed spaces." },
  ];

const Products = () => {
  const [flippedId, setFlippedId] = useState(null);
  const containerRef = useRef(null); // Reference to the container 
  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setFlippedId(null); // Close the flipped card
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <section id="products" className="products-container">
      <motion.h2 
        className="products-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Products
      </motion.h2>
      
      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={`product-card ${flippedId === product.id ? "flipped" : ""}`}
            onClick={() => handleFlip(product.id)}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="product-card-inner">
              <div className="product-card-front">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
              </div>
              <AnimatePresence>
                {flippedId === product.id && (
                  <div className="product-card-back">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                
                </div>
                
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
