import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Headersi() {
  return (
    <Container>
      <Logo>
        <img src="/images/logo-white.png" />
      </Logo>
      <Link to="/register/PersonalDetails">
        <SignUp>
          <strong>Sign Up</strong>
        </SignUp>
      </Link>
      <Link to="/">
        <Login>
          <strong>Log In</strong>
        </Login>
      </Link>
    </Container>
  );
}

export default Headersi;
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2a2c39e6;
  right: 0;
  height: 75px;
  padding: 20px;
  display: flex;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 12px;
  z-index: 1;
`;
const Login = styled.a`
  padding: 8px 15px;
  margin-right: 2vw;
  margin-left: 4vw;
  display: flex;
  position: relative;
  right: -60vw;
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
const Logo = styled.a`
  padding: 0;
  margin-bottom: 9px;
  cursor: pointer;
  margin-left: 4vw;
  width: 80px;
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
const SignUp = styled.a`
  padding: 8px 15px;
  margin-right: 10px;
  margin-left: 4vw;
  overflow: hidden;
  align-items: center;
  display: flex;
  border: 2px solid #ef6603;
  position: relative;
  right: -62vw;
  background-color: #ef6603;
  letter-spacing: 1.2px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  &:hover {
    color: white;
    border-radius: 10px;
    border: 2px solid #ef6603;
    transition: 0.6s;
    box-shadow: 0px 0px 10px 1px #ef6603;
    background-color: #444444;
  }
`;
