import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  loginUserOperation,
  registerUserOperation,
} from "../../redux/auth/authOperations";
import AuthFormStyled from "./AuthFormStyled";

const initialState = { name: "", email: "", password: "" };

const Auth = () => {
  const [state, setState] = useState(initialState);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();
  const location = useLocation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;

    location.pathname === "/signin"
      ? dispatch(loginUserOperation({ email, password }))
      : dispatch(registerUserOperation(state));
    setState({ ...initialState });
  };

  return (
    <AuthFormStyled onSubmit={onHandleSubmit}>
      {location.pathname !== "/signin" && (
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={state.name}
            onChange={onHandleChange}
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
          value={state.email}
          onChange={onHandleChange}
          placeholder="*rosie@gmail.com"
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          type="password"
          name="password"
          value={state.password}
          onChange={onHandleChange}
          placeholder="*min 7 characters"
        />
      </label>
      {error && <p>Wrong password or email</p>}
      <button className="button" type="submit">
        {location.pathname === "/signin" ? "Login" : "Register"}
      </button>
    </AuthFormStyled>
  );
};

export default Auth;
