import React from "react";
import { navigation } from "../../constants/navigation";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
  );
};

export default Nav;
