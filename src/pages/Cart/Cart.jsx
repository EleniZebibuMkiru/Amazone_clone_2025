import React from "react";
import LayOut from "../../components/Layout/LayOut";
import ProductCard from "../../components/product/ProductCard";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Type } from "../../Utility/action.type";
import { PiCaretDownLight, PiCaretUp } from "react-icons/pi";

function Cart() {
  const [{ basket }, dispatch] = React.useContext(DataContext);

  // Calculate total price of all items
  const total = basket.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.cart_container}>
        <div className={classes.cart_items}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p>Oops! No item in your Cart</p>
          ) : (
            basket.map((item) => (
              <div key={item.id} className={classes.cart_product}>
                {/* Existing ProductCard */}
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />

                {/* Increment / Decrement buttons */}
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <PiCaretUp  size={30}/>
                  </button>

                  <span>{item.amount}</span>

                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <PiCaretDownLight size={30}/>
                  </button>
                </div>

                {/* Show subtotal per product */}
                <p className={classes.product_subtotal}>
                  {item.title}: ${item.price} × {item.amount} = $
                  {item.price * item.amount}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Subtotal / Cart total */}
        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>
                Subtotal ({basket.length} items):{" "}
                <CurrencyFormat
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>

              {/* Grand total clearly shown */}
              <p>
                <strong>Total to pay: ${total}</strong>
              </p>

              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>

              <Link to="/payment">Continue to Checkout</Link>
            </div>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
