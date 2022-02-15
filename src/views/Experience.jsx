import React from "react";
import { Item } from "../components/Item/Item";
import { experience } from "../constants/experience";
const Experience = () => {
  return (
    <div>
      {experience.reverse().map((e) => {
        return <Item data={e} key={e.id} />;
      })}
    </div>
  );
};

export default Experience;
