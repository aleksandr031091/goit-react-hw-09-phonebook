import React from "react";
import { useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItems";
import NavigationStyled from "./NavigationStyled";
import NavigationItemsStyled from "./NavigationItemsStyled";

const Navigstion = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <NavigationStyled>
      <NavigationItemsStyled>
        {mainRoutes.map((route) => (
          <NavigationItem {...route} key={route.path} isAuth={isAuth} />
        ))}
      </NavigationItemsStyled>
    </NavigationStyled>
  );
};

export default Navigstion;
