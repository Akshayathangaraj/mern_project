// src/components/ShopCard.js
import React from 'react';

const ShopCard = ({ product }) => {
  return (
    <li className="scrollbar-item">
      <div className="shop-card">
        <div className="card-banner img-holder" style={{ '--width': 540, '--height': 720 }}>
          <img
            src={product.image}
            width="540"
            height="720"
            loading="lazy"
            alt={product.title}
            className="img-cover"
          />
          {product.discount && (
            <span className="badge" aria-label={`${product.discount}% off`}>
              -{product.discount}%
            </span>
          )}
          <div className="card-actions">
            <button className="action-btn" aria-label="add to cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
            </button>
            <button className="action-btn" aria-label="add to wishlist">
              <ion-icon name="star-outline" aria-hidden="true"></ion-icon>
            </button>
            <button className="action-btn" aria-label="compare">
              <ion-icon name="repeat-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
        </div>

        <div className="card-content">
          <div className="price">
            {product.originalPrice && <del className="del">${product.originalPrice}</del>}
            <span className="span">RS.{product.price}</span>
          </div>
          <h3>
            <a href="#" className="card-title">{product.title}</a>
          </h3>
          <div className="card-rating">
            <div className="rating-wrapper" aria-label={`${product.rating} star rating`}>
              {[...Array(5)].map((_, index) => (
                <ion-icon key={index} name="star" aria-hidden="true"></ion-icon>
              ))}
            </div>
            <p className="rating-text">{product.reviews} reviews</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShopCard;
