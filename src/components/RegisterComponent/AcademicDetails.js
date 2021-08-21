import "../../css/Login.css";
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
import { auth, dbRef, provider } from "../../firebase.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlareSharp } from "@material-ui/icons";

import {
  setAcademicDetails,
  selectPersonalDetailsDone,
  selectAcademicDetailsDone,
  selectifEmployed,
  selectifStillInCollege,
  selectBranch,
  selectCourse,
  selectCompletionYear,
  selectCollegeYear,
  selectGraduate,
  selectSalary,
  selectInterCompletionYear,
} from "../../features/userRegister.js/userRegisterSlice";
function AcademicDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [alert, setalert] = useState("");
  const [Gradtrue, setGradtrue] = useState(false);
  const [Gradfalse, setGradfalse] = useState(false);
  const [employedtrue, setemployedtrue] = useState(false);
  const [employedfalse, setemployedfalse] = useState(false);
  const [Collegetrue, setCollegetrue] = useState(false);
  const [Collegefalse, setCollegefalse] = useState(false);
  const [Completion, setCompletion] = useState("");
  const Details = useSelector(selectPersonalDetailsDone);
  const ADetails = useSelector(selectAcademicDetailsDone);
  const Inter = useSelector(selectInterCompletionYear);
  const SIC = useSelector(selectifStillInCollege);
  const CY = useSelector(selectCollegeYear);
  const Gr = useSelector(selectGraduate);
  const Yr = useSelector(selectCompletionYear);
  const Course = useSelector(selectCourse);
  const Branch = useSelector(selectBranch);
  const Employee = useSelector(selectifEmployed);
  const CTC = useSelector(selectSalary);

  const register = (e) => {
    e.preventDefault();
    Values.InterCompletionYear = Completion;
    //some firebse shitttt
    if (Values.InterCompletionYear !== "") {
      setalert(false);
      if (Collegetrue == false && Collegefalse == false) {
        setalert(true);
      } else if (Gradfalse == false && Gradtrue == false) {
        setalert(true);
      } else if (employedfalse == false && employedtrue == false) {
        setalert(true);
      } else {
        if (Collegetrue == true && Gradtrue == true && employedtrue == true) {
          if (
            Values.CollegeYear !== "" &&
            Values.CompletionYear !== "" &&
            Values.Course !== "" &&
            Values.Branch !== "" &&
            Values.Salary !== ""
          ) {
            Values.StillInCollege = "Yes";
            Values.Graduate = "Yes";
            Values.Employed = "Yes";
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == false &&
          Gradtrue == true &&
          employedtrue == true
        ) {
          if (
            Values.CompletionYear !== "" &&
            Values.Course !== "" &&
            Values.Branch !== "" &&
            Values.Salary !== ""
          ) {
            Values.CollegeYear = "NA";
            Values.StillInCollege = "No";
            Values.Graduate = "Yes";
            Values.Employed = "Yes";
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == true &&
          Gradtrue == false &&
          employedtrue == true
        ) {
          if (Values.CollegeYear !== "" && Values.Salary !== "") {
            Values.CompletionYear = "NA";
            Values.Course = "NA";
            Values.Branch = "NA";
            Values.StillInCollege = "Yes";
            Values.Graduate = "No";
            Values.Employed = "Yes";
            setalert(false);
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == true &&
          Gradtrue == true &&
          employedtrue == false
        ) {
          if (
            Values.CollegeYear !== "" &&
            Values.CompletionYear !== "" &&
            Values.Course !== "" &&
            Values.Branch !== ""
          ) {
            Values.Salary = "NA";
            Values.StillInCollege = "Yes";
            Values.Graduate = "Yes";
            Values.Employed = "No";
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == false &&
          Gradtrue == false &&
          employedtrue == true
        ) {
          if (Values.Salary !== "") {
            Values.CollegeYear = "NA";
            Values.Course = "NA";
            Values.CompletionYear = "NA";
            Values.Branch = "NA";
            Values.StillInCollege = "No";
            Values.Graduate = "No";
            Values.Employed = "Yes";
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == true &&
          Gradtrue == false &&
          employedtrue == false
        ) {
          if (Values.CollegeYear !== "") {
            Values.Course = "NA";
            Values.CompletionYear = "NA";
            Values.Branch = "NA";
            Values.Salary = "NA";
            Values.StillInCollege = "Yes";
            Values.Graduate = "No";
            Values.Employed = "No";
            console.log(Values);
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
          } else {
            setalert(true);
          }
        } else if (
          Collegetrue == false &&
          Gradtrue == true &&
          employedtrue == false
        ) {
          if (
            Values.CompletionYear !== "" &&
            Values.Course !== "" &&
            Values.Branch !== ""
          ) {
            Values.CollegeYear = "NA";
            Values.Salary = "NA";
            Values.StillInCollege = "No";
            Values.Graduate = "Yes";
            Values.Employed = "No";
            dispatch(
              setAcademicDetails({
                CollegeYear: Values.CollegeYear,
                Graduate: Values.Graduate,
                StillInCollege: Values.StillInCollege,
                Employed: Values.Employed,
                CompletionYear: Values.CompletionYear,
                Course: Values.Course,
                Branch: Values.Branch,
                Salary: Values.Salary,
                InterCompletionYear: Values.InterCompletionYear,
                AcademicDetailsDone: true,
              })
            );
            history.push("/register/CoursesSelection");
            setalert(false);
            console.log(Values);
          } else {
            setalert(true);
          }
        } else {
          Values.CollegeYear = "NA";
          Values.CompletionYear = "NA";
          Values.Branch = "NA";
          Values.Course = "NA";
          Values.Salary = "NA";
          Values.StillInCollege = "No";
          Values.Graduate = "No";
          Values.Employed = "No";
          console.log(Values);
          dispatch(
            setAcademicDetails({
              CollegeYear: Values.CollegeYear,
              Graduate: Values.Graduate,
              StillInCollege: Values.StillInCollege,
              Employed: Values.Employed,
              CompletionYear: Values.CompletionYear,
              Course: Values.Course,
              Branch: Values.Branch,
              Salary: Values.Salary,
              InterCompletionYear: Values.InterCompletionYear,
              AcademicDetailsDone: true,
            })
          );
          history.push("/register/CoursesSelection");
          setalert(false);
        }
      }
    } else {
      setalert(true);
    }
  };

  const InitialFieldValues = {
    InterCompletionYear: "",
    CollegeYear: "",
    Graduate: "",
    StillInCollege: "",
    Employed: "",
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
  useEffect(() => {
    if (Details == false) {
      history.push("/register/PersonalDetails");
    }
    if (ADetails == true) {
      Values.InterCompletionYear = Inter;
      if (SIC == "Yes") {
        Values.CollegeYear = CY;
        setCollegetrue(true);
      } else {
        setCollegefalse(true);
      }

      if (Gr == "Yes") {
        Values.CompletionYear = Yr;
        Values.Course = Course;
        Values.Branch = Branch;
        setGradtrue(true);
      } else {
        setGradfalse(true);
      }
      if (Employee == "Yes") {
        Values.Salary = CTC;
        setemployedtrue(true);
      } else {
        setemployedfalse(true);
      }
    }
  }, []);

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
                checked={Collegetrue}
                onChange={() => {
                  setCollegetrue(true);
                  setCollegefalse(false);
                }}
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
                checked={Collegefalse}
                onChange={() => {
                  setCollegefalse(true);
                  setCollegetrue(false);
                }}
              />
              No
            </label>
            {Collegetrue && (
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
                checked={Gradtrue}
                onChange={() => {
                  setGradtrue(true);
                  setGradfalse(false);
                }}
                placeholder="Yes"
              />
              Yes
              <input
                className="input_check"
                type="checkbox"
                placeholder="No"
                checked={Gradfalse}
                onChange={() => {
                  setGradtrue(false);
                  setGradfalse(true);
                }}
              />
              No
            </label>
            {Gradtrue && (
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
                checked={employedtrue}
                onChange={() => {
                  setemployedtrue(true);
                  setemployedfalse(false);
                }}
                placeholder="Yes"
              />
              Yes
              <input
                className="input_check"
                type="checkbox"
                placeholder="No"
                checked={employedfalse}
                onChange={() => {
                  setemployedtrue(false);
                  setemployedfalse(true);
                }}
              />
              No
            </label>
            {employedtrue && (
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
            <div className="button_container">
              <button
                className="form__button"
                type="submit"
                onClick={() => {
                  history.push("/register/PersonalDetails");
                }}
              >
                Back
              </button>
              <button className="form__button" type="submit" onClick={register}>
                Next
              </button>
            </div>
          </div>
        </form>
        {alert && (
          <h3 className="alert">Please Enter Complete Academic Details</h3>
        )}
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
