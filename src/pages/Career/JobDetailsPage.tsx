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
        title: "Aluminium Fabricator Fitter",
        subtitle:
          "Metal components ko assemble, fit aur weld karke construction ya machinery ke liye ready karo.",
        about:
          "Imperio Railing Systems is hiring experienced Aluminium Fabricator Fitters in Mumbai. Candidates should be skilled in fabrication, fitting, welding, blueprint reading, and must follow safety protocols. This is a great opportunity for those with a minimum of 2 years of experience looking for a stable, hands-on job near Charni Road.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2 - 15 years",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Metal components ko assemble, fit aur weld karna.",
          "Blueprints read karna aur precision ensure karna.",
          "Construction aur machinery ke liye fabrication work complete karna.",
          "Safety guidelines ko strictly follow karna.",
          "Team ke sath coordinate karna to ensure timely project completion.",
        ],
        skills: [
          "Fabrication experience",
          "Blueprint reading",
          "Welding and fitting skills",
          "Use of fabrication tools",
          "Workplace safety knowledge",
        ],
        whocanapply: [
          "Candidates with minimum 2 years of experience.",
          "Those who are from or open to relocate to areas around Charni Road, Mumbai",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Franchise Development Manager",
        subtitle:
          "Ensuring compliance with company standards, managing franchisee relationships",
        about:
          "A Franchise Manager oversees the operations and performance of a franchise network, ensuring compliance with company standards, managing franchisee relationships, and driving business growth through strategic planning and execution",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2 year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Identify potential franchise opportunities and conduct feasibility studies.",
          "Assist in selecting and onboarding new franchisees.",
          "Develop and execute growth strategies to expand the franchise network",
        ],
        skills: [
          "Good Communication Skills",
          "Sales",
          "B2B",
          "Manage Operations",
        ],
        whocanapply: ["12 Pass or above", "Speaks Good English"],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Telesales Executive",
        subtitle:
          "Involve working closely with the sales team to generate leads, build relationships with potential clients",
        about:
          "As a Tele Sales Executive at Imperio Railing Systems, you will have the opportunity to showcase your skills in Sales. Your role will involve working closely with the sales team to generate leads, build relationships with potential clients, and drive revenue growth for the company.",
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
          "Contact potential or existing customers to inform them about a product or service using scripts",
          "Answer questions about products or the company",
          "Ask questions to understand customer requirements and close sales",
          "Direct prospects to the field sales team when needed",
          "Enter and update customer information in the database",
          "Take and process orders in an accurate manner",
          "Track and analyze sales data to identify trends and areas for improvement.",
          "Handle grievances to preserve the company’s reputation",
          "Go the “extra mile” to meet sales quota and facilitate future sales",
          "Keep records of calls and sales and note useful information",
        ],
        skills: ["Tele Sales"],
        whocanapply: [
          "Are available for full time (in-office and on-site)",
          "Can start immediately from 1st April 2025",
          "Are from Mumbai",
          "Have relevant skills and interests",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Accounts Executive",
        subtitle:
          "Manage daily financial operations, ensure compliance, and support audits in a structured, fast-paced environment.",
        about:
          "The Accounts Executive will be responsible for managing daily financial transactions, maintaining accurate records, preparing financial reports, and assisting in audits and tax filings. This role ensures that all accounting tasks are completed in a timely and accurate manner in compliance with financial regulations and company policies.",
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
          "Handle day-to-day accounting operations including accounts payable, accounts receivable, general ledger entries, and bank reconciliations.",
          "Process payments, manage petty cash and expense claims with accuracy and efficiency.",
          "Support internal and external audits by providing necessary documentation.",
          "Maintain proper filing of financial documents for record-keeping and audit purposes.",
          "Ensure compliance with statutory law and financial regulations (TDS calculation & payment, GST calculation and payment).",
          "Collaborate with other departments for accurate financial analysis and reporting.",
        ],
        skills: [
          "Bookkeeping",
          "Reconciliation",
          "Compliance",
          "Invoicing",
          "Accuracy",
          "Reporting",
          "Time-management",
          "Communication",
          "Confidentiality",
          "Multitasking",
          "Excel",
        ],
        whocanapply: [
          "Candidates with 1–3 years of experience in a similar role (freshers with strong internship experience may also be considered).",
          "Those who are from or open to relocate to Mumbai and neighboring cities.",
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
          "Manage social media platforms and create engaging content to grow our following and engage with our audience.",
          "Optimize website content and implement SEO best practices to improve search engine rankings.",
          "Plan and execute Facebook and Instagram marketing campaigns to reach our target audience and drive conversions.",
          "Create and send targeted email campaigns to nurture leads and promote our products and services.",
          "Monitor and analyze key performance metrics to track the success of digital marketing efforts and make data-driven decisions.",
          "Stay up-to-date with the latest trends and best practices in digital marketing to ensure our strategies are cutting-edge and effective.",
        ],
        skills: [
          "Search Engine Marketing (SEM)",
          "Email Marketing",
          "English Proficiency (Written)",
          "Search Engine Optimization (SEO)",
          "On page / Off page SEO",
          "Social Media Marketing",
          "(Optional) Content writing keyword optimization",
        ],
        whocanapply: ["Candidates with minimum 1 years of experience."],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Back Office Executive",
        subtitle:
          "Support daily operations with precision and efficiency by managing administrative tasks and maintaining accurate records.",
        about:
          "We are looking for a highly organized and detail-oriented Back Office Executive to handle administrative tasks, data entry, record management, and report preparation. The role involves supporting daily operations by managing behind-the-scenes activities and ensuring smooth workflows.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "6 months and above",
            Expriance: "6 months or more",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Perform data entry and maintain accurate records (both physical and electronic).",
          "Prepare and generate reports for internal teams.",
          "Assist in administrative tasks such as managing emails, scheduling, and document organization.",
          "Ensure accuracy in workflow and document management.",
          "Collaborate with internal teams to meet operational needs.",
          "Suggest process improvements to enhance efficiency.",
        ],
        skills: [
          "Organization",
          "Attention to Detail",
          "Time Management",
          "Communication",
          "Data Entry",
          "Multitasking",
          "Problem-Solving",
          "Report Preparation",
          "Confidentiality",
          "Collaboration",
        ],
        whocanapply: [
          "Anyone who has completed their 12th grade (high school).",
          "People with 6 months or more experience in office work or similar roles.",
          "Those who are good at using MS Office or Google Workspace (like Word, Excel, etc.).",
          "Candidates who are organized, pay attention to details, and can handle multiple tasks.",
          "Good communication skills and the ability to work well with others.",
        ],
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
        title: "Interior Designer – New Product Research & Development",
        subtitle:
          "We are looking for an experienced Interior Designer to lead our efforts in exploring and introducing innovative interior products from both domestic and international markets. This role involves researching new materials, obtaining technical details and samples, creating working prototypes, and presenting them to architects and interior designers to assess market response.",
        about:
          "We are looking for an experienced Interior Designer to lead our efforts in exploring and introducing innovative interior products from both domestic and international markets. This role involves researching new materials, obtaining technical details and samples, creating working prototypes, and presenting them to architects and interior designers to assess market response.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "3+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Product Research & Sourcing:",
          "Identify and explore new, innovative interior design products from domestic and international markets.",
          "Establish relationships with vendors, suppliers, and manufacturers for product procurement.",
          "Collect technical specifications, certifications, and samples of new materials and technologies.",

          "Prototype Development & Testing:",
          "Work with the product design and engineering team to create working prototypes and demos.",
          "Coordinate with the installation team to ensure feasibility and functionality.",

          "Market Validation & Business Development:",
          "Pitch new products to architects, interior designers, and industry professionals to gauge demand.",
          "Gather feedback and recommend improvements for product enhancement.",

          "Vendor & Supplier Management:",
          "Negotiate pricing, quality standards, and timelines with local and international suppliers.",
          "Coordinate logistics for smooth procurement and delivery of samples.",

          "Sales & Site Coordination:",
          "Work closely with the sales team to provide technical insights and assist in product presentations.",
          "Attend site meetings to oversee installations and resolve design-related challenges.",
        ],
        skills: [
          "Strong knowledge of materials, finishes, and emerging design trends.",
          "Experience in vendor management, supplier negotiations, and international product sourcing.",
          "Ability to develop prototypes and present concepts to architects and designers.",
          "Excellent communication and interpersonal skills.",
          "Hands-on experience in coordinating with installation teams and managing site meetings.",
          "Willingness to travel for research and business development when required",
        ],
        whocanapply: [
          "Bachelor’s degree in Interior Design, Product Design, or a related field.",
          "Minimum 3 years of experience in interior design, product research, or a similar role.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Interior Designer – New Product Research & Development",
        subtitle:
          "We are looking for an experienced Interior Designer to lead our efforts in exploring and introducing innovative interior products from both domestic and international markets. This role involves researching new materials, obtaining technical details and samples, creating working prototypes, and presenting them to architects and interior designers to assess market response.",
        about:
          "We are looking for an experienced Interior Designer to lead our efforts in exploring and introducing innovative interior products from both domestic and international markets. This role involves researching new materials, obtaining technical details and samples, creating working prototypes, and presenting them to architects and interior designers to assess market response.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "3+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Product Research & Sourcing:",
          "Identify and explore new, innovative interior design products from domestic and international markets.",
          "Establish relationships with vendors, suppliers, and manufacturers for product procurement.",
          "Collect technical specifications, certifications, and samples of new materials and technologies.",

          "Prototype Development & Testing:",
          "Work with the product design and engineering team to create working prototypes and demos.",
          "Coordinate with the installation team to ensure feasibility and functionality.",

          "Market Validation & Business Development:",
          "Pitch new products to architects, interior designers, and industry professionals to gauge demand.",
          "Gather feedback and recommend improvements for product enhancement.",

          "Vendor & Supplier Management:",
          "Negotiate pricing, quality standards, and timelines with local and international suppliers.",
          "Coordinate logistics for smooth procurement and delivery of samples.",

          "Sales & Site Coordination:",
          "Work closely with the sales team to provide technical insights and assist in product presentations.",
          "Attend site meetings to oversee installations and resolve design-related challenges.",
        ],
        skills: [
          "Strong knowledge of materials, finishes, and emerging design trends.",
          "Experience in vendor management, supplier negotiations, and international product sourcing.",
          "Ability to develop prototypes and present concepts to architects and designers.",
          "Excellent communication and interpersonal skills.",
          "Hands-on experience in coordinating with installation teams and managing site meetings.",
          "Willingness to travel for research and business development when required",
        ],
        whocanapply: [
          "Bachelor’s degree in Interior Design, Product Design, or a related field.",
          "Minimum 3 years of experience in interior design, product research, or a similar role.",
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
        title: "Social Media Marketing Intern",
        subtitle:
          "As a Social Media Marketing intern at Imperio Railing Systems, you will have the exciting opportunity to showcase your skills in various marketing strategies while gaining valuable experience in the industry.",
        about:
          "As a Social Media Marketing intern at Imperio Railing Systems, you will have the exciting opportunity to showcase your skills in various marketing strategies while gaining valuable experience in the industry.",
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
          "Digital Marketing",
          "Email Marketing",
          "English Proficiency (Spoken)",
          "English Proficiency (Written)",
          "Facebook Marketing",
          "Figma",
          "Instagram Marketing",
          "Photography",
          "Search Engine Marketing (SEM)",
          "Search Engine Optimization (SEO)",
          "Social Media Marketing",
          "Video Editing",
          "Video Making",
        ],
        whocanapply: [
          "are available for full time (in-office) internship",
          "can start the internship between 8th Feb'24 to 7th March'25",
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
      {
        title: "Graphic Design Intern",
        subtitle:
          "As a Graphic Design Intern at Imperio Railing Systems, you will have the exciting opportunity to showcase your creativity and design skills across various projects. You will gain hands-on experience working with our marketing and design teams, contributing to the visual identity of our brand and supporting the creation of impactful marketing materials.",
        about:
          "As a Graphic Design Intern at Imperio Railing Systems, you will have the exciting opportunity to showcase your creativity and design skills across various projects. You will gain hands-on experience working with our marketing and design teams, contributing to the visual identity of our brand and supporting the creation of impactful marketing materials.",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 months",
            Expriance: "Fresher",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Catalog design.",
          "Marketing collaterals.",
          "Branding & communication.",
          "Promotions.",
          "Content development.",
          "Video shooting & editing.",
        ],
        skills: [
          "Adobe After Effects",
          "Adobe Photoshop",
          "Canva",
          "Photography",
          "UI & UX Design",
          "Video Editing",
          "Video Making",
        ],
        whocanapply: [
          "Available for full time (in-office) internship",
          "Can start the internship between 29th Jan'25 and 28th Feb'25",
          "Available for the duration of 6 months",
          "Relevant skills and interests",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "Data Analytics Intern",
        subtitle:
          "As a Data Analytics intern at Imperio Railing Systems, you will have the opportunity to apply your knowledge of Data Analytics and MS-Excel in a real-world business setting. Join our passionate team and gain hands-on experience in the world of data-driven decision making!",
        about:
          "As a Data Analytics intern at Imperio Railing Systems, you will have the opportunity to apply your knowledge of Data Analytics and MS-Excel in a real-world business setting. Join our passionate team and gain hands-on experience in the world of data-driven decision making!",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 months",
            Expriance: "Fresher",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Analyze and interpret data to provide valuable insights for business improvement",
          "Create visually appealing dashboards and reports using MS-Excel for easy data visualization",
          "Collaborate with cross-functional teams to identify key metrics and KPIs",
          "Assist in data cleaning and preparation for analysis",
          "Conduct ad-hoc analysis to support strategic decision-making process",
          "Present findings and recommendations to stakeholders in a clear and concise manner",
          "Continuously learn and improve data analytics skills through mentorship and training opportunities",
        ],
        skills: ["Data Analytics", "MS-Excel"],
        whocanapply: [
          "Available for full time (in-office) internship",
          "Are from or open to relocate to Mumbai and neighboring cities",
          "Available for the duration of 6 months",
          "Relevant skills and interests",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "Sales Coordinator",
        subtitle:
          "We are looking for a motivated and detail-oriented Sales Coordinator with an architectural or engineering background to support our sales team and ensure smooth and efficient operations. The ideal candidate will have a strong understanding of technical products and solutions, enabling them to assist in the coordination of sales activities, manage customer orders, and offer valuable insights into product applications and specifications. This position is key in ensuring the sales team can effectively serve clients, including architects, engineers, and contractors.!",
        about:
          "We are looking for a motivated and detail-oriented Sales Coordinator with an architectural or engineering background to support our sales team and ensure smooth and efficient operations. The ideal candidate will have a strong understanding of technical products and solutions, enabling them to assist in the coordination of sales activities, manage customer orders, and offer valuable insights into product applications and specifications. This position is key in ensuring the sales team can effectively serve clients, including architects, engineers, and contractors.",
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
          "Assist the sales team with day-to-day operations and provide administrative support, especially regarding technical products and solutions.",
          "Coordinate communication between sales, engineering, and other departments, ensuring technical details align with client needs.",
          "Maintain and update customer databases, ensuring accuracy and inclusion of technical details.",
          "Generate sales reports and analyze performance data.",
          "Organize and schedule appointments, meetings, and sales presentations, focusing on product and technical applications.",
          "Handle customer inquiries related to product specifications, technical features, and solutions.",
          "Monitor and follow up on open sales orders, ensuring timely closure.",
          "Assist with organizing promotional campaigns and events tailored to the technical market.",
        ],
        skills: [
          "Excellent Communication Skills",

          "Strong Organization Skills",

          "Problem-solving Abilities",

          "Multitasking Efficiency",

          "Customer Relationship Management",

          "Client-focused Approach",
        ],
        whocanapply: [
          "Bachelor’s degree in Architecture, Engineering, or a related field.",

          "Proven experience in sales coordination, administrative support, or customer-facing roles (1 years preferred).",

          "Strong understanding of technical products, building materials, or engineering solutions.",

          "Knowledge of the architecture, engineering, or construction industry is a plus.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Sales Executive (Only male candidates)",
        subtitle:
          "We are seeking a highly motivated and goal-oriented Sales Executive with a strong background in architecture, building, or construction. The ideal candidate will be responsible for driving sales, building relationships with potential clients, and contributing to the growth of the company. As a Sales Executive, you will actively engage in prospecting, negotiating, and closing sales deals. A strong focus on customer service, product knowledge, and sales performance is essential.",
        about:
          "We are seeking a highly motivated and goal-oriented Sales Executive with a strong background in architecture, building, or construction. The ideal candidate will be responsible for driving sales, building relationships with potential clients, and contributing to the growth of the company. As a Sales Executive, you will actively engage in prospecting, negotiating, and closing sales deals. A strong focus on customer service, product knowledge, and sales performance is essential.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "3 year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Prospect and Generate Leads: Identify new business opportunities and create a pipeline of potential clients through research, networking, and outreach.",

          "Client Relationship Management: Build and maintain strong relationships with existing and potential clients to ensure continued business growth.",

          "Sales Presentations: Present company products and services to potential clients, addressing their needs and demonstrating how our offerings solve their problems.",

          "Negotiation and Closing: Effectively negotiate terms and close sales deals to achieve monthly and quarterly sales targets.",

          "Market Research: Stay informed about industry trends, competitor activities, and market conditions to effectively position the company’s offerings.",

          "Collaboration: Work closely with the sales team and other departments to ensure smooth project execution and customer satisfaction.",

          "Sales Reporting: Keep track of sales progress, prepare reports, and update the sales manager on progress toward goals.",

          "Customer Support: Assist clients with product inquiries, after-sales support, and resolve any issues that may arise during the sales process.",

          "Ability to work independently and as part of a team to meet targets.",
        ],
        skills: [
          "Client Relationship Management",
          "Negotiation Skills",
          "Market Research",
          "Communication Proficiency",
          "Strategic Thinking",
          "Time Management",
          "Goal Orientation",
          "Team Collaboration",
          "Product Knowledge",
          "Presentation Skills",
          "Customer-focused Approach",
        ],
        whocanapply: [
          "Only Male Candidates ",
          "Bachelor’s degree in Architecture, Building Construction, or a related field.",
          "Highly organized with strong time-management skills.",
          "Minimum of 3 years of experience in sales within the architectural, building, or construction industry.",
          "Knowledge of industry trends and competitors is a plus.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Sales Executive",
        subtitle:
          "We are seeking a highly motivated and goal-oriented Sales Executive with a strong background in architecture, building, or construction. The ideal candidate will be responsible for driving sales, building relationships with potential clients, and contributing to the growth of the company. As a Sales Executive, you will actively engage in prospecting, negotiating, and closing sales deals. A strong focus on customer service, product knowledge, and sales performance is essential.",
        about:
          "We are seeking a highly motivated and goal-oriented Sales Executive with a strong background in architecture, building, or construction. The ideal candidate will be responsible for driving sales, building relationships with potential clients, and contributing to the growth of the company. As a Sales Executive, you will actively engage in prospecting, negotiating, and closing sales deals. A strong focus on customer service, product knowledge, and sales performance is essential.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "3 year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Prospect and Generate Leads: Identify new business opportunities and create a pipeline of potential clients through research, networking, and outreach.",

          "Client Relationship Management: Build and maintain strong relationships with existing and potential clients to ensure continued business growth.",

          "Sales Presentations: Present company products and services to potential clients, addressing their needs and demonstrating how our offerings solve their problems.",

          "Negotiation and Closing: Effectively negotiate terms and close sales deals to achieve monthly and quarterly sales targets.",

          "Market Research: Stay informed about industry trends, competitor activities, and market conditions to effectively position the company’s offerings.",

          "Collaboration: Work closely with the sales team and other departments to ensure smooth project execution and customer satisfaction.",

          "Sales Reporting: Keep track of sales progress, prepare reports, and update the sales manager on progress toward goals.",

          "Customer Support: Assist clients with product inquiries, after-sales support, and resolve any issues that may arise during the sales process.",

          "Ability to work independently and as part of a team to meet targets.",
        ],
        skills: [
          "Client Relationship Management",
          "Negotiation Skills",
          "Market Research",
          "Communication Proficiency",
          "Strategic Thinking",
          "Time Management",
          "Goal Orientation",
          "Team Collaboration",
          "Product Knowledge",
          "Presentation Skills",
          "Customer-focused Approach",
        ],
        whocanapply: [
          "Bachelor’s degree in Architecture, Building Construction, or a related field.",
          "Highly organized with strong time-management skills.",
          "Minimum of 3 years of experience in sales within the architectural, building, or construction industry.",
          "Knowledge of industry trends and competitors is a plus.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Marketing Manager",
        subtitle:
          "If you live and breathe marketing, we need to talk. We’re looking for a flexible and versatile marketer who will be responsible for the growth of our inbound sales channels. Marketing manager responsibilities include tracking and analyzing the performance of advertising campaigns, managing the marketing budget and ensuring that all marketing material is in line with our brand identity. To be successful in this role, you should have hands-on experience with web analytics tools and be able to turn creative ideas into effective advertising projects.",
        about:
          "If you live and breathe marketing, we need to talk. We’re looking for a flexible and versatile marketer who will be responsible for the growth of our inbound sales channels. Marketing manager responsibilities include tracking and analyzing the performance of advertising campaigns, managing the marketing budget and ensuring that all marketing material is in line with our brand identity. To be successful in this role, you should have hands-on experience with web analytics tools and be able to turn creative ideas into effective advertising projects.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Creating marketing strategies to achieve organisational goals",
          "Implementing marketing campaigns from ideation to execution",
          "Managing the marketing budget",
          "Coordinating marketing efforts with cross-functional teams like sales and product development",
          "Analysing marketing data and metrics to refine marketing strategies",
          "Staying updated with the latest marketing trends",
        ],
        skills: [
          "Digital Marketing Strategy",
          "Performance Marketing & PPC Management",
          "Market Research & Competitive Analysis",
          "Campaign Planning & Execution",
          "Brand Management & Positioning",
          "CRM & Marketing Automation Tools",
          "Team Leadership & Cross-Functional Collaboration",
        ],
        whocanapply: [
          "Minimum 3-5 years of experience in digital marketing, performance marketing, or brand management",
          "Strong expertise in PPC, SEO, CRM, and marketing automation tools",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "MIS Executive",
        subtitle:
          "We are seeking an innovative, well-organized, and automation-driven MIS Executive to join our growing company. The ideal candidate will be responsible for designing, developing, and optimizing computer systems while ensuring timely execution and alignment with business objectives. This role requires strong expertise in automation, data management, and process optimization to drive efficiency and digital transformation.",
        about:
          "We are seeking an innovative, well-organized, and automation-driven MIS Executive to join our growing company. The ideal candidate will be responsible for designing, developing, and optimizing computer systems while ensuring timely execution and alignment with business objectives. This role requires strong expertise in automation, data management, and process optimization to drive efficiency and digital transformation.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Designing, monitoring, analyzing, and troubleshooting IT systems.",
          "Interpreting briefs and developing IT systems that meet all specifications and cost requirements.",
          "Assisting with training and onboarding processes.",
          "Maintaining, managing, and updating software.",
          "Supervising digital security and ensuring all anti-viruses and firewalls are regularly updated.",
          "Supervising the development and maintenance of websites and ensuring the protection of users data.",
          "Analyzing existing operations, protocols, and processes, and making plans for improvement.",
          "Conducting research, attending workshops, and networking with other professionals in the industry.",
        ],
        skills: [
          "Advanced Excel & Automation",
          "SQL & Database Management",
          "Business Intelligence & Reporting",
          "Process Automation",
          "ERP & CRM System Management",
          "Data Security",
          "Problem-Solving & Analytical Thinking",
          "Attention to Detail & Data Accuracy",
          "Process Optimization & Efficiency Improvement",
          "Time Management & Cross-Functional Collaboration",
        ],
        whocanapply: [
          "Experience managing a team.",
          "Practical experience with a variety of software applications.",
          "Attention to detail and excellent diagnostic skills.",
          "Effective communication and interpersonal skills.",
          "Ability to motivate and inspire staff.",
          "Strong leadership abilities and good time management skills.",
          "Excellent problem-solving and management skills.",
          "Ability to train staff junior staff.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Purcase Procurement Executive (Only female candidates)",
        subtitle:
          "We are seeking a detail-oriented and efficient Purchase and Procurement Executive to oversee the procurement process for materials, supplies, and services required by the company. The ideal candidate will manage supplier relationships, negotiate contracts, and ensure the timely and cost-effective acquisition of goods and services. This role requires strong communication skills, negotiation abilities, and the ability to track and manage purchasing activities to support operational efficiency.",
        about:
          "We are seeking a detail-oriented and efficient Purchase and Procurement Executive to oversee the procurement process for materials, supplies, and services required by the company. The ideal candidate will manage supplier relationships, negotiate contracts, and ensure the timely and cost-effective acquisition of goods and services. This role requires strong communication skills, negotiation abilities, and the ability to track and manage purchasing activities to support operational efficiency.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "2+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Vendor Management: Identify, evaluate, and manage relationships with suppliers to ensure the best value, quality, and delivery times for products and services.",
          "Purchasing: Handle all aspects of purchasing, including ordering, receiving, and inspecting goods to ensure compliance with specifications and quality standards.",
          "Negotiation: Negotiate contracts, pricing, and terms with suppliers to ensure favorable terms and cost efficiency for the company.",
          "Inventory Management: Maintain accurate inventory records, track product levels, and ensure that stock is replenished timely without overstocking.",
          "Market Research: Stay up to date with market trends and supplier offerings to make informed purchasing decisions.",
          "Purchase Orders: Create and process purchase orders, track order progress, and ensure timely delivery of materials and services.",
          "Budget Management: Ensure that purchases are made within budget constraints and propose alternatives when needed.",
          "Reporting: Maintain detailed records of purchases, supplier performance, and cost analysis to report to senior management.",
          "Problem Resolution: Address and resolve issues related to procurement delays, quality concerns, and supplier disputes.",
        ],
        skills: [
          "Vendor Management",
          "Negotiation Skills",
          "Purchasing Strategy",
          "Inventory Management",
          "Supply Chain Knowledge",
          "Attention to Detail",
          "Communication Skills",
          "ERP Systems Proficiency",
          "Time Management",
        ],
        whocanapply: [
          "Female Candidates",
          "Candidates with an engineering background are strongly preferred for this role.",
          "Applicants with a minimum of 2 years of experience in procurement, purchasing, or supply chain management.",
          "Those who can manage budgets, track expenditures, and ensure purchases are within financial constraints.",
          "Candidates who have a proven track record in vendor management, negotiation, and sourcing.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      {
        title: "Telesales Executive",
        subtitle:
          "We are looking for an enthusiastic Tele Sales Executive to contribute in generating sales for our company. You will be responsible for sales over the phone and maintaining good customer relationships.An effective telesales representative must be an excellent communicator and have superior people skills.They must be comfortable presenting products or services over the phone as well as dealing with complaints and doubts.The goal is to help the company grow by bringing in customers and developing business.",
        about:
          "We are looking for an enthusiastic Tele Sales Executive to contribute in generating sales for our company. You will be responsible for sales over the phone and maintaining good customer relationships.An effective telesales representative must be an excellent communicator and have superior people skills.They must be comfortable presenting products or services over the phone as well as dealing with complaints and doubts.The goal is to help the company grow by bringing in customers and developing business.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "1+ year",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Customer Outreach: Contact potential or existing customers to inform them about products or services using prepared scripts.",
          "Product Knowledge: Answer questions related to the company’s offerings clearly and confidently to build customer trust.",
          "Needs Assessment: Ask relevant questions to understand customer requirements and propose suitable solutions.",
          "Lead Routing: Direct qualified prospects to the field sales team when in-person follow-up is required.",
          "Data Management: Enter and update accurate customer information in the company database.",
          "Order Processing: Take and process orders in an efficient and accurate manner, ensuring a smooth transaction experience.",
          "Grievance Handling: Address customer grievances professionally to maintain the company’s reputation and ensure satisfaction.",
          "Target Achievement: Go the extra mile to meet or exceed monthly sales quotas and facilitate repeat business.",
          "Sales Documentation: Keep detailed records of calls, sales interactions, customer feedback, and relevant notes for future reference.",
        ],
        skills: [
          "Telesales Experience",
          "Sales Target Achievement",
          "CRM Software Proficiency",
          "Telephone System Knowledge",
          "Product & Service Explanation",
          "English Proficiency",
          "Communication & Interpersonal Skills",
          "Emotional Resilience",
          "Negotiation & Conflict Resolution",
        ],
        whocanapply: [
          "Graduates with 1–3 years of experience in telesales, inside sales, or customer service.",
          "Candidates with prior experience in the interior, architecture, building materials, or related industries are preferred.",
          "Individuals who can thrive in a fast-paced, target-driven sales environment.",
          "Applicants with a strong passion for sales and a proactive, go-getter attitude.",
        ],
        applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      },
      // {
      //   title: "Performance marketing (Female Candidate Preffered)",
      //   subtitle:
      //     "We are seeking a results-driven Performance Marketing Specialist to join our marketing team. The ideal candidate will have a proven track record in running successful online marketing campaigns, creating attention-grabbing content, and driving measurable results across various digital platforms. You will play a crucial role in managing and optimizing campaigns, creating engaging content, and ensuring a high return on investment (ROI) for the company.",
      //   about:
      //     "We are seeking a results-driven Performance Marketing Specialist to join our marketing team. The ideal candidate will have a proven track record in running successful online marketing campaigns, creating attention-grabbing content, and driving measurable results across various digital platforms. You will play a crucial role in managing and optimizing campaigns, creating engaging content, and ensuring a high return on investment (ROI) for the company.",
      //   location: "Mumbai",
      //   type: "Full-Time",
      //   others: [
      //     {
      //       Duration: "NA",
      //       Expriance: "1+ year",
      //       join: "Immediately",
      //     },
      //   ],
      //   responsibilities: [
      //     "Campaign Strategy & Execution: Plan, implement, and optimize performance marketing campaigns across multiple digital channels, including Google Ads, Facebook, Instagram, LinkedIn, and other performance-based platforms.",
      //     "Content Creation: Develop and create compelling, attention-grabbing content for ads, landing pages, and social media campaigns that resonate with target audiences and drive conversions.",
      //     "Budget Management: Allocate and manage advertising budgets effectively to achieve maximum ROI.",
      //     "Performance Analysis: Continuously monitor, analyze, and report on campaign performance to identify opportunities for optimization and improvement.",
      //     "A/B Testing: Conduct A/B tests on ad creatives, landing pages, and audience targeting to improve campaign results.",
      //     "Lead Generation: Develop strategies to increase lead generation, conversion rates, and overall sales funnel performance.",
      //     "Collaboration: Work closely with the creative and content teams to ensure campaigns align with brand goals and messaging.",
      //     "Market Research: Stay up to date with industry trends, competitor activities, and new marketing opportunities to enhance campaign performance.",
      //     "Reporting & Insights: Provide regular reports and insights to stakeholders on campaign performance, trends, and actionable recommendations.",
      //     "Campaign Optimization: Continuously optimize campaigns based on data-driven insights and performance metrics.",
      //   ],
      //   skills: [
      //     "Content Creation",
      //     "Campaign Management",
      //     "Budget Allocation",
      //     "SEO Knowledge",
      //     "PPC Management",
      //     "A/B Testing",
      //     "Conversion Optimization",
      //     "Lead Generation",
      //     "Social Media Strategy",
      //     "Google Ads Expertise",
      //     "Creative Copywriting",
      //     "Market Research",
      //     "Audience Targeting",
      //   ],
      //   whocanapply: [
      //     "Female candidates are preferred",

      //     "Candidates with a strong background in performance marketing or digital marketing.",

      //     "Candidates with at least 1 year of experience in the digital marketing industry or similar roles",

      //     "Candidates who can demonstrate the ability to manage multiple projects, meet deadlines, and deliver results.",
      //   ],
      //   applyLink: "https://forms.gle/QTY4R3SGjB2Mw3AB8",
      // },
      {
        title: "SEO Intern",
        subtitle:
          "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative SEO Intern Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience",
        about:
          "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative SEO Intern Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience",
        location: "Mumbai",
        type: "Internship",
        others: [
          {
            Duration: "6 months",
            Expriance: "NA",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Assist in keyword research and analysis to identify opportunities for growth.",
          "Optimize on-page elements, including meta tags, headings, and content.",
          "Conduct competitive analysis and performance tracking.",
          "Help improve website performance using SEO tools like Google Analytics, Search Console, and SEMrush.",
          "Support link-building strategies by identifying opportunities and reaching out for collaborations.",
          "Collaborate with the content team to ensure SEO best practices are implemented.",
          "Track and report website traffic, rankings, and performance metrics.",
          "Stay updated on the latest search engine algorithms and SEO trends.",
        ],
        skills: [
          "Content Writing and Strategy",
          "On-Page SEO",
          "Off-Page SEO",
          "Technical SEO",
          "Analytics and Reporting",
          "Page speed optimization",
          "Social Media and SEO Integration",
        ],
        whocanapply: [
          "Are available for full time (in-office) internship",
          "Can start the internship immediately",
          "Are available for duration of 6 months",
          "have relevant skills and interests",
          "Ability to work independently and as part of a team",
          "Strong attention to detail and problem-solving abilities",
          "A basic understanding of HTML/CSS and front-end development is a plus but not required",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "UI/UX Design Intern",
        subtitle:
          "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative UI/UX Design Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience in designing user-friendly digital experiences, collaborating with our marketing and development teams to enhance our online presence and product visualization.",
        about:
          "Imperio Railing Systems, a leader in innovative glass railing solutions, is looking for a talented and creative UI/UX Design Intern to join our team. This internship offers an excellent opportunity to gain hands-on experience in designing user-friendly digital experiences, collaborating with our marketing and development teams to enhance our online presence and product visualization.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "6 months",
            Expriance: "NA",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Assist in creating engaging, user-friendly interfaces for websites and mobile applications",
          "Collaborate with senior designers and cross-functional teams to ensure designs meet business goals and user needs",
          "Conduct research on user behavior, market trends, and competitor analysis",
          "Create wireframes, prototypes, and design specifications for new features and products",
          "Help perform usability testing and gather feedback to refine designs",
          "Assist in maintaining design consistency across digital platforms",
          "Contribute to improving the overall design workflow and best practices",
        ],
        skills: [
          "Figma",
          "Prototyping",
          "UI & UX Design",
          "Wireframing",
          "HTML & CSS",
        ],
        whocanapply: [
          "Are available for full time (in-office) internship",
          "Can start the internship between 13th Mar'25 and 17th Apr'25",
          "Are available for duration of 6 months",
          "A portfolio demonstrating your skills in UI/UX design, wireframing, and prototyping in Figma",
          "Familiarity with design tools such as Figma, Sketch, Adobe XD, or other similar tools",
          "Strong communication skills and the ability to articulate design decisions",
          "A keen interest in learning about user-centered design principles",
          "Ability to work independently and as part of a team",
          "Strong attention to detail and problem-solving abilities",
          "A basic understanding of HTML/CSS and front-end development is a plus but not required",
        ],
        applyLink: "https://forms.gle/LWLBTQTDSLBxD5Zc9",
      },
      {
        title: "Site Supervisor",
        subtitle:
          "Imperio Railing Systems is looking for a dedicated Site Supervisor with experience in aluminium fabrication projects. The ideal candidate will be responsible for supervising on-site fabricators and fitters, managing daily tasks, ensuring quality control, and coordinating with the operations team to ensure projects are delivered efficiently and on time.",
        about:
          "Imperio Railing Systems is looking for a dedicated Site Supervisor with experience in aluminium fabrication projects. The ideal candidate will be responsible for supervising on-site fabricators and fitters, managing daily tasks, ensuring quality control, and coordinating with the operations team to ensure projects are delivered efficiently and on time.",
        location: "Mumbai",
        type: "Full-Time",
        others: [
          {
            Duration: "NA",
            Expriance: "3+ Years",
            join: "Immediately",
          },
        ],
        responsibilities: [
          "Daily supervision of aluminium fabricators and fitters on site",
          "Ensure tasks are executed according to blueprints and technical drawings",
          "Coordinate with the project and operations team for material availability and task scheduling",
          "Monitor progress and maintain quality standards during fabrication and installation",
          "Enforce safety protocols and ensure site cleanliness and organization",
          "Provide hands-on support in resolving on-site challenges",
          "Maintain attendance and daily work logs",
          "Communicate with clients and internal teams for project updates",
        ],
        skills: [
          "Aluminium fabrication and railing systems",
          "Read and interpret blueprints and technical drawings",
          "Leadership and team management skills",
          "On-site Safety Protocols",
          "Problem-solving and decision-making",
          "Good communication and reporting",
        ],
        whocanapply: [
          "Minimum 3 years of experience supervising aluminium fabrication or similar site work",
          "Candidates from Charni Road or nearby Mumbai locations preferred",
          "Must be willing to work on-site and manage hands-on tasks",
          "Immediate joiners preferred",
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
