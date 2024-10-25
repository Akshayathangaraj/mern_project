import React from 'react';

const Collection = () => {
  const collections = [
    { title: 'Summer Collection', image: './assets/images/collection-1.jpg' },
    { title: 'What’s New?', text: 'Get the glow', image: './assets/images/collection-2.jpg' },
    { title: 'Buy 1 Get 1', image: './assets/images/collection-3.jpg' }
  ];

  return (
    <section className="section collection" id="collection" aria-label="collection" data-section>
      <div className="container">
        <ul className="collection-list">
          {collections.map((collection, index) => (
            <li key={index}>
              <div className="collection-card has-before hover:shine">
                <h2 className="h2 card-title">{collection.title}</h2>
                <p className="card-text">{collection.text}</p>
                <a href="#" className="btn-link">
                  <span className="span">IN STOCK</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
                <div className="has-bg-image" style={{ backgroundImage: `url(${collection.image})` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
