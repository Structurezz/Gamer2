import React from 'react';
import { FaUserCircle, FaPlay, FaSort, FaFilter, FaGamepad, FaTrophy } from 'react-icons/fa'; // Importing trophy icon
import styles from './Tournament.module.css'; // Importing CSS
import '../components/TopBar/TopBar.css'; // Importing the TopBar CSS for shared styles
import { useNavigate } from 'react-router-dom';
import codemaniaImage from '../assets/codemania-removebg-preview.png';
const TournamentPage = () => {
    const navigate = useNavigate();
  
    const handleJoinTournament = () => {
        navigate('/call-of-duty'); // Navigate to Call of Duty page
    };

    const handleCompleteProfileClick = () => {
        navigate('/complete-profile'); // Navigate to the Complete Profile page
    };

    return (
        <div className={styles.tournamentPage}>
            {/* Setup Your Profile Container */}
            <div className={styles.profileSetupContainer}>
                <h2>Setup Your Profile</h2>
                <p>Complete your information to get access to tournaments and other premium features.</p>
                <button className={styles.completeProfileBtn} onClick={handleCompleteProfileClick}>
                    <FaUserCircle className={styles.profileIcon} />
                    Complete Profile
                </button>
            </div>
        
      {/* Five Rows of Content */}
      <div className={styles.tournamentRows}>
  <div className={styles.tournamentRow}>
    <div className={styles.gameOption}>
      <div className={styles.gameDetails}>
        <h3>Continue Playing</h3>
        <p>Start or resume tournaments you have registered for</p>
        <button className={styles.playButton}>
          <FaPlay className={styles.playIcon} />
          <span>Continue Playing</span>
        </button>
      </div>
      <img
        src={codemaniaImage}
        alt="Game Illustration"
        className={styles.gameImage}
      />
    </div>

    <div className={styles.gameOption}>
      <div className={styles.gameDetails}>
        <h3>Quick Match</h3>
        <p>Create a tournament and invite friends to play</p>
        <button className={styles.playButton}>
          <FaPlay className={styles.playIcon} />
          <span>Let's Go!</span>
        </button>
      </div>
      <img
        src={codemaniaImage}
        alt="Game Illustration"
        className={styles.gameImage}
      />
    </div>
  </div>







        {/* Tournaments Row */}
        <div className={styles.tournamentHeaderRow}>
          <h3>Tournaments</h3>
          <div className={styles.sortFilterContainer}>
            <div className={styles.sortBy}>
              <FaSort className={styles.icon} />
              Sort by
            </div>
            <div className={styles.filter}>
              <FaFilter className={styles.icon} />
              Filter
            </div>
          </div>
        </div>

        {/* Row 2: Call of Duty Tournaments */}
        <div className={styles.codTournamentContainer}>
          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg" 
              alt="Tournament 1" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
                
              <div className={styles.calendarIcon}>
                
                <p> 10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            {/* Stacked buttons container */}
            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>

          {/* Repeat for other tournaments */}
          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg" 
              alt="Tournament 2" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
              <div className={styles.calendarIcon}>
                <p>10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>

          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg" 
              alt="Tournament 3" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
              <div className={styles.calendarIcon}>
                <p>10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>
        </div>

        {/* Row 3: Recent Results */}
        <div className={styles.codTournamentContainer}>
          {/* Similar structure for recent results, repeat as needed */}
          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg" 
              alt="Tournament 1" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
              <div className={styles.calendarIcon}>
                <p> 10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>

          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg" 
              alt="Tournament 2" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
              <div className={styles.calendarIcon}>
                <p>10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>
          <div className={styles.codTournament}>
            <img 
              src="https://cdn.mos.cms.futurecdn.net/qwVvG47vGUZAqY3Z6AmMBY-1200-80.jpg"
              alt="Tournament 2" 
              className={styles.tournamentImage} 
            />
             <h3 className={styles.gameTitle}>Call of duty</h3>
            <div className={styles.calendarIcons}>
              <div className={styles.calendarIcon}>
                <p>10 Feb 2023</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>Free to Play</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>4v4</p>
              </div>
              <div className={styles.calendarIcon}>
                <p>10/48</p>
              </div>
            </div>

            {/* Trophy and Price */}
            <div className={styles.trophyPrice}>
              <FaTrophy className={styles.trophyIcon} />
              <p className={styles.priceText}> ₦10,000</p>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.joinBtn} onClick={handleJoinTournament}>
                    Join Tournament
                </button>
                <button className={styles.viewDetailsBtn}>
                    <FaGamepad className={styles.icon} />
                    View Details
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
