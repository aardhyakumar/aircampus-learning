import { SelectAllRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function InnerExercisesWS() {
  const [Selected, setSelected] = useState(0);
  const [DisabledPrev, setDisabledPrev] = useState(false);
  const [DisabledNext, setDisabledNext] = useState(false);
  const setPrevious = () => {
    options.forEach((element) => {
      setDisabledNext(false);
      if (Selected === element.name) {
        if (element.id > 0) {
          setSelected(options[element.id - 1].name);
        } else {
          setDisabledPrev(true);
        }
      }
    });
  };
  const setNext = () => {
    setDisabledPrev(false);
    options.forEach((element) => {
      if (Selected === element.name) {
        if (
          element.id <= options.length - 1 &&
          element.id + 1 <= options.length - 1
        ) {
          setSelected(options[element.id + 1].name);
        } else {
          setDisabledNext(true);
        }
      }
    });
  };
  const options = [
    {
      id: 0,
      name: "Introduction to Unix",
      Status: "Complete",
    },
    {
      id: 1,
      name: "Introduction to Git",
      Status: "Complete",
    },
    {
      id: 2,
      name: "Introduction to Hub",
      Status: "Incomplete",
    },
  ];
  useEffect(() => {
    setSelected(options[0].name);
  }, []);
  return (
    <Container>
      <h2>
        <Link to="/topic" style={{ textDecoration: "none", color: "#ef6603" }}>
          <span className="flipV">&#129064;</span>
        </Link>
        Introduction to Unix and Shell Commands
      </h2>
      <SelectOption>
        <h5>EXERCISES:</h5>
        <select
          className="select"
          value={Selected}
          onChange={(e) => {
            setSelected(e.target.value);
            console.log("click");
          }}
        >
          {options.map((optioned) => {
            return (
              <option value={optioned.name} className="select_options">
                {optioned.Status === "Complete" ? "☑" : "☐"} {optioned.name}
              </option>
            );
          })}
        </select>
        <div className="select_buttons">
          <button
            className={DisabledPrev ? "dis" : "not-dis"}
            onClick={setPrevious}
            disabled={DisabledPrev}
          >
            Previous Exercise
          </button>
          <button
            className={DisabledNext ? "dis" : "not-dis"}
            onClick={setNext}
            disabled={DisabledNext}
          >
            Next Exercise
          </button>
        </div>
      </SelectOption>
    </Container>
  );
}

export default InnerExercisesWS;
const Container = styled.div`
  padding: 2vw 2.5vw;
  position: relative;
  top: 9.5vw;
  align-items: center;
  h2 {
    align-items: center;
    font-size: 3.2vw;
    display: flex;
    justify-content: flex-start;
    color: #ef6603;
    right: 8vw;
    .flipV {
      position: relative;
      right: 1vw;
      font-size: 4vw;
      font-weight: 800;
      margin: 0;
      padding: 0;
    }
  }
`;
const SelectOption = styled.div`
  margin-top: 2.5vw;
  h5 {
    margin-bottom: 2vw;
    font-size: 2vw;
    color: #4a5568;
  }
  .select {
    padding: 1.5vw 1.2vw;
    width: 100%;
    color: #4a5568;
    font-size: 1.5vw !important;
    background-color: #e6ebf1;
    border-radius: 1px;
    border: 1px solid #e6ebf1;
    .select_options {
      padding: 1.5vw 1.2vw;
    }
  }
  .select_buttons {
    justify-content: space-between;
    display: flex;
    margin-top: 3vw;
    padding: 0 2vw;
    .dis {
      cursor: not-allowed;
      opacity: 0.5;
    }
    button {
      border-radius: 4px;
      font-size: 1.1vw;
      font-weight: 700 !important;
      padding: 1.1vw 1.2vw;
      background-color: white;
      color: #ef6603;
      border: 1.5px solid #ef6603;
      &:hover {
        background-color: #ef6603;
        color: white;
        transition: 0.4s;
      }
    }
  }
`;
