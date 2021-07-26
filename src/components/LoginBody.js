import React from "react";
import styled from "styled-components";
import Login from "./Login.js";
import Logintest from "./Logintest.js";
import Register from "./Register.js";
function Body() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

export default Body;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 130vh;
  font-family: "Montserrat", sans-serif;
`;
