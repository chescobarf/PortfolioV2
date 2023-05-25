import React from "react";
import Skill from "../components/Skill/Skill";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiMysql,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiSlack,
} from "react-icons/si";
import { FaSass, FaVuejs, FaNpm } from "react-icons/fa";
import { VTEXIcon } from "../components/VTEXIcon";
import { ModyoIcon } from "../components/ModyoIcon";
const Skills = () => {
  return (
    <div>
      <Skill title="Front End">
        <FaVuejs/>
        <SiReact />
        <SiJavascript />
        <SiTailwindcss />
        <SiHtml5 />
        <SiCss3 />
        <FaSass />
      </Skill>
      <Skill title="Back End">
        <SiNodedotjs />
        <SiExpress />
        <SiMysql />
        <SiMicrosoftsqlserver />
        <SiFirebase />
      </Skill>
      <Skill title="Extras">
        <FaNpm/>
        <ModyoIcon />
        <VTEXIcon />
        <SiGithub />
        <SiSlack />
      </Skill>
    </div>
  );
};

export default Skills;
