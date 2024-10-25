import React from 'react';

const Hero = () => {
  const heroItems = [
    { image: './assets/images/hero-banner-1.png' },
    { image: './assets/images/hero-banner-2.png'},
    { image: './assets/images/hero-banner-3.png' }
  ];

  return (
    <section className="section hero" id="home" aria-label="hero" data-section>
      <div className="container">
        <ul className="has-scrollbar">
          {heroItems.map((item, index) => (
            <li className="scrollbar-item" key={index}>
              <div className="hero-card has-bg-image" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="card-content">
                  <h1 className="h1 hero-title">{item.title}</h1>
                  <p className="hero-text">{item.text}</p>
                  <p className="price"> {item.price}</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <a href="#sign" className="btn btn-primary">View All</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
