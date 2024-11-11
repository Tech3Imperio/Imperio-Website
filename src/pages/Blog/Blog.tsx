import { Hero, BlogPanel } from "../../components";
import { blogHero } from "../../assets/Images";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";
import { Link } from "react-router-dom";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Metadata from "../../components/Metatag/Metatag";
// import Metadata from "../../components/Metatag/Metatag";
// import { blogCards } from "../../assets/Data";

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
        title={
          "Blogs - glass railing | balcony glass railing | Modern Staircase Glass Railing"
        }
        description={
          "Elevate your space with our expert advice on modern glass railings in cities like Delhi, Mumbai, Bangalore, Pune, Hyderabad, Karnataka, And Maharashtra. Explore design inspiration for balcony glass railings, staircase glass railings, and more. From frameless glass railings to aluminum glass railings, laminated glass, and stainless steel, our blogs offer tips on installation, maintenance, and stylish glass railing designs for your home or commercial property."
        }
        keywords={
          "glass railings, aluminum glass railings, Laminated Glass, stainless steel railing, modern glass railings, frameless glass railings, Modern Aesthetic, Classic Look, Minimalist Style, safety glass railings, high durable glass railings, Weather Resistant, Low Maintenance, Customizable Options, balcony glass railing, best glass railing systems in Mumbai, Commercial Spaces, modern glass railing designs for homes, Balcony Railings, Staircase glass Railings, stylish glass railings for commercial buildings, transfrom your home decor, seamless glass railing, elegant glass railing"
        }
        ogImage={blogHero}
        ogUrl={"https://www.imperiorailing.com/blog"}
      />
      <main>
        <Hero
          img={blogHero}
          altText="hero for blog"
          header="Glass Railing Blogs"
          subHeader="Check out our blogs. Grow your knowledge with Imperio Railing System in best glass railing systems in Mumbai, balcony railings, staircase railings, durable railings, safety glass railings, and frameless glass railings."
          curve
        />
        {/* <Description
          yellowText="Check out these."
          mainHeader="We acknowledge knowledge."
          text={
            <>
              Explore our blog for insights on glass railing systems. Elevate
              your home's aesthetic appeal with modern aluminum glass railings,
              sleek glass railings. Whether you're in Mumbai, Delhi, Hyderabad,
              or any other city in India, we've got you covered.
              <br />
              Experience the future of modern design with Imperio's sleek,
              frameless glass railings. Our innovative solutions offer
              uninterrupted views and unparalleled safety. From the stunning
              coastal vistas of Goa to the bustling urban landscapes of Mumbai,
              our railings enhance the beauty of every space.
            </>
          }
        /> */}
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
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
        <BlogPanel
          Socials={["LinkedIn", "Twitter", "Quora", "Pinterest"]}
          // BlogData={loading ? blogCards : data}
          BlogData={data}
        />
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
            elegance to any space. Not only are they visually appealing, but
            they are also durable, safe, and low-maintenance. In this blog, we
            explore the advantages of glass railings, the installation process,
            and how they can elevate the design of homes and commercial
            properties in your city.
            <br />
          </p>
        </div>
      </div>
      <div className="max-w-7xl flex mx-auto mt-10 md:mt-24 gap-[15rem] p-4">
        <div>
          <h3 className=" text-3xl text-[--third]">
            <Link to="ModernTerrace">
              {" "}
              <b className=" flex gap-2">
                Modern Terrace Glass Railing{" "}
                <sup>
                  <LiaExternalLinkAltSolid />
                </sup>
              </b>
            </Link>
          </h3>
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
          <h3 className=" text-3xl text-[--third]">
            <Link to="ModernStaircase">
              {" "}
              <b className=" flex gap-2">
                Modern Staircase Glass Railing{" "}
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
      </div>
    </>
  );
};
