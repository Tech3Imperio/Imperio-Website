import { Hero, ProductPanel, QuotePanel } from "../../components";
import { tempHeroImage } from "../../assets/Images";
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

export const Products = () => {
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
      <QuotePanel />
    </main>
  );
};
