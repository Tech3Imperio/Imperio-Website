import { motion } from "framer-motion";
import {
  LightingRails,
  prodHero,
  balconyRailing,
  // fenceRail,
  glassRail,
  // lightStairs,
  stairRails,
  tempered,
  buildings,
  sunset,
  framelessStair,
  officeBalcony,
  deckborder,
  hotelbalcony,
  houseproject,
  roundBalcony,
  // slidingWindow,
  glassdoorwall,
  alibaug,
  apartment,
  buildingImg,
  coastal,
  goa,
  jamshedpur,
  luxury,
  penthouse,
  semi,
  lux,
  sleek,
  square,
  pvb,
} from "../../assets/Images/NewProdPage";
import { useState, useRef } from "react";
import { Hero } from "../../components";
// import { handrailBenefits } from "../../assets/Images";
import Metadata from "../../components/Metatag/Metatag";
const imagesProject = [
  { id: "alibaug", src: alibaug, location: "Mumbai" },
  { id: "apartment", src: apartment, location: "Goa" },
  { id: "buildingImg", src: buildingImg, location: "Solapur" },
  { id: "coastal", src: coastal, location: "Mumbai" },
  { id: "goa", src: goa, location: "Goa" },
  { id: "jamshedpur", src: jamshedpur, location: "jamshedpur" },
  { id: "luxury", src: luxury, location: "Belgaon" },
  { id: "penthouse", src: penthouse, location: "Belgaon" },
];

const imagesSet1 = [
  buildings,
  glassRail,
  officeBalcony,
  tempered,
  sunset,
  framelessStair,
  stairRails,
  deckborder,
  hotelbalcony,
  roundBalcony,
  houseproject,
  glassdoorwall,
];
const products = [
  {
    id: 1,
    name: "Base A50 Silver",
    title: "Imperio Ace A50 Silver Balcony Glass Railing",
    longSubtitle:
      "Elevate the elegance of your balcony with the Imperio Ace A50 Silver, featuring a sleek finish and advanced Bracket & Cover System, built with durable aluminium and toughened glass to ensure safety and aesthetic appeal for modern spaces.",
    image: semi,
    fullText:
      "Imperio Ace A50 Silver finish redefines balcony glass railing with its sleek design and advanced Bracket & Cover System. Crafted from durable aluminium and toughened glass, it ensures both safety and aesthetic appeal for contemporary spaces.",
    shortText:
      "Imperio Ace A50 Silver finish redefines balcony glass railing with its sleek design and advanced Bracket & Cover System....",
    link: "/products/A50Silver",
  },
  {
    id: 2,
    name: "Lux T150 Silver",
    title: "Imperio Lux T150 Silver Spigot Glass Railing System",
    longSubtitle:
      "Imperio Lux T150 Silver combines a stylish spigot glass railing system with floor mounting capability, offering durability and elegance for contemporary architectural designs, making it a reliable and visually appealing choice for any modern space.",
    image: lux,
    fullText:
      "Imperio Lux T150 in Silver offers a stylish spigot glass railing system, ideal for floor mounting in modern spaces. Built strong and durable, it combines elegance with reliability, catering to contemporary architectural needs.",
    shortText:
      "Imperio Lux T150 in Silver offers a stylish spigot glass railing system, ideal for floor mounting in modern spaces. Built strong and durable,...",
    link: "/products/S150Silver",
  },
  {
    id: 3,
    name: "Sleek Silver Handrail",
    title: "Imperio Sleek 12 Silver Minimalistic Handrail System",
    longSubtitle:
      "Imperio Sleek 12 Silver is a modern, minimalist handrail system with an adhesive feature for easy installation. Its sleek design enhances contemporary spaces while providing a functional and elegant railing solution.",
    image: sleek,
    fullText:
      "Imperio Sleek 12 Silver combines a sleek appearance with built-in adhesive, offering a minimalistic railing system ideal for modern spaces. Enhance your decor with this functional and elegant solution.",
    shortText:
      "Imperio Sleek 12 Silver combines a sleek appearance with built-in adhesive...",
    link: "/products/S12Silver",
  },
  {
    id: 4,
    name: "Square Silver Handrail",
    title: "Imperio Square 40 Silver Robust Aluminium Railing",
    longSubtitle:
      "Discover the strength and sophistication of the Imperio Square 40 Silver, an aluminium railing system featuring superior grip and anti-corrosion technology, designed to enhance architectural beauty and durability in modern spaces.",
    image: square,
    fullText:
      "Discover Imperio Square 40 Silver, a robust aluminium railing system designed for architectural excellence. Featuring better grip and high-grade anti-corrosion technology, it enhances both strength and modern aesthetics.",
    shortText:
      "Discover Imperio Square 40 Silver, a robust aluminium railing system designed for architectural excellence....",
    link: "/products/S40Silver",
  },
  {
    id: 5,
    name: "6mm Glass Layers",
    title: "6mm Glass Layers with PVB Interlayer",
    longSubtitle:
      "Enhance safety and comfort with 6mm glass layers bonded by a PVB interlayer, offering superior strength, noise reduction, and safety by holding shards together in case of breakage, ideal for high-quality glass railing systems.",
    image: pvb,
    fullText:
      "Composed of two 6mm glass layers bonded with a PVB interlayer, offering enhanced safety by holding shards together and providing effective noise reduction.",
    shortText:
      "Composed of two 6mm glass layers bonded with a PVB interlayer, offering enhanced safety...",
    link: "/products/6+6%20PVB%20LaminatedLaminated",
  },
];

function NewProducts() {
  const [images] = useState(imagesSet1);
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [showFullTextForid, setShowFullTextForId] = useState(0);
  const visibleImages = showAll ? imagesProject : imagesProject.slice(0, 4);

  return (
    <>
      <Metadata
        title={"Glass Railing: Balcony Glass Railing & Staircase | Aluminum"}
        description={
          "At Imperio, we craft exquisite glass railing systems and aluminum railings that combine sleek design with unmatched durability. Our collection includes balcony glass railings, staircase glass railings, and aluminum handrails and cover panels. We provide elegant, modern railing solutions across India, including key cities like Mumbai, Pune, Bangalore, and Alibaug, offering a perfect blend of safety, style, and functionality."
        }
        keywords={
          "glass railing, aluminum railing, balcony glass railing, staircase glass railing, modern railing designs, aluminum handrails, cover panels, durable railings, frameless glass railings, stylish balcony designs, high-quality railings, corrosion-resistant glass railings, UV-resistant glass, custom glass railings, residential railing systems, commercial aluminum railings, innovative railing solutions, elegant glass railings, architectural railing designs, modern aluminum railings"
        }
        ogImage={prodHero}
        // ogImage="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/hero/product.webp"
        ogUrl={"https://imperiorailing.com/newproducts"}
      />
      <section className="flex w-full justify-center flex-col">
        {/* Sidebar Navigation */}

        {/* Hero Section */}
        {/* <motion.div
          id="hero"
          className="flex w-full h-[50vh] md:h-[60vh] bg-cover bg-center pt-20"
          style={{ backgroundImage: `url(${prodHero})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div> */}
        <Hero
          img={prodHero}
          // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/about/about.webp"
          header="Products at Imperio Railings"
          altText="hero for aboutus"
          subHeader="Elevate your space with Imperio's elegant, frameless glass railing systems, offering unparalleled security and a sleek, minimalist look."
          curve
        />

        <motion.div
          className="h-[31vh] flex flex-col  text-center justify-center items-center bg-white px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-[#fad000] text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Elevate Your Space with Stunning Glass Railings
          </h3>
          <p className="text-[--third] Raleway tracking-wider mt-2 max-w-lg">
            Experience seamless design, unmatched durability, and safety with
            our premium glass railing solutions. Perfect for homes, balconies,
            staircases, and commercial spaces.
          </p>
          <a
            href="/products"
            className="mt-4 px-5 py-2 bg-yellow-600 text-white rounded-none shadow-md hover:bg-yellow-700"
          >
            Explore Our Collections
          </a>
        </motion.div>
        {/* Altername products section */}
        <div className="flex justify-center items-center flex-col gap-16 px-6 md:px-16 lg:px-24 py-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex  w-2/3 flex-col md:flex-row justify-center items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full flex justify-center">
                <a href={`${product.link}`}>
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="aspect-[1/1] object-cover rounded-none shadow-lg"
                  />
                </a>
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full text-center md:text-left flex flex-col justify-start md:pl-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-4 flex justify-start">
                  {product.name}
                </h2>
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex justify-start">
                  {product.longSubtitle}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {showFullText && product.id === showFullTextForid
                    ? product.fullText
                    : product.shortText}
                </p>
                <button
                  onClick={() => {
                    setShowFullText(!showFullText);
                    setShowFullTextForId(product.id);
                  }}
                  className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded-none shadow-md hover:bg-yellow-700 duration-300 w-auto self-start"
                >
                  {showFullText && product.id === showFullTextForid
                    ? "Show Less"
                    : "Know More"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Aesthetic Section */}
        <div className="flex flex-col md:flex-row h-auto md:h-[100vh] items-center bg-[rgb(245,210,197)]">
          {/* Left Side: Centered Text */}
          <div className="w-full md:w-1/2 flex justify-center p-6 md:p-12">
            <motion.div
              className="text-left max-w-md"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold">
                Sleek & Sturdy Glass Railing Solutions
              </h2>
              <p className="text-gray-600 my-4">
                Elevate your space with our premium glass railing systems,
                expertly designed for durability, safety, and modern aesthetics.
                From frameless glass railings to sturdy handrails, our
                innovative designs offer unobstructed views, superior strength,
                and long-lasting performance.
              </p>
              <a
                href="/contactus"
                className="mt-8 px-5 py-2 bg-yellow-800 text-white rounded-none shadow-md hover:bg-yellow-600"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Side: Two Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row overflow-hidden">
            <motion.div
              className="w-full md:w-1/2 h-[40vh] md:h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${LightingRails})` }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            ></motion.div>

            <motion.div
              className="w-full md:w-1/2 h-[40vh] md:h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${balconyRailing})` }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            ></motion.div>
          </div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="min-h-screen py-20 px-4 bg-white">
          <h2 className="text-[rgb(17,40,49)] text-3xl font-semibold text-center mb-8">
            Gallery
          </h2>

          {/* Masonry Grid */}
          <div
            ref={scrollRef}
            className="max-w-7xl mx-auto h-[800px] w-full overflow-y-scroll scrollbar-hide"
          >
            <div className="grid grid-cols-3 gap-4">
              {images.concat(images).map(
                (
                  src,
                  index // Doubled the images for continuous scroll
                ) => (
                  <motion.div
                    key={index}
                    className={`rounded-none overflow-hidden ${
                      index % 3 === 0 ? "row-span-2" : "row-span-1"
                    }`}
                  >
                    <motion.img
                      src={src}
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Clickable Image Grid */}

        <div className="w-full bg-gray-100 py-10 flex items-center flex-col">
          <motion.div
            className="flex flex-col text-center justify-center items-center px-4 py-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              Explore our projects
            </h3>
          </motion.div>

          <div className="max-w-screen-xl mx-auto px-4 md:px-12 lg:px-20 w-full">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {visibleImages.map((img, index) => (
                <motion.a
                  key={img.id}
                  href={`/projects`}
                  target="_blank"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative w-full"
                >
                  <img
                    src={img.src}
                    alt={`Project ${img.id}`}
                    className=" w-full h-full object-cover rounded-none shadow-lg py-4"
                  />
                  <div className="absolute">{img.location}</div>
                </motion.a>
              ))}
            </div>
          </div>

          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-none shadow-md hover:bg-blue-700 transition"
            >
              Show More
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default NewProducts;
