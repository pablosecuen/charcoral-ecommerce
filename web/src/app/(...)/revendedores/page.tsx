/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

const Revendedores = () => {
  const [selectedButton, setSelectedButton] = useState("comprar");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="w-full  mx-auto min-h-screen  md:mt-16 animate-fadeIn">
      <div className="w-full h-[30vh]  bg-revendedores bg-cover max-w-screen-2xl mx-auto bg-center bg-no-repeat flex justify-center items-center">
        <h2 className="uppercase text-6xl text-blue-900 tracking-widest font-semibold">
          Revendedores
        </h2>
      </div>
      <h3 className="text-3xl uppercase tracking-wider text-blue-900 underline text-center font-semibold md:mt-20">
        ¿Interesado en Colaborar o Adquirir Nuestros Productos?
      </h3>

      <div className="grid w-full max-w-screen-lg mx-auto md:grid-cols-2 md:my-20 gap-4">
        <div className="flex flex-col gap-4">
          {" "}
          <div className="flex gap-4">
            {" "}
            <button
              className={`py-2 px-5 uppercase  transition duration-300 ${
                selectedButton === "comprar"
                  ? "bg-blue-900 text-white border-2 border-gray-400"
                  : "bg-white border-2 border-blue-900 text-blue-900"
              }`}
              onClick={() => handleButtonClick("comprar")}
            >
              Comprar
            </button>
            <button
              className={`py-2 px-5 uppercase text-blue-900 ${
                selectedButton === "vender"
                  ? "bg-blue-900 text-white border-2 border-gray-400"
                  : "bg-white border-2 border-blue-900 text-blue-900"
              }`}
              onClick={() => handleButtonClick("vender")}
            >
              Vender
            </button>
          </div>
          <p className="text-blue-900 text-lg">
            En "Carbón Los Leños", estamos siempre abiertos a establecer nuevas relaciones, tanto si
            deseas suministrarnos carbón de calidad como si estás interesado en llevar nuestros
            productos a tu comercio.
          </p>
          <p className="text-blue-900 text-2xl">
            Valoramos la colaboración y la oportunidad de expandir nuestra red de socios
            comerciales.
          </p>
          <p className="text-blue-900 text-lg">
            Contáctanos a través de este espacio. Cuéntanos un poco sobre ti, tu empresa o tu
            producto, y un miembro de nuestro equipo se pondrá en contacto contigo para explorar
            posibles sinergias.
          </p>
        </div>
        <form>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nombre"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre completo
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="mail"
              name="mail"
              id="mail"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="mail"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo electronico
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="phone"
              name="telefono"
              id="telefono"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="telefono"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono con codigo de area
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="text"
              name="empresa"
              id="empresa"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="empresa"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre de la empresa
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="text"
              name="provincia"
              id="provincia"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="provincia"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Provincia
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <input
              type="text"
              name="ciudad"
              id="ciudad"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="ciudad"
              className="peer-focus:font-medium absolute text-sm text-blue-900 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ciudad
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group border-2 rounded-lg border-blue-900 px-4">
            {" "}
            <textarea
              name="mensaje"
              id="floating_mensaje"
              className="block py-2.5 px-4  w-full h-full text-sm  bg-transparent border-0  border-gray-300 appearance-none text-blue-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="deja tu mensaje..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white hover:bg-blue-900 transition duration-300 hover:translate-y-[2px] mt-2 py-2 rounded-xl"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
export default Revendedores;
