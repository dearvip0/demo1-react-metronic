import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem1 from "./MenuItem1";
import MenuItem2 from "./MenuItem2";

const HeaderMenuItems = ({
  dataMenuToggle,
  ariaHasPopup = true,
  className,
  text,
  url,
  menuSub,
  category,
}) => {
  return (
    <li
      data-menu-toggle={dataMenuToggle}
      aria-haspopup={ariaHasPopup}
      className={className}
    >
      <NavLink className="menu-link menu-toggle" to={url}>
        <span className="menu-text">{text}</span>
        <i className="menu-arrow"></i>
      </NavLink>
      {menuSub === "fixed" ? (
        <MenuItem1 menuSub={menuSub} />
      ) : (
        <MenuItem2 category={category} menuSub={menuSub} />
      )}
    </li>
  );
};

export default HeaderMenuItems;
