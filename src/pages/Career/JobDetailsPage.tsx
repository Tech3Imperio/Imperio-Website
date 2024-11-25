import { useParams } from "react-router-dom";
import { JobDetails } from "../../components/JobDetails/JobDetails";
import { useState, useEffect } from "react";

interface Job {
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
}

export default function JobDetailsPage() {
  const { title } = useParams<{ title: string }>();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const jobs: Job[] = [
      {
        title: "Animation Intern",
        subtitle:
          "Create captivating animations to showcase innovative products in a dynamic, creative environment.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "3 - 6 Months",
            Expriance: "Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Collaborate with our design team to create engaging animations for marketing materials",
          "Assist in video editing to produce high-quality videos showcasing our products",
          "Use Adobe After Effects to create dynamic motion graphics for various projects",
          " Work closely with our marketing team to develop animated content for social media platforms",
          " Utilize Adobe Illustrator to design graphics and assets for animations",
          " Help maintain and organize our animation and video files for easy accessibility",
          "Stay up-to-date on industry trends and techniques to continuously improve your skills.",
        ],
        skills: [
          "Adobe After Effects",
          "Adobe Illustrator",
          "Animation",
          "Video Editing",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 18th Nov'24 and 23rd Dec'24",
          "are available for duration of 3 months",
          "have relevant skills and interests",
        ],
      },

      {
        title: "Field Sales Executive",
        subtitle:
          "Drive business growth by identifying new sales opportunities and managing client relationships in the field. Deliver tailored solutions that meet customer needs and exceed sales targets.",
        about:
          "If you are a motivated self-starter with excellent communication skills and a strong technical background, we want to hear from you! Join us at Imperio Railing Systems and take the first step towards a successful career in technical sales. Apply now and unleash your potential!",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "3 Months",
            Expriance: "Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Conduct market research to identify potential clients and opportunities for growth",
          "Assist in developing sales strategies and implementing effective communication tactics",
          "Collaborate with the sales team to generate leads and follow up on customer inquiries",
          " Provide technical support to customers and address any product-related questions or concerns",
          "Participate in sales meetings and presentations to showcase our products and services",
          "Help maintain customer relationships and ensure high levels of customer satisfaction",
          "Analyze sales data and contribute to the development of sales reports and forecasts",
        ],
        skills: [
          "Client Relationship CRM",
          "English Proficiency (Spoken)",
          "English Proficiency (Written)",
          "Hindi Proficiency (Spoken)",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 2nd Oct'24 and 6th Nov'24",
          "are available for duration of 3 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
        ],
      },

      {
        title: "Product Designer",
        subtitle: "Promote and sell our innovative railing systems to clients.",
        about:
          "Create stunning and functional railing designs for our clients.",
        location: "Mumbai",
        type: "Full-time",
        others: [
          {
            Duration: "3 Months",
            Expriance: "Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Design innovative and aesthetically pleasing railing systems",
          "Collaborate with engineering team to ensure feasibility of designs",
          "Create detailed technical drawings and 3D models",
          "Stay up-to-date with industry trends and incorporate them into designs",
        ],
        skills: [],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 2nd Oct'24 and 6th Nov'24",
          "are available for duration of 3 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
        ],
      },

      {
        title: "Marketing Specialist",
        subtitle: "Promote and sell our innovative railing systems to clients.",
        about: "Develop and execute marketing strategies for our products.",
        location: "Mumbai",
        type: "Full-time",
        others: [
          {
            Duration: "3 Months",
            Expriance: "Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Develop and implement marketing campaigns across various channels",
          "Analyze market trends and competitor activities",
          "Create engaging content for social media and other platforms",
          "Track and report on marketing performance metrics",
        ],
        skills: [],
        whocanapply: [],
      },
    ];

    const foundJob = jobs.find(
      (j) => j.title === decodeURIComponent(title || "")
    );
    setJob(foundJob || null);
  }, [title]);

  if (!job) {
    return <div>Job not found</div>;
  }

  return <JobDetails job={job} />;
}
