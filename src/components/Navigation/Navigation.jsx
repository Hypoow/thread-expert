import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import './Navigation.css';

export default function Navigation({ authUser = null, logout = () => {} }) {
  return (
    <nav className="nav-card">
      <h1 className="nav-logo">HyooThread App</h1>
      <div className="nav-center">
        <ul className="nav-card-list">
          <li className="nav-card-item">
            <Link to="/"><HomeIcon /></Link>
          </li>
          {authUser !== null && (
            <li className="nav-card-item">
              <Link to="/leaderboard"><LeaderboardIcon /></Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-links">
        {authUser !== null && (
          <p className="nav-card-greeting">
            Hallo&nbsp;
            {authUser.name}
          </p>
        )}
        {authUser !== null && (
          <Button
            variant="outlined"
            type="button"
            onClick={logout}
            className="button-logout"
          >
            Logout
          </Button>
        )}
        {authUser === null && (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
