import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import Chat from "../pages/Chat";
import Checkout from "../pages/Checkout";
import CustomerService from "../pages/CustomerService";
import Detail from "../pages/Detail";
import Feedback from "../pages/Feedback";
import Mine from "../pages/Mine";
import Search from "../pages/Search";
const Login = lazy(() => import("../pages/Login"));
const Index = lazy(() => import("../pages/Home"));

const withLoadingComponent = (component: JSX.Element) => (
  <React.Suspense fallback={<Skeleton />}>{component}</React.Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/login"></Navigate>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/index",
    element: withLoadingComponent(<Index />),
  },
  {
    path: "/mine",
    element: withLoadingComponent(<Mine />)
  },
  {
    path: '/checkout',
    element: withLoadingComponent(<Checkout />)
  },
  {
    path: "/chat",
    element: withLoadingComponent(<Chat />)
  },
  {
    path: 'detail',
    element: withLoadingComponent(<Detail />)
  },
  {
    path: '/search',
    element: withLoadingComponent(<Search />)
  },
  {
    path: '/feedback',
    element: withLoadingComponent(<Feedback />)
  },
  {
    path: '/customer',
    element: withLoadingComponent(<CustomerService />)
  }
];

export default routes;
