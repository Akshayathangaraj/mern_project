import React from 'react';

const ProductCard = ({ title, price, reviews, imageUrl }) => {
  return (
    <li className="flex-item">
      <div className="card-content">
        <div className="price">
          <span className="span">${price}</span>
        </div>
        <h3>
          <a href="#" className="card-title">{title}</a>
        </h3>
        <div className="card-rating">
          <div className="rating-wrapper" aria-label="5 star rating">
            {Array(5).fill().map((_, i) => (
              <ion-icon key={i} name="star" aria-hidden="true"></ion-icon>
            ))}
          </div>
          <p className="rating-text">{reviews} reviews</p>
        </div>
        <img src={imageUrl} alt={title} className="product-image" />
      </div>
    </li>
  );
};

export default ProductCard;
