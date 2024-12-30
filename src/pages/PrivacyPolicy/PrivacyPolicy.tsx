import { Link } from "react-router-dom";
import { GoDot, GoDotFill } from "react-icons/go";
import Blacklogo from "../../assets/Images/logo/Blacklogo.png";

export function PrivacyPolicy() {
  return (
    <>
      <section className="p-4">
        <div>
          <div className=" justify-center flex pt-10    ">
            <img
              className=" h-14"
              src={Blacklogo}
              alt=""
              // height={200}
              // width={500}
            ></img>
          </div>
          <h1 className="text-4xl text-center font-semibold pt-[1rem] pb-2 text-[#fad000]">
            Privacy Policy
          </h1>
          <p className="text-base px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-3 font-medium text-center md:text-left">
            Welcome to Imperio Railing Systems. We value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <Link to="/">
              <b className="text-[#03237b]">www.imperiorailing.com</b>
            </Link>{" "}
            and interact with our services.
          </p>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 text-center md:text-left">
            Information Collection
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-3 font-normal text-center md:text-left">
            We collect information from you in several ways:
          </p>
          <ul>
            <li className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 text-lg font-bold text-center md:text-left">
              1. Personal Information You Provide to Us:
              <ul className="pl-6 mt-2 list-none font-normal">
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 mt-0.5" />
                  <span className="font-bold mr-2">Contact Information:</span>
                  <span>
                    Name, email address, phone number, and mailing address.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 mt-0.5" />
                  <span className="font-bold mr-2">Account Information:</span>
                  <span>Username, password, and other credentials.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 mt-0.5" />
                  <span className="font-bold mr-2">Communication Data:</span>
                  <span>
                    Information from emails, messages, or forms submitted on our
                    site.
                  </span>
                </li>
              </ul>
            </li>
            <li className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 text-lg font-bold text-center md:text-left mt-4">
              2. Information Automatically Collected:
              <ul className="pl-6 mt-2 list-none font-normal">
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 mt-0.5" />
                  <span className="font-bold mr-2">Technical Data:</span>
                  <span>
                    IP address, browser type, operating system, and device
                    information.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 mt-0.5" />
                  <span className="font-bold mr-2">Usage Data:</span>
                  <span>
                    Information about how you use our website, such as pages
                    visited and links clicked.
                  </span>
                </li>
              </ul>
            </li>
            <li className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 text-lg font-bold text-center md:text-left mt-4">
              3. Information from Third Parties:
              <ul className="pl-6 mt-2 list-none font-normal">
                <li className="flex items-start space-x-2">
                  <GoDot className="text-black-500 text-xl mt-0.5" />
                  <span>
                    We may receive information about you from other sources,
                    such as social media platforms or partners, to enhance our
                    ability to serve you.
                  </span>
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Use of Information
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-2 font-normal text-center md:text-left">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-48 2xl:pl-64">
            <ul className="mt-2 list-none">
              <li className="flex items-start space-x-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Providing Services:</span>
                <span>To deliver the products and services you request.</span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">
                  Improving User Experience:
                </span>
                <span>
                  To understand how our website is used and improve its
                  functionality.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Communication:</span>
                <span>
                  To respond to your inquiries, provide customer support, and
                  send you updates about our services.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Marketing:</span>
                <span>
                  To send you promotional materials and offers, subject to your
                  communication preferences.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Legal Compliance:</span>
                <span>
                  To comply with applicable laws, regulations, and legal
                  processes.
                </span>
              </li>
            </ul>
          </ul>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Cookies and Tracking Technologies
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-3 font-normal text-center md:text-left">
            We use cookies and similar tracking technologies to collect and use
            personal information about you. Cookies help us enhance your
            experience on our site by remembering your preferences and visits.
            You can manage your cookie preferences through your browser
            settings. Please note that disabling cookies may affect the
            functionality of our website.
          </p>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Data Sharing and Disclosure
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-2 font-normal text-center md:text-left">
            We do not sell your personal information. However, we may share your
            information with:
          </p>
          <ul className="pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-48 2xl:pl-64">
            <ul className="mt-2 list-none">
              <li className="flex items-start space-x-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Service Providers:</span>
                <span>
                  Third-party vendors who assist us in providing our services,
                  such as payment processors, shipping partners, and marketing
                  agencies.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Legal Requirements:</span>
                <span>
                  If required by law or to protect our rights, property, and
                  safety, or the rights, property, and safety of others.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span className="font-bold mr-2">Business Transfers:</span>
                <span>
                  In connection with any merger, sale, or transfer of our
                  business assets.
                </span>
              </li>
            </ul>
          </ul>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Data Security
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-2 font-normal text-center md:text-left">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no data
            transmission over the internet or electronic storage is completely
            secure. While we strive to protect your information, we cannot
            guarantee its absolute security.
          </p>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Your Choices
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-2 font-normal text-center md:text-left">
            You have the right to:
          </p>
          <ul className="pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-48 2xl:pl-64">
            <ul className="mt-2 list-none">
              <li className="flex items-start space-x-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span>
                  Access, correct, or delete your personal information.
                </span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span>Opt-out of receiving marketing communications.</span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span>Manage your cookie preferences.</span>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <GoDotFill className="text-black-500 mt-0.5" />
                <span>
                  Withdraw consent for the processing of your personal
                  information, where applicable.
                </span>
              </li>
            </ul>
          </ul>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-3 font-normal text-center md:text-left">
            To exercise these rights, please contact us at{" "}
            <b className="text-[#03237b]">www.imperiorailing.com</b>.
          </p>
          <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mt-6 text-center md:text-left">
            Changes to This Privacy Policy
          </h3>
          <p className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 p-2 font-normal text-center md:text-left">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the updated policy on our website.
            Your continued use of our site after such changes constitutes your
            acceptance of the new terms.
          </p>
          {/* <h3 className="text-xl text-[#fad000] font-bold px-4 sm:px-8 md:px-40 lg:px-[16rem] text-center md:text-left">
            Contact Us
          </h3>
          <p className="px-4 sm:px-8 md:px-40 lg:px-[16rem] p-2 font-normal text-center md:text-left">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at:
          </p>
          <h3 className="font-medium text-lg pb-2 text-[#03237b] px-4 sm:px-8 md:px-40 lg:px-[16rem]  text-center md:text-left">
            Imperio Railing Systems.
          </h3>
          <h3 className="font-normal text-black px-4 sm:px-8 md:px-40 lg:px-[16rem] text-center md:text-left">
            <b>Email:</b> hello@imperiorailing.com
          </h3>
          <h3 className="font-normal text-black px-4 sm:px-8 md:px-40 lg:px-[16rem]  text-center md:text-left">
            <b>Phone:</b> +91 85919 53385
          </h3>
          <h3 className="font-normal text-black px-4 sm:px-8 md:px-40 lg:px-[16rem]  text-center md:text-left">
            <b>Address:</b> 1, Aman Chambers, New Queens Rd, Charni Road, Mumbai
            Maharashtra - 400004.
          </h3> */}
          <h3 className="text-xl text-[#fad000] px-4 sm:px-8 md:px-40 lg:px-[16rem]  p-5 font-semibold text-center md:text-left">
            By using our website, you consent to the terms of this Privacy
            Policy. Thank you for choosing Imperio Railing Systems.
          </h3>
        </div>
      </section>
    </>
  );
}
