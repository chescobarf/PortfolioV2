import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProfileImage = () => {
  return (
    <Link smooth to="#Profile">
      <img
        src="https://avatars.githubusercontent.com/u/44533046?v=4"
        alt="Profile"
        className="rounded-full h-40 w-40 object-cover border-2 border-white border-opacity-0 hover:border-opacity-100 hover:cursor-pointer hidden md:block"
      />
    </Link>
  );
};

export default ProfileImage;
