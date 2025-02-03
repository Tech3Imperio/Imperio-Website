import React, { Suspense } from "react";
import { contactHero } from "../../assets/Images";
import { Description, Hero, Quote } from "../../components";
const Map = React.lazy(() => import("../../components/Map/Map"));
import Metadata from "../../components/Metatag/Metatag";
import EnquiryButton from "../../components/EnquiryButton/EnquiryButton";

export const Contact = () => {
  return (
    <>
      <Metadata
        title={"Contact Us - Imperio Railing System | Aluminum Glass Railings"}
        description={
          "Contact Imperio Railing System for inquiries about aluminum glass railings, custom solutions, and installation advice. Serving homes and businesses!"
        }
        keywords={
          "Contact Imperio Railing, Aluminum Glass Railings, Railing Installation Support, Custom Railing Designs, Residential Railing Solutions, Commercial Railings, Durable Glass Railings, Stylish Railing Systems, Glass Railing Installation, Maintenance Advice, Modern Aluminum Railings, Outdoor Railing Design, Home Improvement Solutions, Safety Railings, Innovative Railings"
        }
        // ogImage={contactHero}
        ogImage="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/hero/contact.webp"
        ogUrl={"https://www.imperiorailing.com/contactus"}
      />
      <main>
        <Hero
          img={contactHero}
          // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/hero/contact.webp"
          header="Contact Information"
          altText="hero for aboutus"
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        <section className="h-full overflow-hidden mb-16">
          <Description
            yellowText="Contact Information."
            mainHeader="Mumbai,IN."
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Map />
            </Suspense>
            <EnquiryButton />
          </Description>
        </section>
        <Quote />
      </main>
    </>
  );
};
