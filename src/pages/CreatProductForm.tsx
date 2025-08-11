import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { ProductDB } from "../typing/Typing";
import { ButtonCustom } from "../components/components";
import imgIcon from "../assets/LogoMeLi.svg";
// import { productsDB } from "../data/db";


export default function CreateProductForm() {
    const navigate = useNavigate();
    const { category } = useParams<{ category: string }>();

    const [product, setProduct] = useState<ProductDB>({
        idProduct: 37, 
        category: category ?? "",
        description: "",
        img: "",
        colors: [],
        brands: [],
        rating: 0,
        title: "",
        price: 0,
        inStock: true,
        prime: false,
        by: "",
    });

    const capitalize = (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

        setProduct((prev) => ({
        ...prev,

        [name]: type === "checkbox" 
        ? checked 
        : type === "number"
            ? Number(value)
            : value,
        }));
    };

    const handleArrayChange = (name: "colors" | "brands", value: string) => {
        setProduct((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const productLocal = localStorage.getItem("productLocal");
        const productStorage = productLocal ? JSON.parse(productLocal) : [];

        const nextId = 37 + productStorage.length + 1;

        const newProduct = {
            ...product,
            idProduct: nextId,
            category: capitalize(category ?? ""),
            by: "Tu producto"
        };

        productStorage.push(newProduct);
        localStorage.setItem("productLocal", JSON.stringify(productStorage));

        setProduct({
            idProduct: nextId,
            category: category ?? "",
            description: "",
            img: "",
            colors: [],
            brands: [],
            rating: 0,
            title: "",
            price: 0,
            inStock: true,
            prime: false,
            by: "",
        });

        navigate(`/`);
    };


    const styleInput = "h-[2.5rem] w-full flex items-center bg-white shadow-gray-500 shadow-md rounded-sm pl-2"
    const styleTitle = "text-neutral-600 font-medium"



    return (
    <>
        <header className="bg-yellow-300 flex justify-start w-screen">
            <div className="flex justify-between w-full ml-[9.625rem] mr-[9.625rem]">
                <Link to="/"><img  className="h-[3rem] mt-1 mb-1" src={imgIcon} alt="Logo de Mercado Libre" /></Link>
                <ButtonCustom hrefButton="#" textButton="Ayuda" className="text-sm flex items-center pr-5"/> 
            </div>
            
        </header>

        <div className="flex flex-col items-center pt-[3rem] w-screen h-fit bg-gradient-to-b from-amber-200 from-50% to-gray-200 to-50%">
            <h2 className={`${styleTitle} text-2xl pb-[3rem]`}>!Perfecto! Veamos que producto de {category} quieres ofrecer...</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[30rem]">
                
                <label className={styleTitle}>
                    Título
                    <input
                        className={styleInput}
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styleTitle}>
                    Categoria
                    <input
                        className={`${styleInput} cursor-not-allowed`}
                        type="text"
                        name="category"
                        value={capitalize(category ?? "")}
                        required
                        disabled
                    />
                </label>

                <label className={styleTitle}>
                    Descripción
                    <textarea
                        className={styleInput}
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styleTitle}>
                    URL de imagen
                    <input
                        className={styleInput}
                        type="text"
                        name="img"
                        value={product.img}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styleTitle}>
                    Colores (separados por coma)
                    <input
                        className={styleInput}
                        type="text"
                        name="colors"
                        value={product.colors}
                        onChange={(e) => handleArrayChange("colors", e.target.value)}
                    />
                </label>

                <label className={styleTitle}>
                    Marcas (separadas por coma)
                    <input
                        className={styleInput}
                        type="text"
                        name="brands"
                        value={product.brands}
                        onChange={(e) => handleArrayChange("brands", e.target.value)}
                    />
                </label>

                <label className={styleTitle}>
                    Precio
                    <input
                        className={styleInput}
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={styleTitle}>
                    Precio anterior
                    <input
                        className={styleInput}
                        type="number"
                        name="previousPrice"
                        value={product.previousPrice ?? ""}
                        onChange={handleChange}
                    />
                </label>

                <label className={styleTitle}>
                    Info de precio
                    <input
                        className={styleInput}
                        type="text"
                        name="priceInfo"
                        value={product.priceInfo ?? ""}
                        onChange={handleChange}
                    />
                </label>

                <label className={styleTitle}>
                    Info de envío
                    <input
                        className={styleInput}
                        type="text"
                        name="shippingInfo"
                        value={product.shippingInfo ?? ""}
                        onChange={handleChange}
                    />
                </label>

                <label className={styleTitle}>
                    Precio de envío
                    <input
                        className={styleInput}
                        type="number"
                        name="shippingPrice"
                        value={product.shippingPrice ?? ""}
                        onChange={handleChange}
                    />
                </label>

                <label className={styleTitle}>
                    En stock:
                    <input
                    className="ml-2"
                    type="checkbox"
                    name="inStock"
                    checked={product.inStock}
                    onChange={handleChange}
                    />
                </label>

                <label className={styleTitle}>
                    Marcar como producto principal:
                    <input
                    className="ml-2"
                    type="checkbox"
                    name="prime"
                    checked={product.prime}
                    onChange={handleChange}
                    />
                </label>

            <button 
                className="bg-blue-500 text-white font-semibold mt-[1rem] w-full h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-600 transition duration-300" 
                type="submit">
                    Publicar producto
            </button>
            </form>
        </div>
    </>);
}
