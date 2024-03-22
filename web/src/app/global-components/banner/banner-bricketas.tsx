import Image from "next/image";
import React from "react";

import briquetasimg from "@/../public/assets/Recurso1.png";
import Link from "next/link";

const BannerBricketas = () => {
  return (
    <div className="max-w-screen w-[98vw] mx-auto md:my-20 bg-briquetas bg-cover bg-no-repeat bg-center overflow-hidden bg-[#135a34] p-4 md:-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="banner-item md:col-span-1 md:h-96 flex items-center justify-center">
          <Image
            src={briquetasimg}
            alt="logo"
            width={0}
            height={0}
            className="w-1/2"
            quality={100}
          />
        </div>
        <div className="banner-item col-span-2 text-white p-4 flex flex-col items-center justify-center  gap-4 ">
          <h2 className="text-3xl md:text-4xl uppercase font-semibold tracking-widest md:text-end ">
            ¿ya probaste las
            <span className="ml-2 mb-1 border-b-4 border-yellow-300">briquetas</span>?
          </h2>
          <div className=" md:w-10/12 md:text-2xl text-center  !leading-tight mt-2 flex flex-col md:flex-row items-center">
            <p> Conocé toda nuestra línea de productos </p>
            <Link
              href="/shop"
              className="text-white bg-yellow-300 py-2 px-4 whitespace-nowrap mt-4 md:mt-0 md:ml-4"
            >
              SHOP ONLINE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBricketas;
