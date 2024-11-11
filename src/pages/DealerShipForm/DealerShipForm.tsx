import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Service/Api/Api";
// import Metadata from "../../components/Metatag/Metatag";
import { Hero } from "../../components";
import bgDealers from "../../assets/Images/quote/bgDealers.webp";
import Metadata from "../../components/Metatag/Metatag";
import { motion } from "framer-motion";
// import SalesChart from "./SalesChart";
export const DealerShipForm: React.FC = () => {
  const checkpoints = [
    {
      day: "Dealers",
      description:
        "Partner with Imperio Railing Systems to elevate your dealership's offerings with premium, high-demand railingsolutions that drive growth and customer satisfaction.",
    },
    {
      day: "Mini Dealers",
      description:
        " Expand your business opportunities as an Imperio Railing Systems mini-dealer offering top-quality solutions and dedicated assistance to enhance your market reach.",
    },
    {
      day: "Exclusive Dealership",
      description:
        "Join the Imperio Railing Systems network as a Eexclusive Dealership and gain access to exclusive products and competitive margins that enhance your local market presence.",
    },
    {
      day: "Exclusive Distributors",
      description:
        "As an exclusive dealer with Imperio Railing Systems, enjoy premium access to top-tier products, superior service, and priority support designed to elevate your business.",
    },
  ];
  const DealershipKeys: { title: string; Description: string }[] = [
    {
      title: "High-Quality Products",
      Description:
        "Our state-of-the-art manufacturing facility produces durable and stylish glass and aluminum railings, designed to enhance the beauty and security of any space. From modern minimalist designs to traditional elegance, we offer a wide range of options to suit your unique needs.",
    },
    {
      title: "Comprehensive Support",
      Description:
        "Our dedicated team provides comprehensive support, including training programs, marketing materials, and technical assistance, to ensure your success. We're committed to helping you grow your business and achieve your goals.",
    },
    {
      title: "Strong Brand Reputation",
      Description:
        "With a strong brand reputation and excellent customer service, Imperio Railing is a trusted name in the industry. Our commitment to quality and innovation has helped us build a loyal customer base and a network of satisfied dealers.",
    },
    {
      title: "Exclusive Dealer Benefits",
      Description:
        "As an Imperio Railing dealer, you'll enjoy exclusive benefits such as priority shipping, personalized marketing support, and competitive pricing. We're dedicated to helping you maximize your profits and minimize your costs.",
    },
    {
      title: "Customizable Solutions",
      Description:
        "We offer a wide range of customizable railing solutions to meet the unique needs of your customers. Whether you're looking for a simple, functional railing or a complex, bespoke design, we can deliver.",
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
        title="Dealership | Dealers | glass railing dealer"
        description="Join Imperio Railing's dealership program to offer your customers premium glass railing solutions, including stylish aluminum glass railings. Partner with us to benefit from our high-quality products, comprehensive support, and the exclusive opportunities glass railing market to become a top glass railing dealer in Mumbai. Contact us to learn more about becoming an Imperio Railing dealer and elevating your business with our durable railing solutions that deliver exceptional glass railing options to your customers."
        keywords="Glass Railing Dealers, manufacturer & supplier,Top Glass Railing Dealers in Mumbai,Top Balcony Glass Railing Dealers in Mumbai, Aluminum Glass Railings Dealer, Premium Railings distributor, Railing Dealer Support, Dealer, High-Quality Railings, Commercial Railings, Residential Railings, Dealer Program, Premium Railing Solutions, Railing Dealer Network, Dealer Benefits, Custom Railing Solutions, Stylish glass Railing, Railing Installation, Dealer Opportunities, Glass Railings, Aluminum Railings, Business Growth, Architectural Design, railing installation services, outdoor railings, modern railings, glass railing, glass railing installation, aluminum railing systems, premium railing products, stylish railing designs, durable glass railing"
        ogImage={bgDealers} // Replace with the actual image path
        ogUrl="https://www.imperiorailing.com/dealership"
      />
      <Hero
        img={bgDealers}
        altText="hero for blog"
        header="Dealership with Imperio Glass Railing Systems"
        subHeader="Premium Glass Railings Solutions  We are proud to partner with leading dealers and distributors in Mumbai, Maharashtra, ensuring that our high-quality glass railings are accessible to all. Exclusive Dealership Opportunities Across India."
        curve
      />
      {/* <Description
        yellowText="Explore Our Offerings."
        mainHeader="Partner with us for growth opportunities."
        text={
          <>
            Join Imperio Railing's dealer network and access a wide range of
            premium glass railing dealers. As a leading Glass Railing
            Manufacturer & Supplier in India, we offer high-quality Aluminum
            Glass Railings that blend style, durability, and safety. Our
            comprehensive dealer support, attractive incentives, and expert
            guidance will help you thrive in the market.
            <br />
            <br />
            Whether you're looking to become a Top Glass Railing Dealer in
            Mumbai, Delhi, Bengaluru, Chennai, Pune or any other city in India,
            or even expand your business globally, Imperio Railing is your ideal
            partner. Our stylish glass railing designs, durable construction,
            and efficient railing installation services will help you deliver
            exceptional solutions to your customers.
          </>
        }
      /> */}
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
        <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Explore Our Offerings.
          </h2>
          <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Partner with us for growth opportunities.
          </h3>
        </div>
        <div className="md:w-[40%]">
          <p className="text-justify italic text-[--grey]">
            Join Imperio Railing's dealer network and access a wide range of
            premium glass railing dealers. As a leading Glass Railing
            Manufacturer & Supplier in India, we offer high-quality Aluminum
            Glass Railings that blend style, durability, and safety. Our
            comprehensive dealer support, attractive incentives, and expert
            guidance will help you thrive in the market.
            <br />
            <br />
            Whether you're looking to become a Top Glass Railing Dealer in
            Mumbai, Delhi, Bengaluru, Chennai, Pune or any other city in India,
            or even expand your business globally, Imperio Railing is your ideal
            partner. Our stylish glass railing designs, durable construction,
            and efficient railing installation services will help you deliver
            exceptional solutions to your customers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col  mx-auto mt-10 md:mt-24 gap-8 p-7">
        <h2 className="  text-[#03237b] text-3xl  overflow-hidden md:text-5xl   flex justify-start mt-20">
          Why Choose Imperio Railing Dealership?
        </h2>
        <p className="flex justify-center text-justify  py-4 text-[#7d7f81]">
          Elevate Your Business with Imperio Railing Become a Top Glass Railing
          Dealer in India and offer your customers premium, stylish, and durable
          glass railing solutions. Partner with us to leverage our expertise,
          high-quality products, and extensive support network. Expand your
          business reach across India and globally, targeting key cities like
          Bengaluru, Pune, Mumbai, Punjab, and Andhra Pradesh. Our premium glass
          railing solutions are designed to enhance any space, providing both
          safety and elegance. By partnering with Imperio Railing, you'll
          benefit from expert support, exclusive dealer advantages, and
          customizable options tailored to meet your customers' needs.
        </p>
        {/* <div className="container mx-auto py-12"> */}
        <div className="grid md:grid-cols-2  gap-4">
          {DealershipKeys.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center text-justify py-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 w-full">
                <h3 className="text-xl text-[#03237b] mb-2">{point.title}</h3>
                <p className="text-[#7d7f81]">{point.Description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* </div> */}
        {/* chart section open */}

        {/* <SalesChart/> */}

        {/* chart section colse */}

        {/* timeline open */}
        <div className="p-8">
          <div className="text-center mb-12 ">
            <h1 className="text-[#03237b] text-3xl mx-auto  overflow-hidden md:text-5xl flex justify-start  pt-12 ">
              Dealership Program{" "}
            </h1>
            <p className="text-[#91908c] text-base py-2 tracking-wide flex justify-start  md:y-4">
              Benefits of Imperio Milestone Dealership Program :
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
                    className={`w-4 h-4 hidden bg-[#f5ce02] rounded-full absolute top-1/2 transform -translate-y-1/2 z-10 ${
                      index % 2 === 0
                        ? " md:left-[19.5rem] lg:left-[20.5rem]"
                        : "right-[20.5rem] md:right-[19.5rem] lg:right-[20.5rem] "
                    }`}
                  ></div>

                  {/* Checkpoint content */}
                  <div
                    className={`w-full md:w-6/12 p-6 border-2 border-[#f5ce02] justify-center flex flex-col text-center rounded-xl bg-[#292929] relative shadow-lg ${
                      index % 2 === 0 ? "-ml-1 md:-ml-14" : " -ml-1 md:-mr-14"
                    }`}
                  >
                    <h2 className="text-3xl Raleway mb-2 text-[#f5ce02]">
                      {checkpoint.day}
                    </h2>
                    <p className="text-[#cecdc8] text-[13px]">
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
        <h2 className=" text-4xl text-[#03237b] md:text-5xl text-center flex justify-start ">
          Dealer Details Form
        </h2>
        <p>
          Join the Imperio Dealership Family! Are you a dealer looking to expand
          your business and unlock new opportunities? Fill out our registration
          form today and become part of the Imperio family. Together, we can
          grow your business and explore exciting avenues for success! Grow Your
          Business with Us! Interested in taking your dealership to the next
          level? Complete our registration form to join the Imperio Dealership
          family. By partnering with us, you’ll gain access to exclusive
          opportunities and resources designed to help you thrive in the
          automotive market.
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
