/* eslint-disable @next/next/no-img-element */
import { arraySupermercados } from "@/app/global-components/data";
import FormularioContacto from "@/app/global-components/form/formulario-contacto";

const Distribucion = () => {
  return (
    <div className="w-full  mx-auto min-h-screen  mt-16 animate-fadeIn">
      <div className="w-full h-[30vh]  bg-distribucion bg-cover max-w-screen-2xl mx-auto bg-center bg-no-repeat flex justify-center items-center">
        <h2 className="uppercase text-5xl md:text-6xl text-white tracking-widest font-semibold">
          Distribucion
        </h2>
      </div>
      <div className="w-full min-h-screen md:p-10 flex flex-col gap-10 max-w-screen-2xl mx-auto mt-10 md:mt-0">
        <h3 className="text-4xl uppercase tracking-wider text-blue-900 underline text-center font-semibold">
          encontranos en todo el pais
        </h3>
        <span className="text-2xl tracking-wider  text-center mb-10">
          Disponible en una amplia red de supermercados a lo largo del país.
        </span>
        <div className="w-full mx-auto overflow-hidden md:grid flex flex-wrap justify-center  md:grid-cols-5  bg-supermercado bg-center bg-cover bg-no-repeat">
          {" "}
          {arraySupermercados.map((supermercado, index) => (
            <div
              key={index}
              className=" h-72 w-64 flex flex-col items-center justify-start  bg-white p-2 rounded-xl"
            >
              <img src={supermercado.img} alt="supermercado logo" className="w-2/3 mx-auto" />
              <span>{supermercado.descripcion}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-[50vh] md:p-10 flex flex-col md:flex-row items-center justify-evenly text-blue-900 gap-20 overflow-hidden p-8 ">
        <div className="border-4 border-blue-900 rounded-2xl flex flex-col gap-4 text-center p-12 md:w-80 md:h-52 w-full">
          <span className="text-7xl font-semibold ">15</span>
          <span className="text-xl font-semibold">PRODUCTOS</span>
        </div>
        <div className="border-4 border-blue-900 rounded-2xl flex flex-col gap-4 text-center p-12 md:w-80 md:h-52 w-full">
          <span className="text-7xl font-semibold">10</span>
          <span className="text-xl font-semibold whitespace-nowrap">CADENAS NACIONALES</span>
        </div>
        <div className="border-4 border-blue-900 rounded-2xl flex flex-col gap-4 text-center p-12 md:w-80 md:h-52 w-full">
          <span className="text-7xl font-semibold">2000</span>
          <span className="text-xl font-semibold">TIENDAS</span>
        </div>
      </div>
      <div className="w-full flex flex-col overflow-hidden">
        {" "}
        <img
          src="/assets/Recurso 30.webp"
          alt="map zones picture"
          className="w-screen scale-125 mt-10 md:scale-100 md:mt-10"
        />
        <img
          src="/assets/Recurso 31.webp"
          alt="map zones picture"
          className="w-screen scale-125 mt-10 md:scale-100 md:my-10 "
        />
      </div>

      <FormularioContacto />
    </div>
  );
};
export default Distribucion;
