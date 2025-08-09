import { Link } from "react-router";
import { ButtonCustom } from "../components/components";
import imgIcon from "../assets/LogoMeLi.svg";
import type { ReactNode } from "react";


function CreateProduct (){

        return (
            <>
                <header className="bg-yellow-300 flex justify-start w-screen ">
                    <div className="flex justify-between w-full ml-[9.625rem] mr-[9.625rem]">
                        <Link to="/"><img  className="h-[3rem] mt-1 mb-1" src={imgIcon} alt="Logo de Mercado Libre" /></Link>
                        <ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm flex items-center pr-5"/> 
                    </div>
                    
                </header>
                        <main id="main">
                            <div className="flex justify-center w-screen h-fit bg-gradient-to-b from-amber-200 from-70% to-gray-200 to-30%">
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-neutral-900 font-semibold text-3xl mt-19 mb-19 pl-4">¡Hola! Antes que nada contanos, <br/> ¿qué vas a publicar?</h2>
                                        <div className="grid grid-cols-5 gap-3">
                                            <CategoryCard category="Tecnología" img={imgTecnology} path="form/tecnologia" />
                                            <CategoryCard category="Hogar" img={imgHome} path="form/hogar"/>
                                            <CategoryCard category="Moda" img={imgFashion} path="form/moda" />
                                            <CategoryCard category="Supermercado" img={imgSupermarket} path="form/supermercado" />
                                            <CategoryCard category="Deporte" img={imgSport} path="form/deporte"/>
                                        </div>
                                        <div className="flex justify-center">
                                            <Link to="/" className="w-fit font-light text-neutral-500 pt-10 hover:font-semibold "> Ir a la página principal</Link>
                                        </div>
                                    </div>
                                    
                            </div>
                        </main>
    
                
            </>)
}

export default CreateProduct;

type CategoryCardProps = {
    category: string,
    img: ReactNode,
    path: string,
}

const CategoryCard = ({category, img, path} :CategoryCardProps) => {

    return (

        <Link to={path} className="flex flex-col justify-center items-center w-[9.625rem] h-[10rem] bg-white rounded-sm hover:shadow-xl hover:shadow-neutral-400 ">
            <div>{img}</div>
            <p>{category}</p>
        </Link>

    )
}


const imgTecnology = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="10" width="33" height="28" rx="4" fill="#4A90E2" stroke="#1C3F7A" strokeWidth="2"/>
    <rect x="36" y="16" width="21" height="16" rx="2" fill="#FFFFFF"/>
    <path d="M30 6V10M63 6V10M30 38V42M63 38V42M26 14H30M26 22H30M26 30H30M63 14H67M63 22H67M63 30H67" stroke="#1C3F7A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    )

const imgHome = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.5 12L30 26H36V36H57V26H63L46.5 12Z" fill="#F5A623" stroke="#8C4A00" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="40" y="28" width="13" height="8" fill="#FFFFFF"/>
    <path d="M30 26V38H63V26" stroke="#8C4A00" strokeWidth="2"/>
    </svg>
)

const imgFashion= (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 12L46.5 18L57 12L60 18L54 22V36H39V22L33 18L36 12Z" fill="#D0021B" stroke="#7A0010" strokeWidth="2" strokeLinejoin="round"/>
    <rect x="42" y="24" width="9" height="12" fill="#FFFFFF"/>
    </svg>
)

const imgSupermarket = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 14H34L38 28H60L64 18H40" stroke="#3E3E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="36" r="4" fill="#7ED321" stroke="#417505" strokeWidth="2"/>
    <circle cx="58" cy="36" r="4" fill="#7ED321" stroke="#417505" strokeWidth="2"/>
    </svg>
)

const imgSport = (
    <svg width="93" height="48" viewBox="0 0 93 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="46.5" cy="24" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
    <polygon points="46.5,16 50,20 48.5,25 44.5,25 43,20" fill="#000000"/>
    <polygon points="43,20 40,24 43,28 44.5,25" fill="#000000"/>
    <polygon points="50,20 53,24 50,28 48.5,25" fill="#000000"/>
    <polygon points="44.5,25 43,28 46.5,32 48.5,25" fill="#000000"/>
    <polygon points="48.5,25 50,28 46.5,32" fill="#000000"/>
</svg>

)