import React, { useState } from "react";
import { certification } from "../constants/certifications";
import { DiTerminalBadge } from "react-icons/di";
const Certifications = () => {
  const [certifications] = useState(certification);
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 md:gap-8 grid-cols-1 gap-4">
      {certifications.map((e) => (
        <li key={e.nombre}>
          <a className="flex gap-2 hover:animate-pulse hover:cursor-pointer">
            <DiTerminalBadge className="text-3xl text-blue-600" />
            <div>
              <h5 className="font-medium text-2xl">{e.nombre}</h5>
              <p>{e.lugar}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Certifications;
