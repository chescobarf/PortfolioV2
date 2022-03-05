import React, { Fragment, useState } from "react";
import { navigation } from "../../constants/navigation";
import { HashLink as Link } from "react-router-hash-link";
import MenuBurger from "../MenuBurger/MenuBurger";

const Nav = () => {
  const isMobile = screen.width < 768;
  const [menu, setMenu] = useState(!isMobile);
  const handleMenu = () => setMenu(!menu);

  return (
    <Fragment>
      <div
        className={`flex justify-between md:hidden w-full items-center ${
          menu ? "mb-2 border-b-2 border-b-slate-100 pb-2" : "mb-0"
        }`}
      >
        <h1 className="text-white m-0 text-2xl">Christian Escobar</h1>
        <MenuBurger click={menu} onClick={handleMenu} />
      </div>
      <div className={menu ? "block" : "hidden"} id="navbarSupportedContent">
        <ul className="navbar-nav flex flex-col w-full gap-4">
          {navigation.map((e) => (
            <li className="nav-item block" key={e}>
              <Link
                className="nav-link js-scroll-trigger font-bold text-white opacity-70 hover:opacity-100 hover:cursor-pointer"
                smooth
                to={`#${e}`}
              >
                {e.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Nav;
