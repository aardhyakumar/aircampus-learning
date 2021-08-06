import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <img src="/images/logo-white.png" />
      <div className="row">
        <p className="footer-body">
          A meaningful alternative to conventional college that you wish existed
        </p>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm">&copy;{new Date().getFullYear()} by Aircampus</p>
      </div>
    </div>
  );
}

export default Footer;
