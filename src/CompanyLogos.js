import React, { useRef, useEffect } from "react";
import "./assets/CSS-Files/CompanyLogos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons

const companyLogos = [
  require("./assets/logos/egysteel.png"),
  require("./assets/logos/krispy.png"),
  require("./assets/logos/Beshay-Steel-Egypt-76437-1649073836.webp"),
  require("./assets/logos/EZDK-Logo-1.jpg"),
  require("./assets/logos/hilton-hotels-resorts-hilton-worldwide-logo-hilton-new-york-fashion-district-png-favpng-Ra5Vf3Xej9z7CkLPCTRQmjXyV.jpg"),
  require("./assets/logos/th (1).jpeg"),
  require("./assets/logos/th.jpeg"),
  require("./assets/logos/OIP (5).jpeg"),
  require("./assets/logos/OIP (10).jpeg"),
  require("./assets/logos/OIP (11).jpeg"),
  require("./assets/logos/OIP (12).jpeg"),
  require("./assets/logos/OIP (2).jpeg"),
  require("./assets/logos/OIP (3).jpeg"),
  require("./assets/logos/OIP (4).jpeg"),
  require("./assets/logos/OIP (6).jpeg"),
  require("./assets/logos/OIP (7).jpeg"),
  require("./assets/logos/OIP (8).jpeg"),
  require("./assets/logos/OIP (9).jpeg"),
  require("./assets/logos/OIP.jpeg"),
  require("./assets/logos/R.jpeg"),
  require("./assets/logos/download (1).jpeg"),
  require("./assets/logos/download (2).jpeg"),
  require("./assets/logos/download.jpeg"),
];

const CompanyLogos = ({ size = "medium" }) => {
  const scrollRef = useRef(null);

  // Function to scroll logos
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scrolling amount
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If at the end, reset to the beginning
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right"); // Scroll to the right
        }
      }
    }, 3000); // Adjust the interval time (in milliseconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className={`company-logos-container ${size}`}>
      <h2 className="company-logos-title">Our Trusted Clients</h2>

      <div className="logos-wrapper">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="logos-scroll-wrapper" ref={scrollRef}>
          <div className="logos-grid">
            {companyLogos.map((logo, index) => (
              <div key={index} className="logo-card">
                <img src={logo} alt={`Company ${index + 1}`} className="logo-image" />
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-button right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CompanyLogos;