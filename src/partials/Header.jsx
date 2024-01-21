// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="nav-container">
          <h1>Your Company</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">Features</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
