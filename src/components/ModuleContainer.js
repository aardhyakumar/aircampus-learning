import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Module from "./Module";
function ModuleContainer() {
  const [modules, setmodules] = useState({});
  useEffect(() => {
    axios.get("http://localhost:9002/v0.1/modules").then((res) => {
      const modules = res.data.fullstackwebdevelopment.One;
      console.log(modules.Name);
      setmodules(modules);
    }, []);
  });
  const heding = "HTML and CSS ";
  const desc = "The Power of Git";
  const st = "Locked";
  return (
    <Container>
      <h1>Full Stack Web Development &rarr;</h1>
      <Module Name={heding} Description={desc} Status="Ongoing" />
      <Module Name={heding} Description={desc} Status={st} />
      <Module Name={heding} Description={desc} Status={st} />
    </Container>
  );
}

export default ModuleContainer;
const Container = styled.div`
  min-height: 60vh;
  padding: 3vw;
  background-color: white;
  align-items: center;
  h1 {
    color: #ef6603;
    margin-bottom: 6vw;
    padding-top: 4vh;
    margin-top: 4vw;
    margin-left: 3vw;
    font-size: 3vw;
  }
`;
