import { whiteLogo } from "../../assets/Images";
function Logocomponent() {
  return (
    <>
      <img
        src={whiteLogo}
        className="max-w-28 transition ease-out duration-500 hover:translate-y-1 hover:scale-125"
        alt="Imperio Logo"
        title="Imperio Logo"
        loading="lazy"
      />
    </>
  );
}

export default Logocomponent;
