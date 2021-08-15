import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItemsStyled from "./NavigationItemsStyled";

const NavigationItems = ({
  name,
  path,
  exact,
  isPrivat,
  restricted,
  isAuth,
}) => {
  return (
    <NavigationItemsStyled>
      {!isPrivat && !restricted && (
        <li>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivat && !restricted && isAuth && (
        <li>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivat && restricted && !isAuth && (
        <li>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="activeNavLink"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </NavigationItemsStyled>
  );
};

export default NavigationItems;
