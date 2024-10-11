// src/pages/Leaderboards.jsx

import React from 'react';
import './Leaderboards.css'; // Import the CSS file

const Leaderboards = () => {
  return (
    <div className="leaderboardsContainer"> {/* Container for sidebar and leaderboards */}
      <div className="sidebar"> {/* Your sidebar component */}
        {/* Sidebar content goes here */}
      </div>
      <div className="leaderboardsPage">
        <h2>Leaderboards</h2>
        <p>Check out the top players in various tournaments and games.</p>
        
        {/* Example Leaderboard Table */}
        <table className="leaderboardTable">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>PlayerOne</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>2</td>
              <td>PlayerTwo</td>
              <td>1400</td>
            </tr>
            <tr>
              <td>3</td>
              <td>PlayerThree</td>
              <td>1300</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboards;
