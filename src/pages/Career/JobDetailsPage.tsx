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
          "Imperio Railing Systems is a leading brand in premium aluminum glass railing solutions. We combine innovation, style, and safety to redefine spaces. Join us to learn and contribute to our dynamic marketing team!",
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
          "Assist in creating engaging content for social media platforms (e.g., Instagram, Facebook, LinkedIn, Twitter, and Pinterest).",
          "Collaborate with the design and marketing team to produce high-quality images, videos, and graphics.",
          "Schedule and publish posts across various social platforms",
          "Stay updated with the latest social media trends and incorporate them into campaigns.",
          "Track and analyze key performance metrics, such as engagement, reach, and follower growth.",
          "Provide weekly/monthly reports with insights and recommendations for improvement.",
          "Assist in planning and executing social media campaigns, contests, and events.",
          "Research competitors and industry trends to identify growth opportunities",
        ],
        skills: [
          "Content Creation",
          "Social Media Management",
          "Analytics & Reporting",
          "Paid Campaign",
          "mobile video editing software",
          "Canva",
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
        title: "Sales Manager",
        subtitle:
          "We are seeking a results-driven Sales Manager to lead our team, drive revenue, and develop sales strategies while building strong client relationships.",
        about:
          "We are seeking a motivated and results-driven Sales Manager to lead and manage our sales team. The ideal candidate will have a strong background in sales, excellent leadership skills, and a proven track record of driving revenue growth. This role involves developing and executing sales strategies, building strong client relationships, and ensuring team performance meets targets.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "5+ years  ",
            join: "Immediately",
          },
        ],
        responsibilities: [
          " Lead and manage the sales team to achieve and exceed sales targets.",
          "Develop and implement effective sales strategies to drive business growth.",
          "Monitor sales performance and analyze key metrics to ensure goals are being met.",
          "Build and maintain strong relationships with new and existing clients.",
          "Identify new business opportunities and potential markets.",
          "Provide regular coaching and training to sales team members.",
          "Collaborate with marketing and other departments to create and execute sales campaigns",
          "Negotiate contracts, close sales, and oversee the sales process from start to finish.",
          "Prepare and deliver sales presentations to clients.",
          "Stay up-to-date with industry trends and competitors to adapt sales strategies.",
        ],
        skills: [
          "Proven Sales Experience",
          "Leadership and Team Management",
          "Strong Communication Skills",
          "Customer-Focused",
          "Sales Strategy Development",
          "Problem-Solving and Negotiation Skills",
          "Business Developmen",
          "Time Management and Organizational Skills",
        ],
        whocanapply: [
          " Individuals with excellent verbal and written communication skills who can effectively negotiate, influence, and present to clients.",
          "Candidates who have a strong focus on understanding customer needs and providing tailored solutions that drive business growth.",
          "Individuals with the ability to seek out new business opportunities, build relationships, and expand a company's client base.",
          "Individuals with 3+ years of experience in sales or sales management, particularly in a leadership or team management role, are encouraged to apply.",
        ],
      },
      {
        title: "Field Sales Executive",
        subtitle:
          "We are seeking a results-driven Field Sales Executive to generate leads, close sales, and expand our customer base through face-to-face interactions.",
        about:
          "We are seeking a highly motivated and results-driven Field Sales Executive to join our sales team. The ideal candidate will have a passion for sales, strong communication skills, and the ability to build lasting relationships with clients. In this role, you will be responsible for generating leads, closing sales, and expanding our customer base through face-to-face interactions and field-based activities.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "6+ Months",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Target potential clients through direct field sales activities, prospecting, and networking.",
          "Meet new and existing clients in person to promote and present products and services.",
          "Establish and nurture long-lasting customer relationships through consistent follow-up and personalized service.",
          "Ensure high levels of customer satisfaction by offering excellent service and resolving issues promptly.",
          "Effectively present and demonstrate products to clients, driving sales and securing deals.",
          "Ensure high levels of customer satisfaction by offering excellent service and resolving issues promptly.",
          "Negotiate contracts, finalize terms, and close sales deals to meet targets.",
        ],
        skills: [
          "Sales Expertise",
          "Excellent Communication",
          "Customer Relationship Managemen",
          "Problem-Solving",
          "Self-Motivation and Initiative",
          "Time Management",
          "Presentation Skills",
          "Adaptability",
          "CRM Proficiency",
          "Industry Knowledge",
          "Team Collaboration",
        ],
        whocanapply: [
          " Are passionate about sales and building customer relationships.",
          "Are self-driven, motivated, and comfortable working independently in the field.",
          " Have strong communication, negotiation, and problem-solving skills.",
          "Have prior experience in field sales or direct client interactions.",
        ],
      },
      {
        title: "Aluminium Window Sales Executive",
        subtitle:
          "We are looking for a motivated Aluminium Window Sales Executive to generate leads, build relationships, and close sales in the construction sector.",
        about:
          "We are seeking a motivated Aluminium Window Sales Executive to generate leads, conduct presentations, build customer relationships, and close sales in the construction and home improvement sector.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "6+ Months",
            join: "Immediately / Only Male Candidates",
          },
        ],
        responsibilities: [
          " Identify and target potential customers for aluminium window products through direct sales and networking.",
          "Meet clients to promote aluminium window solutions and provide product information.",
          "Advise clients on product specifications, installation, and benefits for residential and commercial use.",
          "Prepare quotes, negotiate pricing, and close sales deals.",
          "Build and maintain strong customer relationships and provide ongoing support.",
          "Track sales progress, manage leads, and update CRM systems.",
          "Collaborate with team members for timely product delivery and installation.",
          "Stay informed about industry trends and competitor products.",
          "Achieve sales targets and contribute to company growth",
        ],
        skills: [
          "Sales Expertise",
          "Strong Communication and Negotiation Skills",
          "In-depth Product Knowledge (Aluminium Windows)",
          "Problem-Solving and Solution-Oriented",
          "Time Management and Organization",
          "Presentation and Persuasion Skills",
          "Adaptability and Flexibility",
        ],
        whocanapply: [
          " Candidates with a strong background in sales, preferably in construction, home improvement, or related industries.",
          "Individuals with excellent communication and negotiation skills.",
          "Professionals who are goal-oriented and have a passion for delivering excellent customer service.",
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
