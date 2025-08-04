import { Link } from "react-router"
import { NotFound404Svg } from "../imageSvg"
import imgIcon from "../assets/LogoMeLi.svg";


function NotFound404(){


    return (
        <>
            <header className="bg-yellow-300 flex justify-start w-screen sticky top-0 z-50">
                <div className="w-full ml-[9.625rem] mr-[9.625rem]">
                    <Link to="/"><img  className="h-[3rem] mt-1 mb-1" src={imgIcon} alt="Logo de Mercado Libre" /></Link> 
                </div>
            </header>
            <main className="flex flex-col justify-center items-center w-screen h-screen bg-white">
                <span> {NotFound404Svg()} </span>
                <h4 className="text-xl font-semibold mt-[2rem] mb-[2rem]">Parece que esta página no existe</h4>
                <Link to="/" className="font-light text-neutral-700"> Ir a la página principal</Link>
            </main>

            
        </>

    )
};

export default NotFound404
