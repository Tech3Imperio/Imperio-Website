import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Service/Api/Api";
// import Metadata from "../../components/Metatag/Metatag";
import { Hero, CTAButton2 } from "../../components";
import bgDealers from "../../assets/Images/quote/bgDealers.webp";
import Metadata from "../../components/Metatag/Metatag";
import { motion } from "framer-motion";
// import SalesChart from "./SalesChart";
export const DealerShipForm: React.FC = () => {
  const checkpoints = [
    {
      day: "Authorized Dealers",
      description:
        "Partner with Imperio Railing Systems to elevate your offerings as an authorized dealer, providing high-quality, premium glass and aluminium railing solutions that drive business growth and improve customer satisfaction.",
    },
    {
      day: "Mini Dealerships",
      description:
        "Expand your business opportunities with Imperio Railing Systems as a mini-dealer, offering top-quality glass railing solutions, with dedicated support and resources to grow your market reach and customer base.",
    },
    {
      day: "Exclusive Dealer Network",
      description:
        "Join the Imperio Railing Systems network as an exclusive dealer and gain access to premium glass and aluminium railing products, exclusive pricing, and competitive margins that enhance your local market presence.",
    },
    {
      day: "Exclusive Distributors",
      description:
        "As an exclusive distributor with Imperio Railing Systems, enjoy first access to top-tier glass railing products, superior service, and priority support designed to help elevate your business to the next level.",
    },
  ];

  const DealershipKeys: { title: string; Description: string }[] = [
    {
      title: "High-Quality Glass and Aluminium Railings",
      Description:
        "Our state-of-the-art manufacturing facility produces durable and stylish glass and aluminium railings, designed to enhance the beauty, security, and functionality of any space. From modern minimalist designs to traditional elegance, we offer a wide range of options, including premium glass railing systems and aluminium railing solutions, to suit your unique needs.",
    },
    {
      title: "Comprehensive Dealer Support",
      Description:
        "Our dedicated team provides comprehensive support, including training programs, marketing materials, and technical assistance for dealers. Whether you're in the glass railing or aluminium railing business, we ensure your success by offering the resources needed to grow and scale your business effectively.",
    },
    {
      title: "Trusted Brand in Glass and Aluminium Railings",
      Description:
        "With a strong brand reputation and a focus on delivering exceptional customer service, Imperio Railing is a trusted name in the glass railing and aluminium railing industry. Our commitment to quality and innovation has helped us build a loyal customer base and a network of satisfied dealers across India and globally.",
    },
    {
      title: "Exclusive Dealer Benefits for Glass and Aluminium Railings",
      Description:
        "As an Imperio Railing dealer, you'll enjoy exclusive benefits such as priority shipping, personalized marketing support, competitive pricing, and access to our premium glass railing and aluminium railing systems. We’re committed to helping you maximize profits with our high-quality products and business growth opportunities.",
    },
    {
      title: "Customizable Glass and Aluminium Railing Solutions",
      Description:
        "We offer a wide range of customizable railing solutions to meet the unique needs of your customers. Whether you're looking for a simple, functional glass railing system or a complex, bespoke aluminium railing design, we can deliver high-quality, tailored solutions to match any architectural style.",
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
    streetAddress: "",
    website: "",
    city: "",
    stateProvince: "",
    zipPostalCode: "",
    country: "India",
    typeOfProductsOrIndustry: "",
    numberOfYearsInBusiness: "",
    HowMuchAmountcanyouinvestindealership: "",
    Howmuchareacanyouprovidefordisplay: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoader, setIsLoader] = useState(false);

  const fetchAddressDetails = async (pinCode: string) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = response.data;

      if (data[0].Status === "Success" && data[0].PostOffice.length > 0) {
        const address = data[0].PostOffice[0];
        return {
          city: address.District,
          stateProvince: address.State,
        };
      } else {
        return {
          city: "",
          stateProvince: "",
        };
      }
    } catch (error) {
      console.error("Error fetching address details:", error);
      return {
        city: "",
        stateProvince: "",
      };
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "zipPostalCode" && value.length === 6) {
      const addressDetails = await fetchAddressDetails(value);
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
        ...addressDetails,
      }));
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.organizationName.trim())
      newErrors.organizationName = "Organization Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required.";
    if (!formData.phone.trim() || !/^\d{10,14}$/.test(formData.phone))
      newErrors.phone = "Valid Phone number is required.";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.stateProvince.trim())
      newErrors.stateProvince = "State/Province is required.";
    if (!formData.zipPostalCode.trim())
      newErrors.zipPostalCode = "ZIP/Postal Code is required.";
    if (!formData.typeOfProductsOrIndustry.trim())
      newErrors.typeOfProductsOrIndustry =
        "Type of Products or Industry is required.";
    if (
      !formData.numberOfYearsInBusiness.trim() ||
      isNaN(Number(formData.numberOfYearsInBusiness))
    )
      newErrors.numberOfYearsInBusiness =
        "Valid Number of Years in Business is required.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoader(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/dealerships`, // Use the relative path for the proxy
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        alert("Data submitted successfully!");

        // Reset form data
        setFormData({
          fullName: "",
          organizationName: "",
          email: "",
          phone: "",
          streetAddress: "",
          website: "",
          city: "",
          stateProvince: "",
          zipPostalCode: "",
          country: "India",
          typeOfProductsOrIndustry: "",
          numberOfYearsInBusiness: "",
          HowMuchAmountcanyouinvestindealership: "",
          Howmuchareacanyouprovidefordisplay: "",
        });

        // Optionally remove or comment out the redirect line
        // window.location.href = "/quote/thanks";
      } else {
        alert("Error sending data. Please try again.");
      }
    } catch (error) {
      // Type guard to handle error safely
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
        alert(`An unexpected error occurred: ${error.message}`);
      } else if (error instanceof Error) {
        // Error is an instance of Error
        console.error("Error:", error.message);
        alert(`An unexpected error occurred: ${error.message}`);
      } else {
        // Handle unexpected error types
        console.error("Unexpected Error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <>
      <Metadata
        title="Glass Railing Dealer | Premium Aluminum & Glass Railing Solutions"
        description="Join Imperio Railing’s dealer program to offer premium glass railing solutions, including aluminum railings. Partner with us for exclusive support and high-quality products. Become a top dealer in Mumbai and elevate your business today."
        keywords="Glass Railing Dealers, Aluminum Glass Railings Dealer, Premium Railings Distributor, Dealer Program, Railing Installation, Stylish Glass Railings, Railing Dealer Opportunities, Commercial & Residential Railings, High-Quality Glass Railings, Glass Railing Solutions, Dealer Support, Modern Railings, Aluminum Railing Systems, Railing Installation Services, Business Growth, Durable Glass Railings, Top Railing Dealers in Mumbai"
        ogImage={bgDealers} // Replace with the actual image path
        ogUrl="https://www.imperiorailing.com/dealership"
      />
      <Hero
        img={bgDealers}
        altText="Imperio Glass Railing Systems - Premium Glass Railing Solutions"
        header="Dealer with Imperio Glass Railing Systems"
        subHeader="Partner with Imperio Glass Railing Systems to offer premium glass railing solutions. We provide exclusive dealership opportunities in Mumbai, Maharashtra, and across India. Join our network of trusted dealers and distribute high-quality, stylish glass railings for residential and commercial spaces."
        curve
      />

      <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
        <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Explore Our Offerings.
          </h2>
          <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Partner with us for growth opportunities.
          </h3>
          <span className="text-xs my-4">
            <CTAButton2 phoneNumber="+91 85919 53385">
              CALL TO ACTION
            </CTAButton2>
          </span>
        </div>
        <div className="md:w-[40%]">
          <p className="text-justify italic text-[--grey]">
            Join <strong>Imperio Railing's dealer network</strong> and access a
            wide range of premium <strong>glass railing solutions</strong>. As a
            leading <strong>glass railing manufacturer</strong> and top{" "}
            <strong>dealers of aluminium glass railings in India</strong>, we
            offer high-quality <strong>aluminum glass railings</strong> that
            combine style, durability, and safety. With our comprehensive{" "}
            <strong>dealer support</strong>, attractive incentives, and expert
            guidance, we help our dealers thrive in the competitive market.
            <br />
            <br />
            Whether you're looking to become a top{" "}
            <strong>glass railing dealer</strong> in <strong>Mumbai</strong>,{" "}
            <strong>Delhi</strong>, <strong>Bengaluru</strong>,{" "}
            <strong>Chennai</strong>, <strong>Pune</strong>, or any other city
            in India, or even expand your business globally, Imperio Railing is
            your ideal partner. Our stylish{" "}
            <strong>glass railing designs</strong>, durable construction, and
            efficient <strong>railing installation services</strong> will help
            you provide exceptional solutions to your customers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col  mx-auto mt-10 md:mt-24 gap-8 p-7">
        <h2 className="  text-[#03237b] text-3xl  overflow-hidden md:text-5xl   flex justify-start mt-20">
          Why Partner with Imperio Railing as Your Glass Railing Dealer?
        </h2>
        <p className="justify-center text-justify py-4 text-[#393939]">
          Elevate your business by becoming a top{" "}
          <strong>glass railing dealer</strong> with{" "}
          <strong>Imperio Railing</strong>. Offer your customers premium,
          stylish, and durable <strong>glass railing solutions</strong> designed
          to enhance safety and elegance. As a leading{" "}
          <strong>glass railing manufacturer</strong> and trusted{" "}
          <strong>aluminium glass railing dealer</strong> in India, we provide
          expert guidance, high-quality products, and an extensive support
          network. Partner with us to expand your business across India and
          globally, targeting key markets in <strong>Bengaluru</strong>,{" "}
          <strong>Pune</strong>, <strong>Mumbai</strong>,{" "}
          <strong>Punjab</strong>, and <strong>Andhra Pradesh</strong>. Our
          customizable glass railing options cater to both residential and
          commercial projects, with exclusive dealer advantages and expert
          installation support. <strong>Join us today</strong> to grow your
          business and deliver the best glass railing solutions to your
          customers.
        </p>
        {/* <div className="container mx-auto py-12"> */}
        <div className="grid md:grid-cols-2  gap-4">
          {DealershipKeys.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center md:text-justify py-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 w-full">
                <h3 className="text-xl text-[#03237b] mb-2">{point.title}</h3>
                <p className="text-[#393939] text-justify">
                  {point.Description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* </div> */}
        {/* chart section open */}

        {/* <SalesChart/> */}

        {/* chart section colse */}

        {/* timeline open */}
        <div className="p-2">
          <div className="text-center mb-12 ">
            <h1 className="text-[#03237b] text-3xl mx-auto md:text-5xl flex justify-start xl:text-nowrap  pt-12 ">
              Imperio Dealership Program – Exclusive Dealer Opportunities
            </h1>
            <p className="text-[#91908c] text-[14px] py-4 tracking-wide">
              Explore the Benefits of the Imperio Dealership Program: Join us as
              a dealer and access exclusive opportunities, premium products, and
              dedicated support to grow your business.
            </p>
          </div>

          {/* Timeline wrapper */}
          <div className="relative max-w-2xl mx-auto md:px-4 lg:px-0 ">
            {/* Middle Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#292929] h-full z-0"></div>

            {/* Checkpoints */}
            <div className="space-y-12 relative z-10">
              {checkpoints.map((checkpoint, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } items-center`}
                >
                  {/* Line from circle to middle */}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0
                        ? "left-1/2 -translate-x-full w-1/2"
                        : "right-1/2 translate-x-full w-1/2"
                    } h-1 bg-[#292929]`}
                  ></div>

                  {/* Blue Circle indicator */}
                  <div
                    className={`w-4 h-4 hidden bg-[#fad000] rounded-full absolute top-1/2 transform -translate-y-1/2 z-10 ${
                      index % 2 === 0
                        ? " md:left-[19.5rem] lg:left-[20.5rem]"
                        : "right-[20.5rem] md:right-[19.5rem] lg:right-[20.5rem] "
                    }`}
                  ></div>

                  {/* Checkpoint content */}
                  <div
                    className={`max-w-auto md:w-[53%] p-6 border-2 border-[#fad000] justify-center flex flex-col text-center rounded-xl bg-[#292929] relative shadow-lg ${
                      index % 2 === 0 ? "-ml-1 md:-ml-14" : " -ml-1 md:-mr-14"
                    }`}
                  >
                    <h2 className="text-3xl Raleway mb-2 text-[#fad000]">
                      {checkpoint.day}
                    </h2>
                    <p className="text-[#cecdc8] md:text-justify text-[14px]">
                      {checkpoint.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* timeline close */}
      </div>
      <div className="max-w-7xl  flex flex-col  mx-auto mt-10 md:mt-24 gap-8 p-4">
        <h2 className="text-4xl text-[#03237b] md:text-5xl text-center flex justify-start">
          Dealer Registration Form
        </h2>
        <p>
          Join the Imperio Dealership Network! Are you looking to expand your
          business and unlock new dealership opportunities? Fill out our dealer
          registration form today and become part of the Imperio family.
          Partnering with us gives you access to exclusive dealer benefits,
          premium products, and dedicated support designed to help you thrive in
          the competitive market.
          <br />
          <br />
          Grow your business with Imperio Railing Systems! By completing our
          registration form, you’ll gain access to top-tier glass railing
          solutions and extensive resources to help you reach new heights in
          your dealership career. Let’s work together to build success and take
          your dealership to the next level.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Full Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-[20rem] md:w-[30rem] lg:w-[25rem] xl:w-full p-2 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Organization Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.organizationName ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.organizationName && (
                <p className="text-red-500 text-sm">
                  {errors.organizationName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Email <sup className="text-red-600">*</sup>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Phone <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Street Address <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.streetAddress ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Website
              </label>
              <input
                type="text"
                id="website"
                placeholder="http://www.example.com"
                value={formData.website}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.website ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.website && (
                <p className="text-red-500 text-sm">{errors.website}</p>
              )}
            </div>
            {/* <div>
            <label className="block text-base font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div> */}
            <div>
              <label className="block text-base font-medium text-gray-700">
                ZIP/Postal Code <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="zipPostalCode"
                value={formData.zipPostalCode}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.zipPostalCode ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.zipPostalCode && (
                <p className="text-red-500 text-sm">{errors.zipPostalCode}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                State/Province <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.stateProvince ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.stateProvince && (
                <p className="text-red-500 text-sm">{errors.stateProvince}</p>
              )}
            </div>
            {/* <div>
            <label className="block text-base font-medium text-gray-700">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              id="zipPostalCode"
              value={formData.zipPostalCode}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${
                errors.zipPostalCode ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.zipPostalCode && (
              <p className="text-red-500 text-sm">{errors.zipPostalCode}</p>
            )}
          </div> */}
            <div>
              <label className="block text-base font-medium text-gray-700">
                City <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                Type of Products/Industry <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="typeOfProductsOrIndustry"
                value={formData.typeOfProductsOrIndustry}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.typeOfProductsOrIndustry
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
              />
              {errors.typeOfProductsOrIndustry && (
                <p className="text-red-500 text-sm">
                  {errors.typeOfProductsOrIndustry}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                Number of Years in Business{" "}
                <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="numberOfYearsInBusiness"
                value={formData.numberOfYearsInBusiness}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.numberOfYearsInBusiness
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
              />
              {errors.numberOfYearsInBusiness && (
                <p className="text-red-500 text-sm">
                  {errors.numberOfYearsInBusiness}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-base font-medium text-gray-700">
                How Much Amount can you invest in dealership?
              </label>
              <input
                type="text"
                id="HowMuchAmountcanyouinvestindealership"
                value={formData.HowMuchAmountcanyouinvestindealership}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.HowMuchAmountcanyouinvestindealership
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
              />
              {errors.HowMuchAmountcanyouinvestindealership && (
                <p className="text-red-500 text-sm">
                  {errors.HowMuchAmountcanyouinvestindealership}
                </p>
              )}
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700">
                How much display area is available in SquareFit?
              </label>
              <input
                type="text"
                id="Howmuchareacanyouprovidefordisplay"
                value={formData.Howmuchareacanyouprovidefordisplay}
                onChange={handleChange}
                className={`mt-1 block w-full p-2 border ${
                  errors.Howmuchareacanyouprovidefordisplay
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
              />
              {errors.Howmuchareacanyouprovidefordisplay && (
                <p className="text-red-500 text-sm">
                  {errors.Howmuchareacanyouprovidefordisplay}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-8 py-4 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound]"
              disabled={isLoader}
            >
              {isLoader ? "Submitting..." : "Submit Information"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
