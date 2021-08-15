import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import UserMenu from "../userMenu/UserMenu";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.idToken);

  return (
    <HeaderStyled>
      <Navigation />
      {isAuth && <UserMenu />}
    </HeaderStyled>
  );
};

export default Header;
