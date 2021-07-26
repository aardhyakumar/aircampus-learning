import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { auth, provider } from "../firebase.js";
function Header() {
  const history = useHistory();
  const logout = () => {
    auth.signOut().then(() => {
      history.push("/");
    });
  };
  return (
    <Container>
      <Link to="/home">
        <Logo>
          <img src="/images/logo-white.png" />
        </Logo>
      </Link>

      <NavMenu>
        <a>
          <span>MENU</span>
        </a>
        <a>
          <span>SEARCH</span>
        </a>
        <a>
          <span>COURSES</span>
        </a>
        <a>
          <span>ABOUT US</span>
        </a>
      </NavMenu>

      <Login onClick={logout}>
        <strong>Log Out</strong>
      </Login>
    </Container>
  );
}

export default Header;
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
  padding: 8px 15px;
  margin-right: 2vw;
  margin-left: 4vw;
  display: flex;
  position: relative;
  right: 0vw;
  overflow: hidden;
  align-items: center;
  border: 2px solid #ef6603;
  background-color: #444444;
  letter-spacing: 1.2px;
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
