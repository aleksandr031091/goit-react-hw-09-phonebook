import styled from "styled-components";

const NavigationItemsStyled = styled.ul`
  display: flex;
  padding-left: 50px;
  list-style: none;

  .navListItems:not(:first-child) {
    margin-left: 30px;
  }
  .navLink {
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    color: #ff4b01;
  }
  .activeNavLink {
    color: #c12127;
  }
`;

export default NavigationItemsStyled;
