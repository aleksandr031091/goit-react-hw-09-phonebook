import { createReducer } from "@reduxjs/toolkit";
import {
  registerUserSuccess,
  registerUserError,
  loginUserSuccess,
  loginUserError,
  signOutSuccess,
  signOutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

const authReducer = createReducer(
  {
    name: "",
    email: "",
    idToken: "",
    error: "",
  },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [loginUserSuccess]: (_, { payload }) => ({
      name: payload.user.name,
      email: payload.user.email,
      idToken: payload.token,
    }),

    [signOutSuccess]: () => ({
      name: "",
      email: "",
      idToken: "",
    }),

    [getCurrentUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),

    [registerUserError]: (_, { payload }) => ({
      error: payload,
    }),
    [loginUserError]: (_, { payload }) => ({
      error: payload,
    }),
    [signOutError]: (_, { payload }) => ({
      error: payload,
    }),
    [getCurrentUserError]: (_, { payload }) => ({
      error: payload,
    }),
  }
);

export default authReducer;
