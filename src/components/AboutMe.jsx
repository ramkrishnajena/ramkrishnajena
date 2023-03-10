import { FacebookOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import profilePhoto from "../asset/profilephoto.png";
import "./styles/aboutme.css";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <div className="about" id="about">
        <div className="about__photo">
          <div className="about__img">
            <img src={profilePhoto} alt="myphoto" />
          </div>
          <div className="about__photo--social__icons">
            <a href="https://github.com/ramkrishnajena">
              <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/ramkrishnajena/">
              <LinkedIn />
            </a>
            <a href="https://www.facebook.com/akaramkrishnajena/">
              <FacebookOutlined />
            </a>
          </div>
        </div>
        <div className="about__desc">
          <h4>About Me</h4>
          <p className="about__desc--para">
            I am an experienced front-end web developer with extensive knowledge
            of HTML, CSS, and JavaScript, as well as proficiency in Bootstrap 5,
            Tailwind CSS, and ReactJS. I possess a strong sense of design
            aesthetics and a deep understanding of user experience, enabling me
            to create visually captivating and responsive websites that keep
            users engaged. My expertise in modern web development technologies
            allows me to develop scalable and efficient code.
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
