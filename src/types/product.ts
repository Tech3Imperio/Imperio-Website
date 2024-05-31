export type ProductCardProps = {
  img: string;
  alt: string;
  productName: string;
  productDetail: string;
  text: string;
};
export type ProductPanelProps = {
  header: string;
  productDetail: Product[];
};

type Product = {
  img: string;
  alt: string;
  name: string;
  detail: string;
  text: string;
};
