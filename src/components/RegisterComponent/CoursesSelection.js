import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import styled from "styled-components";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  selectCourseDetailsDone,
  selectCourseSelected,
  setCourseDetails,
  selectAcademicDetailsDone,
} from "../../features/userRegister.js/userRegisterSlice";
import "../../css/Login.css";
import { useSelector } from "react-redux";
function CoursesSelection() {
  const history = useHistory();
  const CDetails = useSelector(selectCourseDetailsDone);
  const CourseRedux = useSelector(selectCourseSelected);
  const ADetails = useSelector(selectAcademicDetailsDone);
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();

    if (Course !== "") {
      dispatch(
        setCourseDetails({
          CourseSelected: Course,
          CourseDetailsDone: true,
        })
      );
    } else {
      setcontrol(true);
    }
  };
  const Courses = ["Software Engineering 2.0", "MBA 2.0", "Tech Sales"];
  const [control, setcontrol] = useState(false);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [Course, setCourse] = useState("");
  useEffect(() => {
    if (CDetails == true) {
      setCourse(CourseRedux);
    }
    if (ADetails == false) {
      history.push("/register/PersonalDetails");
    }
  }, []);
  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  return (
    <Container>
      <div className="container">
        <form className="form" id="login">
          <h2 className="personal_det">Course Selection</h2>
          <div className="form">
            <h4 className="dropdown">
              Please select a Course from the following dropdwon below
            </h4>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Courses</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Course}
                onChange={handleChange}
              >
                {Courses.map(function (Course) {
                  return <MenuItem value={Course}>{Course}</MenuItem>;
                })}
              </Select>
            </FormControl>
            {Course && (
              <h5 className="dropdown_msg">
                You have selected:<strong className="selected">{Course}</strong>
              </h5>
            )}
          </div>
          <div className="button_container_course">
            <button
              className="form__button"
              onClick={() => {
                history.push("/register/AcademicDetails");
                dispatch(
                  setCourseDetails({
                    CourseSelected: Course,
                    CourseDetailsDone: true,
                  })
                );
              }}
            >
              Back
            </button>
            <button className="form__button_register" onClick={register}>
              Register Now
            </button>
          </div>
          {control && (
            <h3 className="alert">Please Select a Course Before Registering</h3>
          )}
        </form>
      </div>
    </Container>
  );
}

export default CoursesSelection;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 140vh;
`;
