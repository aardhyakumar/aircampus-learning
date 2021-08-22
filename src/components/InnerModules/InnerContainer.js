import React from "react";
import styled from "styled-components";
import InnerSubtitle from "./InnerSubtitle";
function InnerContainer() {
  return (
    <Container>
      <Heading>
        <h1 className="heding-sub">Introduction to Unix and Shell Commands</h1>
      </Heading>
      <InnerSubtitle Completed="true" />
      <InnerSubtitle Completed="true" />
      <InnerSubtitle Completed="false" />
    </Container>
  );
}

export default InnerContainer;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  border: 1.5px solid #cbd5e0;
  margin-bottom: 7vw;
  border-radius: 6px;
  @media only screen and (max-width: 740px) {
    margin-bottom: 10vw !important;
  }
`;
export const Heading = styled.div`
  width: 100%;
  border-radius: 6px 6px 0 0;
  background-color: white;
  border-bottom: 1.5px solid #cbd5e0;
  height: 6vw;
  padding: 1.5vw 2vw;
  .heding-sub {
    color: #32325d;
  }
  h1 {
    font-size: 2.5vw !important;
  }
  z-index: 0;
  @media only screen and (max-width: 740px) {
    h1 {
      margin-top: 0.5vw;
    }
  }
`;
