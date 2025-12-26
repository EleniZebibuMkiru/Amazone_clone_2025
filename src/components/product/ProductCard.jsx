import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Dataprovider/Dataprovider";
import { Type } from "../../Utility/action.type";
import classes from "./Product.module.css";

// ✅ Added renderAdd = true as a default value
function ProductCard({ product, renderDisc, flex, renderAdd = true }) {
  const [state, dispatch] = React.useContext(DataContext);

  const addToCart = () => {
    dispatch({ type: Type.ADD_TO_BASKET, item: product });
  };

  return (
    <div className={`${classes.card__container} ${flex ? classes.product__flexed : ""}`}>
      <Link to={`/products/${product.id}`} className={classes.product_link}>
        <img src={product.image} alt={product.title} />
        <div className={classes.product_info}> {/* Added a wrapper for better control */}
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
      </Link>

      {renderDisc && (
        <p className={classes.product_description}>{product.description}</p>
      )}

      {/* ✅ The button will show on Home by default, but hide in Cart */}
      {renderAdd && (
        <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;