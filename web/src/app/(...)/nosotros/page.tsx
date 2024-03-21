/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import BannerCalidad from "@/app/global-components/banner/banner-calidad";
import CategoriaSlider from "@/app/global-components/slider/categorias-slider";
import MainSlider from "@/app/global-components/slider/main-slider";

const Nosotros = () => {
  return (
    <>
      <MainSlider />
      <div className="w-full h-[100svh] bg-nosotros bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="max-w-screen-2xl grid md:grid-cols-2 mx-auto ">
          {" "}
          <div className="flex flex-col text-white place-content-center gap-6">
            <h3 className="text-5xl border-white text-white underline underline-offset-4  uppercase pb-1 font-semibold">
              sobre nosotros
            </h3>
            <p>
              En 2016, "Carbón los Leños" inició su camino como una empresa familiar, con el
              objetivo de destacar en el mercado argentino mediante la producción de carbón de la
              más alta calidad. Desde el principio, nos hemos enfocado en cumplir con los estándares
              más exigentes para cada leño que producimos, garantizando así la satisfacción plena de
              nuestros clientes.
            </p>
            <p>
              Nuestro compromiso con la excelencia y la calidad constante de nuestro producto nos ha
              permitido crecer y consolidarnos como una marca de referencia en el mercado, ganando
              la lealtad de una amplia base de clientes que valoran la superioridad de nuestro
              carbón.
            </p>
            <p>
              Mirando hacia el futuro, estamos emocionados por las oportunidades que nos esperan. En
              "Carbón los Leños", nuestro compromiso con la calidad y la excelencia sigue siendo
              nuestro principal motor, y continuamos trabajando día a día para mantener los valores
              que han sido clave en nuestro éxito desde el inicio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/Recurso 2.webp"
              alt="a logo variation for los lenos with fire like letters"
              className=""
            />
          </div>
        </div>
      </div>
      <CategoriaSlider />
      <BannerCalidad />
    </>
  );
};

export default Nosotros;
