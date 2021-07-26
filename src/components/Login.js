import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, provider } from "../firebase.js";
function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const SignIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase
          .auth()
          .signInWithEmailAndPassword(Email, password)
          .then((user) => {
            console.log(user);
            history.push("/home");
          });
      })
      .catch((error) => {
        // Handle Errors here.
        alert("Wrong Username or Password");
      });
  };
  return (
    <div className="container">
      <form class="form" id="login">
        <img src="/images/user.png" />
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            autofocus
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit" onClick={SignIn}>
          Continue
        </button>
        <p class="form__text">
          <a href="/passwordreset" class="form__link">
            Forgot your password?
          </a>
        </p>
        <p class="form__text">
          <a class="form__link" href="/register" id="linkCreateAccount">
            Don't have an account? Create account
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
