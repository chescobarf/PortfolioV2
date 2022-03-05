import React from "react";
import Nav from "../components/Nav/Nav";
import ProfileImage from "../components/ProfileImage/ProfileImage";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 md:h-screen md:w-72 bg-gradient-to-br from-indigo-700 via-blue-900 to-indigo-800 md:p-8 md:grid place-content-center md:gap-8 h-min w-full p-4 flex flex-col gap-0">
      <ProfileImage />
      <Nav />
    </nav>
  );
};

export default Navbar;
