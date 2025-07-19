import { useContext } from "react";

import CartContext from "../contexts/CartContext";

import type {ProductBase} from "../typing/Typing";


type CarProductProps = {
    product: ProductBase
};


function Cart () {

    // CONTEXT-CART -------------------------------------------------------------
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }


    const products = [...new Set(productCart.contextState)];


    console.log(products)
    // RETURN -------------------------------------------------------------
    return (
        <main id="main">
            <div className="grid grid-cols-3 gap-8 h-screen w-scree mt-[2rem] mb-[2rem] ml-[9.775rem] mr-[9.775rem]">
                {/* SECTION PRODUCTS */}
                <section  className="col-span-2 bg-neutral-200">

                    {/* DIV ALL PRODUCT */}
                    <div className="flex mb-[1rem] w-full bg-white rounded-md">
                        <input type="checkbox" className="ml-[1.5rem]"/>
                        <h1 className="mt-[1.25rem] mb-[1.25rem] ml-[1rem] mr-[1.5rem]">Todos los productos</h1>
                    </div>

                    {/* DIV PRODUCT */}
                    <div>
                        {products.map(p => 
                            <CarProduct key={p.key} product={p}/>
                        )}
                    </div>

                </section>

                {/* SECTION END PRICE */}
                <section  className="col-span-1 pt-[1.5rem] pb-[1.5rem] bg-white rounded-md w-fit h-fit">
                        <h2 className=" font-semibold mb-[1rem] pl-[1.5rem] pr-[1.5rem] ">Resumen de compra</h2>
                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between pl-[1.5rem] pt-[1rem] mb-2 border-t-1 border-neutral-200">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">$ 0</p>
                        </div>
                        <button className="bg-blue-500 text-white font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
                            Continuar compra
                        </button>
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


    return (
    <div  className="mb-[1rem] bg-white rounded-md">

        {/* CATEGORY PRODUCT */}
        <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-b-1 border-neutral-200">
            <input type="checkbox" className="mr-[1.2rem]"/>
            <h3 className="font-medium text-xl">{p.category}</h3>
        </div>

            {/* DISPLAY PRODUCT */}
            <section className="grid grid-cols-[1fr_2fr_7fr_2fr_4fr] gap-4 pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">

                <input type="checkbox" className=" h-4"/>
                <img src={p.img} alt={p.title} className="w-20 h-20 object-contain rounded"/>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800">{p.title}</h3>
                    <button
                        onClick={() => productCart.addProductCart([p])}
                        className="text-xs text-blue-600 hover:underline mt-1"
                    >
                        Eliminar
                    </button>
                </div>

                <div className=" flex justify-center-safe items-center w-[7rem] h-[2.5rem] border-1 rounded-md">
                    {productCart.contextState[0].units 
                        ? <button className="flex-1 text-xl font-light hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1" onClick={() =>productCart.removeProductCart([p])}>-</button>
                        : <button className="flex-1 text-xl font-light hover:bg-neutral-100 rounded-md text-neutral-700 cursor-not-allowed h-[2rem] mr-1 ml-1">-</button>}
                    {productCart.contextState[0].units
                        ?<p className="text-sm mr-1 ml-1">{productCart.contextState[0].units}</p>
                        :<>{0}</>}
                    <button className="flex-1 text-xl font-light hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1" onClick={() =>productCart.addProductCart([p])}>+</button>
                </div>
                <div className="text-2xl text-gray-800 justify-self-end">${p.price.toLocaleString('es-AR')}</div>

            </section> 
        </div>
    )
}




export default Cart;