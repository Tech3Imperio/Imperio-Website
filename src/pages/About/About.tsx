import { aboutImage, aboutImg } from "../../assets/Images";
import { Description, Hero } from "../../components";

export const About = () => {
  return (
    <main>
      <title>About Us - Imperio Railing</title>
      <Hero
        img={aboutImg}
        header="About us"
        altText="hero for aboutus"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="h-screen overflow-hidden">
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
      {/* <section>
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
			</section> */}
    </main>
  );
};
