import { Link } from "react-router";
import { NotFound404Svg } from "../imageSvg";

function ProductNotFound (){

    return(
        <div className="flex flex-col items-center bg-white pt-[5rem] pb-[5rem] rounded-2xl h-full">
            <span> {NotFound404Svg()} </span>
            <h4 className="text-xl font-semibold mt-[2rem] mb-[2rem]">El producto buscado, no existe</h4>
            <Link to="/" className="font-light text-neutral-700"> Ir a la página principal</Link>
        </div>)
    }

export default ProductNotFound;

