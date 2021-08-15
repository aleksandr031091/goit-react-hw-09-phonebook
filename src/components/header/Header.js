import React from "react";
import { connect } from "react-redux";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import HeaderStyled from "./HeaderStyled";
const Header = ({ isAuth }) => {
  return (
    <HeaderStyled>
      <Navigation />
      {isAuth && <UserMenu />}
    </HeaderStyled>
  );
};

const mstp = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};

export default connect(mstp)(Header);
