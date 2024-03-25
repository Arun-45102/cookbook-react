import { useEffect } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

import Recipes from "./features/recipes/Recipes";
import Products from "./features/products/Products";
import Items from "./features/items/Items";
import Foods, { loader as foodLoader } from "./features/foods/Foods";

function App() {
  useEffect(function () {
    AOS.init();
  }, []);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
          errorElement: <Error />,
        },
        {
          path: "/products",
          element: <Products />,
          errorElement: <Error />,
        },
        {
          path: "/items",
          element: <Items />,
          errorElement: <Error />,
        },
        {
          path: "/library",
          element: <Foods />,
          loader: foodLoader,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
