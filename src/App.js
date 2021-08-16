import React from "react";
import { Redirect } from "react-router-dom";
import HeaderEnroll from "./components/HeaderEnroll";
import "./css/App.css";
import Header from "./components/Header";
import EnrollMain from "./components/EnrollMain";
import Register from "./components/Register";
import firebase from "firebase/app";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Headersi from "./components/Headersi";
import LoginBody from "./components/LoginBody";
import RegisterBody from "./components/RegisterBody";
import ForgotPassword from "./components/ForgotPassword";
import { useEffect } from "react";
import { auth, provider } from "./firebase.js";
import Home from "./components/Home";
import Course from "./components/Course";
import Footer from "./components/Footer";
import AcademicDetails from "./components/AcademicDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Headersi />
            <LoginBody />
          </Route>
          <Route path="/register">
            <Headersi />
            <RegisterBody />
          </Route>
          <Route path="/AcademicDetails">
            <Headersi />
            <AcademicDetails />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
            <Course />
            <Footer />
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
