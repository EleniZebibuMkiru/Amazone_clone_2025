import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Use React Router Link
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from "./product.module.css";

function ProductCard({ product }) {
  const { id, image, title, rating, price } = product || {};

  return (
    <div className={classes.card__container}>
      <Link to={`/products/${id}`}> {/* ✅ fixed route */}
        <img src={image} alt={title} />
      </Link>
      <div className={classes.product__info}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
        </div>
        <div>
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
