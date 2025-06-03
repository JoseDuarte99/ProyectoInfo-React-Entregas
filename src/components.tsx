
// TIPING THE PRODUCT-CARD
type ProductCardProps = {
    img: string;
    title: string;
    previousPrice?: number;
    price: number;
    priceInfo?: string;
    shippingInfo?: string;
};

// TIPING THE TITLE-SECTION
type TitleSectionProps = {
    title: string;
    link?: string;
};

// TIPING THE SECTION
type SectionProps = {
    titleSection: React.ReactNode;
    children: React.ReactNode;
};

// TIPING THE SEARCH
type SearchProps = {
    placeholder?: string;
    imgSearch?: string;
};

// TIPING THE BUTTON-CUSTOM
type ButtonCustomProps = {
    textButton?: string;
    className?: string;
    hrefButton: string;
};

// ------------------------------------------------------ COMPONENTS

// COMPONENT PRODUCT-CARD
export function ProductCard(props: ProductCardProps) {
    const { img, title,previousPrice, price, priceInfo, shippingInfo } = props
    
    return (
        <>
        <a className="max-w-[9.2rem]" href="#">
        <img className="h-[8rem] w-[10rem] p-2" src={img} alt={title} />
        <h3 className="text-neutral-700 text-left text-medium mb-4 pr-2 pt-5 font-sans">
        {title}
        </h3>
        <p className="text-neutral-500 text-left text-xs line-through font-sans">
        {previousPrice !== undefined ? `$${previousPrice}` : ""}
        </p>
        <h4 className="text-black text-left text-2xl font-medium font-sans">
        ${price.toLocaleString('es-AR')}
        </h4>
        <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2 font-sans">
        {priceInfo}
        </p>
        <p className="text-green-700 text-left text-xs font-bold font-sans ">
        {shippingInfo}
        </p>
        </a>
        </>
    );
};

// COMPONENT TITLE-SECTION
export function TitleSection(props: TitleSectionProps) {
    const {title, link} = props
    
    return (
        <div className="pl-2">
        <h2  className="text-black text-left text-2xl font-sans pt-1 pb-6">
        {title}<a href="#" className="text-blue-500 text-left text-sm pl-2">{link}</a>
        </h2>
        </div>
    );
};

// COMPONENT SECTION (Utilizando CHILDREN)
export function Section(props: SectionProps) {
    const { titleSection, children } = props
    return (
        <div className="max-w-[71.25rem] bg-white mt-10.5 mb-10.5 p-4 rounded-lg shadow-gray-300 shadow-lg ">
            <>{titleSection}</>
            <div className="flex gap-2">
                {children}
            </div>
        </div>
    );
};

// COMPONENT SEARCH
export function Search(props: SearchProps){
    const { placeholder, imgSearch } = props
    return(
        <div className="h-[2.5rem] w-[36.75rem] flex items-center bg-white shadow-gray-400 shadow-sm">
            <input 
                className="text-sm w-full text-gray-700 placeholder-gray-700 tracking-wide pl-4 outline-none " 
                type="search" 
                placeholder={ placeholder }
            />
            <button type="submit" className="cursor-pointer !bg-white rounded-none p-0">
                <img className="h-[1.5rem] mt-2 mb-2 pl-3 pr-4 pb-1 border-l-1 border-l-gray-300" src={imgSearch} alt="Lupa" />
            </button>
        </div>
    );
}

// COMPONENT BUTTON-CUSTOM
export function ButtonCustom(props: ButtonCustomProps){
    const { textButton, className, hrefButton } = props
    return(
        <a className={className} href={hrefButton}>
            {textButton}
        </a>
    );
};





