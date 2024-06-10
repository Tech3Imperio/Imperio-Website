import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Blog, Home, NotFound, Product, Products, Getquote } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:productID",
        element: <Product />,
      },
      { path: "quote", element: <Getquote /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
