import React from "react";
import Nav from "../components/Nav/Nav";
import ProfileImage from "../components/ProfileImage/ProfileImage";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-72 bg-gradient-to-br from-indigo-700 via-blue-900 to-indigo-800 p-8 grid place-content-center gap-8">
      <ProfileImage />
      <Nav />
    </nav>
  );
};

export default Navbar;
