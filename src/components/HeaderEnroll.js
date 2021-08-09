import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, dbRef, provider } from "../firebase.js";
import { useDispatch } from "react-redux";
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
function HeaderEnroll() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userPhoto = useSelector(selectUserPhoto);
  const useremail = useSelector(selectUserEmail);
  const newUser = useSelector(selectisNewUser);
  console.log(newUser);
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };
  var checkUser = useSelector(selectUserName);
  const [User, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")).name);
    console.log(checkUser);
  }, []);
  return (
    <Container>
      <Link to="/home">
        <Logo>
          <img src="/images/logo-white.png" />
        </Logo>
      </Link>

      <NavMenu>
        <a>
          <span>Home</span>
        </a>

        <a>
          <span>Courses</span>
        </a>
        <a>
          <span>About Us</span>
        </a>
      </NavMenu>
      <InfoBox>
        <p className="welcome">Hello</p>
        <p>{checkUser ? checkUser : User}</p>
      </InfoBox>

      {userPhoto ? (
        <img src={userPhoto} className="user_avatar" />
      ) : (
        <img src="/images/user-avatar.png" className="user_avatar" />
      )}
      <Login onClick={logout}>
        <strong>Log Out</strong>
      </Login>
    </Container>
  );
}

export default HeaderEnroll;
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  background-color: #2a2c39e6;
  right: 0;
  height: 85px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 12px;
  z-index: 1;
  .user_avatar {
    height: 40px;
    border: 2px solid white;
    border-radius: 20px;
    background-color: lightgray;
    position: relative;
    right: 1vw;
  }
`;
const Logo = styled.a`
  padding: 0;
  margin-bottom: 15px;
  cursor: pointer;
  width: 70px;
  color: white;
  max-height: 120px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 180%;
  }
  &:hover {
    opacity: 0.5;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  color: #f9f9f9;
  flex: 0.8;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-start;
  margin: 10px;
  padding: 0px;
  position: relative;
  left: 5vw;
  a {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      font-size: 14px;
      font-weight: 600 !important;
      letter-spacing: 1px;
      color: #f9f9f9;
      line-height: 1.2;
      padding: 4px 10px;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: #ef6603;
        border-radius: 0px 0px 4px 4px;
        bottom: -2px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(0.8);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Login = styled.a`
  padding: 8px 1vw;
  display: flex;
  position: relative;
  right: 1vw;
  overflow: hidden;
  align-items: center;
  border: 2px solid #ef6603;
  background-color: #444444;
  letter-spacing: 1px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    color: white;
    border: 2px solid #ef6603;
    transition: 0.6s;
    box-shadow: 0px 0px 10px 1px #ef6603;
    background-color: #ef6603;
  }
`;
const SearchBar = styled.div`
  background-color: white;
  align-items: center;
  border-radius: 18px;
  display: flex;
  flex: 0.5;
  border: 2px solid darkgray;
  color: gray;
  .search_icon {
    align-items: center;
    position: relative;
    top: 0px;
    right: -12vw;
  }

  input {
    border: none;
    padding: 10px;
    border-radius: 24px;
  }
`;
const InfoBox = styled.div`
  width: 7vw;
  position: relative;
  .welcome {
    position: relative;
    margin-bottom: 1vh;
    top: 0;
    right: 4vw;
    border: none;
    bottom: 4vh;
    color: white;
    font-size: 1.5vw;
  }
  p {
    position: relative;
    letter-spacing: 1px;
    font-size: 0.8vw;
    color: #f9f9f9;
    left: 1vw;
    margin: 0;
    border-top: 2px solid #ef6603;
  }
`;
