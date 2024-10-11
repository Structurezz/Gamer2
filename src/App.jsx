// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Sidebar from './components/Sidebar/Sidebar';
import TournamentPage from './pages/Tournament'; // Ensure the correct import
import Leaderboards from './pages/Leaderboards';
import TokenShop from './pages/TokenShop';
import LiveBetting from './pages/LiveBetting';
import ContentLocker from './pages/ContentLocker';
import Community from './pages/Community';
import CallOfDutyTournament from './pages/CallOfDutyTournament';
import CompleteProfile from './pages/CompleteProfile';
import './App.module.css'; // Your global styles

const App = () => {
  return (
    <Router>
      {/* TopBar is fixed at the top */}
      <TopBar />

      {/* Main Layout */}
      <div style={{ display: 'flex', height: '100vh' }}> {/* Use flex for sidebar and content */}
        {/* Sidebar is fixed on the left */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="mainContent" style={{ flexGrow: 1, overflowY: 'auto', padding: '20px' }}>
          <Routes>
            <Route path="/tournaments" element={<TournamentPage />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/token-shop" element={<TokenShop />} />
            <Route path="/live-betting" element={<LiveBetting />} />
            <Route path="/content-locker" element={<ContentLocker />} />
            <Route path="/community" element={<Community />} />
            <Route path="/complete-profile" element={<CompleteProfile />} /> {/* Corrected route for Complete Profile */}
            <Route path="/" element={<TournamentPage />} /> {/* Default route */}
            <Route path="/call-of-duty" element={<CallOfDutyTournament />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
