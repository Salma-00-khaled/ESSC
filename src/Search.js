import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import a search icon from react-icons
import "./assets/CSS-Files/Search.css"; // Import the updated CSS file

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" /> {/* Search icon */}
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;