// import { Hero } from "../../components";

// interface JobDetailsProps {
//   job: {
//     title: string;
//     subtitle: string;
//     about: string;
//     location: string;
//     type: string;
//     others: {
//       Duration: string;
//       Expriance: string;
//       join: string;
//     }[];
//     responsibilities: string[];
//     skills: string[];
//     whocanapply: string[];
//     applyLink: string; // Add this property to store the unique application link
//   };
// }

// export function JobDetails({ job }: JobDetailsProps) {
//   return (
//     <>
//       <Hero
//         img="https://www.valmet.com/globalassets/about-us/careers/careers-hero_1280x720.jpg?format=webp&width=1290&quality=85"
//         altText="hero for job details"
//         header={job.title}
//         subHeader={job.subtitle}
//         curve
//       />
//       <section className="max-w-7xl mx-auto mt-7 md:mt-0 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <div className="flex md:-mb-14 justify-end">
//             <a
//               href={job.applyLink} // Use the unique apply link for each job
//               target="_blank"
//               rel="noopener noreferrer"
//               className="md:w-max py-2 px-3 md:py-3 md:px-5 border-2 rounded-3xl md:rounded-4xl text-white bg-[#000000] bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100"
//             >
//               Apply Now
//             </a>
//           </div>

//           <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
//             {job.title}
//           </h2>
//           <div className="flex gap-4 mb-6">
//             <span className="text-sm font-medium text-[#03237b]">
//               {job.location}
//             </span>
//             <span className="text-sm font-medium text-[#03237b]">
//               {job.type}
//             </span>
//           </div>

//           <div className="flex flex-col mb-4 py-2 gap-4">
//             <ul>
//               {job.others.map((data, index) => (
//                 <li key={index} className="flex gap-2">
//                   <h3 className=" text-[#03237b] font-medium">Duration :</h3>
//                   <span>{data.Duration}</span>
//                 </li>
//               ))}
//               {job.others.map((data, index) => (
//                 <li key={index} className="flex gap-2">
//                   <h3 className=" text-[#03237b] font-medium">Experience :</h3>
//                   <span>{data.Expriance}</span>
//                 </li>
//               ))}
//               {job.others.map((data, index) => (
//                 <li key={index} className="flex gap-2">
//                   <h3 className=" text-[#03237b] font-medium">Joining :</h3>
//                   <span>{data.join}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <p className="text-gray-600 mb-4">{job.about}</p>
//           <h3 className="text-xl font-semibold mb-2 text-[#03237b]">
//             Key Responsibilities:
//           </h3>
//           <ul className="list-disc pl-5 mb-6">
//             {job.responsibilities.map((responsibility, index) => (
//               <li key={index} className="text-gray-700 mb-2">
//                 {responsibility}
//               </li>
//             ))}
//           </ul>
//           <div className="mb-4">
//             <h3 className="text-xl justify-start font-semibold mb-2 text-[#03237b]">
//               Skills Required:
//             </h3>
//             <ul className="pl-5 mb-6 lg:flex gap-8">
//               {job.skills.map((skills, index) => (
//                 <li key={index} className="text-gray-700 mb-2">
//                   {`${index + 1}.  `}
//                   {skills}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <h3 className="text-xl font-semibold mb-3 text-[#03237b]">
//             Only those candidates can apply who:
//           </h3>
//           <ul className="pl-5 mb-7">
//             {job.whocanapply.map((whocanapply, index) => (
//               <li key={index} className="text-gray-700 mb-2">
//                 {index + 1}. {whocanapply}
//               </li>
//             ))}
//           </ul>

//           <a
//             href={job.applyLink} // Use the unique apply link for each job
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-max py-3 px-5 border-2 rounded-4xl text-white bg-[#000000] bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100"
//           >
//             Apply Now
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }
import { useState } from "react";
import { Hero } from "../../components";
import { ApplicationForm } from "../ApplicationForm/ApplicationForm";

interface JobDetailsProps {
  job: {
    title: string;
    subtitle: string;
    about: string;
    location: string;
    type: string;
    others: {
      Duration: string;
      Expriance: string;
      join: string;
    }[];
    responsibilities: string[];
    skills: string[];
    whocanapply: string[];
  };
}

export function JobDetails({ job }: JobDetailsProps) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyClick = () => {
    setShowApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
  };

  return (
    <>
      <Hero
        img="https://www.valmet.com/globalassets/about-us/careers/careers-hero_1280x720.jpg?format=webp&width=1290&quality=85"
        altText="hero for job details"
        header={job.title}
        subHeader={job.subtitle}
        curve
      />
      <section className="max-w-7xl mx-auto mt-7 md:mt-0 p-4">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex md:-mb-14 justify-end">
            <button
              onClick={handleApplyClick}
              className="md:w-max py-2 px-3 md:py-3 md:px-5 border-2 rounded-3xl md:rounded-4xl text-white bg-[#000000] bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100"
            >
              Apply Now
            </button>
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-[#03237b]">
            {job.title}
          </h2>
          <div className="flex gap-4 mb-6">
            <span className="text-sm font-medium text-[#03237b]">
              {job.location}
            </span>
            <span className="text-sm font-medium text-[#03237b]">
              {job.type}
            </span>
          </div>
          <div className="flex flex-col mb-4 py-2 gap-4">
            <ul>
              {job.others.map((data, index) => (
                <li key={index} className="flex gap-2">
                  <h3 className=" text-[#03237b] font-medium">Duration :</h3>
                  <span>{data.Duration}</span>
                </li>
              ))}
              {job.others.map((data, index) => (
                <li key={index} className="flex gap-2">
                  <h3 className=" text-[#03237b] font-medium">Experience :</h3>
                  <span>{data.Expriance}</span>
                </li>
              ))}
              {job.others.map((data, index) => (
                <li key={index} className="flex gap-2">
                  <h3 className=" text-[#03237b] font-medium">Joining :</h3>
                  <span>{data.join}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-600 mb-4">{job.about}</p>
          <h3 className="text-xl font-semibold mb-2 text-[#03237b]">
            Key Responsibilities:
          </h3>
          <ul className="list-disc pl-5 mb-6">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {responsibility}
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <h3 className="text-xl justify-start font-semibold mb-2 text-[#03237b]">
              Skills Required:
            </h3>
            <ul className="pl-5 mb-6 lg:flex gap-8">
              {job.skills.map((skill, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {`${index + 1}. `}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-[#03237b]">
            Only those candidates can apply who:
          </h3>
          <ul className="pl-5 mb-7">
            {job.whocanapply.map((criteria, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {index + 1}. {criteria}
              </li>
            ))}
          </ul>
          <button
            onClick={handleApplyClick}
            className="w-max py-3 px-5 border-2 rounded-4xl text-white bg-[#000000] bg-opacity-60 transition-700 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100"
          >
            Apply Now
          </button>
        </div>
      </section>
      {showApplicationForm && (
        <ApplicationForm
          onClose={handleCloseForm}
          position={job.title}
          jobType={job.type}
        />
      )}
    </>
  );
}
