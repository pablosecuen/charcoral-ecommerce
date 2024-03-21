"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { products } from "@/app/global-components/data";
import Image from "next/image";
import Stars from "@/app/global-components/icons/stars/stars";
import Relacionados from "@/app/global-components/carousel/relacionados-carousel";
import BannerRecetas from "@/app/global-components/banner/banner-recetas";

const ProductDetail = ({ params }: { params: { title: string } }) => {
  const decodedTitle = params.title ? decodeURIComponent(params.title as string) : "";

  // Buscamos el producto correspondiente en la lista de productos
  const product = products.find((product) => product.title === decodedTitle);

  if (!product) {
    return <div className="my-48 min-h-screen w-full">Producto no encontrado</div>;
  }

  return (
    <>
      <div className="w-full min-h-screen mt-36">
        <div className="grid grid-cols-2 max-w-screen-2xl mx-auto border">
          <div className=" flex flex-col">
            <div className="border flex justify-center items-center">
              <Image
                src={product.img}
                alt={product.title}
                width={0}
                height={0}
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h5 className="text-2xl uppercase text-blue-800">
                caracteristicas generales del producto
              </h5>
              <details>
                <summary className="text-xl uppercase text-blue-800">
                  El sabor y la duracion que tu asado merece
                </summary>
                {/* Aquí puedes agregar las características generales del producto */}
                <p>Característica 1: Valor</p>
                <p>Característica 2: Valor</p>
                <p>Característica 3: Valor</p>
                {/* Agrega más características según sea necesario */}
              </details>
              <details>
                <summary className="text-xl uppercase text-blue-800">
                  Hecho con 100% madera de quebracho blanco
                </summary>
                {/* Aquí puedes agregar las características generales del producto */}
                <p>Característica 1: Valor</p>
                <p>Característica 2: Valor</p>
                <p>Característica 3: Valor</p>
                {/* Agrega más características según sea necesario */}
              </details>
              <details>
                <summary className="text-xl uppercase text-blue-800">
                  Asegura un sabor excepcional con menos humo y sin chispas
                </summary>
                {/* Aquí puedes agregar las características generales del producto */}
                <p>Característica 1: Valor</p>
                <p>Característica 2: Valor</p>
                <p>Característica 3: Valor</p>
                {/* Agrega más características según sea necesario */}
              </details>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col border p-10 items-center justify-between  h-screen">
            <h5 className="text-3xl uppercase text-blue-800">{product.title}</h5>
            <p>$ {product.price}</p>
            <Stars />
            <p>{product.description}</p>

            <div className="w-full mx-auto  flex flex-col items-center ">
              <span>Seleccione la cantidad</span>
              <div className="flex items-center border">
                <span className="px-8 ">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110 cursor-pointer transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
                <span className="px-8 ">10</span>
                <span className="px-8 ">
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="hover:scale-110 cursor-pointer transition duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 15L12 9L18 15"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <button className="text-white w-10/12 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-500 hover:translate-y-[2px]">
              Agregar al carrito
            </button>
            <hr className="w-10/12 mx-auto border" />
            <p className="">Envio terrestre estandar gratuito en pedidos de $20000 o mas</p>
            <hr className="w-10/12 mx-auto border" />
            <hr className="w-10/12 mx-auto border" />
            <p className=" uppercase">Ver documento del producto y preguntas precuentes</p>
            <hr className="w-10/12 mx-auto border" />
          </div>
        </div>
      </div>
      <Relacionados categoria={product.categoria} />
      <BannerRecetas />
    </>
  );
};

export default ProductDetail;
