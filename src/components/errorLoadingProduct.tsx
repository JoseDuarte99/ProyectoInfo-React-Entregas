import { Link } from "react-router";
import { NotFound404Svg } from "../imageSvg";

function ErrorLoadingProduct () {
    return(
            <main className="flex flex-col justify-center items-center w-screen h-screen bg-white">
                <span> {NotFound404Svg()} </span>
                <h4 className="text-xl font-semibold mt-[2rem] mb-[2rem]">Ocurrio un error</h4>
                <Link to="/" className="font-light text-neutral-700"> Ir a la página principal</Link>
            </main>
    )
}

export default ErrorLoadingProduct;