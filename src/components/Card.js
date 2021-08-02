import React from "react";
import "./card-style.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="" alt="Mern Image" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h3 className="card-title">title</h3>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse
          natus dolore placeat neque quisquam dolor cumque animi est vitae!
        </p>
        <a href="#" className="btn btn-outline-success">
          Enroll Now!
        </a>
      </div>
    </div>
  );
};

export default Card;
