import { heroImage } from "../../assets/images";
export const Home = () => {
  return (
    <main>
      <section className="container h-[91vh] w-full relative">
        <div className="absolute left-0 top-[-25px] w-[209vh] h-[94vh] z-[-5]">
          <img
            src={heroImage}
            alt="hero from home"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute left-0 top-[-25px] w-[209vh] h-[94vh] flex justify-center flex-col text-white pl-24 space-y-4">
          <header className="text-7xl space-y-4">
            <h2 className="">Unmatched Clarity,</h2>
            <h2 className="">Ultimate Style.</h2>
          </header>
          <div>
            Discover the perfect blend of safety and sophistication with
            Imperio's glass railing systems.
          </div>
          <button className="w-max bg-gray-500 bg-opacity-60 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100 transition-all duration-500 ease-in-out  py-2 px-6 border-2 rounded-[30px]">
            KNOW MORE
          </button>
        </div>
      </section>
    </main>
  );
};
