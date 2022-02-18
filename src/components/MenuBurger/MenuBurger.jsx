import React, { useState } from "react";
import { AiFillCode, AiOutlineCloseCircle } from "react-icons/ai";
const MenuBurger = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <a
      onClick={() => setOpenMenu(!openMenu)}
      className="text-5xl text-slate-100 w-min"
    >
      {openMenu ? <AiOutlineCloseCircle /> : <AiFillCode />}
    </a>
  );
};

export default MenuBurger;
