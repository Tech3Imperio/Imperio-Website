import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  Blog,
  Home,
  NotFound,
  Product,
  Products,
  Getquote,
  About,
  Contact,
} from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Navigate to="/" replace={true} /> },
      { path: "blog", element: <Blog /> },
      { path: "contactus", element: <Contact /> },
      { path: "aboutus", element: <About /> },
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
