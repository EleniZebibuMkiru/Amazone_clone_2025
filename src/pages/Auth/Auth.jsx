import React from 'react';
import LayOut from '../../components/Layout/LayOut';
import { Link } from "react-router-dom";
import classes from "./signUp.module.css";

function Auth() {
  return (
    <LayOut>
      <section className={classes.login}>
        
        <Link to="/">
          <img 
            src='https://m.media-amazon.com/images/I/31epF-8N9LL.png' 
            alt='amazon logo'
          />
        </Link>

        {/* FIXED: Changed from string to variable in curly braces */}
        <div className={classes.login__container}>
          <h1>Sign In</h1>
          <form action="">
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email'/>
            </div>

            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password'/>
            </div>

            {/* Added type='submit' and a class for styling */}
            <button type="submit" className={classes.login__signInButton}>
              Sign In
            </button>
          </form>
{/* agreement */}
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
{/* creat acount button */}
          <button className={classes.login__registerButton}>
            Create your Amazon Account
          </button>
        </div>
        
      </section>
    </LayOut>
  );
}

export default Auth;