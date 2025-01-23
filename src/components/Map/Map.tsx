import React from "react";
import classNames from "classnames";

const Map = React.memo(() => {
  // Class names for sections and iframe
  const containerClassNames = classNames(
    "bg-[--black] -mx-9 tablet:-mx-16 laptop:-mx-28 2xl:-mx-44 px-4 phone:px-9 tablet:px- laptop:px- 2xl:px- pt- p-4"
  );

  const iframeClassNames = classNames(
    "w-full rounded-2xl h-[65.75vh] outline-none"
  );

  // const contactClassNames = classNames(
  //   "flex flex-col gap-2 text-base w-[17rem] text-white p-5"
  // );

  return (
    <div className={containerClassNames}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.84352513496705!2d72.81715472488038!3d18.953672262667236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3d2de2bdd7%3A0x6ebf171c718b4540!2sImperio%20Railing%20Systems!5e0!3m2!1sen!2sin!4v1719488265959!5m2!1sen!2sin"
        className={iframeClassNames}
        allowFullScreen
        loading="lazy" // Lazy load the iframe
      />
      {/* <div className={contactClassNames}>
        <p>+91 8591953385</p>
        <p>sales@imperiorailing.com</p>
        <p>
          1, Aman Chambers, New Queens Rd, Charni Road, Mumbai, Maharashtra -
          400004.
        </p>
      </div> */}
    </div>
  );
});

export default Map;
