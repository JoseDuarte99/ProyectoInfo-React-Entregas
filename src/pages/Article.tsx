import { useContext, useState } from "react";
import { ProductCard, Section, TitleSection } from "../components/components";
import { CruzIcon } from "../imageSvg";
import products from "../products";
import CartContext from "../contexts/CartContext";
import FilterContext from "../contexts/FilterContext";
import { FilterType } from "../typing/Typing";
import StatusFilterContext from "../contexts/StatusFilterContext";





// COMPONENT MAIN FOR MERCADO LIBRE 
export function Main() {
    const [priceMax, setPriceMax] = useState("");
    const [priceMin, setPriceMin] = useState("");

    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('ERROR EN EL CARRITO DE COMPRAS');
    }

    const filtersProduct = useContext(FilterContext);
    if (!filtersProduct){
        throw new Error('ERROR EN LOS FILTROS');
    }
    const { valueFilter, addFilterProducts, removeFilterProducts, resetFilterProducts } = filtersProduct;

    const statusFiltersProduct = useContext(StatusFilterContext);
    if (!statusFiltersProduct){
        throw new Error('ERROR EN EL ESTADO DEL FILTRO');
    }
    const {filteringState, setFilteringState} = statusFiltersProduct;
    
        // Product filtering
    const categoryFilterName = valueFilter.find(f => f.type === FilterType.Category)?.name;
    const priceFilterMax = valueFilter.find(f => f.type === FilterType.PriceMax)?.max;
    const priceFilterMin = valueFilter.find(f => f.type === FilterType.PriceMin)?.min;
    const promotionFilter = valueFilter.find(f => f.type === FilterType.Promotion)?.id;
    
    let productsForDisplay = products;
    

    // Filtered by category
    if (categoryFilterName) {
        productsForDisplay = productsForDisplay.filter(product => product.category === categoryFilterName);
    }
    
    // Filtered by minium price 
    if (priceFilterMax && priceFilterMax !== 0) {
        productsForDisplay = productsForDisplay.filter(product =>  product.price <= priceFilterMax);
    }
    
    // Filtered by maximum price
    if (priceFilterMin && priceFilterMin > 0) {
        productsForDisplay = productsForDisplay.filter(product =>  product.price >= priceFilterMin);
    }
    
    // Filtered by type promotion
    if (promotionFilter) {
        productsForDisplay = productsForDisplay.filter(product =>  product.priceInfo?.includes(promotionFilter));
    }



    // Sections for Index
    const sections = [
        {
            title: "Lo más vendidos de la semana",
            link: "Ir a Más vendidos",
            keyMin: 0,
            keyMax: 7,
        },
        {
            title: "También puede interesarte",
            keyMin: 40,
            keyMax: 47,
        },
        {
            title: "Productos más buscados de la semana",
            link: "Ir a los más buscados",
            keyMin: 23,
            keyMax: 30,
        },
        {
            title: "Relacionado con lo último que viste",
            keyMin: 8,
            keyMax: 15,
        }];
        
        
    return (

        <div className="bg-gray-200 grid grid-cols-6 p-3 pt-10.5">
        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {filteringState
                ? <aside id="aside" className="row-start-2 flex flex-col justify-center ml-10 h-fit bg-white mt-10.5 mb-10.5 rounded-lg shadow-gray-300 shadow-lg">
                <h4 className="text-neutral-600 font-sans m-2 text-center text-sm bg-gray-200 rounded-sm border">Filtros</h4>
                <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Categorías</p>

        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
            {filteringState && categoryFilterName
                ? <button 
                    onClick={ () => removeFilterProducts(FilterType.Category, "")}
                    className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-5" > {categoryFilterName}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >{[...new Set(products.map(product => product.category))]
                    .map((categoria, index) => (
                        <li className="hover:text-neutral-600 hover:text-lg" 
                        onClick={() => addFilterProducts(FilterType.Category, categoria)}
                        key={index}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </li>
                    ))}
                    </ul>
                }

                <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Precio</p>
                {priceFilterMin !== 0
                    ? <button onClick={ () => removeFilterProducts(FilterType.PriceMin, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Desde $ {priceFilterMin!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                    : <></> 
                }
                {priceFilterMax !== 0
                    ? <button onClick={ () => removeFilterProducts(FilterType.PriceMax, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Hasta $ {priceFilterMax!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                    : <></> 
                }
                <div className="flex h-fit w-fit mb-5 ml-2">
                <input
                type="number"
                placeholder="Mínimo"
                value={priceMin}
                className="text-sm text-neutral-700 border-1 border-neutral-300 rounded-sm w-16 pl-1 mr-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => setPriceMin(e.target.value)}
                />

                <input
                type="number"
                placeholder="Máximo"
                value={priceMax}
                className="text-sm text-neutral-700 border-1 border-neutral-300 rounded-sm w-16 pl-1 mr-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => setPriceMax(e.target.value)}
                />
        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
                <button 
                className={priceMax || priceMin
                    ?"bg-blue-700 text-white rounded-4xl w-7 h-7 cursor-pointer hover:bg-blue-300"  
                    :"bg-neutral-300 text-white rounded-4xl w-7 h-7 cursor-not-allowed hover:bg-neutral-300" 
                } 
                onClick={() => {
                    if (priceMax) {addFilterProducts(FilterType.PriceMax, priceMax);  setPriceMax("")};
                    if (priceMin) {addFilterProducts(FilterType.PriceMin, priceMin);  setPriceMin("")};
                    if (priceMax && priceMin) {addFilterProducts(FilterType.PriceMax, priceMax); addFilterProducts(FilterType.PriceMin, priceMin); setPriceMax("");setPriceMin("") };
                }}>
                <svg className="ml-0.5 h-6 w-6" viewBox="0 0 20 20">
                <polyline points="7,5 13,10 7,15" fill="none" stroke="white" strokeWidth={1.8} />
                </svg>
                </button> 
                </div>
                <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Tipo de Promoción</p>

        { /* TERNARIO ---------------------------------------------------------------------------------------- */}
                {promotionFilter
                    ? <button onClick={ () => removeFilterProducts(FilterType.Promotion, "")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> {promotionFilter}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
                    : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >
                        <li onClick={() => addFilterProducts(FilterType.Promotion, "Oferta")} className="hover:text-neutral-600 hover:text-lg">Oferta</li>
                        <li onClick={() => addFilterProducts(FilterType.Promotion, "Descuento")} className="hover:text-neutral-600 hover:text-lg">Descuento</li>
                        <li onClick={() => addFilterProducts(FilterType.Promotion, "Cupón")} className="hover:text-neutral-600 hover:text-lg">Cupón</li>
                    </ul> }

                    <button  onClick={() => {setFilteringState(false); resetFilterProducts(FilterType.Reset, "")}} className="flex self-center justify-between text-sm text-neutral-500 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 mb-1 mt-5 hover:bg-neutral-200 hover:text-neutral-700"> Quitar Filtros {<CruzIcon className="h-4 w-4 text-neutral-400 ml-1 mt-0.5" />}</button>
                    </aside>
                : "" }

                    <main id="main" className={`row-start-2 justify-center grid ${filteringState ? "col-span-5" : "col-span-6"}`}>
                    {filteringState 
                        ? <></>
                        : <button className=" justify-self-end text-sm text-neutral-600 font-sans cursor-pointer rounded-sm border bg-gray-200 border-neutral-700  hover:bg-neutral-300 hover:text-neutral-700 pl-3 pr-3 mb-1 " onClick={() => setFilteringState(true)}>Filtrar</button> 
                    }
        {/* TERNARIO ---------------------------------------------------------------------------------------- */}
                {filteringState || categoryFilterName || promotionFilter
                    ? <Section titleSection={<TitleSection title = {!productsForDisplay || productsForDisplay.length === 0 
                        ? `Sin resultados de ${categoryFilterName} con ${promotionFilter}` 
                        : promotionFilter && categoryFilterName 
                            ? `Productos de ${categoryFilterName} con ${promotionFilter}`
                            : categoryFilterName 
                                ? `Resultados de ${categoryFilterName }` 
                                : promotionFilter ? `Productos con ${promotionFilter}` : "Todos los productos"}/>}>
                        {productsForDisplay.map(product => {
                            return (

                                    <ProductCard 
                                    idProduct={product.idProduct}
                                    category={product.category}
                                    img={product.img}
                                    title={product.title}
                                    previousPrice={product.previousPrice}
                                    price={product.price}
                                    priceInfo={product.priceInfo}
                                    shippingInfo={product.shippingInfo}
                                    onClickAdd={() => productCart.addProductCart([product])}
                                    onClickRemove={() => productCart.removeProductCart([product])}
                                    units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}
                                    />

                            );
                        })}
                        </Section>
                    : <>
                    {sections.map(({ title, link, keyMin, keyMax }) => (
                        <Section titleSection={<TitleSection title={title} link={link} />}>
                        {productsForDisplay
                            .filter(product => product.idProduct >= keyMin && product.idProduct <= keyMax)
                            .map(product => (

                                    <ProductCard
                                    idProduct={product.idProduct}
                                    category={product.category}
                                    img={product.img}
                                    title={product.title}
                                    previousPrice={product.previousPrice}
                                    price={product.price}
                                    priceInfo={product.priceInfo}
                                    shippingInfo={product.shippingInfo}
                                    onClickAdd={() => productCart.addProductCart([product])}
                                    onClickRemove={() => productCart.removeProductCart([product])}
                                    units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}
                                    />

                            ))}
                            </Section>
                        ))}
                        </>
                    }
                    </main> 
                    </div>
                    )};
                    
                    