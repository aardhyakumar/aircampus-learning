import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../css/InnerExercises.css";
function InnerExercises({ name, Status, click }) {
  const [Done, setDone] = useState(false);
  useEffect(() => {
    if (Status === "Complete") {
      setDone(true);
    }
    if (click === "true") {
      setExercises(true);
    }
  }, []);
  const [Exercises, setExercises] = useState(false);
  const modules = () => {
    setExercises(!Exercises);
  };
  return (
    <div onClick={modules} className={Exercises ? "clicked" : "not-clicked"}>
      <Container>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={Done ? "non-colored" : "colored"}
        />
        <h2>{name}</h2>
      </Container>
    </div>
  );
}

export default InnerExercises;
const Container = styled.div`
  min-height: 4vw;
  display: flex;
  padding: 1vw 1vw;
  align-items: center;
  h2 {
    padding: 0.5vw 0.5vw !important;
    margin: 0 !important;
    font-size: 1.2vw !important;
  }
  .colored {
    margin-right: 1vw;
    color: white;
    width: 2vw;
    height: 2vw;
  }
  .non-colored {
    margin-right: 1vw;
    color: green;
    width: 2vw;
    height: 2vw;
  }
`;
