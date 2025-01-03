import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  woodenrailingBefor,
  woodenrailingAfter,
  balconyAfter,
  newStaircaseAfter,
} from "../../assets/Images";

interface Project {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    beforeImage: woodenrailingBefor,
    afterImage: woodenrailingAfter,
  },
  {
    id: 2,
    title: "Sleek Office Redesign",
    beforeImage:
      "https://5.imimg.com/data5/SELLER/Default/2024/1/378570545/PJ/FS/IQ/7894955/ss-glass-railing-500x500.jpg",
    afterImage: balconyAfter,
  },
  {
    id: 3,
    title: "Cozy Living Room Makeover",
    beforeImage:
      "https://images.squarespace-cdn.com/content/v1/59599d0486e6c0de9556d396/1620176992764-DTHA3YU7P45LGXDI26UE/Lauren+Koster+Creative+-+Modern+Staircase+Update",
    afterImage: newStaircaseAfter,
  },
];

const ProjectSlider: React.FC = () => {
  const [page, setPage] = useState(0);

  const paginate = (newDirection: number) => {
    setPage((prevPage) => {
      const nextPage =
        (prevPage + newDirection + projects.length) % projects.length;
      return nextPage;
    });
  };

  const currentProject = projects[page];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {currentProject.title}
      </h2>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-1/2 relative">
            <img
              src={currentProject.beforeImage}
              alt={`${currentProject.title} Before`}
              height={900}
              width={900}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
              Before
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src={currentProject.afterImage}
              alt={`${currentProject.title} After`}
              height={900}
              width={900}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-2 right-2  bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">
              After
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={() => paginate(-1)}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={() => paginate(1)}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
          >
            <FiChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === page ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
