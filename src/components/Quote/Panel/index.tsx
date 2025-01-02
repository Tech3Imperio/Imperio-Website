import { QuoteButton, DealershipButton } from "../.."; // Importing the QuoteButton component
import { bgQuote, bgDealers } from "../../../assets/Images"; // Importing the background image
import { CTAButton3 } from "../../../components";
import { MdAddCall } from "react-icons/md";
export const Dealers = () => {
  return (
    <section className="relative mb-2">
      {" "}
      {/* Main container with relative positioning */}
      <div className="relative w-screen h-auto">
        {" "}
        {/* Wrapper div with full width and height */}
        <img
          src={bgDealers} // Source of the background image
          alt="Backdrop for product" // Alt text for the image
          title="Backdrop for product" // Title text for the image
          className="w-screen h-[50vh] lg:h-full object-contain" // Image styling
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f0e980] from-75% to-[#03237b3a] flex justify-center items-center">
          {" "}
          {/* Overlay div with gradient background */}
          <div className="bg-[--black] h-[60.75%]  md:h-[53.75%] w-[90%] phone:w-[83%] tablet:w-[75%] laptop:w-[68.48%] laptop:h-[42.48%] text-white rounded-4xl overflow-hidden flex flex-col gap-3 tablet:gap-6 xl:gap-8 px-7 tablet:px-12 xl:px-16 justify-center">
            {" "}
            {/* Content container */}
            <span className="Raleway text-[22px] tablet:text-[1.75rem] xl:text-5xl">
              {" "}
              {/* Heading */}
              Ideal Dealership with Imperio.
            </span>
            <div className="text-[10px] lg:text-base pb-2 phone:pb-8 w-full tablet:w-3/5">
              {" "}
              {/* Description text */}
              Select your perfect dealership and receive an instant quote
              directly via WhatsApp. Fast, simple, and hassle-free.
            </div>
            <div>
              <DealershipButton className="max-tablet:text-[0.5rem]" />{" "}
              {/* QuoteButton component */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define the Quote functional component
export const Quote = () => {
  return (
    <section className="relative">
      {" "}
      {/* Main container with relative positioning */}
      <div className="relative w-full h-full">
        {" "}
        {/* Wrapper div with full width and height */}
        <img
          src={bgQuote} // Source of the background image
          alt="Backdrop for product" // Alt text for the image
          title="Backdrop for product" // Title text for the image
          className="w-screen h-[50vh] lg:h-full object-cover" // Image styling
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f0e980] from-75% to-[#03237b3a] flex justify-center items-center">
          {" "}
          {/* Overlay div with gradient background */}
          <div className="bg-[--black] h-[65.75%] w-[90%] phone:w-[83%] tablet:w-[75%] laptop:w-[68.48%] text-white rounded-4xl overflow-hidden flex flex-col gap-3 tablet:gap-6 xl:gap-8 px-7 tablet:px-12 xl:px-16 justify-center">
            {" "}
            {/* Content container */}
            <span className="Raleway text-2xl tablet:text-[1.75rem] xl:text-5xl">
              {" "}
              {/* Heading */}
              Get an instant quote.
            </span>
            <div className="text-xs lg:text-base pb-2 phone:pb-8 w-full tablet:w-3/5">
              {" "}
              {/* Description text */}
              Choose your desired glass railing or handrail and get a quick
              quote for your glass railing system. Request a quote directly via
              WhatsApp – quick, easy, and convenient.
            </div>
            <div className=" flex h-4 w-14 text-center items-center gap-2">
              <QuoteButton className="max-tablet:text-[0.5rem]" />{" "}
              <CTAButton3 phoneNumber="+91 8591953385">
                <MdAddCall size={16} />
                CALL NOW
              </CTAButton3>
              {/* QuoteButton component */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
