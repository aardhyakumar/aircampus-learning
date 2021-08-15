import React from "react";
import styled from "styled-components";
import PersonalDetails from "./PersonalDetails.js";
import Register from "./Register.js";
import RegisterOld from "./RegisterOld.js";
function RegisterBody() {
  return (
    <Container>
      <PersonalDetails />
    </Container>
  );
}

export default RegisterBody;
const Container = styled.nav`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #2a2c39 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 160vh;
`;
