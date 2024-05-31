import { Hero, QuoteButton } from "../../components";
import { bgProduct, tempHeroImage } from "../../assets/Images";
import { ProductPanel } from "../../components/ProductPanel/ProductPanel";
import { product } from "../../assets/Images";

const products = [
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
  {
    img: product,
    alt: "product img",
    name: "Product Name",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident vitae autem architecto beatae magni quidem nam perferendis voluptates hic voluptas fugit tenetur labore quae fugiat dolorem, quam fuga veniam vel sint perspiciatis. Omnis, iure.",
    text: "Imperio ACE (A50).",
  },
];

const productSections = [
  { header: "Base", products },
  { header: "Handrail", products },
  { header: "Endcaps", products },
];

export const Product = () => {
  return (
    <main>
      <Hero
        img={tempHeroImage}
        altText="Hero image for product"
        header="Our Products"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        height={67}
        curve
        shadow
      />
      <section className="pb-24">
        {productSections.map((section) => (
          <ProductPanel
            key={section.header}
            header={section.header}
            productDetail={section.products}
          />
        ))}
      </section>
      <section className="relative">
        <div className="relative w-full h-full">
          <img
            src={bgProduct}
            alt="Backdrop for product"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2f0e980] from-75% to-[#03237b3a] flex justify-center items-center">
            <div className="bg-[--black] h-[28.5rem] w-[82rem] text-white rounded-4xl overflow-hidden flex flex-col gap-8 p-16 jus">
              <header className="Raleway text-5xl">
                Get an instant quote.
              </header>
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
    </main>
  );
};
