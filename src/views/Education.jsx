import React from "react";
import { Item } from "../components/Item/Item";
import { education } from "../constants/education";

const Education = () => {
  return (
    <div>
      {education.reverse().map((e) => {
        return <Item data={e} key={e.id} />;
      })}
    </div>
  );
};

export default Education;
