
import React from "react";
import { motion } from "framer-motion";
import { FaFireExtinguisher, FaBuilding, FaIndustry, FaShieldAlt, FaTools } from "react-icons/fa";
import "./Works.css";
import CompanyLogos from "./CompanyLogos";

const worksData = [
  { title: "Fire Alarm System Installation", location: "Alexandria Port & Dekheila Port", description: "Installed fire alarm system (Hochiki America) and supplied safety equipment.", icon: <FaFireExtinguisher className="text-red-500 text-4xl" /> },
  { title: "Krispy Kreme Fire Protection", location: "Green Plaza, Alexandria", description: "Installed fire alarm system (Thorn), Wet Sprinkler network, and fire boxes.", icon: <FaBuilding className="text-blue-500 text-4xl" /> },
  { title: "Ministry of Trade & Industry", location: "Smouha, Alexandria", description: "Fire pump maintenance and fire alarm system servicing.", icon: <FaIndustry className="text-green-500 text-4xl" /> },
  { title: "Hilton King’s Ranch Fire System", location: "King Mariout, Alexandria", description: "Installed fire alarm system and 211m Tunnel Wet Sprinkler network.", icon: <FaShieldAlt className="text-yellow-500 text-4xl" /> },
  { title: "Hilton King’s Ranch Fire Safety", location: "King Mariout, Alexandria", description: "Installed Fire Search suppression system (Bavaria), exhaust system, and pump maintenance.", icon: <FaTools className="text-gray-500 text-4xl" /> },
  { title: "Dril Quip Petroleum Fire Safety", location: "Free Zone, Alexandria", description: "Upgraded fire alarm and safety systems in workshops and offices.", icon: <FaIndustry className="text-purple-500 text-4xl" /> },
  { title: "Egyptian Steel Fire System", location: "New Cairo, Egypt", description: "Upgraded & maintained fire alarm networks in the main offices.", icon: <FaBuilding className="text-purple-500 text-4xl" /> },
  { title: "Carrefour Fire Alarm System", location: "Green Plaza, Alexandria", description: "Installed and repaired the fire alarm system for Carrefour Egypt.", icon: <FaFireExtinguisher className="text-red-500 text-4xl" /> },
  { title: "Hardee’s Fire Protection", location: "Green Plaza, Alexandria", description: "Installed full fire extinguishing system for Hardee’s restaurant.", icon: <FaShieldAlt className="text-orange-500 text-4xl" /> },
  { title: "Abu Ali Restaurant Fire Protection", location: "Green Plaza, Alexandria", description: "Installed complete fire alarm & suppression system.", icon: <FaIndustry className="text-blue-500 text-4xl" /> },
  { title: "Hilton Cornish Fire Safety", location: "Sidi Bashir, Alexandria", description: "Supplied and installed industrial safety equipment.", icon: <FaShieldAlt className="text-yellow-500 text-4xl" /> },
  { title: "Marassi Fire Alarm System", location: "North Coast, Egypt", description: "Installed fire alarm system at Sidi Abdelrahman Power Station.", icon: <FaFireExtinguisher className="text-green-500 text-4xl" /> },
  { title: "Belle Vue Marsa Matrouh Fire System", location: "Marsa Matrouh, Egypt", description: "Installed and maintained fire suppression and alarm system.", icon: <FaFireExtinguisher className="text-pink-500 text-4xl" /> },
  { title: "Hilton Green Plaza Fire Safety", location: "Green Plaza, Alexandria", description: "Installed alarm systems, kitchen fire suppression, and wet chemical fire system.", icon: <FaShieldAlt className="text-orange-500 text-4xl" /> },
  { title: "Maspero Café Fire Protection", location: "El Rehab City, Egypt", description: "Installed fire alarm system and industrial safety equipment.", icon: <FaIndustry className="text-gray-500 text-4xl" /> },
  { title: "Tomato Stores Fire Safety", location: "Green Plaza, Alexandria", description: "Repaired and upgraded fire alarm system.", icon: <FaBuilding className="text-red-500 text-4xl" /> },
  { title: "Time Team Stores Fire Safety", location: "Green Plaza, Alexandria", description: "Repaired and maintained fire alarm system.", icon: <FaShieldAlt className="text-blue-500 text-4xl" /> },
  { title: "Cotonil & Carrefour City Fire System", location: "Green Plaza, Alexandria", description: "Installed and repaired fire alarm system.", icon: <FaBuilding className="text-green-500 text-4xl" /> },
  { title: "DalyDress Store Fire Safety", location: "Green Plaza, Alexandria", description: "Repaired and upgraded fire alarm system.", icon: <FaTools className="text-gray-500 text-4xl" /> },
];

function Works() {
  return (
    
    <section id="Works">
    
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Previous Works
      </motion.h2>

      <div className="works-container">
        <div className="works-grid">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="work-card"
            >
              {work.icon}
              <h3>{work.title}</h3>
              <p>{work.location}</p>
              <p className="description">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
