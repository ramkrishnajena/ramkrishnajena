import React from "react";

const Project = ({ image, alt, tech, link, about, sclass }) => {
  return (
    <div className="project--details">
      <img src={image} alt={alt} className={sclass} />
      <div className="project__description">
        <div className="project__tech">
          <p>{about}</p>
          <p>{tech}</p>
          <p>View{link}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
