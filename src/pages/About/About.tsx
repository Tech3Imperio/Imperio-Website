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
        designation: "Co-Founder",
        image: img1,
      },
      {
        name: "Mr. Mishra",
        designation: "Executive",
        image: img2,
      },
      {
        name: "Mr. Mishra",
        designation: "Executive",
        image: img3,
      },
      {
        name: "Mr. Mishra",
        designation: "Executive",
        image: img4,
      },
      {
        name: "Mr. Mishra",
        designation: "Executive",
        image: img5,
      },
    ];
  };

  const team = getTeam();

  const keyMembers = team.filter(
    (member) =>
      member.designation === "Founder" || member.designation === "Co-Founder"
  );

  const executives = team.filter(
    (member) => member.designation === "Executive"
  );

  const chunkArray = (arr: TeamMember[], size: number): TeamMember[][] => {
    const result: TeamMember[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const executiveChunks = chunkArray(executives, 4);

  return (
    <main>
      <section>
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
        <div className="bg-black h-screen w-full  flex justify-center items-center flex-col">
          <div className="flex gap-20 -mt-[5rem] ">
            {keyMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name} image`}
                  className="rounded-full w-[10rem] h-[10rem]"
                />
                <h3 className="text-white">{member.name}</h3>
                <p className="text-white">{member.designation}</p>
              </div>
            ))}
          </div>

          {executiveChunks.map((chunk, index) => (
            <div key={index} className="flex gap-20 mt-10">
              {chunk.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.image}
                    alt={`${member.name} image`}
                    className="rounded-full w-[10rem] h-[10rem]"
                  />
                  <h3 className="text-white">{member.name}</h3>
                  <p className="text-white">{member.designation}</p>
                </div>
              ))}
            </div>
          ))}

          {executiveChunks.map((chunk, index) => (
            <div key={index} className="flex gap-20 mt-10">
              {chunk.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.image}
                    alt={`${member.name} image`}
                    className="rounded-full w-[10rem] h-[10rem]"
                  />
                  <h3 className="text-white">{member.name}</h3>
                  <p className="text-white">{member.designation}</p>
                </div>
              ))}
            </div>
          ))}

          {executiveChunks.map((chunk, index) => (
            <div key={index} className="flex gap-20 mt-10">
              {chunk.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.image}
                    alt={`${member.name} image`}
                    className="rounded-full w-[10rem] h-[10rem]"
                  />
                  <h3 className="text-white">{member.name}</h3>
                  <p className="text-white">{member.designation}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
