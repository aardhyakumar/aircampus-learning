import React from "react";
import styled from "styled-components";
import InnerContainer from "./InnerContainer";
function InnerMain() {
  return (
    <Container>
      <h1 className="heding">
        <strong>&larr;</strong>Unix & Git
      </h1>
      <InnerContainer />
      <InnerContainer />
    </Container>
  );
}

export default InnerMain;
export const Container = styled.div`
  background-color: white;
  padding: 3vw 6vw;
  position: relative;
  align-items: center;
  top: 8.5vw;
  .heding {
    color: #ef6603;
    font-size: 3vw;
    padding-left: 1vw;
    margin-bottom: 5vw;
  }
  strong {
    align-items: center;
    position: relative;
    bottom: 0.4vw;
    margin-right: 1.5vw;
    cursor: pointer;
    font-weight: bold;
  }
  @media only screen and (max-width: 740px) {
    padding: 4vw 9vw;
    h1 {
      font-size: 3.5vw;
    }
  }
`;
