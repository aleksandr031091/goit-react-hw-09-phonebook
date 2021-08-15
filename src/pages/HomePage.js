import React from "react";
import HomePageStyled from "../style/HomePageStyled";
import bgImage from "../images/bgHome.png";
const homePage = () => {
  return (
    <HomePageStyled>
      <h1 className="title">Pfonebook</h1>
      <img className="bgImage" src={bgImage} alt="bgimage" width="800px" />
    </HomePageStyled>
  );
};

export default homePage;
