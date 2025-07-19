import { Link } from "react-router"
import imgIcon from "../assets/LogoMeLi.svg";
import { ButtonCustom } from "../components/components";


function CheckoutShipping(){


    return (
        <>
            <header className="bg-yellow-300 flex justify-start w-screen sticky top-0 z-50">
                <div className="flex justify-between w-full ml-[9.625rem] mr-[9.625rem]">
                    <Link to="/"><img  className="h-[3rem] mt-1 mb-1" src={imgIcon} alt="Logo de Mercado Libre" /></Link>
                    <ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm flex items-center pr-5"/> 
                </div>
                
            </header>
                    <main id="main">
                        <div className="grid grid-cols-3 gap-8 h-screen w-scree mt-[2rem] mb-[2rem] ml-[9.775rem] mr-[9.775rem]">
                            {/*  */}
                            <section  className="col-span-2 bg-neutral-200">
            
                                {/* */}
                                <h1 className="text-2xl font-semibold mt-[1.25rem] mb-[1.25rem] ml-[1rem] mr-[1.5rem]">Elegí la forma de entrega</h1>
            
                                {/* */}
                                <div className="mb-[1rem] bg-white rounded-md">
                                    <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                                        <div className="flex">
                                            <input type="checkbox" />
                                                <div className="pl-5 ">
                                                    <h3 className="font-semibold text-xl pb-2">Enviar a domicilio</h3>
                                                    <p className="pb-2 text-neutral-700">Domicilio</p>
                                                    <p className="pb-2 text-neutral-700">Tipo de domicilio</p>
                                                </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <h3 className="font-semibold text-2xl">$ 10000</h3>
                                        </div>
                                    </section> 
                                    <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-t-1 border-neutral-200">
                                        <h4 className="text-blue-700 text-lg">Modificar domicilio o elegir otro</h4>
                                    </div>
                                </div>

                                <div  className="mb-[1rem] bg-white rounded-md">
                                    <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                                        <div className="flex">
                                            <input type="checkbox" />
                                                <div className="pl-5 ">
                                                    <h3 className="font-semibold text-xl pb-2">Retiro en punto de entrega</h3>
                                                    <p className="pb-2 text-neutral-700">Domicilio</p>
                                                    <p className="pb-2 text-neutral-700">Horario y Fecha</p>
                                                </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <h3 className="font-semibold text-2xl">$ 10000</h3>
                                        </div>
                                    </section> 
                                    <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-t-1 border-neutral-200">
                                        <h4 className="text-blue-700 text-lg">Ver punto en el mapa o elegir otro</h4>
                                    </div>
                                </div>

                                <div  className="mb-[1rem] bg-white rounded-md">
                                    <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                                        <div className="flex">
                                            <input type="checkbox" />
                                                <div className="pl-5 ">
                                                    <h3 className="font-semibold text-xl pb-2">Retirar en el domicilio del vendedor</h3>
                                                    <p className="pb-2 text-neutral-700">Domicilio</p>
                                                </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <h3 className="font-semibold text-xl text-green-500">GRATIS</h3>
                                        </div>
                                    </section> 
                                </div>
                                <Link to="" className="flex justify-end">
                                    <button className="bg-blue-500 text-white font-semibold w-[7rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
                                            Continuar
                                    </button>
                                </Link>
            
                            </section>

            
                            {/* SECTION END PRICE */}
                            <section  className="col-span-1 pt-[1rem] pb-[1rem] bg-neutral-100 rounded-md w-[22.5rem] h-fit">
                                    <h2 className="font-semibold mb-[1rem] pl-[1.5rem] pr-[1.5rem] ">Resumen de compra</h2>
                                    <div className=" pl-[1.5rem] pt-[1rem] pb-[1rem] mb-2 border-t-1 border-b-1 border-neutral-200">
                                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between text-neutral-700">
                                            <p className="">Total</p>
                                            <p className="">$ 0</p>
                                        </div>
                                        <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between text-neutral-700">
                                            <p className="">Total</p>
                                            <p className="">$ 0</p>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mt-[0.5rem] pl-[1.5rem] pr-[1.5rem] ">Total</h2>
                            </section>
                        </div>

                    </main>

            
        </>

    )
};

export default CheckoutShipping;
