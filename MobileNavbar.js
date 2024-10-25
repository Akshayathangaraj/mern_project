import React from 'react';

const MobileNavbar = () => {
  return (
    <div className="sidebar">
      <div className="mobile-navbar" data-navbar>
        <div className="wrapper">
          <a href="#" className="logo">
            <img src="./assets/images/logo.png" width="179" height="26" alt="Glowing" />
          </a>
          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <ul className="navbar-list">
          <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
          <li><a href="#collection" className="navbar-link" data-nav-link>Collection</a></li>
          <li><a href="#shop" className="navbar-link" data-nav-link>Shop</a></li>
          <li><a href="#offer" className="navbar-link" data-nav-link>Offer</a></li>
          <li><a href="#blog" className="navbar-link" data-nav-link>Blog</a></li>
        </ul>
      </div>
      <div className="overlay" data-nav-toggler data-overlay></div>
    </div>
  );
};

export default MobileNavbar;
