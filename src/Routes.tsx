import React, { Suspense } from "react";
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
  DealerShipForm,
} from "./pages";

const BlogDetails = React.lazy(() => import("./pages/BlogDetails/BlogDetails"));
const PrivacyPolicy = React.lazy(
  () => import("./pages/PrivacyPolicy/PrivacyPolicy")
);
import Projects from "./pages/Projects/Projects";
import ModernTerrace from "./pages/Blog/ModernTerrace/ModernTerrace";
import ModernStaircase from "./pages/Blog/ModernStaircase/ModernStaircase";
import ModernHandrail from "./pages/Blog/ModernHandrail/ModernHandrail";
import ModernBalcony from "./pages/Blog/ModernBalcony/ModernBalcony";
import Career from "./pages/Career/Career";
import JobDetailsPage from "./pages/Career/JobDetailsPage";
import DealerLogin from "./pages/DealerOnlineStore/DealerLogin/DealerLogin";

const DealerRegistration = React.lazy(
  () =>
    import("./pages/DealerOnlineStore/DealerRegistration/DealerRegistration")
);
import DealerAccept from "./pages/DealerOnlineStore/DealerAccept/DealerAccept";
import DealerReject from "./pages/DealerOnlineStore/DealerReject/DealerReject";
import DealerDeclineUi from "./pages/DealerOnlineStore/DealerReject/DealerDeclineUi";
import DealerAcceptUi from "./pages/DealerOnlineStore/DealerAccept/DealerAcceptUi";
import DealerLogout from "./pages/DealerOnlineStore/DealerLogout/DealerLogout";
import DealerMessagePage from "./pages/DealerOnlineStore/DealerRegistration/DealerMessagePage";
import CartProdcut from "./pages/CartDetails/CartProduct";
import PVBSGP from "./pages/Blog/PVBSGP/PVBSGP";
import BillingAddress from "./pages/BillingAddress/BillingAddress";
import FramedFrameless from "./pages/Blog/FramedFrameless/FramedFrameless";
import FulltimeHiringForm from "./pages/FulltimeHiringForm/FulltimeHiringForm";
import AlumiumVsStainless from "./pages/Blog/AlumiumVsStainless/AlumiumVsStainless";
import AluminiumGlassRailing from "./pages/Blog/AluminiumGlassRailing/AluminiumGlassRailing";
import HandrailBenefit from "./pages/Blog/HandrailBenefit/HandrailBenefit";
import Recommendation from "./pages/Recommendation/Recommendation";
import SeamlessRailings from "./pages/Blog/SeamlessRailings/SeamlessRailing";
import AestheticRailings from "./pages/Blog/AestheticRailing/AestheticRailing";
import Futuredesign from "./pages/Blog/FutureDesign/FutureDesign";
import NewProducts from "./pages/NewProducts/NewProducts";
import FormDashboard from "./pages/FormDashboard/FormDashboard";
import LandingApp from "./pages/LandingApp/LandingApp";
import { GlassRailingsGallery } from "./pages/Gallery/Gallery";
import InteriorDesign from "./pages/Blog/InteriorDesign/InteriorDesign";
// import ForgotPassword from "./pages/DealerOnlineStore/ForgotPassword/ForgotPassword";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Navigate to="/" replace={true} /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/terrace/glass-railing", element: <ModernTerrace /> },
      {
        path: "blog/modern/staircase-glass-railing",
        element: <ModernStaircase />,
      },
      { path: "blog/aluminum-handrail", element: <ModernHandrail /> },
      { path: "blog/modern/balcony-glass-railing", element: <ModernBalcony /> },
      { path: "blog/pvb-sgp/glass-difference", element: <PVBSGP /> },
      {
        path: "blog/framed-vs-frameless-glass-railings",
        element: <FramedFrameless />,
      },
      {
        path: "blog/aluminum-vs-stainless-steel-glass-railings",
        element: <AlumiumVsStainless />,
      },
      {
        path: "blog/aluminum-glass-railings",
        element: <AluminiumGlassRailing />,
      },
      {
        path: "blog/handrail-benefits",
        element: <HandrailBenefit />,
      },
      {
        path: "blog/seamless-railing",
        element: <SeamlessRailings />,
      },
      {
        path: "blog/aesthetic-railing",
        element: <AestheticRailings />,
      },
      {
        path: "blog/future-modern-home-design",
        element: <Futuredesign />,
      },
      {
        path: "blog/interior-design",
        element: <InteriorDesign />,
      },
      {
        path: "blog/:blogId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BlogDetails />
          </Suspense>
        ),
      },
      { path: "contactus", element: <Contact /> },
      { path: "aboutus", element: <About /> },
      { path: "dealership", element: <DealerShipForm /> },
      { path: "careers", element: <Career /> },
      { path: "/careers/:title", element: <JobDetailsPage /> },
      { path: "products", element: <Products /> },
      {
        path: "gallery",
        element: <GlassRailingsGallery />,
      },
      { path: "cart", element: <CartProdcut /> },
      {
        path: "products/:productID",
        element: <Product />,
      },
      { path: "dealer-login", element: <DealerLogin /> },
      {
        path: "dealer-registration",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <DealerRegistration />{" "}
          </Suspense>
        ),
      },
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
      { path: "careers/full-time-form", element: <FulltimeHiringForm /> },

      { path: "quote/thanks", element: <ThankYou /> },
      { path: "recommendation", element: <Recommendation /> },
      { path: "newproducts", element: <NewProducts /> },
      { path: "formDash", element: <FormDashboard /> },
      { path: "Landing", element: <LandingApp /> },
      { path: "thanks", element: <ThankYou /> },
      {
        path: "PrivacyPolicy",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {" "}
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
