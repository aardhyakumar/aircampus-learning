import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InnerExercises from "./InnerExercises";
import { Link } from "react-router-dom";
import InnerExercisesWS from "./InnerExercisesWS";
import QuestionsMain from "./QuestionsMain";
function ExercisesContainer() {
  const [width, setwidth] = useState(1125);
  const handleResize = () => {
    setwidth(window.innerWidth);
    console.log(width);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
  const options = [
    {
      id: 0,
      name: "Introduction to Unix",
      Status: "Complete",
      click: "true",
    },
    {
      id: 1,
      name: "Introduction to Git",
      Status: "Complete",
      click: "false",
    },
    {
      id: 2,
      name: "Introduction to Hub",
      Status: "Incomplete",
      click: "false",
    },
  ];
  return (
    <Container>
      {width > 900 ? (
        <Sidebar>
          <h2>
            {" "}
            <Link to="/topic">
              <span className="flipV">&#10148;</span>
            </Link>
            Introduction to Unix and Shell Commands
          </h2>
          {options.map((option) => {
            return (
              <InnerExercises
                name={option.name}
                Status={option.Status}
                click={option.click}
              />
            );
          })}
        </Sidebar>
      ) : (
        <Exercises>
          <InnerExercisesWS />
        </Exercises>
      )}
      <QuestionsMain />
    </Container>
  );
}

export default ExercisesContainer;
export const Container = styled.div``;

export const Sidebar = styled.div`
  min-height: 100vh;
  background-color: #2a293e;
  width: 20vw;
  position: fixed;
  top: 6.5vw;
  z-index: 1;
  text-align: center;
  align-items: center;
  h2 {
    font-size: 1.5vw;
    padding: 2vw 1.5vw;
    margin-top: 0.5vw;
    text-align: center;
    color: white;
    font-weight: 500;
    .flipV {
      display: inline-block;
      transform: rotate(360deg) scaleX(-1);
      position: relative;
      right: 1vw;
      font-size: 2vw;
      margin: 0;
      padding: 0;
      color: white;
    }
  }
`;
export const Exercises = styled.div``;
