import React from "react";
import "./App.css";
import Header from "./components/Header";
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
function App() {
  const history = useHistory();
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
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/passwordreset">
            <Headersi />
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
