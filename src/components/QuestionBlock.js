import styled from "styled-components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function QuestionBlock() {
  const [Done, setDone] = useState(false);
  const a = [];
  for (let index = 0; index < 3; index++) {
    a[index] = index + 1;
  }
  return (
    <Blocks>
      {a.map((block) => {
        return (
          <Block>
            <a>
              {" "}
              <FontAwesomeIcon
                className={Done ? "colored" : "non-colored"}
                icon={faCheckCircle}
              />
              Exercise {block}
            </a>
          </Block>
        );
      })}
    </Blocks>
  );
}

export default QuestionBlock;
const Block = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  border: 1px solid white;
  z-index: 0;
  a {
    font-size: 1.5vw;
    padding: 0.7vw 0vw;
    margin: 0;
    color: #21396a;
    .colored {
      margin-right: 1vw;
    }
    .non-colored {
      margin-right: 1vw;
    }
  }
`;
const Blocks = styled.div`
  height: 4vw;
  position: relative;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  left: 8vw;
  top: 8vw;
  border-radius: 8px;
  z-index: 1;
`;
