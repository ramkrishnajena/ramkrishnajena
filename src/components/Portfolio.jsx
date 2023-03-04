import React from "react";
import Project from "../elements/Project";
import "./styles/portfolio.css";

const Portfolio = () => {
  return (
    <section className="works">
      <div className="portfolio" id="portfolio">
        <h4>My Projects</h4>
        <div className="portfolio__projects ">
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML, CSS, Js"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML,CSS, Js"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
          <Project
            image="https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg"
            alt="web"
            tech="HTML"
            link="#"
            about="Banklet - Banking app for user"
            sclass="at-item"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
