import { ButtonCustom, Search } from "../components/components";
import products from "../products";

import { CartIcon} from "../imageSvg";
import imgIcon from "../assets/LogoMeLi.svg";
import imgShippingFree from "../assets/EnvioGratis.webp";
import imgSearch from "../assets/lupa.svg";
import imglocation from "../assets/location.svg";
import { FilterType } from "../typing/Typing";

import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import SearchContext from "../contexts/SearchContext";
import FilterContext from "../contexts/FilterContext";
import StatusFilterContext from "../contexts/StatusFilterContext";
import { Link, useNavigate } from "react-router";


// COMPONENT NAVBAR FOR MERCADO LIBRE
export function Navbar() {
    
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }

    const search = useContext(SearchContext);
    if (!search){
        throw new Error('useCart must be used within a CartProvider');
    }
    const {onSearch, setOnSearch} = search;

    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){
        throw new Error('ERROR EN LOS FILTROS');
    }
    const {addFilterProducts, resetFilterProducts} = filtersProduct;
    
    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){
        throw new Error('ERROR EN EL ESTADO DEL FILTRO');
    }
    const { setFilteringState } = statusFiltersProduct;
    
    
    // Function for normalize string
    const normalizeString = (text: string): string => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // Function for see result searches
    const resultSearch = onSearch
    ? products.filter(product => normalizeString(product.title).includes(normalizeString(onSearch)))
    : undefined;

    const quantityProductCart = new Set(productCart.contextState.map(p => p.idProduct));
    
    const navigate = useNavigate();

    return(
        <header id="header" className="bg-yellow-300 flex justify-center w-screen">
        <div className="grid grid-cols-[1fr_3fr_2fr] gap-5 gap-y-2 max-w-[1200px] max-h-[100px] pl-2.5 pr-2.5 pt-2 pb-3">
        <Link to="/" onClick={() => {setFilteringState(false); resetFilterProducts(FilterType.Reset, "")}} className="flex justify-star w-[10.2rem]"><img  className="h-[2.5rem]" src={imgIcon} alt="Logo de Mercado Libre" /></Link>        
        <div className="relative" >
        <Search onSearch={onSearch} setOnSearch={setOnSearch} placeholder="Buscar products, marcas y más…" imgSearch= {imgSearch}/>
        {resultSearch 
            ? <div className="absolute pt-2 pb-2 z-[9999] h-fit w-[36.75rem] grid items-center bg-white shadow-gray-400 shadow-sm">
            {resultSearch.map(product => {
                return (                
                    <div key={product.idProduct} className="flex cursor-pointer hover:bg-blue-500 hover:text-white h-[2.2rem]">
                    <img className="h-[1.5rem] mt-2 mb-2 pl-3 pr-3 border-l-1 border-l-gray-300" src={imgSearch} alt="Lupa" />
                    <p className="text-sm mt-2 mb-2 pr-4 pb-1 justify-items-center">{product.title}</p>
                    </div>
                )})}
                </div>
                : <></> }
                </div>
                <a className="flex justify-end w-[24.38rem]" href="#"><img className="h-[2.5rem]"  src={imgShippingFree} alt="Logo de Mercado Libre" /></a>      
                <div className="grid grid-cols-[1fr_5fr] text-sm ">
                    <img className="h-[1.5rem]" src={imglocation} alt="Ubicacion" />
                    <div className="flex flex-col -space-y-1.5 pt-[0.2rem]">
                        <span className="text-xs text-gray-600 ">Enviar a</span>
                        <ButtonCustom hrefButton="#" textButton="Barranqueras" className="text-sm"/>
                    </div>
                </div>
                <ul className="flex gap-4 justify-center items-end">
                <li className="relative pr-3 group">
                <ButtonCustom hrefButton="#" textButton="Categorías" className="text-sm" />
                <span className="absolute">
                <svg className="pt-1.5" width="20" height="20" viewBox="0 0 20 20">
                <polyline points="7,5 13,10 7,15" fill="none" stroke="black" strokeWidth={1} />
                </svg> 
                </span>
                <div className="absolute text-[0.8rem] text-white pt-1 pb-1 z-[9999] h-fit w-[10rem] bg-gray-700 text-center rounded-sm opacity-0 transition-opacity duration-150 delay-300 group-hover:opacity-100">
                <ul>
                {[...new Set(products.map(product => product.category))]
                    .map((categoria, index) => (
                        <li
                            className="cursor-pointer hover:bg-sky-500 pt-1 pb-1" onClick={() => {addFilterProducts(FilterType.Category, categoria); setFilteringState(true); navigate("/")}} key={index}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </li>
                    ))}
                    </ul>
                    </div>
                    </li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Oferta"); setFilteringState(true)}}><ButtonCustom hrefButton="/" textButton="Ofertas" className="text-sm"/></li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Cupón"); setFilteringState(true)}}><ButtonCustom hrefButton="/" textButton="Cupones" className="text-sm"/></li>
                    <li onClick={() => {addFilterProducts(FilterType.Category, "Supermercado"); setFilteringState(true)}}><ButtonCustom hrefButton="/" textButton="Supermercado" className=" text-sm"/></li>
                    <li onClick={() => {addFilterProducts(FilterType.Category, "Moda"); setFilteringState(true)}}><ButtonCustom hrefButton="/" textButton="Moda" className=" text-sm"/></li>
                    <li onClick={() => {addFilterProducts(FilterType.Promotion, "Mercado Play"); setFilteringState(true)}} className="relative">
                    <a href="#">
                    <ButtonCustom textButton="Mercado Play" className=" text-sm"/>
                    <span className="absolute left-1/2 transform -translate-x-1/2 top-[-5px] text-[0.5rem] text-white font-mono font-bold bg-green-600 pl-1 pr-1 rounded-xl ">GRATIS</span>
                    </a>
                    </li>
                    <li ><ButtonCustom hrefButton="crearProducto" textButton="Vender" className=" text-sm"/></li>
                    <li><ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm"/></li>
                    </ul>
                    <ul className="flex gap-4.5 justify-end items-end">
                        <li><ButtonCustom hrefButton="#" textButton="Creá tu cuenta" className=" text-sm"/></li>
                        <li><ButtonCustom hrefButton="#" textButton="Ingresá" className=" text-sm"/></li>
                        <li><ButtonCustom hrefButton="#" textButton="Mis compras" className=" text-sm"/></li>
                        <li
                            // onClick={productCart.resetCart}
                            className="cursor-pointer relative" >
                            <Link to="carrito">
                                <CartIcon quantity={quantityProductCart.size} />
                            </Link>
                        </li>
                    </ul>
                    </div>
                    </header>
                );
            }
            


