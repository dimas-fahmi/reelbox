import React from "react";
import { Link } from "react-router-dom";

const NavBarOffMenuLayout = ({ navShowHandler, menu }) => {
  return (
    <div className="p-4 h-[100%] max-w-[1440px] m-auto overflow-auto">
      <div className="header flex justify-between text-xl">
        <h2 className="border-l-8 border-yellow-300 ps-3 text-yellow-300 poppins-bold flex items-center">
          MENU
        </h2>
        <button
          className="border border-yellow-300 p-2 rounded bg-yellow-300 text-black hover:bg-transparent hover:text-primary transition-all active:scale-95"
          title="close this menu"
          onClick={navShowHandler}
        >
          X
        </button>
      </div>
      <div className="body mt-6 flex gap-4 flex-wrap border-t-2 pt-4 border-secondary-accent-emphasis ">
        {menu &&
          menu.map((item, index) => (
            <div className="text-white poppins-regular" key={index}>
              <h2 className="text-2xl poppins-bold">
                <i className={`bi ${item["icon"]} me-2 text-yellow-300`}></i>
                {item.title}
              </h2>
              <div className="nav mt-3 ps-7 poppins-regular">
                {item.children &&
                  item.children.map((children, childrenKey) => (
                    <Link
                      className="block mb-3 hover:text-primary"
                      to={children.link}
                      key={childrenKey}
                    >
                      {children.label}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default NavBarOffMenuLayout;
