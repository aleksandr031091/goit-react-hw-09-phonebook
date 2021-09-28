import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(
      () => import("../pages/HomePage") /* webpackChunkName: "HomePage" */
    ),
    exact: true,
    isPrivat: true,
    restricted: false,
  },
  {
    name: "About",
    path: "/about",
    component: lazy(
      () => import("../pages/AbautPage") /* webpackChunkName: "AbautPage" */
    ),
    exact: true,
    isPrivat: true,
    restricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    component: lazy(
      () =>
        import("../pages/ContactsPage") /* webpackChunkName: "ContactsPage" */
    ),
    exact: true,
    isPrivat: true,
    restricted: false,
  },
  {
    name: "Registration",
    path: "/signup",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivat: false,
    restricted: true,
  },
  {
    name: "Login",
    path: "/signin",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivat: false,
    restricted: true,
  },
];
