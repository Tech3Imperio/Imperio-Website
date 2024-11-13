import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  Blog,
  Home,
  NotFound,
  Product,
  Products,
  GetQuote,
  About,
  Contact,
} from "./pages";
import { ThankYou } from "./pages/Getquote/ThankYou/Thankyou";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { DealerShipForm } from "./pages/DealerShipForm/DealerShipForm";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Projects from "./pages/Projects/Projects";
import ModernTerrace from "./pages/Blog/ModernTerrace/ModernTerrace";
import ModernStaircase from "./pages/Blog/ModernStaircase/ModernStaircase";
import ModernHandrail from "./pages/Blog/ModernHandrail/ModernHandrail";
import ModernBalcony from "./pages/Blog/ModernBalcony/ModernBalcony";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Navigate to="/" replace={true} /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/modernterrace", element: <ModernTerrace /> },
      { path: "blog/modernstaircase", element: <ModernStaircase /> },
      { path: "blog/modernhandrail", element: <ModernHandrail /> },
      { path: "blog/modernbalcony", element: <ModernBalcony /> },
      { path: "blog/:blogId", element: <BlogDetails /> },
      { path: "contactus", element: <Contact /> },
      { path: "aboutus", element: <About /> },
      { path: "dealership", element: <DealerShipForm /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:productID",
        element: <Product />,
      },
      { path: "projects", element: <Projects /> },
      { path: "quote", element: <GetQuote /> },
      { path: "quote/thanks", element: <ThankYou /> },
      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
