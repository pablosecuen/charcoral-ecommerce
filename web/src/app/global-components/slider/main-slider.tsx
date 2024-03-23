/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

function MainSlider() {
  return (
    <div
      id="default-carousel"
      className="relative w-full transition duration-500 animate-fadeIn mt-14"
      data-carousel="slide"
    >
      <div className="relative h-[40vh] md:h-screen overflow-hidden ">
        <video autoPlay loop muted className="w-full h-full object-cover  absolute ">
          <source src="/assets/fire.mp4" type="video/mp4" />
        </video>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  z-40  text-white flex flex-col items-center gap-8">
          <h1 className="uppercase lg:text-7xl text-4xl font-semibold tracking-widest whitespace-nowrap">
            nuevo shop online
          </h1>
          <Link href="/shop">
            <button className=" text-white border-white border-2 px-6 py-2 uppercase hover:translate-y-[1px]  transition duration-300 hover:shadow-sm hover:shadow-white">
              INGRESAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
