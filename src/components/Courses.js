import React from "react";
import { useHistory } from "react-router";
function Courses() {
  const history = useHistory();
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => {
          history.push("/AcademicDetails");
        }}
      >
        GO
      </button>
    </div>
  );
}

export default Courses;
