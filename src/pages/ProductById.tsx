import { Link, useParams } from "react-router";
import products from "../products";
import { NotFound404Svg } from "../imageSvg";





function ProductById (){
    
    const { id } = useParams<{ id: string }>();
    
    
    const product = products.find(item => item.key === Number(id))



    return(
        <main className="bg-white h-fit mr-[10.3rem] ml-[10.3rem] mt-[5.5rem] rounded-2xl">

            {product 
                ? 
                <div className="grid grid-cols-3 gap-5">

                    {/* IMG PRODUCT */}
                    <div className="m-5">
                        <img src={product.img} alt={product.title} />
                    </div>

                    {/* INFO PRODUCT */}
                    <div className="m-5">

                        <span className="text-xs text-white bg-black pt-0.5 pb-0.5 pl-1 pr-1 rounded-sm ">Recomendado</span>
                        <p className="text-lg font-semibold text-gray-900 ">{product.title}</p>

                        <span className="text-xs text-blue-700 bg-blue-100 pt-0.5 pb-0.5 pl-1 pr-1 rounded-sm">Calficacion</span>
                        <p className="text-neutral-500 text-left text-xs line-through font-sans mt-5">
                            {product.previousPrice !== undefined ? `$${product.previousPrice}` : ""}
                        </p>
                        <h4 className="text-black text-left text-2xl font-medium font-sans">${product.price.toLocaleString('es-AR')}</h4>

                        <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2 font-sans">{product.priceInfo}</p>
                        <p className="text-green-700 text-left text-xs font-bold font-sans ">{product.shippingInfo}</p>


                    </div>

                    {/* INFORMATION THE PRODUCT AND BUTTON THE SHOPPING */}

                    <div className="m-5"> 
                            <h4 className="text-black text-left text-2xl font-medium font-sans ml-25">${product.price.toLocaleString('es-AR')}</h4>
                            <p className="text-neutral-500 text-left text-xs line-through font-sans mt-5 ml-25">
                                {product.previousPrice !== undefined ? `$${product.previousPrice}` : ""}
                            </p>
                            <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2 font-sans ml-25">{product.priceInfo}</p>
                            <p className="text-green-700 text-left text-xs font-bold font-sans ml-25">{product.shippingInfo}</p>

                            <button className="bg-blue-500 text-white font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
                                    Comprar ahora
                            </button>
                            <button className="bg-blue-100 text-blue-500 font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-200">
                                    Agregar al carrito
                            </button>

                    </div>
                </div>
                : 
                <div className="flex flex-col items-center bg-white pt-[5rem] pb-[5rem] rounded-2xl">
                    <span> {NotFound404Svg()} </span>
                    <h4 className="text-xl font-semibold mt-[2rem] mb-[2rem]">El producto buscado, no existe</h4>
                    <Link to="/" className="font-light text-neutral-700"> Ir a la página principal</Link>
                </div>}
        </main>
        
    )

}


export default ProductById;