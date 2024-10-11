import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CallOfDutyTournament.module.css'; // Adjust the path if necessary
import { FaTrophy, FaCalendarAlt, FaGamepad, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CallOfDutyTournamentPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('leaderboard'); // State for toggling tabs

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Dummy leaderboard data
  const leaderboardData = [
    { placement: 1, player: 'Orizu_Michael', gamesPlayed: 10, wins: 10, losses: 0, wlRatio: 0, points: 100 },
    { placement: 2, player: 'Ebenezer56', gamesPlayed: 10, wins: 7, losses: 3, wlRatio: 2.3, points: 75 },
    { placement: 3, player: 'Tunde45', gamesPlayed: 10, wins: 6, losses: 4, wlRatio: 1.4, points: 68 },
    { placement: 4, player: 'Drillz', gamesPlayed: 10, wins: 4, losses: 6, wlRatio: 0.78, points: 15 },
    { placement: 5, player: 'Pinky', gamesPlayed: 10, wins: 3, losses: 7, wlRatio: 0.46, points: 12 },
    { placement: 6, player: 'demola', gamesPlayed: 10, wins: 2, losses: 8, wlRatio: 0.13, points: 9 },
  ];

  return (
    <div className={styles.tournamentPage}>
      <button className={styles.backButton} onClick={handleBackClick}>
        &lt; Back
      </button>
      <img
        src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg"
        alt="Call of Duty Tournament"
        className={styles.tournamentImage}
      />
      <div className={styles.titleContainer}>
        <h2 className={styles.gameTitle}>Call of Duty</h2>
      </div>
      <div className={styles.trophyPrice}>
        <FaTrophy className={styles.trophyIcon} />
        <span className={styles.priceText}>₦10,000</span>
      </div>

      {/* Game Description */}
      <p className={styles.gameDescription}>
        Join our latest Call of Duty tournament and showcase your skills in epic 4v4 team battles.
        Compete against the best and stand a chance to win amazing prizes. Register now!
      </p>

      {/* Tournament Details */}
      <div className={styles.tournamentDetails}>
        <div className={styles.detailItem}>
          <FaCalendarAlt className={styles.calendarIcon} />
          <span>10 Feb 2023</span>
        </div>
        <div className={styles.detailItem}>
          <FaCalendarAlt className={styles.calendarIcon} />
          <span>Free to Play</span>
        </div>
        <div className={styles.detailItem}>
          <FaCalendarAlt className={styles.calendarIcon} />
          <span>4v4</span>
        </div>
        <div className={styles.detailItem}>
          <FaCalendarAlt className={styles.calendarIcon} />
          <span>10/48</span>
        </div>
      </div>

      {/* Join Tournament Button */}
      <button className={styles.joinButton}>
        <FaGamepad className={styles.controllerIcon} /> Join Tournament
      </button>

      {/* Tournament Information Heading */}
      <h3 className={styles.tournamentInfoHeading}>Tournament Information</h3>

      {/* Tabs for Leaderboard and Fixtures */}
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'leaderboard' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'fixtures' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('fixtures')}
        >
          Fixtures
        </button>
      </div>

      {/* Conditionally render based on the active tab */}
      {activeTab === 'leaderboard' ? (
        <div className={styles.leaderboardContainer}>
          <table className={styles.leaderboardTable}>
            <thead>
              <tr>
                <th>Placement</th>
                <th>Player</th>
                <th>Games Played</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>W/L Ratio</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row, index) => (
                <tr key={index}>
                  <td>
                    {row.placement}{' '}
                    {row.wins > row.losses ? (
                      <FaArrowUp className={styles.greenArrow} />
                    ) : (
                      <FaArrowDown className={styles.redArrow} />
                    )}
                  </td>
                  <td>{row.player}</td>
                  <td>{row.gamesPlayed}</td>
                  <td>{row.wins}</td>
                  <td>{row.losses}</td>
                  <td>{row.wlRatio}</td>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.fixturesContainer}>
          {/* Fixture details */}
        </div>
      )}
    </div>
  );
};

export default CallOfDutyTournamentPage;
