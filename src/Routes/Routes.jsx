import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Layout/Home/Home";
import Blog from "../Components/Blog/Blog";
import Main from "../Components/Layout/Main/Main";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Error from "../Components/Shared/Error/Error";
import PrivateRoute from "./PrivateRoute";
import ChefsPage from "../Components/ChefsPage/ChefsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
      {
        path: "/chefsPage/:id",
        element: (
          <PrivateRoute>
            <ChefsPage></ChefsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-fowzia-sulta-fowziasultana.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
