import React, { Component } from "react";
import "../css/card-style.css";
import Card from "./Card";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="md-col-4">
            <Card
              imgsrc="/images/mern.jpg"
              title="Full Stack Web Development"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
