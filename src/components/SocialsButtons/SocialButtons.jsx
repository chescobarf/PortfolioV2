import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsFillCloudArrowDownFill,
} from "react-icons/bs";
const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-3 ">
      <a
        className="grid place-content-center h-14 w-14 bg-gray-700 rounded-full text-3xl text-white hover:bg-violet-800 hover:animate-pulse"
        href="https://github.com/chescobarf"
      >
        <BsGithub />
      </a>
      <a
        className="grid place-content-center h-14 w-14 bg-gray-700 rounded-full text-2xl text-white hover:bg-blue-800 hover:animate-pulse"
        href="https://www.linkedin.com/in/ch-escobarf/"
      >
        <BsLinkedin />
      </a>
      <a
        className="grid place-content-center h-14 w-14 bg-gray-700 rounded-full text-2xl text-white hover:bg-green-600 hover:animate-pulse"
        href="https://api.whatsapp.com/send?phone=56977031115"
      >
        <BsWhatsapp />
      </a>
      <a
        className="grid place-content-center h-14 w-14 bg-gray-700 rounded-full text-2xl text-white hover:bg-orange-600 hover:animate-pulse"
        href="https://api.whatsapp.com/send?phone=56977031115"
      >
        <BsFillCloudArrowDownFill />
      </a>
    </div>
  );
};

export default SocialButtons;
