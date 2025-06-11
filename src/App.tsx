import { ProductCard, TitleSection, Section, Search, ButtonCustom } from "./components";
import products from './products';

import imgIcon from "./assets/LogoMeLi.svg";
import imgShippingFree from "./assets/EnvioGratis.webp";
import imgSearch from "./assets/lupa.svg";
import imglocation from "./assets/location.svg";
import imgCarroDeCompras from "./assets/carroDeCompras.svg";

// COMPONENTE NAVBAR PARA MERCADO LIBRE
export function Navbar(){
  return(
    <div className="grid grid-cols-[1fr_3fr_2fr] gap-5 gap-y-2 max-w-[1200px] max-h-[100px] pl-2.5 pr-2.5 pt-2 pb-3">
      <a className="flex justify-star w-[10.2rem]" href="#"><img  className="h-[2.5rem]" src={imgIcon} alt="Logo de Mercado Libre" /></a>
      <div >
        <Search placeholder="Buscar products, marcas y más…" imgSearch= {imgSearch}/>
      </div>
      <a className="flex justify-end w-[24.38rem]" href="#"><img className="h-[2.5rem]"  src={imgShippingFree} alt="Logo de Mercado Libre" /></a>      
      <a className="grid grid-cols-[1fr_5fr] text-sm" href="#">
        <img className="h-[1.5rem]" src={imglocation} alt="Ubicacion" />
          <div className="flex flex-col -space-y-1.5 pt-[0.2rem]">
            <span className="text-xs text-gray-600 ">Enviar a</span>
            <ButtonCustom hrefButton="#" textButton="Barranqueras" className="text-sm"/>
          </div>
      </a>
      <ul className="flex gap-4 justify-center items-end">
        <li className="pr-3"><ButtonCustom hrefButton="#" textButton="Categorías" className=" text-sm"/>
          <span className="absolute"> 
            <svg className="pt-1.5" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <polyline points="5,7 10,13 15,7" fill="none" stroke="black" stroke-width="1"/>
            </svg>
          </span>
        </li>
        <li><ButtonCustom hrefButton="#" textButton="Ofertas" className="text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Cupones" className="text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Supermercado" className=" text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Moda" className=" text-sm"/></li>
        <li className="relative">
          <a href="#">
            <ButtonCustom hrefButton="#" textButton="Mercado Play" className=" text-sm"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-[-5px] text-[0.5rem] text-white font-mono font-bold bg-green-600 pl-1 pr-1 rounded-xl ">GRATIS</span>
          </a>
        </li>
        <li><ButtonCustom hrefButton="#" textButton="Vender" className=" text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm"/></li>
      </ul>
      <ul className="flex gap-4.5 justify-end items-end">
        <li><ButtonCustom hrefButton="#" textButton="Creá tu cuenta" className=" text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Ingresá" className=" text-sm"/></li>
        <li><ButtonCustom hrefButton="#" textButton="Mis compras" className=" text-sm"/></li>
        <li><a href="#"><img className="w-[1.4rem] pb-1.5" src={imgCarroDeCompras} alt="" /></a></li>
      </ul>
    </div>
  );
}

// COMPONENTE MAIN PARA MERCADO LIBRE
function Main() {
  return (
    <>
    <Section titleSection={<TitleSection title="Lo más vendidos de la semana" link="Ir a Más vendidos" />}>
      {products
        .filter(product => product.key <= 7 )
        .map(product => (
          <ProductCard 
            key={product.key}
            img={product.img}
            title={product.title}
            previousPrice={product.previousPrice}
            price={product.price}
            priceInfo={product.priceInfo}
            shippingInfo={product.shippingInfo}
          />
      ))}
    </Section>
        <Section titleSection={<TitleSection title="También puede interesarte"/>}>
      {products
        .filter(product => product.key > 7 && product.key <= 14 )
        .map(product => (
          <ProductCard 
            key={product.key}
            img={product.img}
            title={product.title}
            previousPrice={product.previousPrice}
            price={product.price}
            priceInfo={product.priceInfo}
            shippingInfo={product.shippingInfo}
          />
      ))}
    </Section>
        <Section titleSection={<TitleSection title="Productos más buscados de la semana" link="Ir a los más buscados" />}>
      {products
        .filter(product => product.key > 14 && product.key <= 21 )
        .map(product => (
          <ProductCard 
            key={product.key}
            img={product.img}
            title={product.title}
            previousPrice={product.previousPrice}
            price={product.price}
            priceInfo={product.priceInfo}
            shippingInfo={product.shippingInfo}
          />
      ))}
    </Section>
        <Section titleSection={<TitleSection title="Relacionado con lo último que viste"/>}>
      {products
        .filter(product => product.key > 21 && product.key <= 28 )
        .map(product => (
          <ProductCard 
            key={product.key}
            img={product.img}
            title={product.title}
            previousPrice={product.previousPrice}
            price={product.price}
            priceInfo={product.priceInfo}
            shippingInfo={product.shippingInfo}
          />
      ))}
    </Section>
    </>
  );
}

export default Main
