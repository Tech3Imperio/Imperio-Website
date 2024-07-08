import { PopupMessage, SocialLinks } from "../../components"; // Import necessary components
import { MdOutlineEmail } from "react-icons/md"; // Import email icon
import { HiOutlinePhone } from "react-icons/hi2"; // Import phone icon
import { IoLocationOutline } from "react-icons/io5"; // Import location icon
import React, { useState } from "react"; // Import React and useState hook

export const Footer = () => {
  const [value, setValue] = useState(""); // State to hold input value
  const [message, setMessage] = useState(""); // State to hold feedback message

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const countryCodePattern = /^\+\d+/; // Regex pattern to check for country code
    if (!countryCodePattern.test(value)) {
      setMessage("Please add your country code before the number."); // Set message if country code is missing
      return;
    }
    // Make a POST request to the Google Script
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec",
      {
        method: "POST",
        body: JSON.stringify({
          from: "footer", // Indicate the form source
          number: value, // Include the phone number
        }),
      }
    )
      .then((res) => res.text()) // Parse the response text
      .then((data) => {
        console.log(data);
        if (data == "Success") {
          setMessage("Thank you for connecting with us"); // Success message
        } else {
          setMessage(
            "Try with some other number this is already in the database" // Failure message
          );
        }
      });
  };

  return (
    <footer className="bg-[--black] tablet:min-h-[35rem] py-6 phone:py-10 tablet:py-14 laptop:py-20 xl:py-24 px-9 phone:px-[4.5rem] tablet:px-[6.65rem] laptop:px-[8.75rem] xl:px-44 flex flex-col tablet:flex-row justify-between max-tablet:gap-6">
      <aside className="flex flex-col justify-between min-h-full max-tablet:gap-6">
        <h2 className="Raleway text-[1.75rem] phone:text-3xl tablet:text-4xl laptop:text-5xl text-white pt-4 tablet:pt-0">
          Let’s keep in touch!
        </h2>
        <div className="flex flex-col gap-5 text-white">
          <div className="flex flex-col gap-[2.5px] tablet:gap-3 text-xs tablet:text-sm laptop:text-base w-fit">
            <p className="font-medium">Request a CallBack</p>
            <p className="font-extralight">
              Kindly add country code before number
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Form to handle phone number submission */}
            <div className="flex text-[0.5rem] phone:text-xs tablet:text-sm laptop:text-base group">
              <input
                type="text"
                name="phoneNumber"
                value={value}
                onChange={handleChange}
                placeholder="Whatsapp -> +91 0123456789"
                className="border-2 border-white rounded-l-full p-[0.65rem] tablet:p-4 pl-3 tablet:pl-6 max-tablet:h-8 w-40 phone:w-[13rem] tablet:w-[17rem] laptop:w-80 transition-700 group-hover:border-[--secound] group-focus-within:border-[--secound] outline-none"
              />
              <button
                type="submit"
                className="bg-white rounded-r-4xl h-full p-[0.65rem] tablet:p-5 transition duration-700 group-hover:bg-[--secound] group-focus-within:bg-[--secound] outline-none"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  className="w-3 tablet:w-6 h-[0.68rem] tablet:h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9758 10.6638L14.5383 19.1013C14.3624 19.2772 14.1238 19.376 13.875 19.376C13.6262 19.376 13.3876 19.2772 13.2117 19.1013C13.0358 18.9254 12.937 18.6868 12.937 18.438C12.937 18.1892 13.0358 17.9507 13.2117 17.7747L20.0496 10.938H1.6875C1.43886 10.938 1.2004 10.8392 1.02459 10.6634C0.848772 10.4876 0.75 10.2492 0.75 10.0005C0.75 9.75188 0.848772 9.51342 1.02459 9.33761C1.2004 9.16179 1.43886 9.06302 1.6875 9.06302H20.0496L13.2117 2.2263C13.0358 2.05039 12.937 1.8118 12.937 1.56302C12.937 1.31424 13.0358 1.07565 13.2117 0.89974C13.3876 0.723827 13.6262 0.625 13.875 0.625C14.1238 0.625 14.3624 0.723827 14.5383 0.89974L22.9758 9.33724C23.0629 9.42431 23.1321 9.5277 23.1793 9.64151C23.2265 9.75533 23.2507 9.87732 23.2507 10.0005C23.2507 10.1237 23.2265 10.2457 23.1793 10.3595C23.1321 10.4733 23.0629 10.5767 22.9758 10.6638Z"
                    fill="#292929"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="flex-col text-white hidden laptop:flex">
          {" "}
          {/* Social media links and policies for larger screens */}
          <SocialLinks className="flex text-2xl gap-5" />
          <div className="flex gap-4 text-xs">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </aside>
      <aside className="flex flex-col justify-center min-h-full text-white pr-0 phone:pr-12 tablet:pr-24 laptop:pr-36 xl:pr-48 gap-4 tablet:gap-6">
        {" "}
        {/* Contact details section */}
        <div className="flex gap-4 ">
          <HiOutlinePhone /> {/* Phone icon */}
          <div className="flex flex-col gap-3 text-xs tablet:text-sm laptop:text-base">
            <h6>Telephone</h6>
            <p>+91 85919 53385</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <MdOutlineEmail /> {/* Email icon */}
          <div className="flex flex-col gap-3 text-xs tablet:text-sm laptop:text-base">
            <h6>Email</h6>
            <p>info@imperiorailings.com</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <IoLocationOutline /> {/* Location icon */}
          <div className="flex flex-col gap-3 text-xs tablet:text-sm laptop:text-base">
            <h6>Headquarters</h6>
            <p className=" w-80">
              1, Aman Chambers, New Queens Rd, Charni Road, Mumbai Maharashtra -
              400004.
            </p>
          </div>
        </div>
      </aside>
      {message /* Conditional rendering of the popup message */ && (
        <PopupMessage message={message} onClose={() => setMessage("")} />
      )}
    </footer>
  );
};
