import "../css/Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
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
function PersonalDetails() {
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(Values.Email, Values.password)
        .then((result) => {
          if (result) {
            const uid = result.user.uid;
            const pair = { uid: uid };
            Values = { ...Values, ...pair };
            axios.post("http://localhost:9002/register", Values).then((res) => {
              if (res.data == "Successfully Registered") {
                setUser(result.user);
                const newuser = {
                  newuser: result.additionalUserInfo.isNewUser,
                };
                window.localStorage.setItem("newuser", JSON.stringify(newuser));
                dispatch(
                  setifnewUser({
                    isNewUser: result.additionalUserInfo.isNewUser,
                  })
                );
                history.push("/home");
              } else {
                history.push("/register");
              }
            });
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
  var [Values, setValues] = useState(InitialFieldValues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };
  return (
    <div className="container">
      <form className="form" id="login">
        <img src="/images/new-user.png" />
        <h1 className="form__title">Register Now</h1>
        <h2 className="personal_det">Personal Details</h2>
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
          <input
            type="number"
            className="form__input"
            autofocus
            min="0"
            name="WhatsappNumber"
            placeholder="Enter your Whatsapp Number"
            value={Values.WhatsappNumber}
            onChange={handleInputChange}
          />
          <DatePicker
            //selected={DOB}
            //onChange={(date) => setDOB(date)}
            name="DOB"
            className="dt"
            placeholderText="Select your Date of Birth"
          />
          <input
            type="password"
            class="form__input"
            autofocus
            name="password"
            placeholder="password"
            value={Values.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            class="form__input"
            autofocus
            name="confirmpassword"
            placeholder="Confirm Password"
            value={Values.password}
            onChange={handleInputChange}
          />
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Enter City"
            name="City"
            value={Values.City}
            onChange={handleInputChange}
          />
        </div>
        <button className="form__button" type="submit" onClick={register}>
          Next
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

export default PersonalDetails;
