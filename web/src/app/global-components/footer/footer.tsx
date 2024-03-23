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
import BannerSponsor from "../banner/banner-sponsor";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {" "}
      <BannerSponsor />
      <footer className=" dark:bg-gray-900 bg-sponsor2 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 relative z-10 border-t border-white bg-footer bg-cover ">
          <div className="md:flex md:justify-between z-20">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <img src="/assets/logo/Recurso 18.png" className="h-12 me-3" alt="Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:mb-10">
              <div>
                <h2 className="mb-2 text-md font-semibold text-white uppercase dark:text-white">
                  Mapa del sitio
                </h2>
                <ul className="text-white dark:text-white font-medium text-sm">
                  <li className="mb-2">
                    <Link href="/" className="hover:underline">
                      Inicio
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/distribucion" className="hover:underline">
                      Distribucion
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/contacto" className="hover:underline">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-md font-semibold text-white uppercase dark:text-white ">
                  Enlaces de interes
                </h2>
                <ul className="text-white dark:text-white font-medium text-sm">
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
                <h2 className="mb-2 text-md font-semibold text-white uppercase dark:text-white ">
                  Contacto
                </h2>
                <ul className="text-white dark:text-white font-medium text-sm">
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
                    <h2 className=" text-lg font-semibold text-white uppercase dark:text-white">
                      Seguinos
                    </h2>
                    <SocialMediaDisplay size={40} strokeColor="#ffff" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6  sm:mx-auto  lg:my-8  z-20" />
          <div className="sm:flex sm:items-center sm:justify-between  z-20">
            <span className="text-sm text-white sm:text-center dark:text-white">
              © {currentYear}
              <a href="/" className="hover:underline ml-2">
                Los Leños
              </a>
              . Todos los derechos reservados.
            </span>
            <div className="flex mt-4 items-center sm:justify-center sm:mt-0">
              <Link href="https://wamcreativo.com/" target="_blank" rel="noreferrer noopener">
                {" "}
                <h3 className="text-sm text-white sm:text-center dark:text-white">
                  Diseñado y desarrollado por WAM! creativo
                </h3>
              </Link>
              <Link
                href="https://www.facebook.com/wam.estudiocreativo"
                className="text-white hover:text-white dark:hover:text-white "
                target="_blank"
                rel="noreferrer noopener"
              >
                <UseAnimations animation={facebook} strokeColor="#ffff" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="https://www.instagram.com/wam.estudiocreativo"
                className="text-white hover:text-white dark:hover:text-white ms-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <UseAnimations animation={instagram} strokeColor="#ffff" />
                <span className="sr-only">Instagram Page</span>
              </Link>
              <Link
                href="https://www.behance.net/wamcreativo"
                className="text-white hover:text-white dark:hover:text-white ms-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <UseAnimations animation={behance} strokeColor="#ffff" />
                <span className="sr-only">Behance Page</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/wamcreativo/about/"
                className="text-white hover:text-white dark:hover:text-white ms-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <UseAnimations animation={linkedin} strokeColor="#ffff" />
                <span className="sr-only">Behance Page</span>
              </Link>
              <Link
                href="mailto:estudio@wamcreativo.com"
                className="text-white hover:text-white dark:hover:text-white ms-1"
                target="_blank"
                rel="noreferrer noopener"
              >
                <UseAnimations animation={mail} strokeColor="#ffff" />
                <span className="sr-only">Mail shortlink</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
