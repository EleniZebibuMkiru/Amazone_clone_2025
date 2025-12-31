import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

import classes from "./Header.module.css";
import LowerHeader from "../Lowerheader";
import { DataContext } from "../Dataprovider/Dataprovider";

import { auth } from "../../Utility/firebase";
import { signOut } from "firebase/auth";
import { Type } from "../../Utility/action.type";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.length || 0;

  const handleSignOutAndClearCart = async () => {
    await signOut(auth);
    dispatch({ type: Type.SET_USER, user: null });
    dispatch({ type: Type.EMPTY_BASKET });
  };

  return (
    <div className={classes["header-wrapper"]}>
      {/* Top Header */}
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select>
            <option>All</option>
            <option>Art and Crafts</option>
            <option>Automotive</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Software</option>
            <option>Baby</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={40} />
        </div>

        {/* Right side */}
        <div className={classes.order__container}>
          <Link to="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA Flag"
            />
            <select>
              <option>EN</option>
            </select>
          </Link>

          {/* Fixed Account Section */}
          <div>
            {user ? (
              <>
                <p>Hello {user.email.split("@")[0]}</p>
                <span
                  onClick={handleSignOutAndClearCart}
                  style={{ cursor: "pointer" }}
                >
                  Sign Out
                </span>
              </>
            ) : (
              <Link to="/auth">
                <p>Hello, Sign In</p>
                <span>Account & Lists</span>
              </Link>
            )}
          </div>

          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>

      {/* Lower Header */}
      <LowerHeader />
    </div>
  );
}

export default Header;
