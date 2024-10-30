import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import {
  costalImg,
  BuildingImg,
  appartmentImg,
  alibaugImg,
  jamsedhpurImg,
  goaImg,
} from "../../assets/Images";

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
    id: 4,
    title: "Residential Building",
    location: "Jamshedpur",
    description:
      "Located in the bustling city of Jamshedpur, this Residential Building stands out with its advanced glass railing system designed for resilience and style. Transparent glass railings adorn the central atrium, enhancing both natural light and visibility across floors. Built to withstand high foot traffic, these railings provide clear sightlines to communal spaces and gardens, adding a modern, sophisticated touch to the heart of Jamshedpur’s residential landscape.",
    imageUrl: jamsedhpurImg,
    completionDate: "26/10/2024",
  },
  {
    id: 2,
    title: "Mill Rocks Aadarsh Residential Building",
    location: "Goa",
    description:
      "Situated in vibrant Goa, the Mill Rocks Aadarsh Residential Building features a state-of-the-art glass railing system integrated with LED lighting. These railings add a sleek, modern edge to the building, while the embedded LED lights provide a soft, ambient glow at night. Built for durability in Goa's coastal climate, the glass railings create transparent boundaries that highlight the open, contemporary architecture and bring elegance to this high-energy setting.",
    imageUrl: goaImg,
    completionDate: "02/05/2024",
  },
  {
    id: 5,
    title: "Residential Villa Complex",
    location: "Goa",
    description:
      "In the scenic surroundings of Pune, this Residential Villa Complex is equipped with frosted glass railing systems that offer privacy while enhancing the serene ambiance. Each villa features these elegant, durable glass panels, complemented by integrated planter boxes, bringing nature into residents’ outdoor spaces. The frosted finish provides a secluded feel, ideal for relaxation, blending perfectly with Pune’s natural beauty.",
    imageUrl: alibaugImg,
    completionDate: "13/06/2024",
  },
  {
    id: 3,
    title: "Luxury Hotel",
    location: "Solapur",
    description:
      "Overlooking the Bangalore skyline, the luxury hotel's infinity pool is framed by curved, frameless glass railings that ensure an uninterrupted view for guests. These specially engineered glass panels resist water and chemical exposure, maintaining their clarity and strength over time. The seamless, transparent barriers create a floating effect that elevates the pool's appeal, making it a luxurious and unforgettable experience for visitors in Bangalore.",
    imageUrl: BuildingImg,
    completionDate: "10/01/2023",
  },

  {
    id: 6,
    title: "Reside Headquarters",
    location: "Mumbai",
    description:
      "In the heart of Mumbai, this Corporate Headquarters showcases minimalist glass railings that align with the building's clean architectural lines. These railings provide open views across the workspaces, enhancing the modern design while supporting collaborative work culture. Engineered for strength and low maintenance, the glass system reinforces safety without compromising style, making it a perfect fit for Mumbai’s dynamic corporate environment.",
    imageUrl: appartmentImg,
    completionDate: "30/10/2022",
  },
  {
    id: 1,
    title: "Coastal Highrise Apartments",
    location: "Mumbai",
    description:
      "Offering a panoramic view of the Arabian Sea, the Coastal Highrise Apartments in Mumbai are equipped with frameless glass railing systems on all balconies. Designed to resist harsh coastal weather, these railings provide safety while maintaining an open, luxurious feel. The seamless glass boundaries enhance the outdoor experience, allowing residents to fully enjoy the breathtaking coastal scenery that defines Mumbai’s high-rise living.",
    imageUrl: costalImg,
    completionDate: "15/09/2021",
  },
];

export default function Projects() {
  return (
    <>
      <div className="max-w-6xl flex flex-col md:flex-row mx-auto mt-10">
        <div className="flex flex-col w-full md:w-[60%] gap-1 tablet:gap-6 p-4">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Our Glass Railing Projects
          </h2>
          <h3 className="text-[--third] flex flex-wrap max-w-2xl Raleway tracking-wider w-4/5 tablet:w-11/12 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Explore Glass Railing various projects on different sites
          </h3>
        </div>
        <div className="w-full md:w-[40%] p-4">
          <p className="text-justify italic text-[--grey]">
            "Our portfolio of completed glass railing systems projects
            highlights our dedication to quality and style across India. From
            luxury apartments to villa complexes, each installation combines
            aesthetic appeal with resilience, meeting high safety standards in
            diverse settings. Trusted by clients in cities like Mumbai, Pune,
            Hyderabad, and Kolkata, our work reflects enduring craftsmanship and
            innovation in every detail."
          </p>
        </div>
      </div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FiMapPin className="h-4 w-4 mr-1" />
                    {project.location}
                    <span className="mx-2">•</span>
                    <CiCalendar className="h-4 w-4 mr-1" />
                    {project.completionDate}
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
