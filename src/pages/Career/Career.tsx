// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Hero } from "../../components";
// // import { careerTeamImg } from "../../assets/Images";
// // import { LiaExternalLinkAltSolid } from "react-icons/lia";

// interface Job {
//   title: string;
//   description: string;
//   location: string;
//   type: string;
// }

// export default function Career() {
//   const [jobs] = useState<Job[]>([
// {
//   title: "Business Development Executive",
//   description:
//     "As a Business Development Executive at Imperio Railing Systems, you will play a key role in driving the growth and success of our business.",
//   location: "Mumbai",
//   type: "Full-Time",
// },
// {
//   title: "Digital Marketing Executive",
//   description:
//     "We are looking for a skilled individual with expertise in Digital Marketing, SEO, Social Media (Facebook & Instagram), and Email Marketing.",
//   location: "Mumbai",
//   type: "Full-Time",
// },
// {
//   title: "Inside Sales Executive",
//   description:
//     "The role involves generating leads, collaborating on client solutions, and nurturing relationships with leads and customers.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Business Development (Sales)",
//   description:
//     "As a Business Development intern at Imperio Railing Systems, you'll generate leads, build relationships, and drive growth.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Architecture",
//   description:
//     "As an Architecture intern at Imperio Railing Systems, you'll use AutoCAD, 3ds Max, and Google SketchUp to help design innovative railing systems.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Video Editing/Making",
//   description:
//     "Imperio Railing Systems is looking for a creative Video Editing intern skilled in Photoshop, After Effects, Final Cut Pro, and Canva.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Interior Design",
//   description:
//     "Imperio Railing Systems is seeking an Interior Design intern skilled in 3ds Max, AutoCAD, and Google SketchUp.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Brand Management",
//   description:
//     "Imperio Railing Systems is hiring a Brand Management intern with skills in digital marketing, social media, video editing, and UI/UX design.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Social Media Marketing",
//   description:
//     "Join Imperio Railing Systems as a Social Media Marketing intern and gain hands-on experience in marketing strategies while showcasing your skills.",
//   location: "Mumbai",
//   type: "Internship",
// },
// {
//   title: "Sales Manager",
//   description:
//     "We are seeking a results-driven Sales Manager to lead our team, drive revenue, and develop strategies while building strong client relationships.",
//   location: "Mumbai",
//   type: "Full-Time",
// },
// {
//   title: "Field Sales Executive",
//   description:
//     "We are seeking a results-driven Field Sales Executive to generate leads, close sales, and expand our customer base through face-to-face interactions.",
//   location: "Mumbai",
//   type: "Full-Time",
// },
// {
//   title: "Aluminium Window Sales Executive",
//   description:
//     "We are looking for a motivated Aluminium Window Sales Executive to generate leads, build relationships, and close sales in the construction sector.",
//   location: "Mumbai",
//   type: "Full-Time",
// },
//   ]);

//   return (
//     <>
//       <Hero
//         img="https://www.valmet.com/globalassets/about-us/careers/careers-hero_1280x720.jpg?format=webp&width=1290&quality=85"
//         altText="hero for blog"
//         header={
//           <>
//             Explore Career Opportunities at,
//             <br />
//             Imperio
//           </>
//         }
//         subHeader="Explore career opportunities at Imperio Railing Systems. Join a team focused on growth, innovation, and collaboration. Apply today to advance your professional journey."
//         curve
//       />
//       <section className=" ">
//         <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-2 gap-8 p-4">
//           {/* <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
//             <h2 className=" text-[#fad000] text-lg font-medium sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
//               Join Our Team
//             </h2>
//             <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
//               Empowering Your Career Growth
//             </h3>
//           </div>
//           <div className="md:w-[40%]">
//             <p className="text-justify italic text-[--grey]">
//               At Imperio Railing Systems, we believe in fostering a culture of
//               innovation, collaboration, and continuous growth. Explore exciting
//               career opportunities where your skills and passion can make a real
//               impact!
//             </p>
//           </div> */}
//         </div>
//         {/* <div className="max-w-7xl  mx-auto mt-10 md:mt-24 gap-8 p-4">
//           <picture>
//             <source
//               srcSet={`
//       ${careerTeamImg} 400w,
//       ${careerTeamImg} 800w,
//       ${careerTeamImg} 1200w
//     `}
//               sizes="(max-width: 480px) 400px,
//            (max-width: 768px) 800px,
//            1200px"
//               type="image/webp"
//             />
//             <img
//               src={`${careerTeamImg}-800.webp`} // You can change this to the appropriate image URL for fallbacks.
//               alt="Career Team"
//               loading="lazy"
//               className="w-full h-auto object-cover transition-transform duration-300"
//             />
//           </picture>
//         </div>
//         <hr className=" mt-10 mb-2"></hr> */}
//         <div className="max-w-7xl  mx-auto  gap-8 p-4">
//           <h2 className=" justify-center text-center text-5xl text-[#03237b]">
//             Explore Job Opportunities
//           </h2>
//           <div className="max-w-7xl mx-auto mt-10 gap-8 p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
//               {jobs.map((job, index) => (
//                 <Link
//                   to={`/careers/${encodeURIComponent(job.title)}`}
//                   key={index}
//                 >
//                   <div className="bg-gray-100 p-6 rounded-none shadow-md relative hover:shadow-lg transition-shadow">
//                     <h3 className="text-xl font-semibold mb-2 text-blue-900">
//                       {job.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4">{job.description}</p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-[#292929]">
//                         {job.location}
//                       </span>
//                       <span className="text-sm font-medium text-[#292929]">
//                         {job.type}
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../components";
import Metadata from "../../components/Metatag/Metatag";

interface Job {
  title: string;
  description: string;
  location: string;
  type: string;
  applyLink: string; // Apply link directly to the application page
}
interface Intern {
  title: string;
  description: string;
  location: string;
  type: string;
  applyLink: string; // Apply link directly to the application page
}

export default function Career() {
  const [selectedCategory, setSelectedCategory] = useState("jobs");
  const [jobs] = useState<Job[]>([
    // {
    //   title: "Back Office Executive",
    //   description:
    //     "As a Back Office Executive at Imperio Railing Systems, you will ensure smooth operational workflows by managing administrative tasks, accurate data entry, and internal reporting with high attention to detail.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    {
      title: "Business Development Executive",
      description:
        "As a Business Development Executive at Imperio Railing Systems, you will play a key role in driving the growth and success of our business.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    // {
    //   title: "Accounts Executive",
    //   description:
    //     "The Accounts Executive will be responsible for managing daily financial transactions, maintaining accurate records, preparing financial reports, and assisting in audits and tax filings.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    {
      title: "Aluminium Fabricator Fitter",
      description:
        "As an Aluminium Fabricator Fitter at Imperio Railing Systems, you will be responsible for assembling, fitting, and welding metal components for construction and machinery, ensuring precision and adherence to safety standards.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
    },
    // {
    //   title: "Digital Marketing Executive",
    //   description:
    //     "We are looking for a skilled individual with expertise in Digital Marketing, SEO, Social Media (Facebook & Instagram), and Email Marketing.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    {
      title: "Aluminium Window Sales Executive",
      description:
        "We are looking for a motivated Aluminium Window Sales Executive to generate leads, build relationships, and close sales in the construction.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Sales Manager",
      description:
        "We are seeking a results-driven Sales Manager to lead our team, drive revenue, and develop strategies while building strong client relationships.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Field Sales Executive",
      description:
        "We are seeking a results-driven Field Sales Executive to generate leads, close sales, and expand our customer base through face-to-face interactions.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Logistics and Back office Coordinator",
      description:
        "The Back Office and Logistics Coordinator manages logistics support, administrative tasks, and record-keeping for smooth operations.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Sales Coordinator (Only female candidates)",
      description:
        "We are looking for a motivated and detail-oriented Sales Coordinator with an architectural or engineering background to support our sales team and ensure smooth and efficient operations. ",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Sales Executive",
      description:
        "We are seeking a highly motivated and goal-oriented Sales Executive with a strong background in architecture, building, or construction. ",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Marketing Manager",
      description:
        "We’re looking for a flexible and versatile marketer who will be responsible for the growth of our inbound sales channels.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    // {
    //   title: "MIS Executive",
    //   description:
    //     "We are seeking an innovative, well-organized, and automation-driven MIS Executive to join our growing company.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    // {
    //   title: "Purcase Procurement Executive (Only female candidates)",
    //   description:
    //     "We are seeking a detail-oriented and efficient Purchase and Procurement Executive to oversee the procurement process for materials, supplies, and services required by the company.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    // {
    //   title: "Performance marketing (Female Candidate Preffered)",
    //   description:
    //     "We are seeking a results-driven Performance Marketing Specialist to join our marketing team. The ideal candidate will have a proven track record in running successful online marketing campaigns, creating attention-grabbing content, and driving measurable results across various digital platforms.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    // {
    //   title: "Full Stack Developer",
    //   description:
    //     "We are seeking a Full Stack Developer to assist in building scalable web applications, contributing to both front-end and back-end development.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    {
      title: "Interior Designer – New Product Research & Development",
      description:
        "The ideal candidate should have strong expertise in vendor management, international relations, product design and engineering, installation coordination, sales, and site meetings.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "Franchise Development Manager",
      description:
        "A Franchise Manager oversees the operations and performance of a franchise network, ensuring compliance with company standards, managing franchisee relationships, and driving business growth through strategic planning and execution",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    // {
    //   title: "Telesales Executive",
    //   description:
    //     "As a Tele Sales Executive at Imperio Railing Systems, you will have the opportunity to showcase your skills in Sales. Your role will involve working closely with the sales team to generate leads.",
    //   location: "Mumbai",
    //   type: "Full-Time",
    //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    // },
    {
      title: "Site Supervisor",
      description:
        "Imperio Railing Systems is looking for a dedicated Site Supervisor with experience in aluminium fabrication projects. The ideal candidate will be responsible for supervising on-site fabricators and fitters, managing daily tasks, ensuring quality control, and coordinating with the operations team to ensure projects are delivered efficiently and on time.",
      location: "Mumbai",
      type: "Full-Time",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
  ]);
  const [intern] = useState<Intern[]>([
    // {
    //   title: "Full Stack Developer Intern",
    //   description:
    //     "We are seeking a Full Stack Developer Intern to assist in building scalable web applications, contributing to both front-end and back-end development.",
    //   location: "Mumbai",
    //   type: "Internship",
    //   applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    // },
    {
      title: "Business Development (Sales)",
      description:
        "As a Business Development intern at Imperio Railing Systems, you'll generate leads, build relationships, and drive growth.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    },
    {
      title: "Graphic Design Intern",
      description:
        "As a Graphic Design intern at Imperio Railing Systems, you'll Design Catalogs, Content and Promote Branding",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    },
    {
      title: "Cinematographer Intern",
      description:
        "Imperio Railing systems, a leader in innovative glass railing solutions, is seeking a talented and motivated Cinematographer Intern to join our creative team.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    },
    // {
    //   title: "Architecture",
    //   description:
    //     "As an Architecture intern at Imperio Railing Systems, you'll use AutoCAD, 3ds Max, and Google SketchUp to help design innovative railing systems.",
    //   location: "Mumbai",
    //   type: "Internship",
    //   applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    // },
    {
      title: "Video Editing/Making",
      description:
        "Imperio Railing Systems is looking for a creative Video Editing intern skilled in Photoshop, After Effects, Final Cut Pro, and Canva.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    },
    // {
    //   title: "Interior Design",
    //   description:
    //     "Imperio Railing Systems is seeking an Interior Design intern skilled in 3ds Max, AutoCAD, and Google SketchUp.",
    //   location: "Mumbai",
    //   type: "Internship",
    //   applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    // },
    // {
    //   title: "Brand Management",
    //   description:
    //     "Imperio Railing Systems is hiring a Brand Management intern with skills in digital marketing, social media, video editing, and UI/UX design.",
    //   location: "Mumbai",
    //   type: "Internship",
    //   applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    // },
    {
      title: "Social Media Marketing Intern",
      description:
        "Join Imperio Railing Systems as a Social Media Marketing intern and gain hands-on experience in marketing strategies while showcasing your skills.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9", // Apply link
    },
    {
      title: "Data Analytics Intern",
      description:
        "As a Data Analytics intern at Imperio Railing Systems, you will have the opportunity to apply your knowledge of Data Analytics and MS-Excel in a real-world business setting.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "UI/UX Design Intern",
      description:
        "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative UI/UX Design Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience in designing user-friendly digital experiences, collaborating with our marketing and development teams to enhance our online presence and product visualization.",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
    {
      title: "SEO Intern",
      description:
        "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative SEO Intern Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience",
      location: "Mumbai",
      type: "Internship",
      applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8", // Apply link
    },
  ]);

  return (
    <>
      <Metadata
        title="Careers"
        description="Imperio Railing System is a stair and glass railing manufacturing company in Mumbai, Maharashtra. We're dedicated to creating premium glass railing parts for your home."
        keywords="About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
        // ogImage={aboutHero}
        // ogImage="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/about/about.webp"
        ogImage="https://res.cloudinary.com/dj2h9pj9i/image/upload/v1738388344/Images/Images/career/bh9g9chtf78sejyjhr3i.png"
        ogUrl="https://www.imperiorailing.com/careers"
      />
      <Hero
        img="https://res.cloudinary.com/dj2h9pj9i/image/upload/v1738388344/Images/Images/career/bh9g9chtf78sejyjhr3i.png"
        altText="hero for blog"
        header={
          <>
            Explore Career Opportunities at,
            <br />
            Imperio
          </>
        }
        subHeader="Explore career opportunities at Imperio Railing Systems. Join a team focused on growth, innovation, and collaboration. Apply today to advance your professional journey."
        curve
      />
      <section className="">
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-2 gap-8 p-4">
          {/* Placeholder for additional content */}
        </div>
        <div className="max-w-7xl mx-auto gap-8 p-4">
          <h2 className="justify-center text-center text-5xl text-[#03237b]">
            Explore Job Opportunities
          </h2>

          <div className="max-w-7xl mx-auto mt-10 gap-8 p-4">
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-16 justify-center items-center">
              <h3 className="max-w-5xl  gap-8 text-xl">Applying for:</h3>
              <button
                className={`px-4 py-2 font-bold rounded-none transition-all border ${
                  selectedCategory === "jobs"
                    ? "bg-[--black] text-[--secound] border-[--black]"
                    : "bg-gray-200 text-gray-700 border-gray-400"
                }`}
                onClick={() => setSelectedCategory("jobs")}
              >
                Jobs
              </button>
              <button
                className={`px-4 py-2 font-bold rounded-none transition-all border ${
                  selectedCategory === "intern"
                    ? "bg-[--black] text-[--secound] border-[--black]"
                    : "bg-gray-200 text-gray-700 border-gray-400"
                }`}
                onClick={() => setSelectedCategory("intern")}
              >
                Internships
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {(selectedCategory === "jobs" ? jobs : intern).map(
                (job, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-none shadow-md relative hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full flex justify-between">
                      <h3 className="text-xl font-semibold mb-2 text-blue-900">
                        {job.title}
                      </h3>
                      <span className="text-sm font-bold text-[#292929] uppercase w-max">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex justify-end items-center mt-4">
                      <Link to={`/careers/${encodeURIComponent(job.title)}`}>
                        <button className="px-4 py-3 text-[--secound] font-bold bg-[--black] text-xs rounded-none transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
