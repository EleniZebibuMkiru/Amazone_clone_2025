import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/action.type";
import classes from "./Product.module.css";

function ProductCard({ product, renderDisc, flex }) {
  const [, dispatch] = React.useContext(DataContext);

  if (!product) return null;

  const addToCart = () => {
    dispatch({ type: Type.ADD_TO_BASKET, item: product });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${product.id}`} className={classes.product_link}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>

      {renderDisc && (
        <p className={classes.product_description}>
          {product.description}
        </p>
      )}

      <button className={classes.button} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
