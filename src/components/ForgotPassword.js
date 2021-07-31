import React from "react";
import styled from "styled-components";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, provider } from "../firebase.js";
function ForgotPassword() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const Reset = (e) => {
    e.preventDefault();
    var actionCodeSettings = {
      // After password reset, the user will be give the ability to go back
      // to this page.
      url: "http://localhost:3000/",
      handleCodeInApp: false,
    };
    firebase
      .auth()
      .sendPasswordResetEmail(Email)
      .then(() => {
        alert("Password reset email sent!");
        history.push("/");
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        // ..
      });
  };
  return (
    <Container>
      <div className="container__reset">
        <form class="form__reset" id="">
          <img src="/images/password-reset.png " className="reset_img" />
          <h1 class="form__title">Reset Your Password</h1>
          <div class="form__message form__message--error"></div>
          <div class="form__input-group__reset">
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
          <button class="form__button__reset" type="submit" onClick={Reset}>
            Reset Your Password
          </button>
          <a class="form__link__reset" href="/" id="linkCreateAccount">
            Go back to Login
          </a>
        </form>
      </div>
    </Container>
  );
}

export default ForgotPassword;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 130vh;
  border-radius: 24px;
  font-family: "Montserrat", sans-serif;
  img {
    border: none;
    height: 80px;
  }
  .container__reset {
    border-radius: 24px;
  }
`;
