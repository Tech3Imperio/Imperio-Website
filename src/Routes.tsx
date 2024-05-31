import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Blog, Home, NotFound, Products } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "products", element: <Products /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
