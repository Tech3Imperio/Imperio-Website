import { useParams } from "react-router-dom";
import { JobDetails } from "../../components";
import { useState, useEffect } from "react";

// interface Job {
//   title: string;
//   subtitle: string;
//   about: string;
//   location: string;
//   type: string;
//   others: {
//     Duration: string;
//     Expriance: string;
//     join: string;
//   }[];
//   responsibilities: string[];
//   skills: string[];
//   whocanapply: string[];
// }
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
  applyLink: string; // Added applyLink
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
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
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
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Logistics and Back office Coordinator",
        subtitle:
          "Create captivating animations to showcase innovative products in a dynamic, creative environment.",
        about:
          "Are you a passionate and creative individual with a love for animation and design? Do you have experience with Adobe After Effects, Video Editing, and Adobe Illustrator? If so, we have the perfect opportunity for you! Imperio Railing Systems is seeking a talented Animation intern to join our team and help bring our products to life through captivating animations and videos.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2+ years",
            join: "Immediately / Female Candidate Only",
          },
        ],
        responsibilities: [
          " Plan and coordinate shipments to ensure timely delivery.",
          "Maintain accurate records for shipments, inventory, and vendors.",
          "Process invoices, purchase orders, and shipping documents.",
          "Communicate with carriers, vendors, and clients to resolve issues.",
          "Track and monitor shipments, updating stakeholders as needed.",
          "Ensure compliance with shipping regulations and company policies.",
          "Analyze logistics data to improve efficiency and reduce costs.",
          " Support interdepartmental communication and back-office tasks.",
          " Address and resolve shipment delays or discrepancies.",
          "Optimize logistics processes to meet operational goals.",
        ],
        skills: [
          "Organizational skills",
          "Communication skills (written and verbal)",
          "Attention to detail",
          "Time management",
          "Problem-solving and decision-making",
          "Proficiency in logistics and office software (e.g. Excel)",
          "Multitasking and adaptability",
          "Knowledge of shipping regulations and compliance.",
        ],
        whocanapply: [
          "Only Female Candidate",
          "2+ years of experience in logistics or back-office roles",
          "Proficiency in logistics software and Microsoft Office.",
          "Strong organizational and communication skills",
          "Knowledge of shipping regulations and inventory management.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Business Development (Sales)",
        subtitle:
          "As a Business Development intern at Imperio Railing Systems, you'll assist in lead generation, client relationship building, and revenue growth while gaining marketing experience.",
        about:
          "As a Business Development (Sales) intern at Imperio Railing Systems, you will have the opportunity to showcase your skills in Digital Marketing and Social Media Marketing while gaining valuable experience in the sales industry. Your role will involve working closely with the sales team to generate leads, build relationships with potential clients, and drive revenue growth for the company.",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "Cinematographer Intern",
        subtitle:
          "Imperio Railing systems, a leader in innovative glass railing solutions, is seeking a talented and motivated Cinematographer Intern to join our creative team.",
        about:
          "Imperio Railing systems, a leader in innovative glass railing solutions, is seeking a talented and motivated Cinematographer Intern to join our creative team. This internship offers the opportunity to gain hands-on experience in product-focused videography, including visiting installation sites to capture high-quality footage of our glass railing products.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months ",
            Expriance: "Fresher",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Visit installation sites to capture high-quality footage of glass railing installations and product features.",
          "Use your own cinematography equipment (cameras, lenses, lighting, and audio gear) to capture footage in alignment with the creative vision.",
          "to create visually compelling content that highlights our glass railing products and their unique features.",
          "Stay updated on industry trends, emerging technologies, and cinematography techniques relevant to product and architectural videography.",
          "Work closely with the marketing and sales teams to understand the company’s brand identity and ensure visual content aligns with our vision.",
          "Contribute to problem-solving during filming to ensure smooth production processes, especially when filming on-site.",
          "Assist in post-production work, including editing and providing input to enhance the final product.",
        ],
        skills: [
          "Proficiency in using cinematography equipment (camera, lenses, lighting, and audio gear).",
          "Basic understanding of cinematography and video production.",
          "Creativity and fresh ideas for visual storytelling.",
          "Willingness to travel to different installation sites for videography.",
        ],
        whocanapply: [
          "Currently enrolled in a degree program in Cinematography, Media Production, or a related field.",
          "Passion for cinematography, product videography, and visual storytelling.",
          "Must own and be proficient in using cinematography equipment.",
          "Comfortable with site visits and filming in diverse environments.",
          "Eagerness to learn and adapt in a fast-paced, product-focused media environment.",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
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
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
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
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
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
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Full Stack Developer Intern",
        subtitle:
          "We are seeking a Full Stack Developer Intern to assist in building scalable web applications, contributing to both front-end and back-end development. This is a great opportunity to gain hands-on experience and enhance your skills.",
        about:
          "We are seeking a motivated and tech-savvy Full Stack Developer Intern to join our team. In this role, you will support the development of scalable web applications by contributing to both front-end and back-end development. This internship provides a fantastic opportunity to gain hands-on experience in web application development, enhance your technical skills, and collaborate with experienced developers.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 Months",
            Expriance: "Fresher",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Assist in developing responsive front-end interfaces using technologies like React and Next.js",
          "Support back-end development tasks, including building APIs and database management.",
          "Write clean, maintainable, and efficient code under the guidance of senior developers.",
          "Debug and resolve issues in existing applications.",
          "Collaborate with designers and other developers to implement new features.",
          "Participate in code reviews and contribute to team discussions.",
          "Research and incorporate new technologies and best practices into development workflows.",
          "Document technical processes and ensure knowledge sharing within the team.",
        ],
        skills: [
          "CSS",
          "HTML",
          "JavaScript",
          "React.JS",
          "Next.Js",
          "TypeScript",
          "Node.js",
          "MongoDB",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 18th Jan'25 and 22nd Feb'25",
          "are available for duration of 6 months",
          "have relevant skills and interests",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "Full Stack Developer",
        subtitle:
          "We are seeking a Full Stack Developer Intern to assist in building scalable web applications, contributing to both front-end and back-end development. This is a great opportunity to gain hands-on experience and enhance your skills.",
        about:
          "We are looking for a skilled web developer who will be responsible for developing and/or designing websites for our company. You will be working alongside a team of other developers in creating, maintaining, and updating our websites. In order for you to succeed in this role, you will need to be proficient in NextJS, ReactJS, AWS, MongoDB, JavaScript, HTML, CSS, and have solid knowledge and experience in programming applications.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2-5 years",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Build and maintain websites and applications",
          "Advanced proficiency in using different markup and programming languages, such as CSS, HTML, Python, JavaScript and React/Next js.",
          "Evaluate code to make sure that it is properly structured and compatible with different devices, browsers, and operating systems",
          "Develop solutions that meet industry standards.",
          "Be responsible for maintaining, expanding, and scaling our site.",
          "Proven working experience in web programming.",
          "High level of experience with web standards, website interfaces, and cross-browser compatibility",
          "Assess customer feedback to identify problems and correct them.",
          "Manage, scale, and expand the company’s website",
        ],
        skills: [
          "CSS",
          "HTML",
          "JavaScript",
          "React.JS",
          "Next.Js",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Python",
          "MySql",
          "Cloud Knowledge",
          "SEO Knowledge",
        ],
        whocanapply: [
          "Bachelor’s degree in Computer Science, Engineering, or a related field.",
          "Proven experience (2–5 years) in full stack development.",
          "Strong understanding of software development life cycle and best practices.",
          "Excellent problem-solving and communication skills.",
          "Ability to work independently and in a team-oriented environment.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
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
  return (
    <div>
      <JobDetails job={job} />
      {/* Displaying the Apply button */}
      <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
        {/* <button>Apply Now</button> */}
      </a>
    </div>
  );
  // return <JobDetails job={job} />;
}
