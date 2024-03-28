/* eslint-disable @next/next/no-img-element */
"use client";
import BannerProductos from "@/app/global-components/banner/banner-pructos";
import { products } from "@/app/global-components/data";
import Stars from "@/app/global-components/icons/stars/stars";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    // Restablecer los filtros cuando showFilters es false
    if (!showFilters) {
      setSelectedCategories([]);
    }
  }, [showFilters]);

  const handleCategoryChange = (categoria: string) => {
    // Agregar o eliminar la categoría seleccionada
    if (selectedCategories.includes(categoria)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== categoria));
    } else {
      setSelectedCategories([...selectedCategories, categoria]);
    }
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) => selectedCategories.includes(product.categoria))
      : products;

  return (
    <div className="min-h-screen mt-2 relative">
      <BannerProductos />
      <div className="max-w-screen-2xl mx-auto flex justify-end items-center text-black mt-20 mb-10 md:mb-0 px-4 md:px-0">
        <hr className="border  border-black/40 w-full" />
        {showFilters ? (
          <button onClick={() => setShowFilters(false)} className="whitespace-nowrap ml-4">
            Cerrar Filtros
          </button>
        ) : (
          <button onClick={() => setShowFilters(true)} className="whitespace-nowrap ml-4">
            Mostrar Filtros
          </button>
        )}
      </div>
      <div className="flex md:hidden">
        {" "}
        {showFilters && (
          <>
            <div
              className="w-full h-screen fixed top-0 left-0  z-40"
              onClick={() => setShowFilters(false)}
            ></div>
            <div
              className={`w-1/2 md:1/4 h-screen mt-20  transition  duration-500 fixed -top-4 left-0 z-50 bg-white shadow-xl shadow-black-30  ${
                showFilters ? "translate-x-0 animate-fadeIn" : "-translate-x-full opacity-0"
              }`}
            >
              <h5 className="ml-4 text-xl font-semibold bg-white">CATEGORIAS</h5>
              {Array.from(new Set(products.map((product) => product.categoria))).map(
                (categoria) => (
                  <div key={categoria} className="p-4 flex gap-4 items-center  ">
                    <input
                      type="checkbox"
                      className="rounded-full cursor-pointer"
                      onChange={() => handleCategoryChange(categoria)}
                    />
                    <label className="text-sm">{categoria}</label>
                  </div>
                )
              )}
            </div>
          </>
        )}
        <ul
          ref={animationParent}
          className={`container max-w-screen-2xl mx-auto grid p-4  md:p-0 ${
            showFilters
              ? "lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2"
              : "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
          } gap-4 justify-center items-center h-full md:my-20`}
        >
          {/* Renderizar menú aside solo si showFilters es true */}
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-md shadow-black/30 hover:-translate-y-[3px] hover:drop-shadow-xl hover:shadow-black/80 transition duration-300"
            >
              <Image
                className="p-8 h-96 w-full rounded-t-lg object-contain "
                src={product.img}
                alt="product image"
              />

              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>

                <div className="flex items-center mt-2.5 mb-5">
                  <Stars />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $ {product.price}
                  </span>
                </div>
                <Link href={`/shop/${product.title}`} className=" ">
                  <button className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-500 hover:translate-y-[2px]">
                    Ver mas
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex ">
        {" "}
        {showFilters && (
          <>
            <div
              className="w-full h-screen fixed top-0 left-0  z-40"
              onClick={() => setShowFilters(false)}
            ></div>
            <div
              className={`w-1/4 h-screen mt-20  transition  duration-500  bg-white   ${
                showFilters ? "translate-x-0 animate-fadeIn" : "-translate-x-full opacity-0"
              }`}
            >
              <h5 className="ml-8 text-xl font-semibold bg-white">CATEGORIAS</h5>
              {Array.from(new Set(products.map((product) => product.categoria))).map(
                (categoria) => (
                  <div key={categoria} className="p-4 flex gap-4 items-center  ml-4">
                    <input
                      type="checkbox"
                      className="rounded-full cursor-pointer"
                      onChange={() => handleCategoryChange(categoria)}
                    />
                    <label className="text-sm ">{categoria}</label>
                  </div>
                )
              )}
            </div>
          </>
        )}
        <ul
          ref={animationParent}
          className={`container max-w-screen-2xl mx-auto grid p-4  md:p-0 ${
            showFilters
              ? "lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2"
              : "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
          } gap-4 justify-center items-center h-full md:my-20`}
        >
          {/* Renderizar menú aside solo si showFilters es true */}
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-md shadow-black/30 hover:-translate-y-[3px] hover:drop-shadow-xl hover:shadow-black/80 transition duration-300"
            >
              <Image
                className="p-8 h-96 w-full rounded-t-lg object-contain "
                src={product.img}
                alt="product image"
              />

              <div className="px-5 pb-5">
                <Link href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                  <Stars />
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $ {product.price}
                  </span>
                </div>
                <Link href={`/shop/${product.title}`} className=" ">
                  <button className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-500 hover:translate-y-[2px]">
                    Ver mas
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
