import React, { useState } from 'react';
import { FaGamepad, FaBell, FaCoins, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import './TopBar.css'; // Import the CSS file

const TopBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Dummy data for suggestions (replace this with your actual data source)
  const tournamentData = [
    'Tournament Alpha',
    'Tournament Beta',
    'Player X',
    'Player Y',
    'Player Z',
  ];

  // Handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);

    // Update suggestions based on input
    if (value) {
      const filteredSuggestions = tournamentData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="topBar">
      {/* Left Section: Logo */}
      <div className="logo">
        <FaGamepad className="icon" />
        <span className="logoText">GAMER2</span>
      </div>

      {/* Center Section: Search Box */}
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search tournament, player name or player tag..."
          value={searchInput}
          onChange={handleInputChange} // Call the input change handler
        />
        {/* Suggestions List */}
        {suggestions.length > 0 && (
          <div className="suggestionsList">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestionItem"
                onClick={() => handleSuggestionClick(suggestion)} // Call the click handler
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section: Icons */}
      <div className="icons">
        <FaBell className="icon" />
        <div className="balance">
          <FaCoins className="coinIcon" />
          <span>20000</span>
        </div>
        <div className="userProfile">
          <FaUserCircle className="icon" />
          <div className="userInfo">
            <span className="userName">Michael Orizu</span>
            <div className="status">
              <span className="onlineStatus">
                Online <FaChevronDown className="dropdownIcon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
