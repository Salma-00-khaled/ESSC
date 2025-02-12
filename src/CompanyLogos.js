import React, { useRef } from "react";
import "./CompanyLogos.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons

const companyLogos = [
  require("./assets/logos/egysteel.png"),
  require("./assets/logos/krispy.png"),
  require("./assets/logos/Beshay-Steel-Egypt-76437-1649073836.webp"),
  require("./assets/logos/EZDK-Logo-1.jpg"),
  require("./assets/logos/El-Garhy-Steel-Egypt-28725-1570977448-og.webp"),
  require("./assets/logos/Ezz-Steel-Logo-1.jpg"),
  require("./assets/logos/cropped-logo-high-quality.jpg"),
  require("./assets/logos/hilton-hotels-resorts-hilton-worldwide-logo-hilton-new-york-fashion-district-png-favpng-Ra5Vf3Xej9z7CkLPCTRQmjXyV.jpg"),
  require("./assets/logos/th (1).jpeg"),
  require("./assets/logos/th.jpeg"),
];

const CompanyLogos = ({ size = "medium" }) => {
  const scrollRef = useRef(null);

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
