import { useState } from "react";

import { ProductCard, TitleSection, Section, Search, ButtonCustom } from "./components";
import type { ProductCardProps } from "./components";

import products from "./products";

import { CartIcon, CruzIcon} from "./imageSvg";
import imgIcon from "./assets/LogoMeLi.svg";
import imgShippingFree from "./assets/EnvioGratis.webp";
import imgSearch from "./assets/lupa.svg";
import imglocation from "./assets/location.svg";

// TIPING THE FILTER BY CATEGORY
type categoryFilterName = {
  type: "Category";
  name: string;
};

// TIPING THE FILTER BY PRICEMAX
type PriceMaxFilter = {
  type: "PriceMax";
  max: number;
};

// TIPING THE FILTER BY PRICEMIN
type PriceMinFilter = {
  type: "PriceMin";
  min: number;
};

// TIPING THE FILTER BY PRICEMIN
type PromotionFilter = {
  type: "Promotion";
  id: string;
};

type Filter = categoryFilterName | PriceMaxFilter | PriceMinFilter | PromotionFilter;

// TIPING THE NAVBAR
type NavbarProps = {
  onSearch: string;
  setOnSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<Filter[]>>;
  allProductCar: ProductCardProps[];
  setAddProductCar: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
  addFilter: (typeFilter: string, valueFilter: string) => void;
};

// TIPING THE MAIN
type MainProps = {
  filter: Filter[];
  setFilter: React.Dispatch<React.SetStateAction<Filter[]>>;
  allProductCar: ProductCardProps[];
  setAddProductCar: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
  addFilter: (typeFilter: string, valueFilter: string) => void;
  priceMax: string;
  setPriceMax: React.Dispatch<React.SetStateAction<string>>;
  priceMin: string;
  setPriceMin: React.Dispatch<React.SetStateAction<string>>;
  filteringState: boolean;
  setfilteringState: React.Dispatch<React.SetStateAction<boolean>>;
};


// ------------------------------------------------------ COMPONENTS

// COMPONENT APP FOR MERCADO LIBRE
function App() {
  const [allProductCar, setAddProductCar] = useState<ProductCardProps[]>([]);
  const [onSearch, setOnSearch] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [filteringState, setfilteringState] = useState(false);
  const [filter, setFilter] = useState<Filter[]>([
    { type: "Category", name: ""},
    { type: "PriceMax", max: 0 },
    { type: "PriceMin", min: 0 },
    { type: "Promotion", id: "" },
  ]);


  // Function for add filters
  const addFilter = (typeFilter: string, valueFilter: string  ) => {
    setfilteringState(true);

    if (typeFilter === "PriceMax"){
      const max = parseFloat(valueFilter)
      setFilter(prev => prev.map(f => f.type === "PriceMax"
          ? { ...f, max: isNaN(max) ? 0 : max }
          : f 
          ));
    };

    if (typeFilter === "PriceMin"){
      const min = parseFloat(valueFilter)
      setFilter(prev => prev.map(f => f.type === "PriceMin"
          ? { ...f, min: isNaN(min) ? 0 : min }
          : f 
          ));
    };

    if (typeFilter === "Category"){
      setFilter(prev => prev.map (f =>f.type === typeFilter
        ? { ...f, name: valueFilter }
        : f 
        ));
    };

    
    if (typeFilter === "Promotion"){
      setFilter(prev => prev.map (f =>f.type === typeFilter
        ? { ...f, id: valueFilter }
        : f 
        ));
    };
  };

  return (
    <>
      <Navbar 
        
        setFilter={setFilter}
        allProductCar={allProductCar} 
        setAddProductCar={setAddProductCar} 
        onSearch={onSearch}
        setOnSearch={setOnSearch}
        addFilter={addFilter}
        />
      <Main 
        filter={filter}
        setFilter={setFilter}
        allProductCar={allProductCar} 
        setAddProductCar={setAddProductCar}
        addFilter={addFilter}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        filteringState={filteringState}
        setfilteringState={setfilteringState}
      />
    </>
  );
}

// COMPONENT NAVBAR FOR MERCADO LIBRE
export function Navbar({ allProductCar, setAddProductCar, onSearch, setOnSearch, addFilter}: NavbarProps) {

  // Function for Reset Car
  const resetCar = () => {
    setAddProductCar([]);
  }

  // Function for normalize string
  const normalizeString = (text: string): string => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Function for see result searches
  const resultSearch = onSearch
  ? products.filter(product => normalizeString(product.title).includes(normalizeString(onSearch)))
  : undefined;
  
  return(
    <header id="header" className="bg-yellow-300 flex justify-center w-screen">
      <div className="grid grid-cols-[1fr_3fr_2fr] gap-5 gap-y-2 max-w-[1200px] max-h-[100px] pl-2.5 pr-2.5 pt-2 pb-3">
        <a className="flex justify-star w-[10.2rem]" href="../index.html"><img  className="h-[2.5rem]" src={imgIcon} alt="Logo de Mercado Libre" /></a>
        <div className="relative" >
          <Search onSearch={onSearch} setOnSearch={setOnSearch} placeholder="Buscar products, marcas y más…" imgSearch= {imgSearch}/>
          {resultSearch 
          ? <div className="absolute pt-2 pb-2 z-[9999] h-fit w-[36.75rem] grid items-center bg-white shadow-gray-400 shadow-sm">
              {resultSearch.map(product => {
                return (                
                  <div key={product.key} className="flex cursor-pointer hover:bg-blue-500 hover:text-white h-[2.2rem]">
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
                    <li className="cursor-pointer hover:bg-sky-500 pt-1 pb-1" onClick={() => addFilter("Category",categoria)} key={index}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </li>
                ))}
              </ul>
            </div>
          </li>
          <li onClick={() => addFilter("Promotion", "Oferta")}><ButtonCustom hrefButton="#" textButton="Ofertas" className="text-sm"/></li>
          <li onClick={() => addFilter("Promotion", "Cupón")}><ButtonCustom hrefButton="#" textButton="Cupones" className="text-sm"/></li>
          <li onClick={() => addFilter("Category", "Supermercado")}><ButtonCustom hrefButton="#" textButton="Supermercado" className=" text-sm"/></li>
          <li onClick={() => addFilter("Category", "Moda")}><ButtonCustom hrefButton="#" textButton="Moda" className=" text-sm"/></li>
          <li onClick={() => addFilter("Promotion", "Mercado Play")} className="relative">
            <a href="#">
              <ButtonCustom textButton="Mercado Play" className=" text-sm"/>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-[-5px] text-[0.5rem] text-white font-mono font-bold bg-green-600 pl-1 pr-1 rounded-xl ">GRATIS</span>
            </a>
          </li>
          <li ><ButtonCustom hrefButton="#" textButton="Vender" className=" text-sm"/></li>
          <li><ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm"/></li>
        </ul>
        <ul className="flex gap-4.5 justify-end items-end">
          <li><ButtonCustom hrefButton="#" textButton="Creá tu cuenta" className=" text-sm"/></li>
          <li><ButtonCustom hrefButton="#" textButton="Ingresá" className=" text-sm"/></li>
          <li><ButtonCustom hrefButton="#" textButton="Mis compras" className=" text-sm"/></li>
          <li onClick={resetCar} className="cursor-pointer relative">
            <CartIcon quantity={allProductCar.length} />
          </li>
        </ul>
      </div>
    </header>
  );
}

// COMPONENT MAIN FOR MERCADO LIBRE 
export function Main({ allProductCar, setAddProductCar, filter, setFilter, addFilter, priceMax, setPriceMax, priceMin, setPriceMin, filteringState, setfilteringState}: MainProps) {

  // Function for add products on car
  const addProduct = (product: ProductCardProps) => {
    setAddProductCar(prev => [...prev, product]);
  };

  // Function for remove products on car
  const removeProduct = (productKey: number) => {
    setAddProductCar(prev => {
      const index = prev.findIndex(p => p.key === productKey);
      return index === -1
        ? prev
        : ((updated => {
            updated.splice(index, 1);
            return updated;
          })([...prev]));
    });
  };


  // Function for remove a filter
  const removeFilter = (typeFilter: string) => {

    if (typeFilter === "Category"){
        setFilter(prev => prev.map(f => f.type === typeFilter
            ? { ...f, name: ""}
            : f 
          ));
    };

    if (typeFilter === "PriceMax"){
        setFilter(prev => prev.map(f => f.type === typeFilter
            ? { ...f, max: 0}
            : f 
          ));
    };

    if (typeFilter === "PriceMin"){
        setFilter(prev => prev.map(f => f.type === typeFilter
            ? { ...f, min: 0}
            : f 
          ));
    };

    if (typeFilter === "Promotion"){
        setFilter(prev => prev.map(f => f.type === typeFilter
            ? { ...f, id: ""}
            : f 
          ));
    };

  }

  // Function for remove all filters
  const removeAllFilters = () => {
    setFilter([
    { type: "Category", name: ""},
    { type: "PriceMax", max: 0 },
    { type: "PriceMin", min: 0 },
    { type: "Promotion", id: ""}
    ]);
    setfilteringState(false);
  };

  
  // Product filtering
  const categoryFilterName = filter.find(f => f.type === "Category")?.name;
  const priceFilterMax = filter.find(f => f.type === "PriceMax")?.max;
  const priceFilterMin = filter.find(f => f.type === "PriceMin")?.min;
  const promotionFilter = filter.find(f => f.type === "Promotion")?.id;

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
    {filteringState
    ? <aside id="aside" className="row-start-2 flex flex-col justify-center ml-10 h-fit bg-white mt-10.5 mb-10.5 rounded-lg shadow-gray-300 shadow-lg">
        <h4 className="text-neutral-600 font-sans m-2 text-center text-sm bg-gray-200 rounded-sm border">Filtros</h4>
        <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Categorías</p>
        {categoryFilterName ?
        <button onClick={() => removeFilter("Category")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-5" > {categoryFilterName}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
        : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >{[...new Set(products.map(product => product.category))]
                  .map((categoria, index) => (
                    <li className="hover:text-neutral-600 hover:text-lg" onClick={() => addFilter("Category",categoria)} key={index}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </li>
                ))}
          </ul>
        }

        <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Precio</p>
        {priceFilterMin !== 0
          ? <button onClick={() => removeFilter("PriceMin")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Desde $ {priceFilterMin!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
          : <></> 
        }
        {priceFilterMax !== 0
          ? <button onClick={() => removeFilter("PriceMax")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> Hasta $ {priceFilterMax!.toLocaleString("es-AR")}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
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
          <button 
            className={priceMax || priceMin
              ?"bg-blue-700 text-white rounded-4xl w-7 h-7 cursor-pointer hover:bg-blue-300"  
              :"bg-neutral-300 text-white rounded-4xl w-7 h-7 cursor-not-allowed hover:bg-neutral-300" 
            } 
            onClick={() => {
              if (priceMax) {addFilter("PriceMax", priceMax);  setPriceMax("")};
              if (priceMin) {addFilter("PriceMin", priceMin);  setPriceMin("")};
              if (priceMax && priceMin) {addFilter("PriceMax", priceMax); addFilter("PriceMin", priceMin); setPriceMax("");setPriceMin("") };
            }}>
              <svg className="ml-0.5 h-6 w-6" viewBox="0 0 20 20">
                <polyline points="7,5 13,10 7,15" fill="none" stroke="white" strokeWidth={1.8} />
              </svg>
          </button> 
        </div>



        <p className="items-center justify-center text-sm font-bold text-neutral-500 w-fit mb-1 pl-1 pr-1 ml-2">Tipo de Promoción</p>
        {promotionFilter
          ? <button onClick={() => removeFilter("Promotion")} className="flex items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-1"> {promotionFilter}{<CruzIcon className="h-4 w-4 text-neutral-400 ml-3 mt-0.5" />}</button>
          : <ul className="items-center justify-center text-sm text-neutral-500 bg-neutral-100 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 ml-2 mb-2" >
              
              <li onClick={() => addFilter("Promotion", "Oferta")} className="hover:text-neutral-600 hover:text-lg">Oferta</li>
              <li onClick={() => addFilter("Promotion", "Descuento")} className="hover:text-neutral-600 hover:text-lg">Descuento</li>
              <li onClick={() => addFilter("Promotion", "Cupón")} className="hover:text-neutral-600 hover:text-lg">Cupón</li>

            </ul> }

        <button  onClick={removeAllFilters} className="flex self-center justify-between text-sm text-neutral-500 border-1 border-neutral-300 rounded-sm cursor-pointer w-fit pl-1 pr-1 mb-1 mt-5 hover:bg-neutral-200 hover:text-neutral-700"> Quitar Filtros {<CruzIcon className="h-4 w-4 text-neutral-400 ml-1 mt-0.5" />}</button>
            </aside>
          : "" }

    <main id="main" className={`row-start-2 justify-center grid ${categoryFilterName || filteringState ? "col-span-5" : "col-span-6"}`}>
      {filteringState 
      ? <></>
      : <button className=" justify-self-end text-sm text-neutral-600 font-sans cursor-pointer rounded-sm border bg-gray-200 border-neutral-700  hover:bg-neutral-300 hover:text-neutral-700 pl-3 pr-3 mb-1 " onClick={() => setfilteringState(!filteringState)}>Filtrar</button> 
    }
      {filteringState
        ? <Section titleSection={<TitleSection title = {!productsForDisplay || productsForDisplay.length === 0 ? "Sin resultados" 
          : categoryFilterName ? `Resultados de ${categoryFilterName }` : "Todos los productos"}/>}>
            {productsForDisplay.map(product => {
                return (
                  <ProductCard 
                    key={product.key}
                    category={product.category}
                    img={product.img}
                    title={product.title}
                    previousPrice={product.previousPrice}
                    price={product.price}
                    priceInfo={product.priceInfo}
                    shippingInfo={product.shippingInfo}
                    onClickAdd={() => addProduct(product)}
                    onClickRemove={() => removeProduct(product.key)}
                    onCar={allProductCar ? allProductCar.filter(p => p.key === product.key ).length : 0}
                  />
                );
              })}
          </Section>
        : <>
            {sections.map(({ title, link, keyMin, keyMax }) => (
              <Section key={title} titleSection={<TitleSection title={title} link={link} />}>
                {productsForDisplay
                  .filter(product => product.key >= keyMin && product.key <= keyMax)
                  .map(product => (
                    <ProductCard
                      key={product.key}
                      category={product.category}
                      img={product.img}
                      title={product.title}
                      previousPrice={product.previousPrice}
                      price={product.price}
                      priceInfo={product.priceInfo}
                      shippingInfo={product.shippingInfo}
                      onClickAdd={() => addProduct(product)}
                      onClickRemove={() => removeProduct(product.key)}
                      onCar={
                        allProductCar
                          ? allProductCar.filter(p => p.key === product.key).length
                          : 0
                      }
                    />
                  ))}
              </Section>
            ))}
          </>
        }
      </main> 
    </div>
  )};







export default App
