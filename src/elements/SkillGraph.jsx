import React from "react";

const SkillGraph = ({ rate, name }) => {
  return (
    <div className="skill--graph">
      <p>{name}</p>
      <div className="skill--bar">
        <div
          style={{
            width: `${rate}%`,
            height: "12px",
            background: "#f99417",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillGraph;
