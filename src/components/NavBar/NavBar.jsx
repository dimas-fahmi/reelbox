import React, { useState } from "react";
import NavigationBar from "./fragments/NavigationBar";
import OffCanvas from "../OffCanvas/OffCanvas";
import NavBarOffMenuLayout from "./fragments/NavBarOMLayout";
import navlinks from "../../configs/NavLink.json";

const NavBar = () => {
  // Variable Initializations
  const [navShow, setNavShow] = useState(false);

  // Logics
  const navShowHandler = () => setNavShow(!navShow);

  //   Rendering
  return (
    <>
      <NavigationBar
        navShowHandler={navShowHandler}
        menu={navlinks.navigation_bar}
      />
      <OffCanvas show={navShow} direction="top">
        <NavBarOffMenuLayout
          navShowHandler={navShowHandler}
          menu={navlinks.menu}
        />
      </OffCanvas>
    </>
  );
};

export default NavBar;
