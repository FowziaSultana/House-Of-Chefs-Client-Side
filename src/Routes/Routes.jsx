import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Layout/Home/Home";
import Blog from "../Components/Blog/Blog";
import Main from "../Components/Layout/Main/Main";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
