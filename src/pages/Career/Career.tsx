// import React, { useState } from "react";
// import { Hero } from "../../components";
// import { careerHeroImg } from "../../assets/Images";

// interface JobCardProps {
//   title: string;
//   description: string;
//   onApply: () => void;
// }

// const JobCard: React.FC<JobCardProps> = ({ title, description, onApply }) => (
//   <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
//     <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <button
//         onClick={onApply}
//         className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300"
//       >
//         Apply Now
//       </button>
//     </div>
//   </div>
// );

// const Career: React.FC = () => {
//   const [showForm, setShowForm] = useState<boolean>(false);
//   const [selectedJob, setSelectedJob] = useState<string>("");

//   const jobs = [
//     {
//       title: "Full Stack Developer",
//       description:
//         "Build scalable web applications using cutting-edge technologies.",
//     },
//     {
//       title: "UX/UI Designer",
//       description:
//         "Create intuitive and visually appealing user interfaces for our products.",
//     },
//     {
//       title: "Data Scientist",
//       description:
//         "Analyze complex datasets and develop machine learning models.",
//     },
//     {
//       title: "Product Manager",
//       description: "Lead product development and drive innovation in our team.",
//     },
//   ];

//   const handleApply = (jobTitle: string): void => {
//     setSelectedJob(jobTitle);
//     setShowForm(true);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <Hero
//         img={careerHeroImg}
//         altText="hero for home"
//         header={<>Join Our Innovative Team</>}
//         subHeader="We're on a mission to revolutionize technology. Are you ready to be
//             part of something extraordinary?"
//         height
//       >
//         <div className="p-8 pl-0 w-max text-xs">
//           <button
//             onClick={() =>
//               window.scrollTo({
//                 top: document.getElementById("openings")?.offsetTop || 0,
//                 behavior: "smooth",
//               })
//             }
//             className=" w-max py-4 px-6 border-2 rounded-4xl bg-gray-500 bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100"
//           >
//             Explore Opportunities
//           </button>
//         </div>
//       </Hero>

//       {/* Job Listings Section */}
//       <section id="openings" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
//             Open Positions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {jobs.map((job, index) => (
//               <JobCard
//                 key={index}
//                 title={job.title}
//                 description={job.description}
//                 onApply={() => handleApply(job.title)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Form */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Apply for {selectedJob}
//             </h2>
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="resume"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Resume (PDF or DOC)
//                 </label>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   accept=".pdf,.doc,.docx"
//                   required
//                   className="mt-1 block w-full text-sm text-gray-500
//                 file:mr-4 file:py-2 file:px-4
//                 file:rounded-full file:border-0
//                 file:text-sm file:font-semibold
//                 file:bg-indigo-50 file:text-indigo-700
//                 hover:file:bg-indigo-100"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Why do you want to join our team?
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 ></textarea>
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Submit Application
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Career;

// PART 2

// import React from "react";
import { Hero } from "../../components";
import { careersecondImg } from "../../assets/Images";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Career() {
  const jobs = [
    {
      title: "Software Engineer",
      description: "Develop and maintain our core railing design software.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Sales Representative",
      description:
        "Promote and sell our innovative railing systems to clients.",
      location: "Mumbai",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "Create stunning and functional railing designs for our clients.",
      location: "Mumbai",
      type: "Full-time",
    },
    {
      title: "Marketing Specialist",
      description: "Develop and execute marketing strategies for our products.",
      location: "Mumbai",
      type: "Full-time",
    },
  ];
  return (
    <>
      <Hero
        img="https://www.valmet.com/globalassets/about-us/careers/careers-hero_1280x720.jpg?format=webp&width=1290&quality=85"
        altText="hero for blog"
        header="Career"
        subHeader="We're on a mission to revolutionize technology. Are you ready to be part of something extraordinary?"
        curve
      />
      <section className=" ">
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
              Join Our Team
            </h2>
            <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              Empowering Your Career Growth
            </h3>
          </div>
          <div className="md:w-[40%]">
            <p className="text-justify italic text-[--grey]">
              At Imperio Railing Systems, we believe in fostering a culture of
              innovation, collaboration, and continuous growth. Explore exciting
              career opportunities where your skills and passion can make a real
              impact!
            </p>
          </div>
        </div>
        <div className="max-w-7xl  mx-auto mt-10 md:mt-24 gap-8 p-4">
          <img
            src={careersecondImg}
            alt="Career Team"
            className="w-full h-auto object-cover"
          />
        </div>
        <hr className=" mt-10 mb-2"></hr>
        <div className="max-w-7xl  mx-auto  gap-8 p-4">
          <h2 className=" justify-center text-center text-5xl text-[#03237b]">
            Open Positions
          </h2>
          <div className="max-w-7xl mx-auto mt-10 gap-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md relative"
                >
                  <a
                    href={`https://docs.google.com/forms/d/e/1FAIpQLSdrrSxeynFblPDGHE2oGyxvZepg8h4xu-c9bOklF-XcBDyzjg/viewform`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                  >
                    <LiaExternalLinkAltSolid className="h-8 w-7 text-[#03237b]" />
                  </a>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {job.location}
                    </span>
                    <span className="text-sm font-medium text-[#292929]">
                      {job.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
