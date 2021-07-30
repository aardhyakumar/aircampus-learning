import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import firebase from "firebase";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
  selectUserPassword,
  selectisNewUser,
} from "../features/user/userSlice";
import { auth, dbRef, provider } from "../firebase.js";
function Home() {
  const newUser = useSelector(selectisNewUser);
  console.log(newUser);
  return (
    <Container>
      {newUser == true ? (
        <Banner>
          <Banner_left>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=qdpXxGPqW-Y"
              controls="true"
              className="react-player"
              width="100%"
              height="100%"
              playsinline="true"
            />
          </Banner_left>
          <Banner_right>
            <h1 className="heding_new">
              The <span>Journey </span>to your
            </h1>
            <h2 className="heding">
              <span>Successful</span> Career starts with
            </h2>
            <h2>
              <span>Us</span>
            </h2>
            <Button>Click on the video to learn more</Button>
          </Banner_right>
        </Banner>
      ) : (
        <Banner></Banner>
      )}
    </Container>
  );
}

export default Home;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 110vh;
`;
const Banner = styled.div`
  position: relative;
  left: 0;
  background: #444444;
  font-family: "Montserrat", sans-serif;
  padding: 40px;
  right: 0;
  top: 90px;
  bottom: 0;
  height: 70vh;
  box-shadow: 5px 5px 60px #444444;
`;
const Banner_left = styled.div`
  width: 50%;
  position: absolute;
  bottom: 0px;
  left: 0;
  background: white;
  padding: 0px;
  height: 70vh;
`;
const Banner_right = styled.div`
  width: 50%;
  position: absolute;
  color: #f9f9f9;
  bottom: 0;
  left: 50%;
  background: black;
  padding: 10px;
  height: 70vh;

  h1 {
    text-align: left;
    margin-left: 7%;
    margin-top: 10%;
    margin-bottom: 0px;
    color: white;
    letter-spacing: 2px;

    transition: 0.4s;
    font-size: 20px;
  }
  span {
    text-align: left;
    margin-top: 14%;
    margin-bottom: 0px;
    color: #ef6603;
    letter-spacing: 2px;

    transition: 0.4s;
    font-size: 44px;
  }
  h2 {
    text-align: left;
    margin-top: 5%;
    margin-left: 7%;
    color: white;
    font-weight: 800;

    letter-spacing: 1.5px;
    font-size: 20px;
  }
`;
const Button = styled.a`
  align-items: center;
  position: relative;
  left: 30%;
  top: 8%;
  padding: 15px;
  border-radius: 24px;
  cursor: pointer;
  border: 2px solid white;
  color: white;
  &:hover {
    background-color: #ef6603;
    transition: 0.4s;
    opacity: 0.8;
    color: black;
    border: 2px solid black;
  }
`;
