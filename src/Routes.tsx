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
  ThankYou,
  PrivacyPolicy,
  DealerShipForm,
} from "./pages";

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
import PVBSGP from "./pages/Blog/PVBSGP/PVBSGP";
import BillingAddress from "./pages/BillingAddress/BillingAddress";
import InstagramForm from "./pages/InstagramForm/InstagramForm";

// import ForgotPassword from "./pages/DealerOnlineStore/ForgotPassword/ForgotPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Navigate to="/" replace={true} /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/modern/terrace/glass/railing", element: <ModernTerrace /> },
      { path: "blog/modern/staircase", element: <ModernStaircase /> },
      { path: "blog/modern/handrail", element: <ModernHandrail /> },
      { path: "blog/modern/balcony", element: <ModernBalcony /> },
      { path: "blog/sgp/pvb/glass/difference", element: <PVBSGP /> },
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
      { path: "billing-address", element: <BillingAddress /> },

      { path: "quote/thanks", element: <ThankYou /> },
      { path: "instagram/inquiry/form", element: <InstagramForm /> },

      {
        path: "PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
