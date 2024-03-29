import React from "react";

const Subtitle = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-1 text-md text-slate-600 font-medium subtitle">
      <li className="h3 text-2xl">INGENIERO INFORMÁTICO</li>
      <li className="h3 text-2xl">DESARROLLADOR</li>
      <li className="h3 text-2xl">SANTIAGO DE CHILE</li>
      <li className="h3 text-2xl text-blue-700 hover:animate-pulse">
        <a href="mailto:CH.ESCOBARF@GMAIL.COM">CH.ESCOBARF@GMAIL.COM</a>
      </li>
    </ul>
  );
};

export default Subtitle;
