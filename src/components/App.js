import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./main/Main";
import Header from "./header/Header";
import { currentUserOperation } from "../redux/auth/authOperations";

const App = () => {
  const idToken = useSelector((state) => state.auth.idToken);

  const dispatch = useDispatch();

  useEffect(() => {
    idToken && dispatch(currentUserOperation());
  }, [idToken, dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
