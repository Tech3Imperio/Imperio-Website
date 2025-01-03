import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "../../../components";
import {
  villaBalcony,
  customBalcony,
  LEDHandrail,
  modernBalcony,
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
    title: "Modern Glass Balcony Railings for Elegant & Secure Spaces.",
    excerpt:
      "Enhance the beauty and safety of your balcony with our modern glass railing solutions. Our high-quality glass balcony railings provide both elegance and security, offering a sleek, contemporary design. Whether you're upgrading an existing property or building a new home, our frameless glass balcony systems are the ideal choice for a stylish, open feel. We also offer durable aluminum channel railings that provide both strength and aesthetic appeal. Our spigot glass railing systems deliver maximum support and an uninterrupted view, perfect for balconies of all sizes. Serving Mumbai, Delhi, Bangalore, and all of India, we are your trusted supplier for top-tier glass balcony solutions. Our custom glass designs are tailored to meet your specific needs, ensuring a perfect fit for your space. With competitive pricing and reliable supply through experienced dealers, we make glass railing installations easy and affordable. Choose our company for premium glass balcony railings at affordable costs and excellent service. Whether you're installing a balcony for a residential or commercial project, our products are designed to elevate your space. We provide professional installation services that ensure long-lasting durability and security. Enhance the curb appeal of your home with our frameless and spigot glass balcony railings, and enjoy a safe, stylish, and modern look. Let our glass railing systems be the centerpiece of your balcony's transformation.",
    imageUrl: modernBalcony,
    location: "Mysuru, Mysuru",
  },
  {
    id: 2,
    title: "Affordable & Durable Glass Railings for Your Balcony.",
    excerpt:
      "Looking for affordable glass railings that combine style and durability? Our aluminum channel railings and modern glass balcony solutions are designed to offer strength, beauty, and functionality at competitive prices. We specialize in high-quality spigot glass railing systems that provide maximum stability while maintaining a sleek, transparent look. Our frameless glass balcony designs are perfect for homeowners and businesses looking to add an elegant touch to their outdoor spaces. Whether you are in Mumbai, Delhi, Bangalore, or anywhere across India, we provide reliable and fast glass railing supply through trusted dealers. Customization is our specialty, and we offer glass balcony systems tailored to meet the specific requirements of your project. With our extensive experience in the industry, we ensure that every glass railing installation is done with precision and care. Our competitive prices do not compromise on quality, making it easier for you to enhance the beauty and safety of your balcony. Choose from a variety of glass railing designs, including frameless and spigot systems, to create a modern and secure outdoor space. We cater to both residential and commercial properties, offering customized solutions that fit your style and budget. The glass balcony railing systems we offer provide a blend of contemporary aesthetics and long-lasting durability, ensuring your investment will stand the test of time. Trust our expert team to handle your installation with professionalism and care. Add a touch of sophistication to your balcony with our top-tier glass railings today.",
    imageUrl: customBalcony,
    location: "Bengaluru, Bengaluru",
  },
  {
    id: 3,
    title: "Custom Glass Balcony Railings with Modern Designs.",
    excerpt:
      "This oval-shaped wooden finish aluminium staircase handrail combines the timeless elegance of wood with the modern durability of aluminium. Ideal for both Chennai, Mumbai, Delhi, and Bangalore, this handrail provides a warm, traditional aesthetic while ensuring long-lasting performance. The wooden finish mimics the natural beauty of real wood, while the high durable aluminium construction offers excellent weather resistance, making it perfect for outdoor staircases or balconies. The oval shape of this handrail provides a comfortable grip, perfect for stairs or railings where safety and style are key. Whether you are remodeling your staircase or updating your balcony, this handrail fits seamlessly with a wide range of home styles, offering both function and charm. This product is designed to withstand the elements without fading or deteriorating, thanks to its weather resistance. The combination of natural wood aesthetics and modern aluminium technology offers an attractive yet sturdy solution for your home. The handrail is easy to maintain and does not require frequent sealing or polishing, unlike traditional wooden railings. As a leading handrail supplier, we ensure that our products offer both beauty and safety for your living space.",
    imageUrl: villaBalcony,
    location: "Mumbai, Maharashtra",
  },
  {
    id: 4,
    title: "Premium Glass Balcony Railing.",
    excerpt:
      "Transform your balcony with our premium glass railing systems designed for both residential and commercial use. Our modern glass balcony railings offer an elegant and secure solution for any outdoor space. With options like frameless glass balcony systems and spigot glass railing designs, we cater to a wide range of styles and preferences. Our aluminum channel railings provide strength and durability while maintaining a sleek, minimalistic look. Serving Mumbai, Delhi, Bangalore, and all of India, we provide reliable supply and installation services through trusted dealers. Our glass balcony solutions are perfect for enhancing the aesthetics of both small and large spaces, adding a touch of luxury to any environment. Customization is key, and we offer tailored glass railing systems that fit your specific needs. Our competitive pricing ensures that you get the best value for your investment without compromising on quality. With an emphasis on safety and design, we ensure that every glass railing installation is done to the highest standards. Whether you're looking for modern spigot glass railing systems or frameless designs, we have the right solutions for your balcony. Trust our experienced team to handle your glass balcony project with precision, from design to installation. We guarantee that our glass railings will elevate the style and security of your space. Contact us today for affordable, high-quality glass balcony systems that combine beauty, durability, and safety. Let us help you transform your balcony into a modern, secure, and stunning space.",
    imageUrl: LEDHandrail,
    location: "Pathankot, Pathankot",
  },
];

export default function ModernBalcony() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <>
      <Metadata
        title={"Balcony Glass Railing | Aluminium Railing in Mumbai"}
        description={
          "Explore high-quality aluminum balcony glass railings, frameless glass balcony systems, and spigot glass railing solutions for residential and commercial projects. Serving Mumbai, Delhi, Bangalore, Kolkata and all of India, we offer custom glass designs and railing, modern balcony glass railings, and professional glass railing installations. Enhance your space with durable glass balcony systems, tailored to your needs for both outdoor and indoor areas. Reliable supply and installation by trusted dealers in mumbai, maharashtra and all over india."
        }
        keywords={
          "balcony glass railing , aluminum glass railing, glass stair railing, glass supplier Mumbai, frameless glass railing, balcony glass railing, stainless steel glass railing, spigot glass railing, modern balcony design, tempered glass stair railing, glass handrail, glass railing indoor, glass balcony cost, glass supplier India, glass railing near me"
        }
        ogImage={customBalcony}
        ogUrl={
          "https://www.imperiorailing.com/blog/modern/balcony-glass-railing"
        }
      />
      <Hero
        img={modernBalcony}
        altText="balcony-railing"
        header="Balcony Glass Railing"
        subHeader="Enhance your space with premium balcony glass railing at affordable prices. We offer spigot glass railing systems, frameless designs, and durable aluminum channel railings in Kolkata, Maharashtra, Bangalore, Karnataka and nearby cities or states, with expert installation and reliable glass balcony solutions."
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
            to="/blog/modern/staircase-glass-railing"
            className="hover:text-[#fad000] text-base sm:text-lg md:text-xl"
          >
            Staircase Railing
          </Link>
          <MdKeyboardArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />

          <Link
            to="/blog/aluminum-handrail"
            className="hover:text-[#fad000] text-base sm:text-lg md:text-xl"
          >
            Handrail Railing
          </Link>
        </span>

        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className=" text-xl md:text-3xl pt-4  YellowText Raleway tracking-widest mb-4">
            Premium Balcony Glass Railing Dealer and Supplier in Mumbai,
            Maharashtra, and All Over India – Offering Frameless Glass Railing,
            Spigot Glass Systems, and Customizable Designs at Competitive
            Prices.
          </h2>
          <p className=" text-sm md:text-lg xl:px-44 text-justify  italic text-[--third]">
            Enhance the beauty and safety of your space with our high-quality
            glass railings, including modern glass balcony railings, frameless
            glass balcony systems, and durable aluminum channel railings at
            competitive prices. Our glass balcony solutions are perfect for both
            residential and commercial projects, providing elegant and secure
            designs. Serving Mumbai, Delhi, Bangalore, and all of India, we
            offer spigot glass railing installations, custom glass designs
            tailored to your needs, and reliable supply through trusted dealers.
            Choose the best glass railing company near me for top-tier products,
            affordable costs, and excellent services.
          </p>
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
