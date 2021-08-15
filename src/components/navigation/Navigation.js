import React from "react";
import { connect } from "react-redux";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItems";
import NavigationStyled from "./NavigationStyled";

const Navigstion = ({ isAuth }) => {
  return (
    <NavigationStyled>
      {mainRoutes.map((route) => (
        <NavigationItem {...route} key={route.path} isAuth={isAuth} />
      ))}
    </NavigationStyled>
  );
};

const mstp = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};

export default connect(mstp)(Navigstion);
