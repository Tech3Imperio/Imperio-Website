import { tempHeroImage } from "../../assets/Images";
import { Description, Hero, Quote } from "../../components";

export const Contact = () => {
  return (
    <main>
      <title>Contact Us - Imperio Railing</title>
      <Hero
        img={tempHeroImage}
        header="Contact Information."
        altText="hero for aboutus"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="h-screen overflow-hidden mb-16">
        <Description yellowText="Contact Information." mainHeader="Mumbai,IN.">
          <div className="bg-[--black] -mx-9 tablet:-mx-16 laptop:-mx-28 2xl:-mx-44 px-4 phone:px-9 tablet:px-16 laptop:px-28 2xl:px-44 pt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.84352513496705!2d72.81715472488038!3d18.953672262667236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3d2de2bdd7%3A0x6ebf171c718b4540!2sImperio%20Railing%20Systems!5e0!3m2!1sen!2sin!4v1719488265959!5m2!1sen!2sin"
              className="w-full rounded-2xl h-[52.75vh] outline-none"
              allowFullScreen
              loading="lazy"
            />
            <div className="flex flex-col gap-2 text-base w-[17rem] text-white p-5">
              <p>+91 85919 53385</p>
              <p>sale@imperiorailing.com</p>
              <p>
                1, Aman Chambers, New Queens Rd, Charni Road, Mumbai,
                Maharashtra - 400004.
              </p>
            </div>
          </div>
        </Description>
      </section>
      <Quote />
    </main>
  );
};
