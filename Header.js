import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="alert">
        <div className="container">
          <p className="alert-text">Free Shipping On Bulk Orders</p>
        </div>
      </div>

      <div className="header-top" data-header>
        <div className="container">
          <a href="#" className="logo" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img src="./assets/images/logo.png" width="150" height="150" alt="Glowing" />
          </a>
          <div className="header-actions">
            <button className="header-action-btn" aria-label="user">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <nav className="navbar">
            <ul className="navbar-list">
              <li><Link to="/" className="navbar-link has-after">Home</Link></li>
              <li><Link to="/signup" className="navbar-link">Signup</Link></li>
              <li><Link to="/shop" className="navbar-link has-after">Shop</Link></li>
              <li><Link to="/about" className="navbar-link has-after">About</Link></li>
              <li><Link to="/contact" className="navbar-link has-after">Contact</Link></li>
            </ul>
          </nav>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
