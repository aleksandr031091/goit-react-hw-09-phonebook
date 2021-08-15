import React from "react";

import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ isAuth, path, component, exact }) => {
  return !isAuth ? (
    <Redirect to="/signin" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
