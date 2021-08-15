import React from "react";

import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ isAuth, path, component, exact, restricted }) => {
  return isAuth && restricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
