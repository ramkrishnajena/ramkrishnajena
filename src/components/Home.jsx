import React from "react";
// import photo from "../asset/profilephoto.png";
import "./styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homepage" id="home">
      <div className="home">
        <div className="home__contacts">
          <p>+91-7008799608</p>
          <p>+91-7852999606</p>
          <p>contact@ramkrishnajena.com</p>
        </div>
        <div className="home__left">
          <p>Hello, My name is</p>
          <h3>Ramkrishna Jena</h3>
          <div className="home__left--status animation-home">Web Developer</div>
          <div className="home__left--btn">
            <p>Download CV</p>
          </div>
        </div>
        <div className="home__right"></div>
      </div>
    </section>
  );
};

export default Home;
