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
  SiMaterialui,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiSlack,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { VTEXIcon } from "../components/VTEXIcon";
const Skills = () => {
  return (
    <div>
      <Skill title="Front End">
        <SiHtml5 />
        <SiCss3 />
        <FaSass />
        <SiJavascript />
        <SiReact />
        <SiTailwindcss />
        <SiMaterialui />
      </Skill>
      <Skill title="Back End">
        <SiNodedotjs />
        <SiExpress />
        <SiMysql />
        <SiMicrosoftsqlserver />
        <SiFirebase />
      </Skill>
      <Skill title="Extras">
        <VTEXIcon />
        <SiGithub />
        <SiSlack />
      </Skill>
    </div>
  );
};

export default Skills;
