import React from "react";
import Description from "../components/Description/Description";
import NameTitle from "../components/NameTitle.jsx/NameTitle";
import SocialButtons from "../components/SocialsButtons/SocialButtons";
import Subtitle from "../components/Subtitle/Subtitle";

const Profile = () => {
  return (
    <div className="flex flex-col gap-8">
      <NameTitle />
      <Subtitle />
      <Description />
      <SocialButtons />
    </div>
  );
};

export default Profile;
