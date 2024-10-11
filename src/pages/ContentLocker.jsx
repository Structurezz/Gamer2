import React from 'react';
import { FaLock, FaUnlock, FaTrophy } from 'react-icons/fa'; // Import icons from Font Awesome
import './ContentLocker.css';

const ContentLocker = () => {
  return (
    <div className="contentLockerPage">
      <h2>Content Locker</h2>
      <p>Unlock premium content by completing your profile and earning tokens.</p>

      <div className="lockedContent">
        <FaLock className="lockIcon" />
        <h3>Premium Tournament Analysis</h3>
        <p>This content is locked. Complete your profile to unlock.</p>
        <button className="unlockButton">
          <FaUnlock className="unlockIcon" /> Unlock Now
        </button>
        <FaTrophy className="trophyIcon" />
      </div>
    </div>
  );
};

export default ContentLocker;
