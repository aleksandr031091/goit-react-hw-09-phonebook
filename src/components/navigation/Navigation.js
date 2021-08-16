import React from "react";
import { useSelector } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItems";
import NavigationStyled from "./NavigationStyled";

const Navigstion = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <NavigationStyled>
      {mainRoutes.map((route) => (
        <NavigationItem {...route} key={route.path} isAuth={isAuth} />
      ))}
    </NavigationStyled>
  );
};

export default Navigstion;
