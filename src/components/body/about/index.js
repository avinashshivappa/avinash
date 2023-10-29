import React from "react";
import "./about.css";
import coding from "../../../assets/coding.png"
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋🏻, I am <br />
          <span className="info-name">Avinash S</span>.<br />I love
          experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={coding}
            className="picture"
            alt="img"
          />
        </div>
      </div>
      <SocialContact/>
    </div>
  );
}

export default About;
