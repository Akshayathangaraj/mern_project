import React from 'react';
//import './App.css'; // Add your specific styles

const Banner = () => {
  return (
    <section className="section banner" aria-label="banner" data-section>
      <div className="container">
        <ul className="banner-list">
          <li>
            <div className="banner-card banner-card-1 has-before hover:shine">
              <p className="card-subtitle">New Collection</p>
              <h2 className="h2 card-title">Discover Our Skincare Products</h2>
              <a href="#" className="btn btn-secondary">Explore More</a>
              <div className="has-bg-image" style={{ backgroundImage: "url('./assets/images/banner-1.jpg')" }}></div>
            </div>
          </li>
          <li>
            <div className="banner-card banner-card-2 has-before hover:shine">
              <h2 className="h2 card-title">25% off Everything</h2>
              <p className="card-text">Makeup and Skincare with extended range in need for everyone.</p>
              <div className="has-bg-image" style={{ backgroundImage: "url('./assets/images/banner-2.jpg')" }}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
