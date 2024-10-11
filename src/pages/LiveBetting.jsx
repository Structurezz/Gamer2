import React, { useState, useEffect } from 'react';
import { FaBasketballBall, FaFutbol, FaTableTennis } from 'react-icons/fa'; // Importing sports icons
import './LiveBetting.css'; // Import the CSS file

const LiveBetting = () => {
  // Example state to hold live scores
  const [liveScores, setLiveScores] = useState({
    match1: { teamA: 2, teamB: 1 },
    match2: { teamC: 0, teamD: 0 },
    match3: { teamE: 3, teamF: 3 },
  });

  // Timer (for illustration, can be replaced with a real-time data fetch)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveScores((prevScores) => ({
        ...prevScores,
        match2: { teamC: prevScores.match2.teamC + 1, teamD: prevScores.match2.teamD + 2 },
      }));
    }, 30000); // Simulates a score change every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="liveBettingPage">
      <h2>Live Betting</h2>
      <p>Place bets on live matches and tournaments in real-time with the latest updates.</p>
      
      <div className="bettingInterface">
        {/* Match 1 */}
        <div className="betMatch football">
          <div className="liveIndicator">
            <span className="liveIcon">🔴 Live</span>
            <span className="timeRemaining">45:23</span> {/* Timer */}
          </div>
          <FaFutbol className="gameIcon" />
          <h3>Match: Team A vs Team B</h3>
          <p>Score: {liveScores.match1.teamA} - {liveScores.match1.teamB}</p>
          <p>Odds: 1.5 | 2.3 | 3.0</p> {/* Betting odds */}
          <button className="betButton" title="Place your bet on Team A vs Team B">Place Bet</button>
        </div>

        {/* Match 2 */}
        <div className="betMatch basketball">
          <div className="liveIndicator">
            <span className="liveIcon">🔴 Live</span>
            <span className="timeRemaining">23:56</span> {/* Timer */}
          </div>
          <FaBasketballBall className="gameIcon" />
          <h3>Match: Team C vs Team D</h3>
          <p>Score: {liveScores.match2.teamC} - {liveScores.match2.teamD}</p>
          <p>Odds: 1.8 | 2.0 | 2.5</p>
          <button className="betButton" title="Place your bet on Team C vs Team D">Place Bet</button>
        </div>

        {/* Match 3 */}
        <div className="betMatch tennis">
          <div className="liveIndicator">
            <span className="liveIcon">🔴 Live</span>
            <span className="timeRemaining">59:10</span> {/* Timer */}
          </div>
          <FaTableTennis className="gameIcon" />
          <h3>Match: Team E vs Team F</h3>
          <p>Score: {liveScores.match3.teamE} - {liveScores.match3.teamF}</p>
          <p>Odds: 1.4 | 2.1 | 3.3</p>
          <button className="betButton" title="Place your bet on Team E vs Team F">Place Bet</button>
        </div>
      </div>
    </div>
  );
};

export default LiveBetting;
