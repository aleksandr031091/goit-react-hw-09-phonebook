import axios from "axios";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set: (token) => {
    axios.defaults.headers.common["Authorization"] = token;
  },
  unset: () => {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

export const registerUserOperation = (user) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    const response = await axios.post("/users/signup", {
      ...user,
    });

    token.set(response.data.token);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

export const loginUserOperation = (user) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post("/users/login", {
      ...user,
    });
    token.set(response.data.token);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export const logOutUserOperation = (user) => async (dispatch) => {
  dispatch(signOutRequest());
  try {
    const response = await axios.post("/users/logout", user);

    token.unset();
    dispatch(signOutSuccess(response.data));
  } catch (error) {
    dispatch(signOutError(error.message));
  }
};

export const currentUserOperation = () => async (dispatch, getState) => {
  dispatch(getCurrentUserRequest());

  token.set(getState().auth.idToken);

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
