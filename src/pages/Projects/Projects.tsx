import { FiMapPin } from "react-icons/fi";

import {
  costalImg,
  BuildingImg,
  appartmentImg,
  alibaugImg,
  jamsedhpurImg,
  goaImg,
} from "../../assets/Images";
import Metadata from "../../components/Metatag/Metatag";
import { Hero } from "../../components";
import { useMemo } from "react";

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  completionDate: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Terrace Glass Railing",
    location: "Mumbai",
    description:
      "Offering a panoramic view of the Arabian Sea, the Terrace Glass Railing in Mumbai are equipped with frameless glass railing systems on all balconies. Designed to resist harsh coastal weather, these railings provide safety while maintaining an open, luxurious feel. The seamless glass boundaries enhance the outdoor experience, allowing residents to fully enjoy the breathtaking coastal scenery that defines Mumbai’s high-rise living. Premium glass railing systems like aluminum glass railings and toughened laminated glass are used to ensure maximum safety and visual appeal.",
    imageUrl: costalImg,
    completionDate: "15/09/2021",
  },
  {
    id: 2,
    title: "Luxury Apartments",
    location: "Goa",
    description:
      "Situated in vibrant Goa, the luxury Apartments features a state-of-the-art glass railing system integrated with LED lighting. These railings add a sleek, modern edge to the building, while the embedded LED lights provide a soft, ambient glow at night. Built for durability in Goa's coastal climate, the glass railings create transparent boundaries that highlight the open, contemporary architecture and bring elegance to this high-energy setting. The project uses premium glass solutions, including commercial glass railings and stylish balcony railings that complement modern glass handrails.",
    imageUrl: goaImg,
    completionDate: "02/05/2024",
  },
  {
    id: 3,
    title: "Luxury Hotel",
    location: "Solapur",
    description:
      "Overlooking the Bangalore skyline, the luxury hotel's infinity pool is framed by curved, frameless glass railings that ensure an uninterrupted view for guests. These specially engineered glass panels resist water and chemical exposure, maintaining their clarity and strength over time. The seamless, transparent barriers create a floating effect that elevates the pool's appeal, making it a luxurious and unforgettable experience for visitors in Bangalore. The glass railing systems include high-quality SGP toughened laminated glass for both durability and aesthetic excellence.",
    imageUrl: BuildingImg,
    completionDate: "10/01/2023",
  },
  {
    id: 4,
    title: "Residential Building",
    location: "Jamshedpur",
    description:
      "Located in the bustling city of Jamshedpur, this Residential Building stands out with its advanced glass railing system designed for resilience and style. Transparent glass railings adorn the central atrium, enhancing both natural light and visibility across floors. Built to withstand high foot traffic, these railings provide clear sightlines to communal spaces and gardens, adding a modern, sophisticated touch to the heart of Jamshedpur’s residential landscape. Featuring premium glass railing systems like PVB and SGP toughened laminated glass, this building represents the future of modern balcony glass railing design.",
    imageUrl: jamsedhpurImg,
    completionDate: "26/10/2024",
  },
  {
    id: 5,
    title: "Villa Complexes",
    location: "Goa",
    description:
      "In the scenic surroundings of Pune, this villa complexes is equipped with frosted glass railing systems that offer privacy while enhancing the serene ambiance. Each villa features these elegant, durable glass panels, complemented by integrated planter boxes, bringing nature into residents’ outdoor spaces. The frosted finish provides a secluded feel, ideal for relaxation, blending perfectly with Pune’s natural beauty. This complex features premium toughened glass railings, offering stylish and secure balcony glass railing designs.",
    imageUrl: alibaugImg,
    completionDate: "13/06/2024",
  },
  {
    id: 6,
    title: "Private Residence",
    location: "Mumbai",
    description:
      "In the heart of Mumbai, this Private Residence showcases minimalist glass railing that align with the building clean architectural lines. These railings provide open views across the workspaces, enhancing the modern design while supporting collaborative work culture. Engineered for strength and low maintenance, the glass system reinforces safety without compromising style, making it a perfect fit for Mumbai’s dynamic corporate environment. Featuring advanced glass railing solutions like PVB glass and modern glass handrails, this project exemplifies the future of office building design.",
    imageUrl: appartmentImg,
    completionDate: "30/10/2022",
  },
];

export default function Projects() {
  const memoizedProjects = useMemo(() => projects, []); // Memoizing the static data

  return (
    <>
      <Metadata
        title="Projects: Modern Balcony and Staircase Glass Railing | Top-quality Glass Railing Designs in Mumbai, Maharashtra, India"
        description="Discover premium glass railing solutions, including modern balcony glass railing, staircase glass railing, and custom designs. We offer the best glass railing systems in Mumbai, Maharashtra, using toughened laminated glass, PVB, and SGP for superior quality. Get the best prices and installation services across India. Our high-quality products ensure safety and aesthetic products."
        keywords="Modern Balcony Glass Railing, Staircase Glass Railing, Balcony Glass Railing Designs Ideas, Best Glass Railing in Mumbai Maharashtra India, Glass Railing Cost, Premium Glass Design, PVB Glass, SGP Toughened Laminated Glass, Glass Railing Systems, Glass Railing Installation Mumbai, Balcony Glass Railing Design, Modern Glass Railing Systems India, Premium Toughened Glass, Aluminum Glass Railings Mumbai, Stylish Balcony Railings India, Commercial Glass Railings, Residential Glass Railings, Railing Installation Mumbai, Modern Glass Handrails, Glass Railing Solutions, Railing Dealership provider in Mumbai"
        ogImage={appartmentImg}
        ogUrl="https://www.imperiorailing.com/projects"
      />

      <Hero
        img={appartmentImg}
        altText="hero for blog"
        header="Glass Railing Projects"
        subHeader="Premium Glass Railing Solutions for Balcony and Staircase Glass Railing in Mumbai, India – Elegant, Safe & Durable Designs. Top-Quality SGP and PVB Laminated Toughened Glass, Premium Modern Glass Railing Designs."
        curve
      />
      <div className="max-w-6xl flex flex-col md:flex-row mx-auto mt-10">
        <div className="flex flex-col w-full md:w-[60%] gap-1 tablet:gap-6 p-4">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Our Glass Railing Projects
          </h2>
          <h3 className="text-[--third] flex flex-wrap max-w-2xl Raleway tracking-wider w-4/5 tablet:w-11/12 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Explore various glass railing projects featuring modern glass
            railing designs
          </h3>
        </div>
        <div className="w-full md:w-[40%] p-4">
          <p className="text-justify italic text-[--grey]">
            Our portfolio of completed{" "}
            <strong>glass railing systems projects</strong> highlights our
            dedication to quality and style across India. From luxury apartments
            and villa complexes in <strong>Mumbai</strong>,{" "}
            <strong>Pune</strong>, <strong>Hyderabad</strong>, and{" "}
            <strong>Kolkata</strong> to elegant commercial spaces, each
            installation combines aesthetic appeal with resilience, meeting high
            safety standards in diverse settings. Trusted by clients in major
            cities like <strong>Mumbai</strong> and beyond, our work reflects
            enduring craftsmanship, innovation, and expertise in delivering{" "}
            <strong>modern glass railings</strong>. Whether it's for a stylish{" "}
            <strong>balcony glass railing</strong>, a secure{" "}
            <strong>staircase glass railing</strong>, or{" "}
            <strong>custom glass railing systems</strong>, our projects deliver{" "}
            <strong>premium quality</strong> and customer satisfaction. We offer
            the best <strong>balcony glass railing designs ideas</strong> and
            use <strong>PVB and SGP toughened laminated glass</strong> for
            long-lasting durability. With competitive{" "}
            <strong>glass railing prices</strong>, we are the top choice for{" "}
            <strong>premium glass design</strong> in{" "}
            <strong>Mumbai, Maharashtra, India</strong>.
          </p>
        </div>
      </div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {memoizedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                  loading="lazy" // Lazy load images
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FiMapPin className="h-4 w-4 mr-1" />
                    {project.location}
                    {/* <span className="mx-2">•</span> */}
                    {/* <CiCalendar className="h-4 w-4 mr-1" /> */}
                    {/* {project.completionDate} */}
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
