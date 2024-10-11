// src/components/Sidebar/Sidebar.jsx

import React from 'react';
import styles from './Sidebar.module.css';
import { 
  FaTrophy, 
  FaChartLine, 
  FaShoppingCart, 
  FaTv, 
  FaLock, 
  FaUsers, 
  FaSignOutAlt 
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styling

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        {/* Logo Section */}
        <h1 className={styles.logo}>GAMER2</h1>
      </div>
      <div className={styles.menu}>
        {/* Menu Items with NavLink for active styling */}
        <NavLink 
          to="/tournaments" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaTrophy className={styles.icon} />
          <span>Tournaments</span>
        </NavLink>
        <NavLink 
          to="/leaderboards" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaChartLine className={styles.icon} />
          <span>Leaderboards</span>
        </NavLink>
        <NavLink 
          to="/token-shop" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaShoppingCart className={styles.icon} />
          <span>Token Shop</span>
        </NavLink>
        <NavLink 
          to="/live-betting" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaTv className={styles.icon} />
          <span>Live Betting</span>
        </NavLink>
        <NavLink 
          to="/content-locker" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaLock className={styles.icon} />
          <span>Content Locker</span>
        </NavLink>
        <NavLink 
          to="/community" 
          className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.active}` : styles.menuItem}
        >
          <FaUsers className={styles.icon} />
          <span>Community</span>
        </NavLink>
      </div>
      <div className={styles.logout}>
        <FaSignOutAlt className={styles.icon} />
        <span>LOG OUT</span>
      </div>
    </div>
  );
};

export default Sidebar;
