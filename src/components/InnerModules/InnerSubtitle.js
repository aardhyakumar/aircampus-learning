import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function InnerSubtitle({ Completed }) {
  const [Done, setDone] = useState(false);
  useEffect(() => {
    if (Completed == "true") {
      setDone(true);
    }
  }, []);
  return (
    <Container>
      <Subtitle>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={Done ? "colored" : "noncolored"}
        />
        <h2>Introduction to Unix</h2>
      </Subtitle>
    </Container>
  );
}

export default InnerSubtitle;
export const Container = styled.div`
  min-height: 4.5vw;
  background-color: #e6ebf1;
  padding: 1.4vw 2.8vw;
  width: 100%;
  border-bottom: 1.5px solid #cbd5e0;
`;
export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  h2 {
    padding-top: 0.5vw;
    margin-left: 2vw;
    font-size: 2vw;
    color: #718096;
  }
  .colored {
    color: green;
    width: 2vw;
    height: 2vw;
  }
  .noncolored {
    color: gray;
    width: 2vw;
    height: 2vw;
  }
  @media only screen and (max-width: 740px) {
    h1 {
      padding-top: 1vw !important;
    }
  }
`;
