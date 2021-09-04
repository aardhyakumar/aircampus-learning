import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import InnerContainer from "./InnerContainer";
function InnerMain() {
  const history = useHistory();
  return (
    <Container>
      <h1 className="heding">
        <strong
          onClick={() => {
            history.push("/home");
          }}
        >
          &larr;
        </strong>
        Unix & Git
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
  margin-bottom: 10vw;
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
    .heding {
      margin-top: 3vw;
    }
  }
`;
