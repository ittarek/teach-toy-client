import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./../LayOut/MainLayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import ErrorLayOut from "../LayOut/ErrorLayOut/ErrorLayOut";
import Blog from "../Pages/BlogPage/Blog";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorLayOut></ErrorLayOut>,
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
