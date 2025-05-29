import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "../../../components";
import {
  jogeswariterrace,
  juhusite,
  sivanta,
  solapur,
  heroImg,
} from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
// import EnquiryButton from "../../../components/EnquiryButton/EnquiryButton";
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
    title: "Mumbai Terrace Glass Railing: A Fusion of Elegance and Safety",
    excerpt:
      "We’re excited to share our latest project at Lotus Signature, a premium residential complex in Mumbai, where we’ve recently completed the installation of sophisticated terrace glass railings using the A50 Base and toughened glass. This modern glass railing solution offers more than just safety—it adds a sleek and stylish touch to the architectural design of the terrace, while preserving the panoramic views of the surrounding cityscape. Our choice of toughened glass ensures a high level of durability and safety, making it the perfect fit for both residential and commercial terrace spaces. The A50 Base complements the sleek, minimalistic aesthetic of the glass, resulting in a balcony glass railing system that’s as functional as it is beautiful. Whether it’s for enjoying a coffee on your terrace or hosting a gathering, this glass railing system guarantees an open, airy feel without compromising on security. Trust our expertise to deliver premium glass railing solutions tailored to your unique vision—solutions that stand the test of time in both design and durability.",

    imageUrl: jogeswariterrace,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/modernterrace/jogeshwari.webp",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 2,
    title: "Terrace Glass Railing: Modern and sleek design",
    excerpt:
      "The terrace glass railing  in Juhu has been elegantly enhanced with state-of-the-art D75 glass railings, offering both safety and style. These glass railings provide an unobstructed view of the stunning surroundings, allowing residents to fully enjoy the beauty of their outdoor space without compromise. The D75 base ensures robust support while maintaining a sleek, modern aesthetic, making it a perfect choice for contemporary architecture. The installation process was meticulously executed to meet the highest standards of quality and design, ensuring durability and long-lasting performance. The glass panels are not only durable but also easy to maintain, making them ideal for the coastal environment of Juhu. This project exemplifies how glass railings can elevate the ambiance of a terrace, creating a seamless connection between indoor and outdoor living. With the addition of these premium glass railings, the terrace has become a serene retreat for relaxation and entertainment, showcasing the perfect fusion of functionality and elegance. Residents can now enjoy their outdoor space with peace of mind, knowing they are protected by high-quality materials designed to last.",
    imageUrl: juhusite,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/modernterrace/jhusite.webp",
    location: "Goa, Goa",
  },
  {
    id: 3,
    title:
      "Sleek View Terrace Glass Railing: Enhance Your Space with Uninterrupted Swimming Pool Views",
    excerpt:
      "The terrace glass railing project at Sivanta Apartments in Mumbai showcases a stunning blend of safety and sophistication. Utilizing a robust C75 aluminum base, this seamless glass railing system not only enhances the aesthetic appeal of the terrace but also provides a secure barrier for residents. The use of high-quality Sentry glass ensures durability and clarity, allowing for unobstructed views of the beautiful swimming pool below. The installation features an S50 handrail, adding a touch of elegance while ensuring a comfortable grip for users. This combination of materials creates a modern look that perfectly complements the architectural design of Sivanta Apartments. The glass panels are easy to maintain, making them ideal for outdoor environments, while the aluminum base offers excellent resistance to corrosion. This project exemplifies how thoughtful design can transform outdoor spaces into luxurious retreats. Residents can now enjoy their terrace with peace of mind, knowing they are protected by top-notch materials that prioritize both style and safety. The seamless integration of the glass railing system with the swimming pool area creates a harmonious outdoor experience, perfect for relaxation and entertainment in Mumbai.",
    imageUrl: sivanta,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/modernterrace/sivanta.webp",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 4,
    title:
      "Premium Penthouse Terrace Glass Railing: Unmatched Elegance and Clear Views ",
    excerpt:
      "The terrace glass railing project in Belgoan, Chattisgarh combines coastal charm with safety and style. Featuring a durable L50 aluminum base, it provides robust support against the elements, making it ideal for outdoor spaces in seaside environments. The use of premium Sentry glass offers unobstructed views, creating a seamless flow between indoor and outdoor areas. Complemented by the sleek S12 handrail, the design enhances the terrace's aesthetic appeal while providing a comfortable grip. With low-maintenance, high-quality materials, this installation ensures long-lasting durability and peace of mind. The result is a luxurious, functional terrace, perfect for relaxation, entertainment, or quiet reflection—ideal for homeowners in Solapur and across Maharashtra seeking elegant glass railings that stand the test of time. ",
    imageUrl: solapur,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/modernterrace/solapur.webp",
    location: "Belgoan ,Chattisgarh",
  },
];

export default function ModernTerrace() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <>
      <Metadata
        title={"Terrace Glass Railing | Modern Terrace Glass Railing Designs"}
        description={
          "Explore durable terrace glass railing systems in Mumbai, Pune, and Nagpur, Maharashtra."
        }
        keywords={
          "glass railings, aluminum glass railings, Laminated Glass,Terrace glass railing systems, modern glass railings, frameless glass railings,Balcony glass railings, Premium glass railing systems, Minimalist Style, safety glass railings, high durable glass railings, Weather Resistant, Low Maintenance, Customizable Options, Best glass railing systems for terraces in Mumbai, best glass railing systems in Mumbai, Commercial Spaces, modern glass railing designs for homes, Balcony Railings, Staircase glass Railings, stylish glass railings for commercial buildings, transfrom your home decor, seamless glass railing, elegant glass railing, Affordable glass balcony railings in Mumbai"
        }
        ogImage={
          "https://raw.githubusercontent.com/Tech3Imperio/Imperio-Website/refs/heads/main/src/assets/Images/modernterrace/heroImg.webp"
        }
        ogUrl={"https://www.imperiorailing.com/blog/terrace/glass-railing"}
      />
      <Hero
        img={heroImg}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/modernterrace/hero.webp"
        altText="hero for blog"
        header="Terrace Glass Railing"
        subHeader="Discover premium terrace glass railing systems in Mumbai, Pune, Delhi, Varanasi, Kolkata, and across Maharashtra and beyond.  Our modern, stylish, and durable top-quality glass railings Frameless Glass Railings for Terraces and Balcony. Discover modern terrace railings made of glass, stainless steel and aluminium. High safety, stylish design and customisation for your terrace.  Our premium glass railing solutions offer safety, aesthetics, and low maintenance, enhancing your outdoor space with style and functionality."
        curve
      />
      <div className="min-h-screen bg-white p-4 md:p-8">
        <span className="flex flex-wrap gap-2 pb-4 items-center">
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
          <h2 className=" text-xl md:text-3xl  text-[#fad000] Raleway tracking-widest mb-4">
            Premium Terrace Glass Railing Systems in Mumbai & Maharashtra
          </h2>
          <h3 className="text-xl italic text-[--third]">
            Modern, Stylish, and Durable Glass Railings for Terraces
          </h3>
        </motion.header>
        {/* <EnquiryButton /> */}
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
                  className="w-full md:w-1/2 aspect-video relative overflow-hidden"
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
                      className="w-full h-auto object-contain transition-transform duration-300 rounded-none"
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
                  <p className="text-[16px] text-[#393939] text-justify ">
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
