import React, { useContext } from "react";
import Education from "../elements/Education";
import SkillGraph from "../elements/SkillGraph";
import "./styles/skill.css";
import { useMenuContext } from "../context/useMenuContext";

const Skill = () => {
  return (
    <section className="skill" id="education">
      <div className="skill--details" id="skill">
        <h3>Education & Skill</h3>
        <div className="skill__education">
          <div className="education">
            <Education
              year="2016-2019"
              course="B.Tech In EEE"
              collage="Kalam Institute of Technology"
            />
            <Education
              year="2013-2016"
              course="Diploma in EE"
              collage="Aum Sai Institute of Technical Edu."
            />
            <Education
              year="2013-2016"
              course="Matriculation"
              collage="Jahada High School Jahada"
            />
          </div>
          <div className="technical--skill">
            <SkillGraph rate="70" name="React JS" />
            <SkillGraph rate="80" name="Javascript" />
            <SkillGraph rate="90" name="Bootstarp" />
            <SkillGraph rate="90" name="HTML" />
            <SkillGraph rate="80" name="CSS" />
            <div className="learning ">
              Learning<span className=" at-item">....</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
