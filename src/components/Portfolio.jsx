import React from "react";
import Project from "../elements/Project";
import banklet from "../asset/Banklet.jpg";
import ytdownload from "../asset/ytdownload.jpg";
import rkPortfolio from "../asset/ramkrishnajena.JPG";
import "./styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="works">
      <div className="portfolio" id="portfolio">
        <h4>My Projects</h4>
        <div className="portfolio__projects">
          <Project
            image={banklet}
            alt="web"
            tech="HTML, CSS, Js"
            link="https://github.com/ramkrishnajena/banklet"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image={ytdownload}
            alt="web"
            tech="HTML,CSS,JS"
            link="https://github.com/ramkrishnajena/yt-downloader"
            about="YT Downloader"
            sclass="at-item"
          />
          <Project
            image={rkPortfolio}
            alt="web"
            tech="REACT"
            link="https://github.com/ramkrishnajena/ramkrishnajena"
            about="Ramkrishna Jena - Portfolio Websites"
            sclass="at-item"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
