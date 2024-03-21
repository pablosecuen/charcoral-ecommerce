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
    <div className="flex items-center justify-between animate-fadeIn max-w-screen-xl mx-auto mb-10">
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
    <div className="flex items-center animate-fadeIn max-w-screen-xl mx-auto">
      {categoriaSliderAtt.map((slide, index) => (
        <div
          key={slide.title}
          className={`flex items-center border-[8px] border-blue-900  p-16 h-[500px] ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <Link href={`/shop`} className="w-full">
            <Image
              src={slide.img}
              alt={slide.title}
              width={0}
              height={0}
              className="hover:scale-110 transition duration-300"
            />
          </Link>
          <div className="flex flex-col items-start justify-center p-20">
            <h3 className="underline text-blue-900 text-4xl font-semibold uppercase  pb-10">
              {slide.title}
            </h3>
            <p className="text-blue-900 mb-8 text-xl ">{slide.descripcion}</p>

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
      className="relative w-full transition duration-500 animate-fadeIn h-screen p-20"
      data-carousel="slide"
    >
      {staticContent}
      {dynamicContent}

      {/*       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {categoriaSliderAtt.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideIndicator(index)}
            data-carousel-slide-to={index}
          />
        ))}
      </div> */}

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
