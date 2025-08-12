
import { Link } from "react-router";
import type { ProductCardProps, TitleSectionProps, SectionProps, ButtonCustomProps, SearchProps} from "../typing/Typing";



// ------------------------------------------------------ COMPONENTS

// COMPONENT PRODUCT-CARD
export function ProductCard(props: ProductCardProps) {
    const {idProduct, img, category, title, previousPrice, price, priceInfo, shippingInfo, onClickAdd, onClickRemove, units, by} = props

    return (
        <div className="max-w-[9.2rem] grid pb-5 ml-2 mr-2 border-b-1 border-neutral-300">
            <Link to={`/producto/${idProduct}`}>
                <img className="h-[9rem] w-fit p-2" src={img} alt={title} />
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
            </Link>
            <div className="pt-1 pb-1 pr-2 mt-3 mr-5 h-fit self-end flex justify-between gap-2">
                <span className="text-gray-500 text-[0.6rem]">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <button className="flex-1 text-sm font-medium bg-blue-100 hover:bg-blue-200 rounded-md text-cyan-700 cursor-pointer" onClick={onClickAdd}>+</button>
                {units
                ?<p className="flex-1 text-center">{units}</p>
                :<></>}
                {units
                ? <button className="flex-1 text-sm font-medium bg-red-100 hover:bg-red-200 rounded-md text-red-700 cursor-pointer" onClick={onClickRemove}>-</button>
                : <button className="flex-1 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 cursor-not-allowed pointer-events-nones" >-</button>}
            </div>
            {by ? <p className="text-blue-700 text-left text-xs font-semibold font-sans mt-5 flex justify-center">{by}</p> : <></>}
        </div>
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

// COMPONENT SECTION (Using CHILDREN)
export function Section(props: SectionProps) {
    const { titleSection, children } = props
    return (
        <div className="max-w-[71.25rem] bg-white mb-21 p-4 rounded-lg shadow-gray-300 shadow-lg ">
            <>{titleSection}</>
            <div className="grid grid-cols-5 gap-2">
                {children}
            </div>
        </div>
    );
};

// COMPONENT SEARCH
export function Search(props: SearchProps){
    const { placeholder, imgSearch, onSearch, setOnSearch} = props

    const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnSearch(e.target.value);
    };

    return(
        <div className="h-[2.5rem] w-[36.75rem] flex items-center bg-white shadow-gray-400 shadow-sm">
            <input 
                value={onSearch}
                onChange={searching}
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
        hrefButton
        ? <Link className={className} to={hrefButton}>{textButton}</Link>
        : <div className={className}>{textButton}</div>
    );
};





