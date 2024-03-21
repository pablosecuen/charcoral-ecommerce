/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const Productos = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto min-h-screen  md:mt-16 animate-fadeIn">
      <div className="w-full h-[30vh]  bg-productos bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="uppercase text-6xl text-white tracking-widest font-semibold">productos</h2>
      </div>
      <div className="w-full grid md:grid-cols-2 p-4 md:p-20">
        <div className="flex flex-col items-start md:p-10 gap-4">
          <h4 className="text-5xl mb-4 uppercase font-semibold">combustibles</h4>
          <span className="text-2xl">Carbón “Los Leños” XXL | 8Kg</span>
          <p>
            El sabor y la duración que tu asado merece. Nuestro Carbón "Los Leños" XXL, hecho 100%
            de madera de quebracho blanco, es la elección ideal para quienes buscan elevar su
            experiencia de asado. Este carbón de alta calidad quema más tiempo y a mayor
            temperatura, asegurando un sabor excepcional con menos humo y sin chispas. Con una
            duración de encendido de hasta 4 horas, cada bolsa de 8Kg es sinónimo de sabor y
            eficiencia, transformando cada comida en una obra maestra culinaria.
          </p>
          <Link
            href="/shop"
            className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-2xl ml-auto"
          >
            ver en tienda
          </Link>
        </div>
        <img
          src="/assets/Recurso 13.webp"
          alt="charcoal producto picture with a black backgrounda  product sample"
          className="w-full"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 p-4 md:p-20">
        <img
          src="/assets/Recurso 14.webp"
          alt="charcoal producto picture with a black backgrounda  product sample"
          className="w-full"
        />
        <div className="flex flex-col items-start md:p-10 gap-4">
          <h4 className="text-5xl mb-4 uppercase font-semibold">INICIADORES DE FUEGO</h4>
          <span className="text-2xl">Leñitos “Los Leños”</span>
          <p>
            Encendido fácil, compromiso ecológico. Nuestros Leñitos "Los Leños" son la solución
            ideal para iniciar el fuego de manera rápida y sin complicaciones. Cuidadosamente
            cortados a 25 cm de largo, estos leñitos están hechos de una mezcla sostenible de madera
            de eucalipto y pino, asegurando no solo un encendido eficiente sino también un
            compromiso con el medio ambiente. Al ser 100% reciclados y ecológicos, cada Leñito
            contribuye a un asado más verde, sin sacrificar la calidad ni la conveniencia.
          </p>
          <Link
            href="/shop"
            className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-2xl ml-auto"
          >
            ver en tienda
          </Link>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 p-4 md:p-20">
        <div className="flex flex-col items-start md:p-10 gap-4">
          <h4 className="text-5xl mb-4 uppercase font-semibold">ACCESORIOS</h4>
          <span className="text-2xl">Kit Parrillero “Los Leños”</span>
          <p>
            Todo lo que necesitas para elevar tu experiencia de asado. Diseñado para satisfacer
            tanto a entusiastas como a profesionales de la parrilla, nuestro Kit Parrillero "Los
            Leños" es el compañero perfecto para cualquier asado. Compuesto por herramientas
            fabricadas con materiales de alta calidad, este kit no solo promete durabilidad y
            resistencia, sino también eficiencia y comodidad en su uso.
          </p>
          <Link
            href="/shop"
            className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-2xl ml-auto"
          >
            ver en tienda
          </Link>
        </div>
        <img
          src="/assets/Recurso 17.webp"
          alt="charcoal producto picture with a black backgrounda  product sample"
          className="w-full"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 p-4 md:p-20">
        <img
          src="/assets/Recurso 18.webp"
          alt="charcoal producto picture with a black backgrounda  product sample"
          className="w-full"
        />
        <div className="flex flex-col items-start md:p-10 gap-4">
          <h4 className="text-5xl mb-4 uppercase font-semibold">SALES</h4>
          <span className="text-2xl">Sales “Los Leños” | Tres Variantes Exquisitas</span>
          <p>
            Explora la colección de Sales de “Los Leños”, tres variantes cuidadosamente elegidas
            para enriquecer tus platos con sabores únicos y auténticos. Cada mezcla, elaborada con
            la mejor sal marina y una selección específica de especias y hierbas, está diseñada para
            satisfacer los paladares más exigentes y añadir versatilidad en la cocina.
          </p>
          <Link
            href="/shop"
            className="px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-2xl ml-auto"
          >
            ver en tienda
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Productos;
