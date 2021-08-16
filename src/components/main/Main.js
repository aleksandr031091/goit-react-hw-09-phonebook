import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/privateRoutes";
import PublicRoute from "../../routes/publicRoutes";
import MainStyled from "./MainStyled";

const Main = () => {
  const isAuth = useSelector((state) => state.auth.idToken);
  return (
    <MainStyled>
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivat ? (
              <PrivateRoute
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
                isAuth={isAuth}
              />
            ) : (
              <PublicRoute
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
                isAuth={isAuth}
                restricted={route.restricted}
              />
            )
          )}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
