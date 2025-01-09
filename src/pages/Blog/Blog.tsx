import React, { Suspense } from "react";
import { Hero } from "../../components";
import { blogHero } from "../../assets/Images";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";
import { Link } from "react-router-dom";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Metadata from "../../components/Metatag/Metatag";
import EnquiryButton from "../../components/EnquiryButton/EnquiryButton";
const BlogPanel = React.lazy(() => import("../../components/Blog/Panel/index"));

export const Blog = () => {
  const [data, setData] = useState<BlogType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec"
    )
      .then((res) => res.json())
      .then((items) => {
        const formattedItems = items.map(
          (
            item: Omit<BlogType, "tags"> & {
              tags: string;
            }
          ) => ({
            ...item,
            tags: item.tags.split(",").map((tag: string) => tag.trim()),
          })
        );
        setData(formattedItems.reverse());
      })
      .catch((error) => {
        console.error("Failed to fetch blog data", error);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  return (
    <>
      <Metadata
        title={"Glass Railing Blogs | Balcony Glass Railing"}
        description={
          "Discover Blogs for stylish and durable glass railings in India. Get expert tips and a free quote! Know more about Imperio & Gain the knwoledge for glass railing systems"
        }
        keywords={
          "pvb glass, sgp glass, laminated glass, pvb vs sgp differance,pvb vs sgp glass, glass railings, balcony glass railing, Balcony Railings, Staircase glass Railings, commercial buildings, seamless glass railing, aluminum glass railings, Laminated Glass, modern glass railings, frameless glass railings, Aesthetic glass railing, Classic Look, Minimalist Style, safety glass railings, high durable glass railings, Weather Resistant, Low Maintenance, Customizable Options"
        }
        ogImage={blogHero}
        ogUrl={"https://www.imperiorailing.com/blog"}
      />
      <main>
        <Hero
          img={blogHero}
          altText="hero for blog"
          header="Glass Railing Blogs"
          subHeader="Check out our blogs. Unlock the Secrets to Stunning Glass Railings: Your Ultimate Guide to Stylish and Safe Balcony and Staircase Solutions in India!"
          curve
        />

        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className="text-[#fad000] text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
              Glass Railing Systems
            </h2>
            <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              Modern Glass Railing Designs for Modern Homes
            </h3>
          </div>
          <div className="md:w-[40%]">
            <p className="text-justify italic text-[--grey]">
              Explore our blog for insights on glass railing systems. Elevate
              your home's aesthetic appeal with modern aluminum glass railings,
              sleek glass railings. Whether you're in Mumbai, Delhi, Hyderabad,
              or any other city in India, we've got you covered.
              <br />
              <br />
              Experience the future of modern design with Imperio's sleek,
              frameless glass railings. Our innovative solutions offer
              uninterrupted views and unparalleled safety. From the stunning
              coastal vistas of Goa to the bustling urban landscapes of Mumbai,
              our railings enhance the beauty of every space.
            </p>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogPanel
            Socials={["LinkedIn", "Twitter", "Quora", "Pinterest"]}
            // BlogData={loading ? blogCards : data}
            BlogData={data}
          />
        </Suspense>
      </main>
      <div className=" max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
        <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Elegant Glass Railing Designs
          </h2>
          <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Stylish Glass Railings for Homes
          </h3>
        </div>
        <div className="md:w-[40%]">
          <p className="text-justify italic text-[--grey]">
            Glass railings are becoming a popular choice in Indian cities and
            state like Mumbai, Punjab, Uttarakhand, Tamil Nadu, Andhra Pradesh
            and Maharashtra for their sleek, modern look and functional
            benefits. Whether it's for a staircase, balcony, or deck, these
            railings provide an unobstructed view while adding a touch of
            elegance to any space. <br />
            <br />
            Not only are they visually appealing, but they are also durable,
            safe, and low-maintenance. In this blog, we explore the advantages
            of glass railings, the installation process, and how they can
            elevate the design of homes and commercial properties in your city.
            <br />
          </p>
        </div>
      </div>
      <div className="max-w-7xl grid md:grid-cols-2 mx-auto mt-10 md:mt-24 gap-10 xl:gap-[3rem] p-6 pb-14">
        <div>
          <h3 className=" text-3xl text-[--third] pb-2">
            <Link to="terrace/glass-railing">
              {" "}
              <b className=" flex gap-2">
                Terrace Glass Railing{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
          <EnquiryButton />
          <p className="text-justify italic text-[--grey]">
            Transform your terrace with modern glass railing in cities like
            Jodhpur, Mohali, Varanasi, Allahabad, Dehradun, Pune, Maharashtra
            and beyond. Frameless glass railing designs provide a clean,
            contemporary look while ensuring safety and durability. Ideal for
            terraces, balconies, and rooftop decks, these railings offer
            unobstructed views, making them the perfect addition to any modern
            home or commercial space.
          </p>
        </div>
        <div>
          <h3 className=" text-3xl text-[--third] pb-2">
            <Link to="modern/staircase-glass-railing">
              {" "}
              <b className=" flex gap-2">
                Staircase Glass Railing{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
          <p className="text-justify italic text-[--grey]">
            Add elegance to your home with modern staircase glass railings.
            Perfect for contemporary homes in cities like Chittoor, Sangli,
            North Goa, Uttara Kannada, Hyderabad, Maharashtra and beyond, these
            railings combine safety with style. The sleek, frameless design
            ensures an unobstructed view and complements any interior decor.
            Whether for a grand staircase or a minimalist design, glass railings
            offer durability, low maintenance, and a sophisticated aesthetic
            that elevates the look of your space. space.
          </p>
        </div>
        <div>
          <h3 className=" text-3xl text-[--third]">
            <Link to="aluminum-handrail">
              {" "}
              <b className=" flex gap-2 pb-2">
                Aluminium Handrail Glass Railing{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
          <p className="text-justify italic text-[--grey]">
            Looking for high-quality Aluminium Handrails and Glass Railings in
            Mumbai, Delhi, Bangalore, and Chennai? We specialize in LED
            handrails, sleek handrails, and modern handrail ideas, with custom
            finishes including wooden finishes for your balcony handrails. As a
            leading stair handrail supplier and manufacturer, we provide durable
            and stylish railing solutions for both indoor and outdoor spaces.
          </p>
        </div>
        <div>
          <h3 className=" text-3xl text-[--third] pb-2">
            <Link to="modern/balcony-glass-railing">
              {" "}
              <b className=" flex gap-2">
                Balcony Glass Railing{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
          <p className="text-justify italic text-[--grey]">
            Looking for high-quality Aluminium Handrails and Balcony Glass
            Railing in Mumbai, Delhi, Bangalore, and Chennai? We specialize in
            LED handrails, sleek handrails, and modern handrail ideas, with
            custom finishes including wooden finishes for your balcony
            handrails. As a leading stair handrail supplier and manufacturer, we
            provide durable and stylish railing solutions for both indoor and
            outdoor spaces.
          </p>
        </div>
        <div>
          <h3 className=" text-3xl text-[--third] pb-2">
            <Link to="pvb-sgp/glass-difference">
              {" "}
              <b className=" flex gap-2">
                PVB vs SGP Glass{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
          <p className="text-justify italic text-[--grey]">
            PVB and SGP are interlayers used in laminated glass with distinct
            properties. PVB is cost-effective and commonly used in residential
            and commercial applications but is sensitive to moisture, which can
            cause decay over time. SGP, on the other hand, is more rigid,
            durable, and resistant to moisture, UV rays, and yellowing, making
            it ideal for high-strength applications like glass flooring and
            hurricane-resistant windows. SGP is five times stronger, 100 times
            more rigid, and offers superior edge stability and structural
            performance compared to PVB.
          </p>
        </div>
      </div>
    </>
  );
};
