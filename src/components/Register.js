import React from "react";
import "../css/Login.css";
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
  const [alert, setalert] = useState("");
  const [Completion, setCompletion] = useState("");
  const history = useHistory();
  const uid = useSelector(selectisUserUid);
  const Enrolled = {
    uid: uid,
    Program: "Full Stack Web Development",
  };
  var checkUser = useSelector(selectUserName);
  const [User, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")).name);
  }, []);
  const addInfo = (key) => {
    dbRef.child("Enrolled_users").push(Enrolled);
    const refUserInformation = firebase.database().ref("user/" + `${key}`);
    refUserInformation.once("value", function (snapshot) {
      snapshot.ref.update(Values);
    });
  };
  const enroll = (e) => {
    e.preventDefault();
    const pair = { DOB: DOB, CompletionYear: Completion };
    Values = { ...Values, ...pair };
    if (
      Values.DOB == "" ||
      Values.City == "" ||
      Values.Salary == "" ||
      Values.CompletionYear == "" ||
      Values.WhatsappNumber == ""
    ) {
      setalert("Please fill in the Complete Details & then enroll");
    } else {
      console.log(Values);
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
    }
  };
  const InitialFieldValues = {
    City: "",
    Salary: "",
    WhatsappNumber: "",
  };
  var [Values, setValues] = useState(InitialFieldValues);
  const handleInputChange = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };
  const user = useSelector(selectUserName);
  return (
    <Container>
      <div className="container__enroll">
        <form className="form" id="enroll">
          <img src="/images/contract.png" />
          <h1 className="form__title">Enroll Now</h1>
          <p className="enroll__text">
            <strong className="enroll_Nme">
              {checkUser ? checkUser : User}
            </strong>
            & become a part of this exciting Journey.
          </p>
          <div className="form__message form__message--error"></div>

          <div className="form__input-error-message"></div>
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
          <button className="form__button" type="submit" onClick={enroll}>
            Enroll Now
          </button>
          {alert && <h3 className="alert__login">{alert}</h3>}
        </form>
      </div>
    </Container>
  );
}

export default Register;
const Container = styled.nav`
  position: relative;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 160vh;
`;
