import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../components";
import { careerTeamImg } from "../../assets/Images";
// import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface Job {
  title: string;
  description: string;
  location: string;
  type: string;
}

export default function Career() {
  const [jobs] = useState<Job[]>([
    {
      title: "Business Development Executive",
      description:
        "As a Business Development Executive at Imperio Railing Systems, you will play a key role in driving the growth and success of our business.",
      location: "Mumbai",
      type: "Full-Time",
    },
    {
      title: "Digital Marketing Executive",
      description:
        "We are looking for a skilled individual with expertise in Digital Marketing, SEO, Social Media (Facebook & Instagram), and Email Marketing.",
      location: "Mumbai",
      type: "Full-Time",
    },
    {
      title: "Inside Sales Executive",
      description:
        "The role involves generating leads, collaborating on client solutions, and nurturing relationships with leads and customers.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Business Development (Sales)",
      description:
        "As a Business Development intern at Imperio Railing Systems, you'll generate leads, build relationships, and drive growth.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Architecture",
      description:
        "As an Architecture intern at Imperio Railing Systems, you'll use AutoCAD, 3ds Max, and Google SketchUp to help design innovative railing systems.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Video Editing/Making",
      description:
        "Imperio Railing Systems is looking for a creative Video Editing intern skilled in Photoshop, After Effects, Final Cut Pro, and Canva.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Interior Design",
      description:
        "Imperio Railing Systems is seeking an Interior Design intern skilled in 3ds Max, AutoCAD, and Google SketchUp.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Brand Management",
      description:
        "Imperio Railing Systems is hiring a Brand Management intern with skills in digital marketing, social media, video editing, and UI/UX design.",
      location: "Mumbai",
      type: "Internship",
    },
    {
      title: "Social Media Marketing",
      description:
        "Join Imperio Railing Systems as a Social Media Marketing intern and gain hands-on experience in marketing strategies while showcasing your skills.",
      location: "Mumbai",
      type: "Internship",
    },
  ]);

  return (
    <>
      <Hero
        img="https://www.valmet.com/globalassets/about-us/careers/careers-hero_1280x720.jpg?format=webp&width=1290&quality=85"
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
      <section className=" ">
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className=" text-[#fad000] text-lg font-medium sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
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
          <picture>
            <source
              srcSet={`
      ${careerTeamImg} 400w,
      ${careerTeamImg} 800w,
      ${careerTeamImg} 1200w
    `}
              sizes="(max-width: 480px) 400px, 
           (max-width: 768px) 800px, 
           1200px"
              type="image/webp"
            />
            <img
              src={`${careerTeamImg}-800.webp`} // You can change this to the appropriate image URL for fallbacks.
              alt="Career Team"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-300"
            />
          </picture>
        </div>
        <hr className=" mt-10 mb-2"></hr>
        <div className="max-w-7xl  mx-auto  gap-8 p-4">
          <h2 className=" justify-center text-center text-5xl text-[#03237b]">
            Explore Job Opportunitie
          </h2>
          <div className="max-w-7xl mx-auto mt-10 gap-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {jobs.map((job, index) => (
                <Link
                  to={`/careers/${encodeURIComponent(job.title)}`}
                  key={index}
                >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md relative hover:shadow-lg transition-shadow">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
