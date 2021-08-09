import React from "react";
import "./card-style.css";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src="/images/mern.jpg" class="card__img" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere esse
          natus dolore placeat neque quisquam dolor cumque animi est vitae!
        </p>
        <Link to="/Enroll">
          <button className="card__btn">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
