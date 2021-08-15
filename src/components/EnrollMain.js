import React from "react";
import "../css/Enroll.css";
function EnrollMain() {
  return (
    <div className="big">
      <section className="">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="Images/laptop.jpg"
                alt="First slide"
                width="800"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="Images/webdesign.jpg"
                alt="Second slide"
                width="800"
                height="500"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="Images/website.jpg"
                alt="Third slide"
                width="800"
                height="500"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light" id="about">
        <div className="cont">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">
                About the course
              </h3>
              <p className="mt-4 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="" id="destinations">
        <div className="cont">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">
                This course includes
              </h3>
              <li>on-demand video</li>
              <li>20 articles</li>
              <li>Full lifetime access</li>
              <li>Access on mobile </li>
              <li>Certificate of completion</li>
            </div>
          </div>

          <div className="center">
            <a href="#" className="btn btn-primary">
              Enroll now!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnrollMain;
