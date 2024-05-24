import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Home, NotFound } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="home" replace /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
