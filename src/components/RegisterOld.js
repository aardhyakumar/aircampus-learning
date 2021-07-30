import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, dbRef, provider } from "../firebase.js";
import React from "react";
import { setUserLoginDetails, setifnewUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function RegisterOld() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [alert, setalert] = useState("");
  const [name, setname] = useState(false);
  const register = (e) => {
    e.preventDefault();
    //some firebse shitttt
    console.log(Values.fullName);
    if (Values.fullName !== "") {
      setname(false);

      //.catch((error) => {
      // Handle Errors here.
      //console.log(error);
      //});
      auth
        .createUserWithEmailAndPassword(Values.Email, Values.password)
        .then((result) => {
          console.log(result);
          dbRef.child("user").push(Values);
          if (result) {
            dispatch(
              setifnewUser({ isNewUser: result.additionalUserInfo.isNewUser })
            );
            setUser(result.user);
            history.push("/home");
          }
        })
        .catch((error) => {
          //Handle Errors here.
          setalert(error.message);
        });
    } else {
      setname(true);
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        password: Values.password,
      })
    );
  };
  const InitialFieldValues = {
    fullName: "",
    Email: "",
    password: "",
  };
  const [Values, setValues] = useState(InitialFieldValues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };
  console.log(Values);
  return (
    <div className="container">
      <form className="form" id="login">
        <img src="/images/new-user.png" />
        <h1 className="form__title">Register Now</h1>
        <div className="form">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="FullName"
            name="fullName"
            value={Values.FullName}
            onChange={handleInputChange}
          />
          <div className="form__input-error-message"></div>

          <input
            type="text"
            class="form__input"
            autofocus
            placeholder=" Email"
            name="Email"
            value={Values.Email}
            onChange={handleInputChange}
          />
          <div className="form__input-error-message"></div>

          <input
            type="password"
            class="form__input"
            autofocus
            name="password"
            placeholder="password"
            value={Values.password}
            onChange={handleInputChange}
          />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit" onClick={register}>
          Sign Up
        </button>
        <p className="form__text">
          <a className="form__link" href="/" id="linkCreateAccount">
            Already have an account? Click here
          </a>
        </p>
      </form>
      {alert && <h3 className="alert">{alert}</h3>}
      {name && <h3 className="alert">Please Enter your name</h3>}
    </div>
  );
}

export default RegisterOld;
