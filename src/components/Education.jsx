import React from "react";

const Education = ({ year, course, collage, score }) => {
  return (
    <div className="education__details">
      <p>{year}</p>
      <p>{course}</p>
      <p>{collage}</p>
    </div>
  );
};

export default Education;
