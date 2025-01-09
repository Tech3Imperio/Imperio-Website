import { useState } from "react";
import { aboutHero, Middle } from "../../assets/Images";
import { Hero, CTAButton } from "../../components";
// import Metadata from "../../components/Metatag/Metatag";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "../../components/Metatag/Metatag";
// import { aboutData } from "../../assets/Data";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../../components/EnquiryButton/EnquiryButton";
interface TabContent {
  title: string;
  content: {
    short: string;
    long: string;
  };
}

interface TabContentMap {
  [key: string]: TabContent;
}
export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("mission");

  const tabContent: TabContentMap = {
    mission: {
      title: "Our Mission",
      content: {
        short:
          "At Imperio Railing Systems, we are dedicated to providing high-quality glass railings that seamlessly blend safety, durability, and style. Our innovative solutions are crafted to enhance any space, from balconies to facades, ensuring your property looks stunning while adhering to the highest safety standards.",
        long: "At Imperio Railing Systems, our mission is to revolutionize the railing industry with cutting-edge glass railing systems that prioritize safety and elevate the aesthetic appeal of any environment. We specialize in designing elegant and durable railings for balconies, staircases, and building facades. Our commitment to innovation drives us to exceed industry standards, integrating advanced technology with sustainable practices to create environmentally friendly solutions. We aim to transform spaces with stylish and secure glass railings, fostering a culture of excellence and unwavering customer satisfaction. Trust us to deliver the perfect railing system that complements your home or building project.",
      },
    },
    values: {
      title: "Our Values",
      content: {
        short:
          "At Imperio Railing Systems, we prioritize reliability and quality in our glass railing solutions, ensuring long-lasting performance and customer satisfaction. Our commitment to craftsmanship and adherence to safety standards guarantees that every installation enhances your space while providing peace of mind.",
        long: "At Imperio Railing Systems, our core values—integrity, reliability, and accountability—are the foundation of our business. We are dedicated to delivering high-quality glass railings for both residential and commercial applications, emphasizing trust and transparency in our customer relationships. Our unwavering dedication to product quality and durability sets the standard for excellence in glass railing solutions. We strive to provide elegant railings that enhance safety and aesthetics, ensuring outstanding performance and lasting durability in every space. Our innovative designs and customer-centric approach are key to redefining industry standards and elevating our clients' experiences.",
      },
    },
    vision: {
      title: "Our Vision",
      content: {
        short:
          "At Imperio Railing Systems, we envision leading the industry through innovation and sustainability. We aim to deliver eco-friendly glass railing solutions that prioritize customer satisfaction while setting the standard for quality and safety in every project.",
        long: "Imperio Railing Systems is at the forefront of the railing industry, offering cutting-edge, frameless glass railing systems that harmoniously combine safety, style, and durability. Our innovative designs and unwavering commitment to quality make us the preferred choice for residential and commercial projects worldwide. We specialize in designing, manufacturing, and installing high-quality, frameless glass railings for a diverse range of applications, including balconies, staircases, and building facades. Our products are engineered to meet the highest standards, ensuring safety and longevity. With a strong focus on innovation and sustainability, we provide a variety of styles and finishes that complement any architectural vision, paving the way for a more beautiful and secure future.",
      },
    },
  };

  const valuePoints: { title: string; description: string }[] = [
    {
      title: "Unmatched Quality Craftsmanship",
      description:
        "Discover the art of premium craftsmanship with Imperio Railing Systems. Our aluminum and glass railings are not just products; they are masterpieces designed to enhance your residential or commercial spaces. Experience durability and style like never before, as our innovative designs transform your outdoor areas into stunning showcases of elegance.",
    },
    {
      title: "Safety First: Your Peace of Mind",
      description:
        "At Imperio Railing Systems, safety is our top priority. Our glass railings are engineered to meet the highest safety standards without compromising on aesthetics. Enjoy the perfect blend of beauty and security, knowing that our durable products provide robust protection for your family and guests. Elevate your space with confidence!",
    },
    {
      title: "Tailored Solutions for Unique Spaces",
      description:
        "Every home and business is unique, and so are our railing solutions. With Imperio, you can customize your balcony and staircase railings to match your specific style and functional needs. Let our expert team bring your vision to life, creating personalized designs that enhance the beauty and functionality of your outdoor spaces.",
    },
    {
      title: "Seamless Installation & Low Maintenance",
      description:
        "Say goodbye to installation headaches! Our railing systems are designed for effortless installation, making it a breeze for homeowners and contractors alike. Plus, our glass materials require minimal maintenance, ensuring your railings stay pristine for years to come. Enjoy the perfect combination of elegance and convenience with Imperio Railing Systems.",
    },
  ];

  return (
    <>
      <Metadata
        title="About Us - Imperio Railing | Balcony Glass Railing"
        description="Imperio Railing System is a stair and glass railing manufacturing company in Mumbai, Maharashtra. We're dedicated to creating premium glass railing parts for your home."
        keywords="About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
        ogImage={aboutHero}
        ogUrl="https://www.imperiorailing.com/aboutus"
      />

      <main>
        <Hero
          img={aboutHero}
          header="About us"
          altText="hero for aboutus"
          subHeader="Elevate your space with Imperio's elegant, frameless glass railing systems, offering unparalleled security and a sleek, minimalist look."
          curve
        />
        <section className="max-h-screen overflow-hidden px-4 md:px-8 mb-24">
          <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-4">
            <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
              <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
                Imperio Glass Railings
              </h2>
              <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
                High-Quality Glass Railing Solutions for Your Home
              </h3>
              <span className="text-xs my-4 w-32">
                <CTAButton phoneNumber="+91 8591953385">
                  <MdAddCall size={16} />
                  CALL NOW
                </CTAButton>
              </span>
            </div>

            <div className="md:w-[40%]">
              <p className="text-justify italic text-[--grey]">
                "Enhance your living spaces with our premium balcony and
                staircase glass railings, designed for modern aesthetics in
                Delhi, Karnataka, Rajasthan, Jharkhand, Uttar Pradesh, Mumbai,
                and Maharashtra. Our stylish and durable glass railing systems
                ensure safety while adding elegance to your home or business.
                <br />
                <br />
                With custom installation options and competitive pricing, we
                offer innovative architectural designs. Proudly supplying
                globally, including Dubai and across India, we are your trusted
                partner for secure glass railing solutions that blend style and
                safety."
              </p>
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-white text-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto "
          >
            <div className="flex flex-col lg:flex-row mb-20">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 mx-auto"
              >
                <div className="relative">
                  <img
                    src={Middle}
                    alt="Imperio Railing Systems"
                    // width={800}
                    // height={600}
                    className="object-cover w-full h-[400px] md:h-[55rem] p-4 rounded-3xl md:w-auto lg:h-[43rem] lg:w-auto xl:w-[800px] xl:h-[600px] md:p-14 lg:rounded-[4rem]"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 p-6"
              >
                <div className="space-y-8">
                  <div className="flex space-x-4 mb-6">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        className={`py-2 px-4 text-lg font-semibold transition-all duration-300 border-b-2 ${
                          activeTab === tab
                            ? "text-[#fad000] border-[#03237b]"
                            : "text-gray-600 border-transparent hover:text-gray-600"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tabContent[tab].title}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#292929] p-8 rounded-lg"
                    >
                      <p className="text-[#f1efe7] leading-relaxed text-lg text-justify">
                        {window.innerWidth < 768
                          ? tabContent[activeTab].content.short
                          : tabContent[activeTab].content.long}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h2 className=" text-center Raleway text-[35px] md:text-[4rem] text-[#fad000]">
                Our Value Proposition
              </h2>
              <div className="grid md:grid-cols-2 gap-12 p-4 md:p-14 lg:p-24 ">
                {valuePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <div>
                      <h3 className="text-xl Raleway-regular text-[#03237b] mb-2">
                        {point.title}
                      </h3>
                      <p className="text-[--grey] text-sm md:text-base leading-relaxed text-justify">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                <EnquiryButton />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};
