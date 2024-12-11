// import { useEffect, useState } from "react";
// import { CiFilter } from "react-icons/ci";
// import { IoSearchOutline } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// import { SlArrowDown } from "react-icons/sl";
// import { BsHandbag } from "react-icons/bs";

// export default function DealerProductsPage() {

//   const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
//   const [openSections, setOpenSections] = useState<string[]>([]);

//   const filterCategories = [
//     {
//       name: "Applications",
//       options: [
//         "Balcony Railing",
//         "Staircase Railing",
//         "Terrace Railing",
//         "Fixed Glass Railing",
//       ],
//     },
//     {
//       name: "Mounting Type",
//       options: [
//         "Top Mounted",
//         "In Floor Mounted",
//         "Side Mounted",
//         "Heavy Duty",
//       ],
//     },
//     {
//       name: "Glass Thick",
//       options: ["12mm", "13.52mm", "16mm", "17.52mm", "20mm", "21.52mm"],
//     },
//     {
//       name: "Glass Height",
//       options: ["Upto 900mm", "Upto 1050mm", "Upto 1200mm", "Upto 1500mm"],
//     },
//     {
//       name: "Handrail Type",
//       options: ["With LED", "Without LED"],
//     },
//     {
//       name: "Handrail Shape",
//       options: [
//         "Oval Shape",
//         "Round Shape",
//         "Square Shape",
//         "Rectangel Shape",
//         "Sleek Shape",
//       ],
//     },
//   ];

//   const toggleSection = (section: string) => {
//     setOpenSections((prevOpenSections) =>
//       prevOpenSections.includes(section)
//         ? prevOpenSections.filter((s) => s !== section)
//         : [...prevOpenSections, section]
//     );
//   };

//   const handleTypeChange = (type: string) => {
//     setSelectedTypes((prevSelectedTypes) =>
//       prevSelectedTypes.includes(type)
//         ? prevSelectedTypes.filter((t) => t !== type)
//         : [...prevSelectedTypes, type]
//     );
//   };

//   return (
//     <>
//       <main className="w-full">

//       </main>

//     </>
//   );
// }
