// src/pages/BlogDetail.tsx
import { Link, useLocation, useParams } from "react-router-dom";
import { AllBlogType, BlogType } from "../../types/blog";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaTwitter, FaHeart, FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/Images/logo/Blacklogo.png";
// import Metadata from "../../components/Metatag/Metatag";

const BlogDetails: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const readableTitle = params.blogId;
  const [blogData, setBlogData] = useState<BlogType | null>(null);
  const [AllData, setAllData] = useState<AllBlogType | null>(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Find the blog that matches the readableTitle
        const foundBlog = data.find(
          (blog: BlogType) =>
            blog.id
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "") === readableTitle
        );
        if (foundBlog) {
          setAllData(data.filter((blog: BlogType) => blog !== foundBlog));
          setBlogData(foundBlog);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [readableTitle]);

  useEffect(() => {
    setBlogData(location.state as BlogType);
  }, [location.state]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUpVariants}
        className="flex flex-col gap-2"
      >
        {children}
      </motion.div>
    );
  };
  const sectionTagArray = blogData?.sectionTags
    .split(",")
    .map((tag) => tag.trim());
  const tags: string[] =
    typeof blogData?.tags === "string"
      ? blogData.tags.split(",").map((tag: string) => tag.trim()) // If it's a string, split and trim it
      : blogData?.tags || []; // If it's an array, use it; if undefined, fallback to an empty array

  return (
    <>
      {blogData ? (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] mb-8"
          >
            <img
              src={blogData?.img}
              alt="Blog header image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-8 rounded-lg">
              <h1 className="text-4xl font-bold text-white">
                {blogData?.header}
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildrenVariants}
            className="flex flex-col md:flex-row items-start justify-between mb-8 gap-8"
          >
            <motion.div
              variants={fadeInUpVariants}
              className="flex items-center"
            >
              <img src={Logo} alt="John Doe" className="w-24 h-12 mr-4" />
              <div>
                <h2 className="text-xl font-semibold">Imperio Railings</h2>
                <p className="text-gray-600">Published on October 10, 2024</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="flex space-x-2">
              {tags.map((tag, index) => (
                <p key={index}>#{tag}</p>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-between">
            <motion.aside
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block w-64 sticky top-28 self-start"
            >
              <nav className="space-y-1">
                {sectionTagArray?.map((section, index) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionElement = document.getElementById(section);
                      if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block py-2 px-3 text-sm hover:bg-gray-100 rounded-md transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {section}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>

            <div className="w-full lg:w-[75%] flex flex-col gap-6">
              <main className="flex flex-col  items-start justify-start">
                <AnimatedSection>
                  <div
                    className="my-10"
                    id={sectionTagArray ? sectionTagArray[0] : ""}
                  >
                    <h2 className="text-black text-4xl mb-4 Raleway">
                      {blogData?.description}
                    </h2>
                    <hr className="border-t border-gray-300" />
                  </div>
                  <h2 className="text-black Raleway font-semibold text-2xl ">
                    {sectionTagArray ? sectionTagArray[0] : ""}
                  </h2>
                  <p>{blogData?.section1}</p>
                </AnimatedSection>

                <AnimatedSection>
                  <p
                    className="mb-24 mt-10"
                    id={sectionTagArray ? sectionTagArray[1] : ""}
                  >
                    <hr className="border-t border-gray-300" />
                  </p>
                  <h2 className="text-black Raleway font-semibold text-2xl">
                    1. {sectionTagArray ? sectionTagArray[1] : ""}
                  </h2>
                  <p>{blogData?.section2}</p>
                </AnimatedSection>

                <AnimatedSection>
                  <p
                    className="mb-24 mt-10"
                    id={sectionTagArray ? sectionTagArray[2] : ""}
                  >
                    <hr className="border-t border-gray-300" />
                  </p>
                  <h2 className="text-black Raleway font-semibold text-2xl">
                    2. {sectionTagArray ? sectionTagArray[2] : ""}
                  </h2>
                  <p>{blogData?.section3}</p>
                </AnimatedSection>

                <AnimatedSection>
                  <p
                    className="mb-24 mt-10"
                    id={sectionTagArray ? sectionTagArray[3] : ""}
                  >
                    <hr className="border-t border-gray-300" />
                  </p>
                  <h2 className="text-black Raleway font-semibold text-2xl">
                    3. {sectionTagArray ? sectionTagArray[3] : ""}
                  </h2>
                  <p>{blogData?.section4}</p>
                </AnimatedSection>
              </main>

              <AnimatedSection>
                <div className="flex items-center justify-between mb-8">
                  <motion.button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      liked
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={handleLike}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart size={24} />
                    <span>{likeCount} Likes</span>
                  </motion.button>

                  <div className="flex space-x-4">
                    <motion.button
                      className="p-2 bg-gray-200 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="https://x.com/ImperioRailing">
                        {" "}
                        <FaTwitter size={24} />{" "}
                      </Link>
                    </motion.button>
                    <motion.button
                      className="p-2 bg-gray-200 rounded-full"
                      whileHover={{ scale: 1.1, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="https://www.facebook.com/imperiorailingsyste">
                        {" "}
                        <FaFacebook size={24} />
                      </Link>
                    </motion.button>
                    <motion.button
                      className="p-2 bg-gray-200 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link to="https://www.linkedin.com/company/imperiorailingsystems">
                        {" "}
                        <FaLinkedin size={24} />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerChildrenVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {AllData?.sort(() => 0.5 - Math.random())
                      .slice(0, 4)
                      .map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                          variants={fadeInUpVariants}
                          whileHover={{ y: -15, transition: { duration: 0.5 } }}
                        >
                          <img
                            src={item.img}
                            alt={`Related Article ${item.alt}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">
                              <Link
                                to={`/blog/${item.id
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")
                                  .replace(/[^\w-]+/g, "")
                                  .replace(/--+/g, "-")
                                  .trim()}`}
                                className="Raleway-semibold"
                              >
                                {item.id}
                              </Link>
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                              <span className="text-sm text-gray-500">
                                5 min read
                              </span>
                              <Link
                                to={`/blog/${item.id
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")
                                  .replace(/[^\w-]+/g, "")
                                  .replace(/--+/g, "-")
                                  .trim()}`}
                              >
                                <motion.div
                                  className="text-blue-500"
                                  whileHover={{ x: 5 }}
                                >
                                  →
                                </motion.div>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
