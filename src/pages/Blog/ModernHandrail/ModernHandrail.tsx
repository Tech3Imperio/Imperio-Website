import { useState } from "react";
import { motion } from "framer-motion";
import { Hero } from "../../../components";
import {
  ovalWoodenHandrail,
  squareBalconyHandrail,
  ovalHandrail,
  LEDHandrail,
} from "../../../assets/Images";
import Metadata from "../../../components/Metatag/Metatag";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import EnquiryButton from "../../../components/EnquiryButton/EnquiryButton";

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
    title:
      "Sleek Aluminium Oval Premium Handrail for Modern Staircase in Mumbai.",
    excerpt:
      "This sleek aluminium oval Premium handrail is an excellent choice for modern staircases in Mumbai, Delhi, Bangalore, and Chennai. The smooth, streamlined oval shape gives your stairs a contemporary and sophisticated look. Made from high durable aluminium, it is designed to withstand the toughest weather conditions, offering superior weather resistance for both indoor and outdoor installations. Whether you're upgrading your stair handrail or installing a new balcony handrail, this handrail provides lasting durability and style. Its rust-proof and corrosion-resistant properties make it ideal for outdoor staircases, ensuring the handrail remains strong and attractive even in harsh climates. The oval shape also offers ergonomic comfort, with a soft, smooth finish that’s easy to grip. The material is lightweight yet strong, ensuring both aesthetic appeal and structural integrity. As a leading stair handrail supplier, we offer competitive prices and exceptional service, making it easier for you to find the perfect solution for your home. This handrail is available in various finishes to match your interior décor. Whether you're looking for a sleek, modern design or a more traditional look, this aluminium handrail will blend beautifully with your space. Its easy maintenance and longevity make it the ideal choice for homes and businesses alike.",

    imageUrl: ovalHandrail,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/ovalHandrail.webp",
    location: "Mysuru, Mysuru",
  },
  {
    id: 2,
    title: "Square Aluminium Premium Handrail Glass Railing for Balcony.",
    excerpt:
      "Transform your balcony with this square aluminium glass railing, designed to offer both strength and modern style. Perfect for homes and buildings in Uttara Kannada, Rajasthan, Maharashtra, and Karnataka, this handrail is crafted with high durable aluminium for exceptional weather resistance. The square shape adds a bold, geometric appeal to your exterior, while the transparent glass panels allow for unobstructed views of the surroundings. This sleek, contemporary design is ideal for balcony handrails and outdoor staircases where both safety and aesthetics are a priority. The aluminium frame provides robust support, while the glass adds a touch of elegance. This handrail is built to resist rust and corrosion, making it perfect for outdoor railings exposed to varying weather conditions. Its minimalistic yet strong structure is easy to maintain and will continue to look great for years. Whether you’re enhancing your deck or creating a stylish boundary for your balcony, this handrail fits seamlessly into any modern design scheme. The clear glass ensures an open, airy feel without compromising safety, while the aluminium frame maintains structural integrity. As a handrail supplier, we offer competitive pricing for all of our products, ensuring you receive high-quality solutions at great value.",
    imageUrl: squareBalconyHandrail,
    // imageUrl:
    //   "http://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/squareBalconyHandrail.webp",
    location: "Bengaluru, Bengaluru",
  },
  {
    id: 3,
    title: "Oval Shaped Wooden Finish Aluminium Staircase Premium Handrail.",
    excerpt:
      "This oval-shaped wooden finish aluminium staircase handrail combines the timeless elegance of wood with the modern durability of aluminium. Ideal for both Chennai, Mumbai, Delhi, and Bangalore, this handrail provides a warm, traditional aesthetic while ensuring long-lasting performance. The wooden finish mimics the natural beauty of real wood, while the high durable aluminium construction offers excellent weather resistance, making it perfect for outdoor staircases or balconies. The oval shape of this handrail provides a comfortable grip, perfect for stairs or railings where safety and style are key. Whether you are remodeling your staircase or updating your balcony, this handrail fits seamlessly with a wide range of home styles, offering both function and charm. This product is designed to withstand the elements without fading or deteriorating, thanks to its weather resistance. The combination of natural wood aesthetics and modern aluminium technology offers an attractive yet sturdy solution for your home. The handrail is easy to maintain and does not require frequent sealing or polishing, unlike traditional wooden railings. As a leading handrail supplier, we ensure that our products offer both beauty and safety for your living space.",
    imageUrl: ovalWoodenHandrail,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/ovalWoddenHandrail.webp",
    location: "Mumbai, Maharashtra",
  },
  {
    id: 4,
    title: "Sleek Square LED Aluminium Staircase Handrail.",
    excerpt:
      "Introducing the sleek and stylish square LED aluminium staircase handrail, perfect for adding contemporary flair to your staircases and balconies. This innovative handrail integrates LED lighting for enhanced safety and elegance, offering ambient lighting for both indoor and outdoor spaces. Designed for homes in Goa, Tamil Nadu, Andhra Pradesh, and Punjab, this handrail features a square shape that makes a bold statement while remaining functional. The high durable aluminium frame ensures that the handrail is strong, lightweight, and resistant to weathering, making it suitable for any climate. The built-in LED handrail lighting not only enhances the visual appeal but also provides added security at night. Whether you're looking to upgrade your indoor stairs or add a modern touch to your balcony, this handrail is a perfect solution. The weather resistance of aluminium ensures that the handrail remains sturdy and attractive for years to come. Its sleek design fits seamlessly into modern spaces, while the LED lights add a sophisticated and practical touch. With under handrail lighting, this design ensures a bright, welcoming atmosphere. As a trusted stair handrail supplier, we offer this high-quality product at an affordable price, making it easy to add style and function to your home.",
    imageUrl: LEDHandrail,
    // imageUrl:
    //   "https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/LEDHandrail.webp",
    location: "Pathankot, Pathankot",
  },
];

export default function ModernHandrail() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <>
      <Metadata
        title="Glass Railing Handrails & Premium Aluminium Handrails"
        description="Find premium handrails and railings for indoor and outdoor staircases, including aluminum, stainless steel, and glass options."
        keywords="handrails staircase, stair handrail, Premium Glass Railing"
        // ogImage={squareBalconyHandrail}
        ogImage="http://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/squareBalconyHandrail.webp"
        ogUrl="https://www.imperiorailing.com/blog/aluminum-handrail"
      />
      <Hero
        // img={squareBalconyHandrail}
        img="http://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/Handrails/squareBalconyHandrail.webp"
        altText="handrail"
        header="Glass Railing Handrails"
        subHeader="High-quality glass railings oval handrail, sleek handrail And LED handrails for balconies, staircases, and interiors."
        curve
      />
      <div className="min-h-screen bg-white p-4 md:p-8">
        <span className="flex flex-wrap gap-2 pb-4 items-center">
          <Link to="/blog/terrace/glass-railing">
            <a className="hover:text-[#fad000] text-base sm:text-lg md:text-xl">
              Terrace Railing
            </a>
          </Link>
          <MdKeyboardArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          <Link to="/blog/modern/staircase-glass-railing">
            <a className="hover:text-[#fad000] text-base sm:text-lg md:text-xl">
              Staircase Railing
            </a>
          </Link>
          <MdKeyboardArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          <Link to="/blog/modern/balcony-glass-railing">
            <a className="hover:text-[#fad000] text-base sm:text-lg md:text-xl">
              Balcony Railing
            </a>
          </Link>
        </span>
        <EnquiryButton />
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-3xl pt-4 text-[#fad000] Raleway tracking-widest mb-4">
            Premium Handrails for Glass Railing – Balcony, Staircase, Indoor and
            Outdoor with Custom Finishes.
          </h2>
          <p className="text-sm md:text-lg xl:px-44 text-justify italic text-[--third]">
            Looking for premium handrails for your glass railing balcony,
            staircase, or indoor and outdoor spaces? We offer a wide range of
            high-quality handrails designed to suit any style and budget.
            Available in a variety of finishes and colours, including custom
            finishes, our handrails are the perfect blend of functionality and
            aesthetics.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-20 max-w-7xl mx-auto mb-14"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                <motion.div
                  className="w-full md:w-1/2 aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <picture>
                    <source
                      srcSet={`${post.imageUrl} 400w, ${post.imageUrl} 800w, ${post.imageUrl} 1200w`}
                      sizes="(max-width: 480px) 400px, (max-width: 768px) 800px, 1200px"
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
                  <p className="text-[16px] text-[#393939] text-justify ">
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
