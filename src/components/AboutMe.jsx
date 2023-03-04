import { FacebookOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";

import profilrPhoto from "../asset/profilephoto.png";
import "./styles/aboutme.css";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="about" id="about">
        <div className="about__photo">
          <div className="about__img">
            <img src={profilrPhoto} alt="myphoto" />
          </div>
          <div className="about__photo--social__icons">
            <FacebookOutlined />
            <LinkedIn />
            <GitHub />
          </div>
        </div>
        <div className="about__desc">
          <h4>About Me</h4>
          <p className="about__desc--para">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences. I'm a Freelancer Front-end Developer
            with over 3 years of experience. I'm from San Francisco. I code and
            create web elements for amazing people around the world. I like work
            with new people. New people new Experiences.
          </p>
          <div className="about__desc--details">
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
