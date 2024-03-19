/* eslint-disable @next/next/no-img-element */
"use client";
import svg from "@../../../public/vercel.svg";
import Image from "next/image";
import { useState } from "react";

function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
  };

  const handleSlideIndicator = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };
  return (
    <div
      id="default-carousel"
      className="relative w-full transition duration-500 "
      data-carousel="slide"
    >
      <div className="relative h-screen overflow-hidden rounded-lg ">
        <div
          className={`duration-700 ease-in-out   ${currentSlide === 0 ? "opacity-1" : "opacity-0"}`}
          data-carousel-item
        >
          <Image
            src={svg}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            width={0}
            height={0}
            alt="imagen 1"
          />
        </div>

        <div
          className={`duration-700 ease-in-out ${currentSlide === 1 ? "opacity-1" : "opacity-0"}`}
          data-carousel-item
        >
          <Image
            src={svg}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            width={0}
            height={0}
            alt="imagen 2"
          />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[0, 1].map((index) => (
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
      </div>

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

export default MainSlider;
