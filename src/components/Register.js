import React from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, dbRef } from "../firebase.js";
import styled from "styled-components";
import db from "../firebase";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
  selectisUserUid,
  selectisNewUser,
  setnewUser,
  selectUserPassword,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { AddEntriesFromIterable } from "es-abstract/es2019";

function Register() {
  const [DOB, setDOB] = useState("");
  const [Completion, setCompletion] = useState("");
  const history = useHistory();
  const uid = useSelector(selectisUserUid);
  console.log(Values);
  const addInfo = (key) => {
    const refUserInformation = firebase.database().ref("user/" + `${key}`);
    refUserInformation.once("value", function (snapshot) {
      snapshot.ref.update(Values);
    });
  };
  const enroll = () => {
    const pair = { DOB: DOB, CompletionYear: Completion };
    Values = { ...Values, ...pair };
    const refUserInformation = firebase.database().ref("user");
    const refdb = refUserInformation.orderByChild("uid").equalTo(uid);
    // refdb.once("value", function (snapshot) {
    //   snapshot.ref.update(

    //   );
    // });
    refdb.once("value", function (snapshot) {
      snapshot.forEach((data) => {
        var key = data.key;
        addInfo(key);
      });
    });
    history.push("/home");
  };
  const InitialFieldValues = {
    DOB: "",
    City: "",
    Salary: "",
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
    <Container>
      {" "}
      <div className="container">
        <form className="form" id="login">
          <img src="/images/new-user.png" />
          <h1 className="form__title">Register Now</h1>
          <div className="form__message form__message--error"></div>
          <div className="form__input-group__left">
            <div className="form__input-error-message"></div>
            <DatePicker
              selected={DOB}
              onChange={(date) => setDOB(date)}
              name="DOB"
              className="dt"
              placeholderText="Select your Date of Birth"
            />
          </div>
          <div className="form__input-group__right">
            <DatePicker
              selected={Completion}
              onChange={(date) => setCompletion(date)}
              placeholderText="12th Completion Year"
              showYearPicker
              name="CompletionYear"
              className="dt"
              dateFormat="yyyy"
            />
            <input
              type="number"
              className="form__input"
              autofocus
              min="0"
              name="CollegeYear"
              placeholder="If in College Select Year"
              value={Values.CollegeYear}
              onChange={handleInputChange}
            />

            <div className="form__input-error-message"></div>

            <input
              type="number"
              min="0"
              class="form__input"
              autofocus
              name="Salary"
              placeholder="If Employed CTC (in Lakhs)"
              value={Values.Salary}
              onChange={handleInputChange}
            />
            <div className="form__input-error-message"></div>

            <input
              type="text"
              class="form__input"
              autofocus
              placeholder="Enter City"
              name="City"
              value={Values.City}
              onChange={handleInputChange}
            />
            <div className="form__input-error-message"></div>
          </div>
          <button className="form__button" type="submit" onClick={enroll}>
            Enroll Now
          </button>
          <p className="form__text">
            <a className="form__link" href="/" id="linkCreateAccount">
              Already have an account? Click here
            </a>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Register;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 140vh;
`;
