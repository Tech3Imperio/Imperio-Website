import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Service/Api/Api";
// import "./dealershipform.css";
export const DealerShipForm: React.FC = () => {
  // const sortedTimeline = [
  //   { title: "Dealers", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi odit labore, vel fugiat, alias sunt, possimus dolor omnis magni eum unde rerum nobis eveniet perspiciatis autem. Aliquam, molestiae accusantium!', forEducation: true },
  //   { title: "Dealers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi odit labore, vel fugiat, alias sunt, possimus dolor omnis magni eum unde rerum nobis eveniet perspiciatis autem. Aliquam, molestiae accusantium!", forEducation: false },
  //   { title: "Dealers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi odit labore, vel fugiat, alias sunt, possimus dolor omnis magni eum unde rerum nobis eveniet perspiciatis autem. Aliquam, molestiae accusantium!", forEducation: true },
  //   { title: "Dealers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui animi odit labore, vel fugiat, alias sunt, possimus dolor omnis magni eum unde rerum nobis eveniet perspiciatis autem. Aliquam, molestiae accusantium!", forEducation: false },
  // ];

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
    // if (!formData.website.trim() || !/^https?:\/\/\S+$/.test(formData.website))
    //   newErrors.website = "Valid Website URL is required.";
    // if (
    //   !formData.HowMuchAmountcanyouinvestindealership.trim() ||
    //   isNaN(Number(formData.HowMuchAmountcanyouinvestindealership))
    // )
    //   newErrors.HowMuchAmountcanyouinvestindealership =
    //     "How Much Amount can you invest in dealership?";
    // if (!formData.website.trim() || !/^https?:\/\/\S+$/.test(formData.website))
    //   newErrors.website = "Valid Website URL is required.";

    // if (
    //   !formData.Howmuchareacanyouprovidefordisplay.trim() ||
    //   isNaN(Number(formData.Howmuchareacanyouprovidefordisplay))
    // )
    //   newErrors.Howmuchareacanyouprovidefordisplay =
    //     "How much area can you provide for display?.";
    // if (!formData.website.trim() || !/^https?:\/\/\S+$/.test(formData.website))
    //   newErrors.website = "Valid Website URL is required.";

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
      <div>
        <h2 className="  text-[#03237b] text-3xl mx-auto xl:mx-[17rem] overflow-hidden md:text-5xl  px-[2rem] flex justify-start  pt-12">
          Why Choose Imperio ?
        </h2>
        <p className=" grid justify-center items-center text-[0.800rem] mx-12 md:base md:px-[5rem] lg:text-base lg:px-[12rem] xl:mx-[20rem] xl:ml-[7rem] py-4 text-[#8b939c]">
          Why Choose Imperio Railing Systems? Imperio Railing Systems is a
          leading provider of premium glass railings for balconies, terraces,
          buildings, and staircases, delivering unmatched durability and safety.
          With top-notch aluminum and high-durable glass, our railings are built
          to withstand harsh weather conditions while enhancing aesthetics.
          Available in a variety of colors, our aluminum products are
          customizable to match your design preferences. We specialize in
          providing sleek, modern solutions for hotels, residential, and
          commercial buildings. Imperio offers innovative designs that combine
          functionality with style, ensuring long-lasting quality and easy
          maintenance. Choose Imperio for safety, elegance, and durability in
          every project.
        </p>
        {/* <div>
          <ul className="timeline-holder">
            {sortedTimeline?.map((exp, i: number) =>
              exp.forEducation === false ? (
                <li key={"exp-" + i} className="timeline-event">
                  <span className="timeline-circle"></span>
                  <p className="flex justify-center">{exp.title}</p>
                  <p>{exp.description}</p>
                </li>
              ) : (
                <li key={"exp-" + i} className="timeline-event-left">
                  <span className="timeline-left-circle"></span>
                  <p className=" -ml-[7rem]">{exp.title}</p>
                  <p className=" left-text flex justify-start" >{exp.description}</p>
                </li>
              )
            )}
          </ul>
        </div> */}
      </div>
      <div className="p-6 rounded-lg md:mx-12 lg:mx-9 xl:mx-[17rem] overflow-hidden">
        <h2 className=" text-4xl text-[#03237b] md:text-5xl text-center flex justify-start ">
          Dealer Details Form
        </h2>
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
                How much area can you provide for display?
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
