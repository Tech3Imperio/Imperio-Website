import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "../../../components";
import {
  glassStaircase,
  staricaseImg,
  whitestaircase,
  glassstair,
  //   heroImg,
} from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  location: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Elegant Staircase Glass Railings",
    excerpt:
      "Transform your staircase with elegant glass railings that add sophistication and modern appeal in Mumbai, Pune, Dehradun, and Kolkata. Our premium glass railing systems offer a seamless blend of style and safety, ideal for any home or office. The frameless glass stair railings provide an unobstructed view, making your staircase appear open and airy. Whether you prefer a minimalist or contemporary look, our solutions enhance the aesthetic appeal of your space. We use high-quality tempered glass to ensure durability and safety. Our staircase glass design is easy to maintain, resistant to wear and weather conditions, and adds lasting value to your property. Whether for residential or commercial spaces, these railings guarantee peace of mind with their sturdy, safe design. Trust us for bespoke glass railing solutions tailored to your specific needs.",

    imageUrl: glassStaircase,
    location: "Mysuru, Mysuru",
  },
  {
    id: 2,
    title: "Modern Staircase Glass Railing Solutions for Homes and Offices",
    excerpt:
      "Elevate the design of your home or office with our modern staircase glass railing systems in Madhya Pradesh, Punjab, Bangalore, and Chennai. Offering the perfect combination of safety, aesthetics, and functionality, these railings create an open and inviting atmosphere. Our frameless glass stair railings provide an elegant and seamless look, suitable for any type of interior design. High-quality tempered glass ensures durability and strength, and we offer customized solutions to match your décor and personal preferences. Whether you’re looking to add a luxurious touch or maintain a minimalist aesthetic, our glass staircase designs offer versatility. Our staircase glass railings are easy to clean and maintain, making them a practical choice for both residential and commercial properties. Experience the blend of form and function with our premium staircase glass railing solutions.",
    imageUrl: staricaseImg,
    location: "Bengaluru, Bengaluru",
  },
  {
    id: 3,
    title: "Durable Staircase Glass Railings",
    excerpt:
      "Upgrade your staircase with our durable glass railing systems in Jharkhand, Nagpur, Varanasi, Goa, and Surat. Our frameless glass railings provide a sleek, contemporary look that enhances any interior design style. Made from premium, high-quality glass, our stair railings are built to withstand wear and tear while offering clear, unobstructed views. These railings create a sense of openness and light, making your staircase feel inviting and spacious. With weather-resistant, low-maintenance properties, our glass railings for staircase maintain their clarity and beauty for years. Whether you are renovating or designing a new space, our staircase railing designs provide both safety and elegance. Trust our team to deliver bespoke glass railing designs that match your unique style and needs. Create a stylish, safe, and functional staircase with our premium staircase glass railings.",
    imageUrl: whitestaircase,
    location: "Mumbai, Maharashtra",
  },
  {
    id: 4,
    title: "Premium Staircase Glass Railings for Luxury Homes ",
    excerpt:
      "Add a touch of luxury to your home with our premium staircase glass railing systems in Karnataka, Maharashtra, Nashik, and Jodhpur. Our railings offer maximum safety with an elegant, sleek design that complements modern architecture. Specializing in frameless glass staircases, we create a seamless transition between floors while allowing natural light to flow freely. The use of high-quality tempered glass ensures your staircase is not only beautiful but built to last. Whether it’s for a grand entryway or a more subtle interior, our glass railings add sophistication and functionality. Designed to be easy to maintain and resistant to scratches, our stainless steel glass staircase railing solutions provide long-term durability. The clean lines and transparent design will make your staircase the focal point of your home. Invest in a modern, high-performance glass railing for your staircase that enhances both the safety and beauty of your living space.",
    imageUrl: glassstair,
    location: "Pathankot, Pathankot",
  },
];

export default function ModernStaircase() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <>
      <Metadata
        title={"Modern Staircase Glass Railing | Premium Staircase Railing"}
        description={
          "Explore premium staircase glass railings in Mumbai, Pune, Nagpur, Jodhpur, and Maharashtra. Our modern, durable frameless glass railings offer safety, aesthetics, and easy maintenance. Perfect for luxury homes and commercial spaces, our high-quality tempered glass railings provide unobstructed views and long-lasting beauty."
        }
        keywords={
          "Staircase Glass Railings,Frameless Glass Railings,Premium Glass Railing Systems,Modern Staircase Railings,Durable Glass Railings,Luxury Staircase RailingsHigh-Quality Glass Railing,afety Glass Railings for Stairs, Glass Railings for Homes and Offices,Seamless Staircase Glass Railings,glass handrails for stairs, glass railing in mumbai"
        }
        ogImage={glassStaircase}
        ogUrl={
          "https://www.imperiorailing.com/blog/modern/staircase-glass-railing"
        }
      />
      <Hero
        img={whitestaircase}
        altText="staircase-image"
        header="Staircase Glass Railing"
        subHeader="Explore Premium Staircase Glass Railings in Mumbai, Delhi, Maharashtra, Madhya Pradesh, and Karnataka Elevate your space with our frameless glass railings, perfect for stainless steel glass staircase railings, balcony railings with glass, and modern staircase glass railing designs and ideas. Ideal for both luxury homes and commercial spaces."
        curve
      />
      <div className="min-h-screen bg-white p-4 md:p-8">
        <span className="flex flex-wrap gap-2 pb-4 items-center">
          <Link
            to="/blog/terrace/glass-railing"
            className="hover:text-[#fad000] text-base sm:text-lg md:text-xl"
          >
            Terrace Railing
          </Link>
          <MdKeyboardArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />

          <Link
            to="/blog/aluminum-handrail"
            className="hover:text-[#fad000] text-base sm:text-lg md:text-xl"
          >
            Handrail Railing
          </Link>
          <MdKeyboardArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />

          <Link
            to="/blog/modern/balcony-glass-railing"
            className="hover:text-[#fad000] text-base sm:text-lg md:text-xl"
          >
            Balcony Railing
          </Link>
        </span>
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className=" text-xl md:text-3xl YellowText Raleway tracking-widest mb-4">
            Premium Staircase Glass Railing Systems in Mumbai & Maharashtra
          </h2>
          <h3 className="text-xl italic text-[--third]">
            Modern, Stylish, and Durable Glass Railings for Staircase
          </h3>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-20 max-w-7xl  mx-auto mb-14"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                <motion.div
                  className=" md:w-1/2 aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <picture>
                    <source
                      srcSet={`
      ${post.imageUrl} 400w,
      ${post.imageUrl} 800w,
      ${post.imageUrl} 1200w
    `}
                      sizes="(max-width: 480px) 400px, 
           (max-width: 768px) 800px, 
           1200px"
                      type="image/webp"
                    />
                    <img
                      src={`${post.imageUrl}-800.webp`}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-300 rounded-4xl"
                    />
                  </picture>
                </motion.div>
                <div className="w-full md:w-1/2 space-y-4">
                  <motion.h2
                    className="text-3xl text-[--third]"
                    animate={{ x: hoveredPost === post.id ? 20 : 0 }}
                  >
                    {post.title}
                  </motion.h2>
                  <p className="text-[16px] text-gray-500 text-justify ">
                    {post.excerpt}
                  </p>
                  <p className="text-sm uppercase text-[--third]">
                    {post.location}
                  </p>
                </div>
              </div>
              <motion.div
                className="absolute left-0 right-0 h-px bg-black mt-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredPost === post.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </>
  );
}
