import {
	aboutImage,
	ishan,
	shreyansh,
	tempHeroImage,
	temp,
} from "../../assets/Images";
import { Description, Hero } from "../../components";

const impPeople = [
	{ name: "Mr. Ishan Jain", position: "CEO", image: ishan },
	{
		name: "Mr. Shreyansh Jain",
		position: "System Designer",
		image: shreyansh,
	},
];

const employees = [
	{ id: 0, name: "Mr. Example", position: "Example", image: temp },
	{ id: 1, name: "Mr. Example", position: "Example", image: temp },
	{ id: 2, name: "Mr. Example", position: "Example", image: temp },
	{ id: 3, name: "Mr. Example", position: "Example", image: temp },
	{ id: 4, name: "Mr. Example", position: "Example", image: temp },
	{ id: 5, name: "Mr. Example", position: "Example", image: temp },
	{ id: 6, name: "Mr. Example", position: "Example", image: temp },
	{ id: 7, name: "Mr. Example", position: "Example", image: temp },
	{ id: 8, name: "Mr. Example", position: "Example", image: temp },
	{ id: 9, name: "Mr. Example", position: "Example", image: temp },
	{ id: 10, name: "Mr. Example", position: "Example", image: temp },
];

export const About = () => {
	return (
		<main>
			<Hero
				img={tempHeroImage}
				header="About us."
				altText="hero for aboutus"
				subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
				curve
			/>
			<section className="h-screen overflow-hidden mb-16">
				<Description
					yellowText="Our Company."
					mainHeader="Crafting Excellence in Glass Railings."
					text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
				/>
				<img
					src={aboutImage}
					alt="about us image"
					className="h-full w-screen"
				/>
			</section>
			<section>
				<Description yellowText="Our Team" />
				<div className="bg-[--black]">
					<div className="p-44 px-8 text-white text-base ">
						<div className="flex justify-center gap-8 phone:gap-16">
							{impPeople.map((data, index) => (
								<div
									key={index}
									className="flex flex-col-reverse gap-4 justify-center items-center"
								>
									<h6>{data.position}</h6>
									<h5>{data.name}</h5>
									<img
										src={data.image}
										alt={`Image of ${data.name}`}
										className="rounded-full"
									/>
								</div>
							))}
						</div>
						<div className="flex flex-wrap justify-center mx-0 laptop:mx-28 xl:mx-64 2xl:px-12 gap-16 2xl:gap-20 py-[4.5rem] ">
							{employees.map((employee) => (
								<div
									key={employee.id}
									className="flex flex-col-reverse gap-4 justify-center items-center"
								>
									<h6>{employee.position}</h6>
									<h5>{employee.name}</h5>
									<img
										src={employee.image}
										alt={`Image of ${employee.name}`}
										className="rounded-full w-28  phone:w-36 phone:h-36 laptop:w-48 laptop:h-48"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
// import {
//   tempHeroImage,
//   aboutImage,
//   img,
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
// } from "../../assets/Images";
// import { Hero, Description } from "../../components";

// export function About() {
//   interface TeamMember {
//     name: string;
//     designation: string;
//     image: string;
//   }

//   const getTeam = (): TeamMember[] => {
//     return [
//       {
//         name: "Mr. Mishra",
//         designation: "Founder",
//         image: img,
//       },
//       {
//         name: "Mr. Mishra",
//         designation: "Co-Founder",
//         image: img1,
//       },
//       {
//         name: "Mr. Mishra",
//         designation: "Executive",
//         image: img2,
//       },
//       {
//         name: "Mr. Mishra",
//         designation: "Executive",
//         image: img3,
//       },
//       {
//         name: "Mr. Mishra",
//         designation: "Executive",
//         image: img4,
//       },
//       {
//         name: "Mr. Mishra",
//         designation: "Executive",
//         image: img5,
//       },
//     ];
//   };

//   const team = getTeam();

//   const keyMembers = team.filter(
//     (member) =>
//       member.designation === "Founder" || member.designation === "Co-Founder"
//   );

//   const executives = team.filter(
//     (member) => member.designation === "Executive"
//   );

//   const chunkArray = (arr: TeamMember[], size: number): TeamMember[][] => {
//     const result: TeamMember[][] = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   };

//   const executiveChunks = chunkArray(executives, 4);

//   return (
//     <main>
//       <section>
//         <Hero
//           img={tempHeroImage}
//           altText="hero for blog"
//           header="About us."
//           subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//           curve
//         />
//         <Description
//           yellowText="Our Company."
//           mainHeader="Crafting Excellence in Glass Railings."
//           text={
//             <>
//               At Imperio, we specialize in creating beautiful, durable glass
//               railing systems that enhance any space. With a focus on innovation
//               and quality, our team is dedicated to delivering top-notch
//               solutions for both residential and commercial projects.
//             </>
//           }
//         />
//         <img className="w-full" src={aboutImage} alt="aboutmain image" />
//         <div>
//           <Description yellowText="Our Team." />
//         </div>
//         <div className="bg-black h-screen w-full  flex justify-center items-center flex-col">
//           <div className="flex gap-20 -mt-[5rem] ">
//             {keyMembers.map((member, index) => (
//               <div key={index} className="text-center">
//                 <img
//                   src={member.image}
//                   alt={`${member.name} image`}
//                   className="rounded-full w-[10rem] h-[10rem]"
//                 />
//                 <h3 className="text-white">{member.name}</h3>
//                 <p className="text-white">{member.designation}</p>
//               </div>
//             ))}
//           </div>

//           {executiveChunks.map((chunk, index) => (
//             <div key={index} className="flex gap-20 mt-10">
//               {chunk.map((member, idx) => (
//                 <div key={idx} className="text-center">
//                   <img
//                     src={member.image}
//                     alt={`${member.name} image`}
//                     className="rounded-full w-[10rem] h-[10rem]"
//                   />
//                   <h3 className="text-white">{member.name}</h3>
//                   <p className="text-white">{member.designation}</p>
//                 </div>
//               ))}
//             </div>
//           ))}

//           {executiveChunks.map((chunk, index) => (
//             <div key={index} className="flex gap-20 mt-10">
//               {chunk.map((member, idx) => (
//                 <div key={idx} className="text-center">
//                   <img
//                     src={member.image}
//                     alt={`${member.name} image`}
//                     className="rounded-full w-[10rem] h-[10rem]"
//                   />
//                   <h3 className="text-white">{member.name}</h3>
//                   <p className="text-white">{member.designation}</p>
//                 </div>
//               ))}
//             </div>
//           ))}

//           {executiveChunks.map((chunk, index) => (
//             <div key={index} className="flex gap-20 mt-10">
//               {chunk.map((member, idx) => (
//                 <div key={idx} className="text-center">
//                   <img
//                     src={member.image}
//                     alt={`${member.name} image`}
//                     className="rounded-full w-[10rem] h-[10rem]"
//                   />
//                   <h3 className="text-white">{member.name}</h3>
//                   <p className="text-white">{member.designation}</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
