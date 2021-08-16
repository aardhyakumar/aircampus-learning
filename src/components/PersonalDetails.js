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
import {
  setPersonalDetails,
  selectUserDOB,
  selectUserEmail,
  selectisUserUid,
  selectWhatsappNumber,
  selectfullName,
  selectCity,
} from "../features/userRegister.js/userRegisterSlice";
function PersonalDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [DOB, setDOB] = useState("");
  const [alert, setalert] = useState(false);
  const [custom, setcustom] = useState(false);
  const [pssword, setpssword] = useState(false);
  const user = useSelector(selectfullName);
  const Dob = useSelector(selectUserDOB);
  const email = useSelector(selectUserEmail);
  const Number = useSelector(selectWhatsappNumber);
  const City = useSelector(selectCity);
  const register = (e) => {
    e.preventDefault();
    const pair = { DOB: DOB };
    Values = { ...Values, ...pair };

    //some firebse shitttt
    if (
      Values.fullName &&
      Values.City &&
      Values.WhatsappNumber &&
      Values.password &&
      Values.confirmpassword &&
      Values.DOB
    ) {
      setcustom(false);
      if (Values.password === Values.confirmpassword) {
        setpssword(false);
        firebase
          .auth()
          .createUserWithEmailAndPassword(Values.Email, Values.password)
          .then((result) => {
            if (result) {
              const uid = result.user.uid;
              const pair = { uid: uid };
              Values = { ...Values, ...pair };
              dispatch(
                setPersonalDetails({
                  fullName: Values.fullName,
                  Email: Values.Email,
                  WhatsappNumber: Values.WhatsappNumber,
                  DOB: Values.DOB,
                  City: Values.City,
                  uid: Values.uid,
                })
              );

              console.log(user);
              history.push("/AcademicDetails");
            }
          })
          .catch((error) => {
            //Handle Errors here.
            setalert(error.message);
          });
      } else {
        setpssword(true);
      }
    } else {
      setcustom(true);
    }
  };
  const InitialFieldValues = {
    fullName: "",
    Email: "",
    password: "",
    WhatsappNumber: "",
    confirmpassword: "",
    City: "",
  };
  var [Values, setValues] = useState(InitialFieldValues);
  if (
    user !== "" &&
    email !== "" &&
    Number !== "" &&
    City != "" &&
    Dob !== ""
  ) {
    Values.fullName = user;
    Values.Email = email;
    Values.WhatsappNumber = Number;
    Values.City = City;
    Values.DOB = Dob;
  }
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
            value={Values.fullName}
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
            selected={DOB}
            onChange={(date) => setDOB(date)}
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
            value={Values.confirmpassword}
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
      {custom && <h3 className="alert">Please Enter Complete Login Details</h3>}
      {pssword && <h3 className="alert">Both Passwords should Match</h3>}
    </div>
  );
}

export default PersonalDetails;
