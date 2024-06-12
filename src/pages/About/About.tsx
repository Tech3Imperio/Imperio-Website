import {
  tempHeroImage,
  aboutImage,
  img,
  img1,
  img2,
  img3,
  img4,
  img5,
} from "../../assets/Images";
import { Hero, Description } from "../../components";

export function About() {
  interface TeamMember {
    name: string;
    designation: string;
    image: string;
  }

  const getTeam = (): TeamMember[] => {
    return [
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img,
      },
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img1,
      },
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img2,
      },
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img3,
      },
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img4,
      },
      {
        name: "Mr. Mishra",
        designation: "Founder",
        image: img5,
      },
    ];
  };

  const team = getTeam();

  return (
    <main>
      {/* <section>
        <Hero
          img={tempHeroImage}
          altText="hero for blog"
          header="About us."
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        <Description
          yellowText="Our Company."
          mainHeader="Crafting Excellence in Glass Railings."
          text={
            <>
              At Imperio, we specialize in creating beautiful, durable glass
              railing systems that enhance any space. With a focus on innovation
              and quality, our team is dedicated to delivering top-notch
              solutions for both residential and commercial projects.
            </>
          }
        />
        <img className="w-full" src={aboutImage} alt="aboutmain image" />
        <div>
          <Description yellowText="Our Team." />
        </div>
        <div className="bg-black h-[55rem] w-full -mt-16 flex flex-1 flex-wrap">
          {team.map((member, index) => (
            <div key={index} className="text-white p-4 w-1/2 sm:w-1/3 lg:w-1/4">
              <img
                src={member.image}
                alt={`${member.name} photo`}
                className="w-[10rem] h-[10rem] rounded-full mb-4 "
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm">{member.designation}</p>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
