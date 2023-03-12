import React from "react";
import Project from "../elements/Project";
import "./styles/portfolio.css";
import { projectData } from "../projectData/ProjectsDetails";
// let activePage = useContext(useMenuContext); // added to padd the portfolio data in future

const Portfolio = () => {
  return (
    <section className="works">
      <div className="portfolio" id="portfolio">
        <h4>My Projects</h4>
        <div className="portfolio__projects">
          {projectData.map((data) => {
            return (
              <Project
                key={data.id}
                image={data.imageUrl}
                alt={data.altTag}
                tech={data.tech}
                link={data.pageUrl}
                about={data.about}
                sclass="at-item"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
