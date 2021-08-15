import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  loginUserOperation,
  registerUserOperation,
} from "../../redux/auth/authOperations";
import AuthFormStyled from "./AuthFormStyled";

const initialState = { name: "", email: "", password: "" };

class Auth extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.location.pathname === "/signin"
      ? this.props.loginUserOperation({ email, password })
      : this.props.registerUserOperation(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { pathname } = this.props.location;
    const { name, email, password } = this.state;
    return (
      <AuthFormStyled onSubmit={this.onHandleSubmit}>
        {pathname !== "/signin" && (
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.onHandleChange}
              placeholder="*Rosie Simpson"
            />
          </label>
        )}
        <label className="label">
          Email
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={this.onHandleChange}
            placeholder="*rosie@gmail.com"
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={this.onHandleChange}
            placeholder="*"
          />
        </label>
        <button className="button" type="submit">
          {pathname === "/signin" ? "Login" : "Register"}
        </button>
      </AuthFormStyled>
    );
  }
}

export default connect(null, { registerUserOperation, loginUserOperation })(
  withRouter(Auth)
);
