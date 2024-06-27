import { SocialLinks } from "../../components";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-[--black] p-9 phone:px-12 tablet:px-20 laptop:px-32 xl:px-44 py-11 phone:py-12 tablet:py-16 laptop:py-20 xl:py-24 text-white flex flex-col tablet:flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="text-5xl Raleway items-start">Let’s keep in touch!</h1>
        <div className="mt-8 items-center">
          <h3 className="text-2xl Raleway">Subscribe Now</h3>
          <div className="mt-4 text-lg">
            Receive updates on new designs, offers and blogs.
          </div>
          <div className="flex mt-4 text-md group">
            <input
              type="text"
              placeholder="example@example.com"
              className="border-2 border-white rounded-l-full p-4 pl-6 w-72 text-white transition-700 group-hover:border-[--secound] focus:border-[--secound] outline-none "
            />
            <button className="bg-white rounded-r-4xl h-full p-5 transition-700 group-hover:bg-[--secound] group2-focus:bg-[--secound] outline-none">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
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
        </div>
        <div className="items-end">
          <SocialLinks className="mt-12 flex text-2xl gap-5 " />
          <div className="flex gap-4 text-xs mt-4">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-md flex flex-col justify-center gap-8">
        <div className="flex gap-4 items-center">
          <MdOutlineEmail className="text-2xl text-gray-400" />
          <div>
            <div>Email</div>
            <div>info@imperiorailing.com</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <HiOutlinePhone className="text-2xl text-gray-400" />
          <div>
            <div>Telephone</div>
            <div>+1 (555) 123-4567</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <IoLocationOutline className="text-2xl text-gray-400" />
          <div>
            <div>Headquarters</div>
            <div>123 Glassway St., Metropolis, USA</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
