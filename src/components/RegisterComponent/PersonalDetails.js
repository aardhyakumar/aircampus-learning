import "../../css/Login.css";
import "firebase/auth";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPersonalDetails,
  selectUserDOB,
  selectUserEmail,
  selectPersonalDetailsDone,
  selectUserPassword,
  selectUserConfirmPassword,
  selectWhatsappNumber,
  selectfullName,
  selectCity,
} from "../../features/userRegister.js/userRegisterSlice";
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
  const password = useSelector(selectUserPassword);
  const confirmpassword = useSelector(selectUserConfirmPassword);
  const Details = useSelector(selectPersonalDetailsDone);
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
      if (Values.WhatsappNumber.length == 10) {
        if (Values.password === Values.confirmpassword) {
          setpssword(false);
          dispatch(
            setPersonalDetails({
              fullName: Values.fullName,
              Email: Values.Email,
              WhatsappNumber: Values.WhatsappNumber,
              DOB: Values.DOB,
              City: Values.City,
              password: Values.password,
              confirmpassword: Values.password,
              PersonalDetailsDone: true,
            })
          );
          history.push("/register/AcademicDetails");
        } else {
          setpssword(true);
        }
      } else {
        setalert(true);
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
  useEffect(() => {
    if (Details == true) {
      if (
        user !== "" &&
        email !== "" &&
        Number !== "" &&
        City != "" &&
        Dob !== "" &&
        password !== "" &&
        confirmpassword !== ""
      ) {
        Values.fullName = user;
        Values.Email = email;
        Values.WhatsappNumber = Number;
        Values.City = City;
        Values.DOB = Dob;
        Values.password = password;
        Values.confirmpassword = confirmpassword;
      }
    }
  }, []);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };
  return (
    <Container>
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
          <button className="form__button_p" type="submit" onClick={register}>
            Next
          </button>
          <p className="form__text">
            <a className="form__link" href="/" id="linkCreateAccount">
              Already have an account? Click here
            </a>
          </p>
        </form>
        <div>
          {alert && <h3 className="alert">Please Enter Correct Number</h3>}
          {custom && (
            <h3 className="alert">Please Enter Complete Login Details</h3>
          )}
          {pssword && <h3 className="alert">Both Passwords should Match</h3>}
        </div>
      </div>
    </Container>
  );
}

export default PersonalDetails;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  min-height: 180vh;
`;
