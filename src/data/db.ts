import imgAuriculares from "../assets/products/auriculares-bluetooth.jpg";
import imgMouse from "../assets/products/mouse-inalambrico.jpg";
import imgTeclado from "../assets/products/teclado-mecanico-rgb.jpg";
import imgMonitor from "../assets/products/monitor-led-24.jpg";
import imgSillaGamer from "../assets/products/silla-gamer.jpg";
import imgSmartwatch from "../assets/products/smartwatch-deportivo.jpg";
import imgCamaraWeb from "../assets/products/camara-web-hd.jpg";
import imgMicrofono from "../assets/products/microfono-usb.jpg";
import imgTarjetaVideo from "../assets/products/tarjeta-video-rtx3060.jpg";
import imgDiscoSSD from "../assets/products/disco-ssd-1tb.jpg";

import imgAlmohadaViscoelastica from "../assets/products/almohada-viscoelastica.jpg";
import imgJuegoSabanas2Plazas from "../assets/products/juego-sabanas-2-plazas.jpg";
import imgCortinaBlackout140x220 from "../assets/products/cortina-blackout-140x220.jpg";
import imgOrganizadorCocinaExtensible from "../assets/products/organizador-cocina-extensible.jpg";
import imgCubrecolchonImpermeable from "../assets/products/cubrecolchon-impermeable.jpg";
import imgSet6VasosVidrio from "../assets/products/set-6-vasos-vidrio.jpg";
import imgLamparaPieLedMinimalista from "../assets/products/lampara-pie-led-minimalista.jpg";
import imgRopaCamaCuna from "../assets/products/ropa-cama-cuna.jpg";
import imgTachoBasuraSensor from "../assets/products/tacho-basura-sensor.jpg";
import imgPercheroPieMetalico from "../assets/products/perchero-pie-metalico.jpg";


import imgPelotaFutbolTamanio5 from "../assets/products/pelota-futbol-tamanio-5.jpg";
import imgZapatillasRunningHombre from "../assets/products/zapatillas-running-hombre.jpg";
import imgMancuernasNeoprene2kg from "../assets/products/mancuernas-neoprene-2kg.jpg";
import imgBolsoDeportivoMediano from "../assets/products/bolso-deportivo-mediano.jpg";
import imgRemeraDeportivaDryFit from "../assets/products/remera-deportiva-dry-fit.jpg";
import imgRodilleraElasticaAjustable from "../assets/products/rodillera-elastica-ajustable.jpg";
import imgColchonetaYogaAntideslizante from "../assets/products/colchoneta-yoga-antideslizante.jpg";


import imgAceite from "../assets/products/aceite-girasol.jpg";
import imgFideos from "../assets/products/fideos-spaghetti.jpg";
import imgCafe from "../assets/products/cafe-molido.jpg";
import imgYerba from "../assets/products/yerba-mate.jpg";
import imgAzucar from "../assets/products/azucar-blanca.jpg";
import imgGalletitas from "../assets/products/galletitas-dulces.jpg";


import imgZapatillas from "../assets/products/zapatillas-urbanas.jpg";
import imgCamisa from "../assets/products/camisa-casual.jpg";
import imgRemera from "../assets/products/remera-estampada.jpg";
import imgJeans from "../assets/products/jeans-slimfit.jpg";
import type { ProductDB } from "../typing/Typing";




// Mock product database
const productsDB: ProductDB[] = [
  { idProduct: 1, category: "Tecnología", img: imgAuriculares, colors: ["negro", "azul"], title: "Auriculares Bluetooth", previousPrice: 9999, price: 5999, shippingInfo: "Envío gratis", description: "Auriculares inalámbricos con excelente sonido y batería duradera.", brands: ["Sony", "JBL"], rating: 4.6, inStock: true, prime: false },
  { idProduct: 2, category: "Tecnología", img: imgMouse, colors: ["blanco"], title: "Mouse Inalámbrico", previousPrice: 4499, price: 3499, priceInfo: "Descuento exclusivo", shippingInfo: "Envío gratis", description: "Mouse ergonómico y preciso con conectividad sin cables.", brands: ["Logitech", "HP"], rating: 4.3, inStock: true, prime: true },
  { idProduct: 3, category: "Tecnología", img: imgTeclado, colors: ["negro", "rojo", "gris"], title: "Teclado Mecánico RGB", previousPrice: 12999, price: 9999, priceInfo: "Descuento exclusivo", shippingPrice: 9023, description: "Teclado retroiluminado con switches mecánicos para gaming.", brands: ["Redragon", "Corsair"], rating: 4.8, inStock: false, prime: false },
  { idProduct: 4, category: "Tecnología", img: imgMonitor, colors: ["negro"], title: "Monitor LED 24''", price: 38999, shippingInfo: "Envío gratis", description: "Pantalla LED Full HD de 24 pulgadas ideal para trabajo y juegos.", brands: ["Samsung", "LG"], rating: 4.5, inStock: true, prime: true },
  { idProduct: 5, category: "Tecnología", img: imgSillaGamer, colors: ["negro", "verde"], title: "Silla Gamer Ergonómica", previousPrice: 94999, price: 89999, shippingPrice: 6884, description: "Silla ergonómica con soporte lumbar y diseño para gamers.", brands: ["Cougar", "AKRacing"], rating: 4.7, inStock: false, prime: true },
  { idProduct: 6, category: "Tecnología", img: imgSmartwatch, colors: ["negro", "gris"], title: "Smartwatch Deportivo", previousPrice: 14999, price: 10999, priceInfo: "Descuento exclusivo", shippingPrice: 9021, description: "Reloj inteligente con funciones deportivas y monitoreo de salud.", brands: ["Garmin", "Xiaomi"], rating: 4.4, inStock: true, prime: false },
  { idProduct: 7, category: "Tecnología", img: imgCamaraWeb, colors: ["blanco"], title: "Cámara Web HD 1080p", previousPrice: 7999, price: 5999, shippingPrice: 7832, description: "Cámara web de alta definición ideal para videollamadas.", brands: ["Logitech", "Genius"], rating: 4.1, inStock: true, prime: true },
  { idProduct: 8, category: "Tecnología", img: imgMicrofono, colors: ["negro", "plateado"], title: "Micrófono USB Profesional", price: 12999, shippingInfo: "Envío gratis", description: "Micrófono de calidad profesional para streaming o grabación.", brands: ["Blue", "Razer"], rating: 4.6, inStock: false, prime: false },
  { idProduct: 9, category: "Tecnología", img: imgTarjetaVideo, colors: ["negro", "gris"], title: "Tarjeta de Video RTX 3060", previousPrice: 189999, price: 159999, priceInfo: "Oferta especial", shippingPrice: 6893, description: "Potente tarjeta gráfica para videojuegos y edición multimedia.", brands: ["NVIDIA", "MSI"], rating: 4.9, inStock: true, prime: true },
  { idProduct: 10, category: "Tecnología", img: imgDiscoSSD, colors: ["blanco", "azul"], title: "Disco SSD 1TB", previousPrice: 44999, price: 39999, shippingInfo: "Envío gratis", description: "Unidad de almacenamiento SSD rápida y confiable de 1TB.", brands: ["Kingston", "Crucial"], rating: 4.7, inStock: true, prime: false },

  { idProduct: 11, category: "Hogar", img: imgAlmohadaViscoelastica, colors: ["blanco", "beige"], title: "Almohada viscoelástica", price: 4999, shippingPrice: 8122, description: "Almohada ergonómica con espuma viscoelástica para máximo confort.", brands: ["Tempur", "Simmons"], rating: 4.4, inStock: true, prime: false },
  { idProduct: 12, category: "Hogar", img: imgJuegoSabanas2Plazas, colors: ["azul", "gris", "blanco"], title: "Juego de sábanas 2 plazas", previousPrice: 8499, price: 6999, priceInfo: "20% OFF", shippingInfo: "Envío gratis", description: "Set de sábanas suaves y duraderas para cama doble.", brands: ["Cannon", "Velfont"], rating: 4.2, inStock: false, prime: true },
  { idProduct: 13, category: "Hogar", img: imgCortinaBlackout140x220, colors: ["gris", "negro"], title: "Cortina blackout 140x220 cm", previousPrice: 5999, price: 4399, shippingPrice: 9021, description: "Cortina que bloquea la luz y mejora la privacidad.", brands: ["Home Collection", "DecoLuz"], rating: 4.1, inStock: true, prime: true },
  { idProduct: 14, category: "Hogar", img: imgOrganizadorCocinaExtensible, colors: ["blanco"], title: "Organizador de cocina extensible", price: 2599, shippingInfo: "Retiro gratis en sucursal", shippingPrice: 6894, description: "Organizador adaptable para mantener tu cocina ordenada.", brands: ["Joseph Joseph", "Brabantia"], rating: 3.9, inStock: false, prime: false },
  { idProduct: 15, category: "Hogar", img: imgCubrecolchonImpermeable, colors: ["blanco", "gris"], title: "Cubrecolchón impermeable", price: 7999, shippingPrice: 9312, description: "Protege tu colchón con este cubrecolchón resistente al agua.", brands: ["Hogartex", "Protect-a-Bed"], rating: 4.3, inStock: true, prime: false },
  { idProduct: 16, category: "Hogar", img: imgSet6VasosVidrio, colors: ["transparente"], title: "Set de 6 vasos de vidrio", price: 2799, priceInfo: "2x1 por tiempo limitado", shippingPrice: 7983, description: "Juego elegante de vasos de vidrio para toda ocasión.", brands: ["Luminarc", "Bormioli Rocco"], rating: 4.5, inStock: true, prime: true },
  { idProduct: 17, category: "Hogar", img: imgLamparaPieLedMinimalista, colors: ["negro", "blanco"], title: "Lámpara de pie LED minimalista", previousPrice: 24999, price: 18499, shippingInfo: "Envío a todo el país", shippingPrice: 8721, description: "Lámpara moderna de pie con luz LED regulable.", brands: ["Philips", "Eglo"], rating: 4.6, inStock: false, prime: true },
  { idProduct: 18, category: "Hogar", img: imgRopaCamaCuna, colors: ["celeste", "blanco"], title: "Ropa de cama para cuna", price: 5999, shippingPrice: 6882, description: "Juego de sábanas suaves y cómodas para bebé.", brands: ["Petit Baby", "Mimo & Co"], rating: 4.2, inStock: true, prime: false },
  { idProduct: 19, category: "Hogar", img: imgTachoBasuraSensor, colors: ["gris", "negro"], title: "Tacho de basura con sensor", price: 9999, shippingInfo: "Despacho en 24hs", shippingPrice: 9024, description: "Basurero automático con sensor de movimiento.", brands: ["Simplehuman", "Brabantia"], rating: 4.4, inStock: true, prime: true },
  { idProduct: 20, category: "Hogar", img: imgPercheroPieMetalico, colors: ["negro"], title: "Perchero de pie metálico", price: 6999, shippingPrice: 7831, description: "Perchero resistente para organizar ropa y accesorios.", brands: ["IKEA", "Todomoda"], rating: 4.0, inStock: false, prime: false },

  { idProduct: 21, category: "Supermercado", img: imgAceite, colors: ["amarillo", "transparente"], title: "Aceite Girasol 1L", previousPrice: 1299, price: 999, shippingInfo: "Envío gratis", description: "Aceite de girasol ideal para cocinar con menos grasa.", brands: ["Cocinero", "Natura"], rating: 4.3, inStock: true, prime: false },
  { idProduct: 22, category: "Supermercado", img: imgFideos, colors: ["amarillo"], title: "Fideos Spaghetti 500g", price: 699, shippingPrice: 8432, description: "Fideos tipo spaghetti elaborados con trigo seleccionado.", brands: ["Lucchetti", "Matarazzo"], rating: 4.0, inStock: true, prime: true },
  { idProduct: 23, category: "Supermercado", img: imgCafe, colors: ["marrón", "negro"], title: "Café Molido 250g", previousPrice: 1999, price: 1599, priceInfo: "Descuento exclusivo", shippingPrice: 7811, description: "Café molido intenso para disfrutar en casa.", brands: ["La Virginia", "Cabrales"], rating: 4.4, inStock: false, prime: false },
  { idProduct: 24, category: "Supermercado", img: imgYerba, colors: ["verde"], title: "Yerba Mate 1kg", price: 1899, shippingPrice: 9022, description: "Yerba mate tradicional para compartir en rondas de mate.", brands: ["Taragüí", "Rosamonte"], rating: 4.6, inStock: true, prime: true },
  { idProduct: 25, category: "Supermercado", img: imgAzucar, colors: ["blanco"], title: "Azúcar Blanca 1kg", previousPrice: 999, price: 749, shippingPrice: 6893, description: "Azúcar refinada para uso diario en cocina y bebidas.", brands: ["Ledesma", "Chango"], rating: 4.2, inStock: true, prime: false },
  { idProduct: 26, category: "Supermercado", img: imgGalletitas, colors: ["beige", "marrón"], title: "Galletitas Dulces 300g", price: 849, shippingPrice: 7984, description: "Galletitas dulces ideales para merendar o acompañar el café.", brands: ["Terrabusi", "Bagley"], rating: 4.3, inStock: true, prime: false },
  
  { idProduct: 27, category: "Deporte", img: imgPelotaFutbolTamanio5, colors: ["blanco", "negro"], title: "Pelota de fútbol tamaño 5", price: 7999, shippingPrice: 8123, description: "Pelota resistente y profesional para entrenamientos y partidos.", brands: ["Penalty", "Adidas"], rating: 4.5, inStock: false, prime: true },
  { idProduct: 28, category: "Deporte", img: imgZapatillasRunningHombre, colors: ["gris", "azul"], title: "Zapatillas running hombre", previousPrice: 28999, price: 21999, priceInfo: "25% OFF", shippingInfo: "Envío gratis", description: "Zapatillas deportivas livianas y cómodas para correr.", brands: ["Nike", "Topper"], rating: 4.6, inStock: true, prime: true },
  { idProduct: 29, category: "Deporte", img: imgMancuernasNeoprene2kg, colors: ["rojo", "negro"], title: "Mancuernas neoprene 2kg", price: 3499, shippingPrice: 9344, description: "Set de mancuernas con recubrimiento antideslizante para entrenar.", brands: ["Everlast", "K6 Fitness"], rating: 4.3, inStock: true, prime: false },
  { idProduct: 30, category: "Deporte", img: imgBolsoDeportivoMediano, colors: ["azul", "negro"], title: "Bolso deportivo mediano", price: 5799, shippingInfo: "Retiro en tienda disponible", shippingPrice: 6881, description: "Bolso cómodo con compartimentos ideal para gimnasio o viajes.", brands: ["Puma", "Reebok"], rating: 4.1, inStock: false, prime: true },
  { idProduct: 31, category: "Deporte", img: imgRemeraDeportivaDryFit, colors: ["azul", "negro"], title: "Remera deportiva dry fit", price: 3999, shippingPrice: 9027, description: "Remera respirable de secado rápido para actividades físicas.", brands: ["Nike", "Under Armour"], rating: 4.2, inStock: true, prime: false },
  { idProduct: 32, category: "Deporte", img: imgRodilleraElasticaAjustable, colors: ["gris"], title: "Rodillera elástica ajustable", price: 2399, priceInfo: "Cupón 20%", shippingPrice: 7832, description: "Rodillera flexible para protección en entrenamientos intensos.", brands: ["Reforce", "Mueller"], rating: 4.1, inStock: false, prime: true },
  { idProduct: 33, category: "Deporte", img: imgColchonetaYogaAntideslizante, colors: ["verde", "violeta"], title: "Colchoneta de yoga antideslizante", previousPrice: 8499, price: 6899, shippingPrice: 8655, description: "Colchoneta cómoda con excelente agarre para practicar yoga.", brands: ["Manduka", "Spokey"], rating: 4.4, inStock: true, prime: true },
  
  { idProduct: 34, category: "Moda", img: imgZapatillas, colors: ["blanco", "azul"], title: "Zapatillas Urbanas", previousPrice: 25999, price: 19999, priceInfo: "Cupón de descuento disponible", shippingPrice: 9021, description: "Zapatillas urbanas modernas y versátiles para uso diario.", brands: ["Converse", "Vans"], rating: 4.5, inStock: true, prime: false },
  { idProduct: 35, category: "Moda", img: imgCamisa, colors: ["celeste"], title: "Camisa Casual Hombre", previousPrice: 14999, price: 11999, priceInfo: "Descuento exclusivo online", shippingPrice: 6732, description: "Camisa de vestir informal ideal para oficina o salidas.", brands: ["Levi's", "Topper"], rating: 4.0, inStock: false, prime: true },
  { idProduct: 36, category: "Moda", img: imgRemera, colors: ["rosado", "blanco"], title: "Remera Estampada Mujer", previousPrice: 9999, price: 7499, priceInfo: "¡Aprovechá la oferta!", shippingPrice: 5894, description: "Remera femenina con diseño estampado y tela suave.", brands: ["Ossira", "Forever 21"], rating: 4.3, inStock: true, prime: false },
  { idProduct: 37, category: "Moda", img: imgJeans, colors: ["azul oscuro"], title: "Jeans Slim Fit", previousPrice: 18999, price: 14999, priceInfo: "Cupón especial en checkout", shippingPrice: 9987, description: "Jeans modernos ajustados con estilo urbano y cómodo.", brands: ["Levi's", "Wrangler"], rating: 4.6, inStock: false, prime: true }
];


// Categories
const categories = [
  { id: 'technology', name: 'Tecnología' },
  { id: 'home', name: 'Hogar' },
  { id: 'supermarket', name: 'Supermercado' },
  { id: 'sport', name: 'Deporte' },
  { id: 'fashion', name: 'Moda' },
];

export { productsDB, categories };
