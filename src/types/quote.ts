// export type Stage = "Base" | "Handrail" | "Glass" | "Height";

// export type QuoteData = Record<Stage, string>;

// export type StagesContains = Record<Stage, string[]>;

// export type FetchInnerData = {
//   Base?: string;
//   Handrail?: string;
//   Glass?: string;
//   Height?: string;
//   Champagne: string;
//   Sillack: string;
//   Cver: string;
//   Wood: string;
// };

// export type FetchData = Record<Stage, FetchInnerData[]>;

// export type QuoteFormData = {
//   name: string;
//   email: string;
//   number: number | string;
//   pname: string;
//   quantity: number | string;
// };

// export type QuoteFormFunction = React.Dispatch<
//   React.SetStateAction<QuoteFormData>
// >;

// export type QuoteFormProps = {
//   data: [QuoteFormData, QuoteFormFunction];
//   setContact: React.Dispatch<React.SetStateAction<boolean>>;
//   submit: (e: React.FormEvent<HTMLFormElement>) => void;
// };

// export type StageNavigationProps = {
//   stage: number;
//   handleStage: (index: number) => void;
// };

// export type QuoteSelectorProps = {
//   stagesprops: [Stage[], number, React.Dispatch<React.SetStateAction<number>>];
//   dataprops: [QuoteData, (text: string) => void];
//   colorsprops: [number[], (colorValue: number) => void];
//   setContact: React.Dispatch<React.SetStateAction<boolean>>;
// };

export type Stage = "Base" | "Handrail" | "Glass" | "Height";

export type QuoteData = Record<Stage, string>;

export type StagesContains = Record<Stage, string[]>;

export type FetchInnerData = {
  Base?: string;
  Handrail?: string;
  Glass?: string;
  Height?: string;
  Champagne: string;
  Silver: string;
  Black: string;
  Wood: string;
  [key: string]: string | undefined; // Add this line
};

export type FetchData = Record<Stage, FetchInnerData[]>;

export type QuoteFormData = {
  name: string;
  email: string;
  number: number | string;
  // pname: string;
  pinCode: number | string;
  city: string;
  state: string;
  location: string;
  quantity: number | string;
};

export type QuoteFormFunction = React.Dispatch<
  React.SetStateAction<QuoteFormData>
>;

export type QuoteFormProps = {
  data: [QuoteFormData, QuoteFormFunction];
  setContact: React.Dispatch<React.SetStateAction<boolean>>;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type StageNavigationProps = {
  stage: number;
  handleStage: (index: number) => void;
};

export type QuoteSelectorProps = {
  stagesprops: [Stage[], number, React.Dispatch<React.SetStateAction<number>>];
  dataprops: [QuoteData, (text: string) => void];
  colorsprops: [number[], (colorValue: number) => void];
  setContact: React.Dispatch<React.SetStateAction<boolean>>;
};
