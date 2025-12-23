import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// Match this to your actual file path: Product.module.css
import classes from "./product.module.css";


function ProductCard({ product }) {
  // Use optional chaining (?.) to prevent crashes if data is missing
  const { id, image, title, rating, price } = product || {};

  return (
    <div className={classes.card__container}>
      <a href={`/product/${id}`}>
        <img src={image} alt={title} />
      </a>
      <div className={classes.product__info}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Count limited to 60 or dynamic */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;