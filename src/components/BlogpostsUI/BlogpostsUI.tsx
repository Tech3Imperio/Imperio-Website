import React from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../../types/BlogPost";
import { Link } from "react-router-dom";
import {
  jogeswariterrace,
  modernstair,
  squareBalconyHandrail,
  villaBalcony,
  pvbsgp,
  modernBalcony,
  aluminiumglassrailing,
  handrailBenefits,
  seamlessRailings,
  aesthetic,
  futureHome1,
} from "../../assets/Images";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Terrace Glass Railing",
    excerpt:
      "Transform your terrace with modern glass railings. We provide stylish and durable glass railings for terraces in cities like Jodhpur, Pune, and beyond.",
    imageUrl: jogeswariterrace,
    link: "terrace/glass-railing",
  },
  {
    id: "2",
    title: "Staircase Glass Railing",
    excerpt:
      "Add elegance to your home with modern staircase glass railings. Perfect for contemporary homes in cities like Chittoor, Hyderabad, and more.",
    imageUrl: modernstair,
    link: "modern/staircase-glass-railing",
  },
  {
    id: "3",
    title: "Aluminium Handrail Glass Railing",
    excerpt:
      "Explore high-quality aluminium handrails and glass railings in cities like Mumbai, Delhi, and Chennai. Ideal for modern homes and commercial spaces.",
    imageUrl: squareBalconyHandrail,
    link: "aluminum-handrail",
  },
  {
    id: "4",
    title: "Balcony Glass Railing",
    excerpt:
      "Looking for sleek balcony glass railings in Mumbai, Delhi, and Bangalore? Enhance your outdoor space with durable, stylish solutions.",
    imageUrl: villaBalcony,
    link: "modern/balcony-glass-railing",
  },
  {
    id: "5",
    title: "PVB Laminated Glass vs SGP Laminated Glass",
    excerpt:
      "Learn the differences between PVB and SGP glass. Discover which interlayer is right for your laminated glass needs.",
    imageUrl: pvbsgp,
    link: "pvb-sgp/glass-difference",
  },
  {
    id: "6",
    title: "Framed vs Frameless Glass Railing",
    excerpt:
      "Compare framed and frameless glass railings. Find the right design for your deck or terrace with our guide.",
    imageUrl: modernBalcony,
    link: "framed-vs-frameless-glass-railings",
  },
  {
    id: "7",
    title: "Stainless Steel Glass Railing vs Aluminium Glass Railing",
    excerpt:
      "Compare framed and frameless glass railings. Find the right design for your deck or terrace with our guide.",
    imageUrl: modernBalcony,
    link: "aluminum-vs-stainless-steel-glass-railings",
  },
  {
    id: "8",
    title: "Aluminium Glass Railings",
    excerpt:
      "Elevate your space with Imperio’s Aluminium Glass railings, blending safety, style, and sophistication.",
    imageUrl: aluminiumglassrailing,
    link: "aluminum-glass-railings",
  },
  {
    id: "9",
    title: "Handrails - Key Benefits and Considerations",
    excerpt:
      "Handrails enhance safety, accessibility, and compliance for staircases, ramps, and balconies.",
    imageUrl: handrailBenefits,
    link: "handrail-benefits",
  },
  {
    id: "10",
    title: "Seamless Glass Railing : Latest Modern Design",
    excerpt:
      "Enjoy uninterrupted views with our seamless glass railing system, blending modern design with safety.",
    imageUrl: seamlessRailings,
    link: "seamless-railing",
  },
  {
    id: "11",
    title: "Stylish Modern Railing on a balcony ",
    excerpt:
      "Discover modern railings in our latest Goa project, blending safety with stunning ocean views.",
    imageUrl: aesthetic,
    link: "aesthetic-railing",
  },
  {
    id: "12",
    title: "Why Glass Railings Are the Future of Modern Home Design",
    excerpt:
      "Few design elements combine elegance, safety, functionality &amp; sustainability as well as glass railings do.",
    imageUrl: futureHome1,
    link: "future-modern-home-design",
  },
  {
    id: "13",
    title: "How Railings Can Transform Your Living Space",
    excerpt:
      "The railing of your staircase is not just meant for safety—it enhances the beauty of your modern home.",
    imageUrl: futureHome1,
    link: "interior-design",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 md:mt-24 p-6 pb-14">
      <motion.div
        className="grid md:grid-cols-2 gap-10 xl:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className=" shadow-slate-200 rounded-none shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={post.link} className="block">
              <img
                src={post.imageUrl}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-[--third] font-medium pb-2 flex gap-2  mb-2">
                  {post.title}
                  <sup className=" mt-2">
                    <LiaExternalLinkAltSolid size={24} />
                  </sup>
                </h3>
                <p className="text-[#292929] text-[15px]">{post.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPage;
