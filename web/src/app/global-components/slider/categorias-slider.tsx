/* eslint-disable @next/next/no-img-element */
"use client";
import { categoriaSliderAtt } from "../data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function CategoriaSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const handleSlideIndicator = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handleCategoriaClick = (categoria: string) => {
    // Buscar el índice del primer producto que coincide con la categoría seleccionada
    const slideIndex = categoriaSliderAtt.findIndex((slide) => slide.categoria === categoria);
    setCurrentSlide(slideIndex);
  };

  const staticContent = (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between animate-fadeIn md:max-w-screen-xl max-w-screen overflow-hidden mx-auto mb-10">
      <h3 className="text-5xl text-blue-900 uppercase tracking-widest font-semibold">PRODUCTOS</h3>
      <div className="flex gap-3">
        {categoriaSliderAtt.map((categoria, index) => (
          <button
            key={categoria.title}
            onClick={() => handleCategoriaClick(categoria.categoria)}
            className={`py-2 px-4 rounded-full border-2 transition duration-300 ${
              currentSlide === index
                ? "bg-blue-900 text-white"
                : "bg-white border-blue-900 text-blue-900"
            }`}
          >
            {categoria.categoria}
          </button>
        ))}
      </div>
    </div>
  );

  const dynamicContent = (
    <div className="flex items-center animate-fadeIn md:max-w-screen-xl max-w-scren overflow-hidden mx-auto">
      {categoriaSliderAtt.map((slide, index) => (
        <div
          key={slide.title}
          className={`flex flex-col md:flex-row  items-center border-[8px] border-blue-900  md:p-16 md:h-[500px] p-4 animate-fadeIn ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <Link href={`/shop`} className="w-full  items-center flex justify-center h-96">
            <div className="w-full ">
              {" "}
              <Image
                src={slide.img}
                alt={slide.title}
                width={0}
                height={0}
                className="hover:scale-110 transition duration-300 mx-auto  object-cover"
              />
            </div>
          </Link>
          <div className="flex flex-col items-start justify-center md:p-20">
            <h3 className="underline text-blue-900 md:text-4xl text-2xl font-semibold uppercase  pb-10">
              {slide.title}
            </h3>
            <p className="text-blue-900 mb-8 md:text-xl ">{slide.descripcion}</p>

            <Link
              href={`/shop`}
              className="uppercase py-2 px-4 border-4 text-blue-900 rounded-xl border-blue-900 ml-auto mb-auto"
            >
              ver en tienda
            </Link>
          </div>
        </div>
      ))}
      <div />
    </div>
  );

  return (
    <div
      id="default-carousel"
      className="relative w-full transition duration-500 animate-fadeIn min-h-screen md:p-20 p-2"
      data-carousel="slide"
    >
      {staticContent}
      {dynamicContent}

      <button
        type="button"
        className="absolute hideen top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>

          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default CategoriaSlider;
