import React, { useState ,useContext} from "react";
import LayOut from "../../components/Layout/LayOut";
import { Link } from "react-router-dom";
import classes from "./signUp.module.css";
import { auth } from "../../Utility/firebase";
import { Type } from "../../Utility/action.type";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/Dataprovider/Dataprovider";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{user}, dispatch] = useContext(DataContext);

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in:", userCredential.user);
      dispatch({
        type: Type.SET_USER,
        user: userCredential.user, // ✅ send correct user
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const signUpHandler = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      dispatch({
        type: Type.SET_USER,
        user: userCredential.user, // ✅ send correct user
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <LayOut>
      <section className={classes.login}>
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/I/31epF-8N9LL.png"
            alt="amazon logo"
          />
        </Link>

        <div className={classes.login__container}>
          <h1>Sign In</h1>

          <form onSubmit={signInHandler}>
            <div>
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>

            <button type="submit" className={classes.login__signInButton}>
              Sign In
            </button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            onClick={signUpHandler}
            className={classes.login__registerButton}
          >
            Create your Amazon Account
          </button>
        </div>
      </section>
    </LayOut>
  );
}

export default Auth;
