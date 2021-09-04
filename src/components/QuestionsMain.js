import React from "react";
import styled from "styled-components";
import QuestionBlock from "./QuestionBlock";
function QuestionsMain() {
  const n = 5;
  return (
    <Container>
      <QuestionBlock />
    </Container>
  );
}

export default QuestionsMain;
const Container = styled.div`
  min-height: 20vw;
  position: relative;
  top: 8.5vw;
  width: 80vw;
  align-items: center;
  left: 20vw;
  z-index: 0;
`;
