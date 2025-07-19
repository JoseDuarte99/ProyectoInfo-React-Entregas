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
        <main id="main" className="h-screen w-scree ">
            <div className="grid grid-cols-3 gap-6 h-screen w-scree mt-[2rem] mb-[2rem] ml-[9.775rem] mr-[9.775rem]">
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

                {/* SECTION END PRICE */}
                </section>
                <section  className="col-span-1">

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
    const styleButton = "flex-1 text-sm font-medium hover:bg-blue-100 rounded-md text-cyan-700 cursor-pointer h-[2rem] mr-1 ml-1"


    return (
    <div  className="mb-[1rem] bg-white rounded-md">

        {/* CATEGORY PRODUCT */}
        <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
            <input type="checkbox" className="mr-[1.2rem]"/>
            <h3>{p.category}</h3>
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
                        ? <button className={styleButton} onClick={() =>productCart.removeProductCart([p])}>-</button>
                        : <button className={styleButton} >-</button>}
                    {productCart.contextState[0].units
                        ?<p className="text-sm mr-1 ml-1">{productCart.contextState[0].units}</p>
                        :<>{0}</>}
                    <button className={styleButton} onClick={() =>productCart.addProductCart([p])}>+</button>
                </div>
                <div className="text-sm font-bold text-gray-800 justify-self-end">${p.price.toLocaleString()}</div>

            </section> 
        </div>
    )
}





export default Cart;