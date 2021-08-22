import React from "react";
import HeaderEnroll from "./components/HeaderEnroll";
import "./css/App.css";
import Header from "./components/Header";
import EnrollMain from "./components/EnrollMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Headersi from "./components/Headersi";
import LoginBody from "./components/LoginBody";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Course from "./components/Course";
import Footer from "./components/Footer";
import AcademicDetails from "./components/RegisterComponent/AcademicDetails";
import CoursesSelection from "./components/RegisterComponent/CoursesSelection";
import PersonalDetails from "./components/RegisterComponent/PersonalDetails";
import Module from "./components/Module";
import ModuleContainer from "./components/ModuleContainer";
import InnerMain from "./components/InnerModules/InnerMain";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Headersi />
            <LoginBody />
          </Route>
          <Route path="/register/PersonalDetails">
            <Headersi />
            <PersonalDetails />
          </Route>
          <Route path="/register/AcademicDetails">
            <Headersi />
            <AcademicDetails />
          </Route>
          <Route path="/register/CoursesSelection">
            <Headersi />
            <CoursesSelection />
          </Route>
          <Route exact path="/home">
            <Header />
            <InnerMain />
          </Route>
          <Route path="/passwordreset">
            <Headersi />
            <ForgotPassword />
          </Route>
          <Route path="/Enroll">
            <HeaderEnroll />
            <EnrollMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
