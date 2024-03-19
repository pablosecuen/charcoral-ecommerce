/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import behance from "react-useanimations/lib/behance";
import linkedin from "react-useanimations/lib/linkedin";
import mail from "react-useanimations/lib/mail";
import SocialMediaDisplay from "../icons/social-media-icons/social-media-display";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                LOGO
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-2 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Mapa del sitio
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/distribucion" className="hover:underline">
                    Distribucion
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:underline">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-md font-semibold text-gray-900 uppercase dark:text-white ">
                Enlaces de interes
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-2">
                  <Link href="/privacidad" className="hover:underline">
                    Politicas de privacidad
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Locos por el asado
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-md font-semibold text-gray-900 uppercase dark:text-white ">
                Contacto
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-2">
                  <Link
                    href="mailto:contacto@carbonlosleños.com.ar"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    contacto@carbonlosleños.com.ar
                  </Link>
                </li>
                <li className="flex items-center">
                  <h2 className=" text-lg font-semibold text-gray-900 uppercase dark:text-white">
                    Seguinos
                  </h2>
                  <SocialMediaDisplay size={40} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}
            <a href="https://flowbite.com/" className="hover:underline">
              Los Leños
            </a>
            . Todos los derechos reservados.
          </span>
          <div className="flex mt-4 items-center sm:justify-center sm:mt-0">
            <Link href="/wamcreativo.com" target="_blank" rel="noreferrer noopener">
              {" "}
              <h3 className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Diseñado y desarrollado por WAM! creativo
              </h3>
            </Link>
            <Link
              href="https://www.facebook.com/wam.estudiocreativo"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white "
              target="_blank"
              rel="noreferrer noopener"
            >
              <UseAnimations animation={facebook} />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="https://www.instagram.com/wam.estudiocreativo"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <UseAnimations animation={instagram} />
              <span className="sr-only">Instagram Page</span>
            </Link>
            <Link
              href="https://www.behance.net/wamcreativo"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <UseAnimations animation={behance} />
              <span className="sr-only">Behance Page</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/wamcreativo/about/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <UseAnimations animation={linkedin} />
              <span className="sr-only">Behance Page</span>
            </Link>
            <Link
              href="mailto:estudio@wamcreativo.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <UseAnimations animation={mail} />
              <span className="sr-only">Mail shortlink</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
