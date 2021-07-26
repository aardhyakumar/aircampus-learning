import React from "react";
import "./Logintest.css";
import firebase from "firebase/app";
import "firebase/auth";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, provider } from "../firebase.js";
function Logintest() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [addclass, setaddclass] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    return () => {
      auth.onAuthStateChanged(async (auth) => {
        if (auth) {
          history.push("/loggedin");
          console.log(auth);
        }
      });
    };
  }, []);

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
            history.push("/loggedin");
          });
      })
      .catch((error) => {
        // Handle Errors here.
        alert("Wrong Username or Password");
      });
  };
  const register = (e) => {
    e.preventDefault();
    //some firebse shittttt
    auth.createUserWithEmailAndPassword(Email, password).then((auth) => {
      console.log(auth);
      if (auth) {
        history.push("/loggedin");
      }
    });
  };
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input
            type="name"
            placeholder="NAME"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="EMAIL"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit_btn" onClick={register}>
            REGISTER
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="EMAIL"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit_btn" onClick={SignIn}>
            LOGIN
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logintest;
