import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

import classes from "./Header.module.css";
import LowerHeader from "../Lowerheader";

function Header() {
  const user = null; // replace with auth logic later
  const totalItem = 0;

  const handleSignOutAndClearCart = () => {
    console.log("User signed out");
  };

  return (
    <header className={classes.fixed}>
      {/* Top Header */}
      <div className={classes.header__container}>
        {/* Logo + Delivery */}
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>

          <div className={classes.delivery}>
            <span><SlLocationPin /></span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
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

        {/* Right Side */}
        <div className={classes.order__container}>
          {/* Language */}
          <Link to="/" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="USA Flag"
            />
            <select>
              <option>EN</option>
            </select>
          </Link>

          {/* Auth */}
          <Link to={user ? "/" : "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello {user.email.split("@")[0]}</p>
                  <span onClick={handleSignOutAndClearCart}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>

      {/* Lower Header */}
      <LowerHeader />
    </header>
  );
}

export default Header;
