import { useParams } from "react-router-dom";
import { JobDetails } from "../../components";
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
        title: "Business Development Executive",
        subtitle:
          "Create captivating animations to showcase innovative products in a dynamic, creative environment.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "1 year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          " Develop and implement strategies to attract new clients and increase sales revenue.",
          "Build and maintain strong relationships with existing clients to ensure repeat business.",
          "Utilize social media platforms to promote our products and services to a wider audience.",
          "Analyze market trends and competitor activity to identify new business opportunities.",
          "Use CRM to track sales performance and generate reports for management review.",
          "Create and manage email marketing campaigns to engage with potential and existing clients.",
          "Collaborate with cross-functional teams to ensure seamless execution of business development initiatives.",
        ],
        skills: [
          "Email Marketing",
          "English Proficiency (Spoken)",
          "English Proficiency (Written)",
          "MS-Excel",
          "Social Media Marketing",
        ],
        whocanapply: [
          "Candidates with minimum 1 years of experience.",
          "Those who are from or open to relocate to Mumbai and neighboring cities",
        ],
      },
      {
        title: "Digital Marketing Executive",
        subtitle:
          "Create captivating animations to showcase innovative products in a dynamic, creative environment.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "1-3 years",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Develop and implement digital marketing strategies to increase brand awareness and drive traffic to our website.",
          " Manage social media platforms and create engaging content to grow our following and engage with our audience.",
          "Optimize website content and implement SEO best practices to improve search engine rankings.",
          "Plan and execute Facebook and Instagram marketing campaigns to reach our target audience and drive conversions.",
          "Create and send targeted email campaigns to nurture leads and promote our products and services.",
          "Monitor and analyze key performance metrics to track the success of digital marketing efforts and make data-driven decisions.",
          "Stay up-to-date with the latest trends and best practices in digital marketing to ensure our strategies are cutting-edge and effective.",
        ],
        skills: [
          "Digital Marketing",
          "Email Marketing",
          "English Proficiency (Written)",
          "Facebook Marketing",
          "Instagram Marketing",
          "Search Engine Optimization (SEO)",
          "Social Media Marketing",
        ],
        whocanapply: ["Candidates with minimum 1 years of experience."],
      },
      {
        title: "Inside Sales Executive",
        subtitle:
          "Create captivating animations to showcase innovative products in a dynamic, creative environment.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Conduct product demonstrations and presentations to potential clients.",
          "Assist in generating and qualifying leads through various outreach efforts.",
          "Collaborate with the sales team to create customized solutions for clients.",
          "Follow up with leads and maintain relationships with existing customers.",
          "Provide exceptional customer service and support to ensure client satisfaction.",
          "Utilize CRM software to track sales activities and analyze data.",
          "Participate in training sessions and workshops to enhance sales skills and knowledge .",
        ],
        skills: [
          "English Proficiency (Written)",
          "English Proficiency (Spoke)",
        ],
        whocanapply: [
          "are available for full time (in-office) internship.",
          "can start the internship between 16th Dec'24 and 20th Jan'25",
          "are available for duration of 6 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
          "Women wanting to start/restart their career can also apply.",
        ],
      },
      {
        title: "Business Development (Sales)",
        subtitle:
          "As a Business Development intern at Imperio Railing Systems, you'll assist in lead generation, client relationship building, and revenue growth while gaining marketing experience.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Conduct market research to identify potential customers and opportunities for growth.",
          "Assist in developing and implementing marketing strategies to attract new customers.",
          "Manage social media accounts to engage with customers and promote products.",
          "Participate in sales meetings and presentations to pitch products and services.",
          "Collaborate with the sales team to create sales materials and proposals.",
          "Track and analyze sales data to identify trends and areas for improvement.",
          "Provide support to the sales team in various tasks to ensure smooth operations and customer satisfaction.",
        ],
        skills: ["Digital Marketing", "Social Media Marketing"],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 16th Dec'24 and 20th Jan'25",
          "are available for duration of 6 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
        ],
      },
      {
        title: "Architecture",
        subtitle:
          "As an Architecture intern at Imperio Railing Systems, you'll work on innovative projects, using AutoCAD, 3ds Max, and Google SketchUp to bring our railing systems to life.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Collaborate with our design team to create detailed drawings and renderings using AutoCAD, 3ds Max, and Google SketchUp.",
          "Assist in the development of new product designs and prototypes.",
          "Conduct research on current design trends and materials to inform our product development process.",
          "Participate in client meetings and presentations to showcase your design concepts.",
          "Work closely with our manufacturing team to ensure that designs are feasible and cost-effective.",
          "Contribute to the overall creative vision of the company and help us stay at the forefront of the industry.",
          "Gain hands-on experience in a fast-paced, dynamic work environment and grow your skills as a designer.",
        ],
        skills: ["3ds Max", "AutoCAD", "Google SketchUp"],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 16th Dec'24 and 20th Jan'25",
          "are available for duration of 6 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
          "* Women wanting to start/restart their career can also apply.",
        ],
      },
      {
        title: "Video Editing/Making",
        subtitle:
          "Imperio Railing Systems is seeking a creative Video Editing/Making intern skilled in Photoshop, After Effects, Final Cut Pro, and Canva to create engaging visual content.",
        about:
          "Are you a creative individual with a passion for video editing, photography, and design? Do you have experience with Adobe Photoshop, Adobe After Effects, Final Cut Pro, and Canva? Imperio Railing Systems is seeking a talented Video Editing/Making intern to join our team and help us create compelling visual content.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Collaborate with our marketing team to develop engaging video content for our website and social media platforms.",
          "Edit and enhance raw footage to create high-quality videos that showcase our products and services.",
          "Assist with photography and videography projects, including shooting and editing images and videos.",
          "Design visually appealing UI & UX elements for our website and digital marketing materials.",
          "Utilize your skills in Adobe Creative Suite to create graphics, animations, and other visual assets.",
          "Work closely with our creative team to bring innovative ideas to life through video editing and design.",
          "Stay up-to-date on industry trends and best practices to continuously improve the quality of our visual content.",
        ],
        skills: [
          "Adobe After Effects",
          "Adobe Photoshop",
          "Canva",
          "Final Cut Pro",
          "Photography",
          "UI & UX Design",
          "Video Editing",
          "Video Making",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 5th Dec'24 and 9th Jan'25",
          "are available for duration of 6 months",
          "have relevant skills and interests",
          "* Women wanting to start/restart their career can also apply.",
        ],
      },
      {
        title: "Interior Design",
        subtitle:
          "Imperio Railing Systems is looking for a skilled Interior Design intern with proficiency in 3ds Max, AutoCAD, and Google SketchUp to gain hands-on industry experience.",
        about:
          "Are you a talented Interior Design student looking to gain hands-on experience in the industry? Imperio Railing Systems is seeking a dynamic intern with a keen eye for design and proficiency in 3ds Max, AutoCAD, and Google SketchUp to join our team!",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Collaborate with our design team to create innovative railing system designs for various projects.",
          "Utilize 3ds Max, AutoCAD, and Google SketchUp to produce detailed renderings and technical drawings.",
          "Assist in material selection and sourcing for projects, ensuring quality and functionality.",
          "Participate in client meetings and presentations to showcase design concepts and solutions.",
          "Conduct research on industry trends and competitor products to stay current and competitive.",
          "Support the team in project coordination, including site visits and installations.",
          "Contribute creative ideas and solutions to enhance the overall design process.",
        ],
        skills: ["3ds Max", "AutoCAD", "Google SketchUp"],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 5th Dec'24 and 9th Jan'25",
          "are available for duration of 6 months",
          "have relevant skills and interests",
          "* Women wanting to start/restart their career can also apply.",
        ],
      },
      {
        title: "Brand Management",
        subtitle:
          "Imperio Railing Systems is seeking a creative Brand Management intern with skills in digital marketing, social media, photography, video editing, Canva, Figma, and UI/UX design.",
        about:
          "Are you a creative and driven individual looking to kickstart your career in brand management? Look no further than Imperio Railing Systems! As a Brand Management intern, you will have the opportunity to utilize your skills in digital marketing, social media marketing, photography, video making, video editing, Canva, Figma, UI & UX design, and English proficiency (written and spoken) to help elevate our brand to new heights.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Develop and execute innovative digital marketing strategies to increase brand awareness and engagement.",
          "Create captivating social media content to attract and retain followers across all platforms.",
          "Use your photography and video skills to produce high-quality visual assets for marketing campaigns.",
          "Collaborate with the design team to create visually appealing graphics using Canva and Figma.",
          "Assist in the development of user-friendly UI & UX designs for our online platforms.",
          "Monitor and analyze brand performance metrics to identify areas for improvement.",
          "Contribute fresh ideas and perspectives to help shape the future of our brand.",
        ],
        skills: [
          "Canva",
          "Digital Marketing",
          "Figma",
          "Photography",
          "Social Media Marketing",
          "UI & UX Design",
          "Video Editing",
          "Video Making",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 19th Dec'24 and 23rd Jan'25",
          "are available for duration of 6 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
          "* Women wanting to start/restart their career can also apply.",
        ],
      },
      {
        title: "Social Media Marketing",
        subtitle:
          "Join Imperio Railing Systems as a Social Media Marketing intern and gain hands-on experience in marketing strategies while showcasing your skills.",
        about:
          "Join Imperio Railing Systems as a Social Media Marketing intern and gain hands-on experience in marketing strategies while showcasing your skills.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "1 year - Fresher also can apply",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Create engaging content for social media platforms such as Instagram and Facebook to attract and engage our target audience.",
          "Implement email marketing campaigns to promote our products and services to our subscribers.",
          "Optimize our website through SEO and SEM techniques to improve our online visibility and drive traffic.",
          "Utilize video editing and photography skills to create visually appealing and informative content for our audience.",
          "Collaborate with the marketing team to develop creative campaigns that align with our brand image.",
          "Utilize Canva and Figma to design eye-catching graphics for social media posts and marketing materials.",
          "Communicate effectively in English, both written and spoken, to convey our brand message clearly to our audience.",
          "Taking Photos & Videos of projects done by us. Open to Travel for the same.",
        ],
        skills: [
          "Canva",
          "Creative Writing",
          "Email Marketing",
          "Instagram Marketing",
          "Digital Marketing",
          "Figma",
          "Search Engine Marketing (SEM)",
          "Search Engine Optimization (SEO)",
          "Social Media Marketing",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 19th Dec'24 and 23rd Jan'25",
          "are available for duration of 6 months",
          "are from or open to relocate to Mumbai and neighboring cities",
          "have relevant skills and interests",
          "* Women wanting to start/restart their career can also apply.",
        ],
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
