

export type ProductBase = {
  idProduct: number;
  category: string;
  img: string;
  title: string;
  price: number;
  units?: number;
};

export type ProductOnCartProps = ProductBase;

export type ProductCardProps = ProductBase & {
  previousPrice?: number;
  priceInfo?: string;
  shippingInfo?: string;
  onClickAdd?: () => void;
  onClickRemove?: () => void;
};

// TIPING THE TITLE-SECTION
export type TitleSectionProps = {
    title: string;
    link?: string;
};

// TIPING THE SECTION
export type SectionProps = {
    titleSection: React.ReactNode;
    children: React.ReactNode;
};

// TIPING THE SEARCH
export type SearchProps = {
    placeholder?: string;
    imgSearch?: string;
    onSearch: string;
    setOnSearch: React.Dispatch<React.SetStateAction<string>>;
};

// TIPING THE BUTTON-CUSTOM
export type ButtonCustomProps = {
    textButton?: string;
    className?: string;
    hrefButton?: string;
};


// --------------------------------------------------------



export enum FilterType {
    Category = "Category",
    PriceMax = "PriceMax",
    PriceMin = "PriceMin",
    Promotion = "Promotion",
    Reset = "Reset",
};

export const INITIAL_STATE: FilterStateProps = [
    {type:FilterType.Category, name:""},
    {type:FilterType.PriceMax, max:0},
    {type:FilterType.PriceMin, min:0},
    {type:FilterType.Promotion, id:""},
]


export type FilterStateProps = [
  { type: FilterType.Category; name: string;},
  { type: FilterType.PriceMax; max: number;},
  { type: FilterType.PriceMin; min: number;},
  { type: FilterType.Promotion; id: string;},
];

export type actionFilterProps = { type: FilterType; payload: string}
