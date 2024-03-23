/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import SocialMediaDisplay from "../icons/social-media-icons/social-media-display";
import { useState } from "react";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-blue-900 fixed w-full z-50 top-0 start-0 border-b border-blue-200 dark:border-blue-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/logo/Recurso 19.png" className="h-8" alt="Flowbite Logo" />
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SocialMediaDisplay />

          <Cart />

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition duration-500 overflow-hidden ${
            menuOpen ? "opacity-1 h-full" : "opacity-0 h-0 md:opacity-100 md:h-auto"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-sm p-4 md:p-0 mt-4 font-medium border border-blue-100 rounded-lg bg-blue-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-blue-800 md:dark:bg-blue-900 dark:border-blue-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/productos"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="/distribucion"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
              >
                Distribucion
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="/revendedores"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
              >
                Revendedores
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="block py-2 px-3 text-blue-900 font-semibold  rounded hover:bg-blue-100 uppercase tracking-widest md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:font-semibold dark:hover:bg-blue-700 dark:hover:font-semibold md:dark:hover:bg-transparent dark:border-blue-700"
              >
                E-shop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
