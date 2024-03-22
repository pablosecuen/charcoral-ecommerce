import Image from "next/image";
import React from "react";
import logo from "@/../public/assets/remera-LEÑOS-removebg-preview.png";

const BannerHistoria = () => {
  return (
    <div className="container mx-auto md:max-w-[70%] p-4 md:p-0  md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="banner-item col-span-2 text-green-600 p-4 flex flex-col items-start justify-center gap-4">
          <h2 className="text-3xl md:text-4xl uppercase font-semibold tracking-widest text-start">
            nuestra historia
          </h2>
          <p className="text-justify md:w-10/12 md:text-2xl  !leading-tight">
            Lo que comenzó como una empresa familiar en 2016 es hoy uno de los mayores fabricantes y
            distribuidores de carbón de la Argentina, manteniendo los valores de entregar un
            producto de calidad responsablemente que nos impulsaron a crecer en el principio
          </p>
        </div>
        <div className="banner-item  md:col-span-1">
          <Image src={logo} alt="logo" width={0} height={0} />
        </div>
      </div>
    </div>
  );
};

export default BannerHistoria;
