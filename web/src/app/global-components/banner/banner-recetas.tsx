/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const BannerRecetas = () => {
  return (
    <div className="max-w-[90%] mx-auto w-full relative my-20">
      <img src="/assets/Recurso 20.png" alt="banner background" className="brightness-75 " />
      <div className="z-50 absolute right-1/2 top-1/3   flex flex-col font-semibold">
        {" "}
        <h4 className="text-lg text-white uppercase tracking-widest">recetas los leños</h4>
        <p className="text-3xl text-white uppercase tracking-widest">crea algo inesperado</p>
        <Link
          href="/recetas"
          className="text-white py-4 px-8 mt-20 rounded-full border-2 text-center"
        >
          ver todas las recetas
        </Link>
      </div>
    </div>
  );
};

export default BannerRecetas;
