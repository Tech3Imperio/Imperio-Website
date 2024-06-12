export type ProductCardProps = {
  img: string;
  alt: string;
  productName: string;
  productDetail: string;
};
export type ProductPanelProps = {
  header: string;
  productDetail: ProductProps[];
};

export type ProductProps = {
  "Random Code to link the product": string;
  "Product Category": string;
  "Product Name": string;
  "Product Code": string;
  "Product Finish": string;
  "Glass Thickness": string;
  "Features (Min 3)": string;
  Applications: string;
  "Short Description": string;
  "Main Image": string;
  "Alternative text": string;
  "Min 3 Extra images": string;
  "Alternative text for other image": string;
};
