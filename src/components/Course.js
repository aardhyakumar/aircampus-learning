import React from "react";
import styled from "styled-components";
import Card from "./Card";
function Course() {
  return (
    <Container>
      <h1>Courses</h1>
      <Card />
    </Container>
  );
}

export default Course;
const Container = styled.div`
  position: relative;
  left: 0;
  background: linear-gradient(0deg, #444444 0%, #33364a 100%);
  padding: 40px;
  right: 0;
  bottom: 0;
  height: 50vw;
  h1 {
    text-align: center;
    color: white;
    font-size: 4vw;
  }
`;
