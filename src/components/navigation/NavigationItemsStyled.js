import styled from "styled-components";

const NavigationItemsStyled = styled.ul`
  list-style: none;

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
