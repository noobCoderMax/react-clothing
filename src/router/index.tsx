import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Chat from "../pages/Chat";
import Checkout from "../pages/Checkout";
import Detail from "../pages/Detail";
import Mine from "../pages/Mine";
import Search from "../pages/Search";
const Login = lazy(() => import("../pages/Login"));
const Index = lazy(() => import("../pages/Home"));

const withLoadingComponent = (component: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{component}</React.Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: "/login",
    element: withLoadingComponent(<Login />),
  },
  {
    path: "/index",
    element: withLoadingComponent(<Index />),
  },
  {
    path: "/mine",
    element:withLoadingComponent(<Mine/>)
  }, {
    path: '/checkout',
    element:withLoadingComponent(<Checkout/>)
  },
  {
    path: "/chat",
    element:withLoadingComponent(<Chat/>)
  },
  {
    path: 'detail',
    element:withLoadingComponent(<Detail/>)
  },
  {
    path: '/search',
    element:withLoadingComponent(<Search/>)
  }
];

export default routes;
