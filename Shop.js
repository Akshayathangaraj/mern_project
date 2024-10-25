import React from 'react';
import ShopCard from './ShopCard';

const Shop = () => {
  const collections = [
    { title: 'Summer Collection', image: './assets/images/collection-1.jpg' },
    { title: 'What’s New?', text: 'Get the glow', image: './assets/images/collection-2.jpg' },
    { title: 'Buy 1 Get 1', image: './assets/images/collection-3.jpg' }
  ];

  const products = [
    {
      image: './assets/images/product-04.jpg',
      title: 'DIOR set',
      price: '999',
      originalPrice: null,
      discount: null,
      rating: 5,
      reviews: 5170,
    },
    {
      image: './assets/images/product-05.jpg',
      title: 'Giant Teddy Bear',
      price: '799.00',
      originalPrice: '1399.00',
      discount: 20,
      rating: 5,
      reviews: 5170,
    },
    {
      image: './assets/images/product-06.jpg',
      title: 'Neck set',
      price: '399.00',
      originalPrice: null,
      discount: null,
      rating: 5,
      reviews: 5170,
    },
    // Add more products as needed
  ];

  return (
    <div>
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

      <section className="section shop" id="shop" aria-label="shop" data-section>
        <div className="container">
          <h2 className="h2">IN STOCK</h2>
          <ul className="has-scrollbar">
            {products.map((product, index) => (
              <ShopCard key={index} product={product} />
            ))}
          </ul>
          {/* Centering the link */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>
              <a href="#all." className="btn btn-secondary">Our collections</a>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
