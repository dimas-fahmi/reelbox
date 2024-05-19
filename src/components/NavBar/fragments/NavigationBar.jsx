import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const NavigationBar = ({ navShowHandler, menu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-40 flex justify-between">
      <div className="label text-2xl text-yellow-300 quicksand-light">
        <Link>ReelBox</Link>
      </div>
      <nav className="nav-links text-md quicksand-regular flex items-center gap-3 text-white">
        {menu &&
          menu.map((item, index) => (
            <NavLink
              icon={item["icon"]}
              link={`/reelbox${item["link"]}`}
              label={item["label"]}
              key={index}
            />
          ))}
        <Link
          className="hover:text-yellow-300 transition-colors"
          onClick={navShowHandler}
        >
          <i className={`bi bi-list me-2 `}></i>
          Menu
        </Link>
      </nav>
    </nav>
  );
};

export default NavigationBar;
