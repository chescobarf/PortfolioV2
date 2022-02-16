import React from "react";

const Skill = ({ children, title }) => {
  return (
    <div className="mb-8">
      <h4 className="uppercase text-2xl text-zinc-500 mb-8">{title}</h4>
      <div className="flex flex-row gap-4 text-5xl text-zinc-500">
        {children}
      </div>
    </div>
  );
};

export default Skill;
