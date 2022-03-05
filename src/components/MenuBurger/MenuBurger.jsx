import React, { useState } from "react";
import { AiFillCode, AiOutlineCloseCircle } from "react-icons/ai";
const MenuBurger = ({ click, onClick }) => {
  const [openMenu, setOpenMenu] = useState(click);

  const handleClick = () => {
    setOpenMenu(!openMenu);
    onClick();
  };
  return (
    <a
      onClick={handleClick}
      className="text-4xl text-slate-50 w-min animate-pulse"
    >
      {openMenu ? <AiOutlineCloseCircle /> : <AiFillCode />}
    </a>
  );
};

export default MenuBurger;
