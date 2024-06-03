import { QuoteButton } from "../../components";
import { bgProduct } from "../../assets/Images";

export const QuotePanel = () => {
  return (
    <section className="relative">
      <div className="relative w-full h-full">
        <img
          src={bgProduct}
          alt="Backdrop for product"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2f0e980] from-75% to-[#03237b3a] flex justify-center items-center">
          <div className="bg-[--black] h-[28.5rem] w-[82rem] text-white rounded-4xl overflow-hidden flex flex-col gap-8 p-16 jus">
            <header className="Raleway text-5xl">Get an instant quote.</header>
            <div className="text-base pb-8 w-[43rem]">
              Choose your desired glass railing system and get an immediate
              quote straight to your WhatsApp. Quick, easy, and convenient.
            </div>
            <div>
              <QuoteButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
