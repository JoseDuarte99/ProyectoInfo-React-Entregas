import { useContext } from "react";

import CartContext from "../contexts/CartContext";

import type { ProductBase } from "../typing/Typing";
import { Link } from "react-router";


type CarProductProps = {
    product: ProductBase
};


function Cart () {

    // CONTEXT-CART -------------------------------------------------------------
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }



    const productsByType = [...new Set(productCart.contextState)];
    console.log(productsByType)
    const productsAll = productCart.contextState;

    const totalPriceProduct = productsAll
        ? productsAll.reduce((acc, p) => acc + (p.price ?? 0), 0)
        : 0;

    const totalPriceShipping = productsByType
        ? productsByType.reduce((acc, p) => acc + (p.shippingPrice ?? 0), 0)
        : 0;
    
    const totalPrice = totalPriceProduct + totalPriceShipping;

    // RETURN -------------------------------------------------------------
    return (
        <main id="main">
            <div className="grid grid-cols-3 gap-8 h-screen w-scree mt-[2rem] mb-[2rem] ml-[9.775rem] mr-[9.775rem]">
                {/* SECTION PRODUCTS */}
                <section  className="col-span-2 bg-neutral-200">

                    {/* DIV ALL PRODUCT */}
                    <div className="flex mb-[1rem] w-full bg-white rounded-md">
                        <h1 className="mt-[1.25rem] mb-[1.25rem] ml-[2rem] mr-[1.5rem]">Todos los productos</h1>
                    </div>

                    {/* DIV PRODUCT */}
                    <div>
                        {productsByType.map(p => 
                            <CarProduct key={p.idProduct} product={p}/>
                        )}
                    </div>

                { productsAll.length > 0
                    ? <div className="flex justify-end">
                        <button  onClick={productCart.resetCart} className="bg-neutral-200 text-neutral-500 font-semibold w-[10rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-neutral-300">
                                Vaciar carrito
                        </button>
                    </div>
                    : <></>
                }

                </section>

                {/* SECTION END PRICE */}
                <section  className="col-span-1 pt-[1.5rem] pb-[1.5rem] bg-white rounded-md w-[22.5rem] h-fit">
                        <h2 className=" font-semibold mb-[1rem] pl-[1.5rem] pr-[1.5rem]">Resumen de compra</h2>
                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between pl-[1.5rem] pt-5 border-t-1 border-neutral-200">
                            <p className="text-neutral-700 text-sm">Producto</p>
                            <p className="text-neutral-700 text-sm">$ {totalPriceProduct !== 0? totalPriceProduct.toLocaleString('es-AR') : 0}</p>
                        </div>
                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between pl-[1.5rem] mb-2 mt-2">
                            <p className="text-neutral-700 text-sm">Envío</p>
                            <p className="text-neutral-700 text-sm">$ {totalPriceShipping !== 0? totalPriceShipping.toLocaleString('es-AR') : 0}</p>
                        </div>

                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between pl-[1.5rem] pt-[1rem] mb-2 ">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">$ {totalPrice !== 0? totalPrice.toLocaleString('es-AR') : 0}</p>
                        </div>

                        <Link to="/checkout" className="flex justify-center pr-[1.5rem] pl-[1.5rem]">
                            <button className="bg-blue-500 text-white font-semibold mt-[1rem] w-full h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
                                Continuar compra
                            </button>
                        </Link>
                        <Link to="/" className="flex justify-center pr-[1.5rem] pl-[1.5rem] mt-2">
                            <button className="bg-neutral-200 text-neutral-700 font-semibold w-full h-[2.8rem] rounded-md cursor-pointer hover:bg-neutral-300">
                                    Volver
                            </button>
                        </Link>
                </section>

            </div>
        </main>
    )
};


//  CART-PRODUCT --------------------------------------------------------------------------------------------------------------------------
const CarProduct = (product :CarProductProps) => {

    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }

    const p = product.product
    const unitsProductInCart = productCart.contextState.filter(f => f.idProduct === p.idProduct).length;

    return (
    <div  className="mb-[1rem] bg-white rounded-md">

        {/* CATEGORY PRODUCT */}
        <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-b-1 border-neutral-200">
            <h3 className="font-medium text-xl">{p.category}</h3>
        </div>

            {/* DISPLAY PRODUCT */}
            <section className="grid grid-cols-[2fr_7fr_2fr_4fr] gap-4 pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">

                <Link to={`/producto/${p.idProduct}`} className="cursor-pointer">
                    <img src={p.img} alt={p.title} className="w-20 h-20 object-contain rounded"/>
                </Link>
                <div>
                    <Link to={`/producto/${p.idProduct}`} className="cursor-pointer">
                        <h3 className="text-sm font-semibold text-gray-800">{p.title}</h3>
                    </Link>
                    <button
                        onClick={() => productCart.removeProductCart([p])}
                        className="text-xs text-blue-600 hover:underline mt-1"
                    >
                        Eliminar
                    </button>
                </div>

                <div className=" flex justify-center-safe items-center w-[7rem] h-[2.5rem] border-1 rounded-md">
                    {unitsProductInCart
                        ? <button className="flex-1 text-xl font-light hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1" onClick={() =>productCart.removeProductCart([p])}>-</button>
                        : <button className="flex-1 text-xl font-light hover:bg-neutral-100 rounded-md text-neutral-700 cursor-not-allowed h-[2rem] mr-1 ml-1">-</button>}
                    {unitsProductInCart
                        ?<p className="text-sm mr-1 ml-1">{unitsProductInCart}</p>
                        :<>{0}</>}
                    <button className="flex-1 text-xl font-light hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1" onClick={() =>productCart.addProductCart([p])}>+</button>
                </div>
                <div className="justify-self-end">
                    <h4 className="text-2xl text-gray-800">${p.price.toLocaleString('es-AR')}</h4>
                    <p className="text-[0.6rem] text-neutral-500 font-bold text-center">Precio por unidad</p>
                    { p.shippingPrice
                        ? <p className="pt-2 text-[0.6rem] text-neutral-500 font-bold text-center"><span className="font-semibold">Costo de envío:</span> $ {p.shippingPrice}  </p>
                        : <p className="pt-2 font-medium text-[0.8rem] text-green-600 text-center"> Envío Gratis</p>
                    }
                </div>

            </section> 
        </div>
    )
}




export default Cart;