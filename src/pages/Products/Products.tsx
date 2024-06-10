import { Hero, ProductPanel, QuotePanel } from "../../components";
import { tempHeroImage } from "../../assets/Images";
import { product } from "../../assets/Images";

const products = [
  {
    "Random Code to link the product": "aaa",
    "Product Category": "Base",
    "Product Name": "Imperio ACE (series name).",
    "Product Code": "qwery",
    "Product Finish": "Silver",
    "Glass Thickness": "12mm",
    Features: "Heavy,Fireproof",
    Applications: "Indoor",
    "Short Description":
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, voluptate rem natus qui nostrum nemo doloribus ullam tempora magnam exercitationem dignissimos. Error dignissimos minus vitae excepturi, nam voluptatibus corporis blanditiis repellat aliquid quam totam mollitia neque, quas maiores consequuntur veritatis ratione provident alias dolores fugiat, reiciendis quae impedit. Qui.",
    "Main Image": product,
    "Alternative text": "alt text",
    "Min 3 Extra images":
      "https://media.istockphoto.com/id/1146096609/photo/metal-railings-and-glass-wall.jpg?s=612x612&w=0&k=20&c=eWyuZdJaJtxwK8_tjwFquvXSUMFQI_LLVLeZsbfw9dU= , https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-beautiful-stairs-and-glass-railings-in-a-modern-lobby-image_2976238.jpg , https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/08/Stainless-Steel-Accents.jpg",
    "Alternative text for other image": "alt text,alt text,alt text",
  },
];

for (let i = 1; i < 20; i++) {
  products.push({
    "Random Code to link the product": "aaa",
    "Product Category": "Base",
    "Product Name": "Imperio ACE (series name).",
    "Product Code": "qwery",
    "Product Finish": "Silver",
    "Glass Thickness": "12mm",
    Features: "Heavy,Fireproof",
    Applications: "Indoor",
    "Short Description":
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, voluptate rem natus qui nostrum nemo doloribus ullam tempora magnam exercitationem dignissimos. Error dignissimos minus vitae excepturi, nam voluptatibus corporis blanditiis repellat aliquid quam totam mollitia neque, quas maiores consequuntur veritatis ratione provident alias dolores fugiat, reiciendis quae impedit. Qui.",
    "Main Image": product,
    "Alternative text": "alt text",
    "Min 3 Extra images":
      "https://media.istockphoto.com/id/1146096609/photo/metal-railings-and-glass-wall.jpg?s=612x612&w=0&k=20&c=eWyuZdJaJtxwK8_tjwFquvXSUMFQI_LLVLeZsbfw9dU= , https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-beautiful-stairs-and-glass-railings-in-a-modern-lobby-image_2976238.jpg , https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/08/Stainless-Steel-Accents.jpg",
    "Alternative text for other image": "alt text,alt text,alt text",
  });
}

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
        curve
      />
      <section className="pb-24">
        {productSections.map((section, index) => (
          <ProductPanel
            key={index}
            header={section.header}
            productDetail={section.products}
          />
        ))}
      </section>
      <QuotePanel />
    </main>
  );
};

// import { Hero, ProductPanel, QuotePanel } from "../../components";
// import { tempHeroImage } from "../../assets/Images";
// import { useFetch } from "../../hooks/Fetch";
// import { ProductProps } from "../../types";

// export const Products = () => {
//   const { data, error, loading } = useFetch(
//     "https://sheetdb.io/api/v1/7kytl3y2afe0p"
//   );

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show error state
//   }

//   type prop = { header: string; data: ProductProps[] };

//   const productSections: prop[] = [
//     { header: "Base", data },
//     { header: "Handrail", data },
//     { header: "Endcaps", data },
//   ];
//   console.log(data);
//   return (
//     <main>
//       <Hero
//         img={tempHeroImage}
//         altText="Hero image for product"
//         header="Our Products"
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         curve
//       />
//       <section className="pb-24">
//         {productSections.map((section, index) => (
//           <ProductPanel
//             key={index}
//             header={section.header}
//             productDetail={section.data}
//           />
//         ))}
//       </section>
//       <QuotePanel />
//     </main>
//   );
// };
