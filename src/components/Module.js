import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
function Module({ Name, Description, Status }) {
  const name = Name;
  const description = Description;
  const [Locked, setLocked] = useState(false);
  useEffect(() => {
    if (Status == "Ongoing") {
      setLocked(false);
    } else {
      setLocked(true);
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src="https://try.altcampus.school/images/icons/computer3.svg" />
        <Heading>
          {name && <h3>{name}</h3>}
          {description && <p>{description}</p>}
        </Heading>
      </Content>
      <Button>
        {Locked == true ? (
          <button className="button__locked">Locked 🔒</button>
        ) : (
          <button>Start</button>
        )}
      </Button>
    </Container>
  );
}

export default Module;
const Container = styled.div`
  align-items: center;
  --tw-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: #e2e8f0;
  margin: auto;
  width: 60vw;
  height: 32vh;
  border-radius: 0.5rem;
  max-width: 52rem;
  margin-top: 3vw;
  margin-bottom: 3vw;
  @media only screen and (max-width: 900px) {
    height: 22vh;
    margin-top: 8vw;
    margin-bottom: 8vw;
    width: 70vw;
  }
`;
const Content = styled.div`
  display: flex;
  padding: 1.5rem;
  background-color: #e2e8f0;
  border-radius: 0.5rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    margin-right: 1.5rem;
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#E2E8F0;
  h3 {
    font-size: 4vh;
    letter-spacing: 0em;
}
p{
    margin-top:.5rem;
    margin-bottom:0;
    font-size: 2vh;
    font-weight:bold;
    color:#718096;
}
  }
  @media only screen and (max-width: 900px) {
h3{
  font-size:3vh;

}
p{
  font-size:1.8vh;
  font-weight:800;
}
  }
`;
const Button = styled.div`
  background-color: #e2e8f0;
  display: flex;
  padding: 0.5rem;
  margin: auto;
  margin-top: 2vw;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  border-radius: 0.5rem;
  button {
    border-radius: 0.2rem;
    padding-right: 3vw;
    padding-left: 3vw;
    padding-top: 0.6rem;
    background-color: #ef6603;
    border: none;
    padding-bottom: 0.5rem;
    margin-right: 2vw;
    &:hover {
      background-color: #444444;
      transition: 0.4s;
    }
  }

  .button__locked {
    border-radius: 0.2rem;
    padding-right: 2vw;
    padding-left: 2vw;
    padding-top: 0.6rem;
    background-color: white;
    border: 1px solid #ef6603;
    color: #ef6603;
    padding-bottom: 0.5rem;
    margin-right: 2vw;
    &:hover {
      background-color: #ef6603;
      color: white;
      transition: 0.4s;
    }
  }
`;
