import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const ProfileImage = () => {
  return (
    <Link smooth to="#Profile">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQExTG_Ykc_VzQ/profile-displayphoto-shrink_800_800/0/1588573117074?e=1650499200&v=beta&t=ezClni_JAb-sm1ycpDHnpOUWn7aE5e8u-7YVIYjQUqI"
        alt=""
        className="rounded-full h-40 w-40 object-cover border-2 border-white border-opacity-0 hover:border-opacity-100 hover:cursor-pointer"
      />
    </Link>
  );
};

export default ProfileImage;
