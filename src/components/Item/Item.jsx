import React from "react";

export const Item = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-8 ">
      <div className="flex-grow">
        <h3 className="mb-1 text-4xl text-gray-700 uppercase">{data.title}</h3>
        <div className="subheading mb-3 text-indigo-700 uppercase text-2xl h4">
          <a href={data.institutionURL}>{data.institution}</a>
        </div>
        <p className="text-gray-700">{data.description}</p>
      </div>
      <div className="flex-shrink-0 flex gap-2 text-indigo-800">
        <span className="text-primary">{data.from}</span>
        <span> - </span>
        <span className="text-primary">{data.to}</span>
      </div>
    </div>
  );
};
