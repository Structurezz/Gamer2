// src/pages/Community.jsx

import React from 'react';
import './Community.css'; // Import the CSS file
import { FaUsers, FaCalendarAlt, FaTrophy } from 'react-icons/fa'; // Import icons for features

const Community = () => {
  return (
    <div className="communityPage">
      <h2 className="communityTitle">Join Our Community</h2>
      <p className="communityDescription">
        Connect with other gamers, participate in discussions, and stay updated with the latest news.
      </p>
      
      {/* Community Features Section */}
      <div className="communityFeatures">
        <div className="feature">
          <FaUsers className="featureIcon" />
          <h3>Forums</h3>
          <p>Engage in discussions about tournaments, strategies, and more.</p>
        </div>
        <div className="feature">
          <FaCalendarAlt className="featureIcon" />
          <h3>Events</h3>
          <p>Stay informed about upcoming events and community meetups.</p>
        </div>
        <div className="feature">
          <FaTrophy className="featureIcon" />
          <h3>Achievements</h3>
          <p>Showcase your gaming achievements and earn badges.</p>
        </div>
        {/* Add more features as needed */}
      </div>
    </div>
  );
};

export default Community;
