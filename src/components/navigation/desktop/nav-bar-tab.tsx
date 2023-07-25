import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarTabProps {
  path: string;
  label: string;
}

export const NavBarTab: React.FC<NavBarTabProps> = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      exact
      className="nav-bar__tab"
      activeClassName="nav-bar__tab--active"
    >
      {label}
    </NavLink>
  );
};
