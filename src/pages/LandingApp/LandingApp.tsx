import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturesSection from "../../components/FeatureSection/FeatureSection";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import GetInTouchSection from "../../components/GetInTouchSection/GetInTouchSection";
import FixedContactForm from "../../components/FixedContactForm/FixedContactForm";
import PopupForm from "../../components/PopupForm/PopupForm";

function LandingApp() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProductGallery />
      <AboutUsSection />
      <GetInTouchSection />
      <FixedContactForm />
      <PopupForm />
    </main>
  );
}

export default LandingApp;
