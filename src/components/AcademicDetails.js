import "../css/Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import styled from "styled-components";
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
import { FlareSharp } from "@material-ui/icons";
function AcademicDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [alert, setalert] = useState("");
  const [Grad, setGrad] = useState(false);
  const [employed, setemployed] = useState(false);
  const [College, setCollege] = useState(false);
  const [Completion, setCompletion] = useState("");
  const [name, setname] = useState(false);
  const handleChange = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setCollege(!College);
    console.log();
  };
  const register = (e) => {
    e.preventDefault();
    //some firebse shitttt
    if (College == true && Grad == true && employed == true) {
      if (
        Values.CollegeYear !== "" &&
        Values.CompletionYear !== "" &&
        Values.Course !== "" &&
        Values.Branch !== "" &&
        Values.Salary !== ""
      ) {
        console.log(Values);
        setalert(false);
      } else {
        setalert(true);
      }
    } else if (College == false && Grad == true && employed == true) {
      if (
        Values.CompletionYear !== "" &&
        Values.Course !== "" &&
        Values.Branch !== "" &&
        Values.Salary !== ""
      ) {
        console.log(Values);
        setalert(false);
      } else {
        setname(true);
      }
    } else if (College == true && Grad == false && employed == true) {
      if (Values.CollegeYear !== "" && Values.Salary !== "") {
        console.log(Values);
      } else {
        setalert(true);
        setalert(false);
      }
    } else if (College == true && Grad == true && employed == false) {
      if (
        Values.CollegeYear !== "" &&
        Values.CompletionYear !== "" &&
        Values.Course !== "" &&
        Values.Branch !== ""
      ) {
        console.log(Values);
        setalert(false);
      } else {
        setname(true);
      }
    } else if (College == false && Grad == false && employed == true) {
      if (Values.Salary !== "") {
        console.log(Values);
        setalert(false);
      } else {
        setalert(true);
      }
    } else if (College == true && Grad == false && employed == false) {
      if (Values.CollegeYear !== "") {
        console.log(Values);
        setalert(false);
      } else {
        setalert(true);
      }
    } else if (College == false && Grad == true && employed == false) {
      if (
        Values.CompletionYear !== "" &&
        Values.Course !== "" &&
        Values.Branch !== ""
      ) {
        setalert(false);
        console.log(Values);
      } else {
        setalert(true);
      }
    } else {
      console.log(Values);
      setalert(false);
    }
  };

  const InitialFieldValues = {
    CollegeYear: "",
    CompletionYear: "",
    Course: "",
    Branch: "",
    Salary: "",
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
  return (
    <Container>
      <div className="container">
        <form className="form" id="login">
          <h2 className="personal_det">Academic Details</h2>
          <div className="form">
            <DatePicker
              selected={Completion}
              onChange={(date) => setCompletion(date)}
              placeholderText="12th Completion Year"
              showYearPicker
              name="CompletionYear"
              className="dt"
              dateFormat="yyyy"
            />
            <br />
            <h5 className="title_det1">Still in College?</h5>

            <label className="title_input">
              <input
                type="checkbox"
                checked={College}
                onChange={handleChange}
                placeholder="Yes"
                value="yes"
                className="input_check"
              />
              Yes
              <input
                type="checkbox"
                placeholder="No"
                className="input_check"
                value="no"
                onChange={() => {
                  setCollege(false);
                }}
              />
              No
            </label>
            {College && (
              <div className="college_list">
                <input
                  type="number"
                  class="form__input"
                  autofocus
                  name="CollegeYear"
                  placeholder="Enter Year"
                  value={Values.CollegeYear}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <h5 className="title_det2">Graduated?</h5>
            <label className="title_input">
              <input
                className="input_check"
                type="checkbox"
                checked={Grad}
                onChange={() => {
                  setGrad(!Grad);
                }}
                placeholder="Yes"
              />
              Yes
              <input
                className="input_check"
                type="checkbox"
                placeholder="No"
                onChange={() => {
                  setGrad(false);
                }}
              />
              No
            </label>
            {Grad && (
              <div className="G_list">
                <input
                  type="number"
                  class="form__input"
                  autofocus
                  placeholder="Enter Completion Year"
                  name="CompletionYear"
                  value={Values.CompletionYear}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  class="form__input"
                  autofocus
                  placeholder="Enter Course"
                  name="Course"
                  value={Values.Course}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  class="form__input"
                  autofocus
                  placeholder="Enter Branch"
                  name="Branch"
                  value={Values.Branch}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <h5 className="title_det">Employed?</h5>
            <label className="title_input">
              <input
                className="input_check"
                type="checkbox"
                checked={employed}
                onChange={() => {
                  setemployed(!employed);
                }}
                placeholder="Yes"
              />
              Yes
              <input
                className="input_check"
                type="checkbox"
                placeholder="No"
                onChange={() => {
                  setemployed(false);
                }}
              />
              No
            </label>
            {employed && (
              <div className="employed_list">
                <input
                  type="number"
                  class="form__input"
                  autofocus
                  placeholder="Enter CTC"
                  name="Salary"
                  value={Values.Salary}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <button
              className="form__button"
              type="submit"
              onClick={() => {
                history.push("/register");
              }}
            >
              Go Back
            </button>
            <button className="form__button" type="submit" onClick={register}>
              Next
            </button>
          </div>
        </form>
        {alert && <h3 className="alert">Please Enter your name</h3>}
        {name && <h3 className="alert">Please Enter </h3>}
      </div>
    </Container>
  );
}

export default AcademicDetails;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 200vh;
`;
