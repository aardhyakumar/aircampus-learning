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
  const [name, setname] = useState(false);
  const handleChange = () => {
    // Change state to the opposite (to ture) when checkbox changes
    setCollege(!College);
  };
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
    <Container>
      <div className="container">
        <form className="form" id="login">
          <h2 className="personal_det">Academic Details</h2>
          <div className="form">
            <DatePicker
              //selected={Completion}
              //onChange={(date) => setCompletion(date)}
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
                className="input_check"
              />
              Yes
              <input
                type="checkbox"
                placeholder="No"
                className="input_check"
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
                  placeholder="Enter Year"
                  name="City"
                  //value={Values.City}
                  //onChange={handleInputChange}
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
                  placeholder="Enter Year"
                  name="City"
                  //value={Values.City}
                  //onChange={handleInputChange}
                />
                <input
                  type="text"
                  class="form__input"
                  autofocus
                  placeholder="Enter Course"
                  name="City"
                  //value={Values.City}
                  //onChange={handleInputChange}
                />
                <input
                  type="text"
                  class="form__input"
                  autofocus
                  placeholder="Enter Branch"
                  name="City"
                  //value={Values.City}
                  //onChange={handleInputChange}
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
                  name="City"
                  //value={Values.City}
                  //onChange={handleInputChange}
                />
              </div>
            )}
            <button className="form__button" type="submit" onClick={register}>
              Next
            </button>
          </div>
        </form>
        {alert && <h3 className="alert">{alert}</h3>}
        {name && <h3 className="alert">Please Enter your name</h3>}
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
  height: 160vh;
`;
