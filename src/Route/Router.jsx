import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayOut from "./../LayOut/MainLayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import ErrorLayOut from "../LayOut/ErrorLayOut/ErrorLayOut";
import Blog from "../Pages/BlogPage/Blog";
import Login from "../Pages/LoginPage/Login";
import Register from "../Pages/RegisterPage/Register";
import AddToy from "../Pages/AddToyPage/AddToy";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import MyToys from "../Pages/MyToysPage/MyToys";

import AllToys from "../Pages/AllToysPage/AllToys";
import ToyDetails from "../Pages/AllToysPage/ToyDetailsPage/ToyDetails";
import DetailsToy from "../Pages/ShopCategoryPage/DetailsToy";
import AplifierToyDetails from "../Pages/ShopCategoryPage/AplifierToyDetails";
import MotionToyDetails from "../Pages/ShopCategoryPage/MotionToyDetails";

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
        path: "/addToy",
        element: (
          <PrivetRoute>
            <AddToy></AddToy>
          </PrivetRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },

      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivetRoute>
            <ToyDetails></ToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7-a11-toy-marketplace-server-side.vercel.app/allToy/${params?.id}`),
      },
      {
        path: "/detailsToy/:id",
        element: (
          <PrivetRoute>
            {" "}
            <DetailsToy></DetailsToy>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7-a11-toy-marketplace-server-side.vercel.app/roboticToy/${params.id}`),
      },
      {
        path: "/amplifierToy/:id",
        element: (
          <PrivetRoute>
            <AplifierToyDetails></AplifierToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7-a11-toy-marketplace-server-side.vercel.app/amplifierToy/${params.id}`),
      },
      {
        path: "/motionToy/:id",
        element: (
          <PrivetRoute>
            <MotionToyDetails></MotionToyDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://b7-a11-toy-marketplace-server-side.vercel.app/motionToy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
