import React from "react";
import SectionTitle from "./SectionTitle";

const SectionLayout = ({ children, id, title }) => {
  return (
    <section
      className="resume-section flex items-center pt-20 px-4 max-w-7xl min-h-screen"
      id={id}
    >
      <div className="resume-section-content w-full">
        <SectionTitle title={title} />
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
