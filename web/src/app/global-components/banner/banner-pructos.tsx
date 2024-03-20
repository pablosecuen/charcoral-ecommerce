/* eslint-disable @next/next/no-img-element */
import React from "react";

const BannerProductos = () => {
  return (
    <div className="w-full h-[30vh] relative flex justify-center items-center border md:mt-28">
      <img src="/assets/14.png" alt="banner" className="object-cover brightness-75 " />
      <div className=" text-white  z-10 absolute text-center flex flex-col gap-4">
        {" "}
        <h3 className="text-3xl md:text-7xl  uppercase tracking-widest">tienda online</h3>
        <p className="text-md">Enciéndete con carbón, trozos de madera y encendedores.</p>
      </div>
    </div>
  );
};

export default BannerProductos;
