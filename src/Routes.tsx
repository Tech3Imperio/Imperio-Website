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
import Career from "./pages/Career/Career";
import JobDetailsPage from "./pages/Career/JobDetailsPage";
import DealerLogin from "./pages/DealerOnlineStore/DealerLogin/DealerLogin";
import DealerRegistration from "./pages/DealerOnlineStore/DealerRegistration/DealerRegistration";
import DealerAccept from "./pages/DealerOnlineStore/DealerAccept/DealerAccept";
import DealerReject from "./pages/DealerOnlineStore/DealerReject/DealerReject";
import DealerDeclineUi from "./pages/DealerOnlineStore/DealerReject/DealerDeclineUi";
import DealerAcceptUi from "./pages/DealerOnlineStore/DealerAccept/DealerAcceptUi";
import DealerLogout from "./pages/DealerOnlineStore/DealerLogout/DealerLogout";
import DealerMessagePage from "./pages/DealerOnlineStore/DealerRegistration/DealerMessagePage";
import CartProdcut from "./pages/CartDetails/CartProduct";
// import ForgotPassword from "./pages/DealerOnlineStore/ForgotPassword/ForgotPassword";

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
      { path: "career", element: <Career /> },
      { path: "/career/:title", element: <JobDetailsPage /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <CartProdcut /> },
      {
        path: "products/:productID",
        element: <Product />,
      },
      { path: "dealer-login", element: <DealerLogin /> },
      { path: "dealer-registration", element: <DealerRegistration /> },
      {
        path: "dealer-registration/dealer-message/:username",
        element: <DealerMessagePage />,
      },
      {
        path: "dealer-authorization/:email",
        element: <DealerAccept />,
      },
      {
        path: "dealer-decline/:email",
        element: <DealerReject />,
      },
      { path: "dealer-authorization", element: <DealerAcceptUi /> },
      { path: "dealer-decline", element: <DealerDeclineUi /> },
      { path: "dealer-logout", element: <DealerLogout /> },
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
