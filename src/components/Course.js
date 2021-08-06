import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Cards from "./Cards";
function Course() {
  return (
    <Container>
      <h1>COURSES</h1>
      <Cards />
      <Cards />
    </Container>
  );
}

export default Course;
const Container = styled.div`
  position: relative;
  left: 0;
  background: #e5e5e5;
  padding: 40px;
  right: 0;
  bottom: 0;
  align-items: center;
  min-height: 80vw;
  h1 {
    text-align: center;
    color: #444444;
    font-size: 5vw;
    letter-spacing:.5vw;
`;
