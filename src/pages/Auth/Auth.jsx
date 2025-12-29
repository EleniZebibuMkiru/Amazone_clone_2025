import React, { useState, useContext } from "react";
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
import ClipLoader from "react-spinners/ClipLoader";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);

  // ✅ SIGN IN
  const signInHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading({ ...loading, signIn: true });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: Type.SET_USER,
        user: userCredential.user,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      // ✅ stops loading on success OR error
      setLoading({ ...loading, signIn: false });
    }
  };

  // ✅ SIGN UP
  const signUpHandler = async () => {
    setError("");
    setLoading({ ...loading, signUp: true });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: Type.SET_USER,
        user: userCredential.user,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      // ✅ stops loading on success OR error
      setLoading({ ...loading, signUp: false });
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={classes.login__signInButton}
              disabled={loading.signIn}
            >
              {loading.signIn ? <ClipLoader size={18} /> : "Sign In"}
            </button>
          </form>

          {error && (
            <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
          )}

          <button
            onClick={signUpHandler}
            className={classes.login__registerButton}
            disabled={loading.signUp}
          >
            {loading.signUp ? (
              <ClipLoader size={18} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
        </div>
      </section>
    </LayOut>
  );
}

export default Auth;
