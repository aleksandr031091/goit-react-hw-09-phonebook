import styled from "styled-components";

const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  .title {
    font-weight: 700;
    font-size: 20px;
    color: #e02aff;
    margin-right: 10px;
  }
  .button {
    margin-left: 10px;
    padding: 10px;
    font-weight: 700;
    color: #ff4b01;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0px 1px 13px 0px rgba(255, 79, 0, 1);
    cursor: pointer;

    transition: 500ms;
  }
  .button:hover,
  :focus {
    color: #c12127;
    box-shadow: 0px 1px 13px 0px #c12127;

    transform: scale(1.05);
  }
  .userAvatar {
    border-color: transparent;
  }
`;

export default UserMenuStyled;
