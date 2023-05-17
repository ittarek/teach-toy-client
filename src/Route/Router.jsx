import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./../LayOut/MainLayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
