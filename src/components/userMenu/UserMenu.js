import React from "react";
import { connect } from "react-redux";
import { logOutUserOperation } from "../../redux/auth/authOperations";
import userAvatar from "../../images/userAvatar.png";
import UserMenuStyled from "./UserMenuStyled";

const UserMenu = ({ name, logOutUserOperation }) => {
  return (
    <UserMenuStyled>
      <h3 className="title">Welcome {name.toUpperCase()}</h3>
      <img src={userAvatar} alt="avatar" width="30px" />
      <button className="button" onClick={() => logOutUserOperation()}>
        LOGOUT
      </button>
    </UserMenuStyled>
  );
};

const mstp = (state) => {
  return {
    name: state.auth.name,
  };
};
export default connect(mstp, { logOutUserOperation })(UserMenu);
