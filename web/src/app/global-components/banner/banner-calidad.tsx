/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const BannerCalidad = () => {
  return (
    <div className="min-h-screen bg-[#dbe2e8] w-full p-4 md:p-20">
      <div className="flex flex-col w-full bg-white rounded-2xl md:p-28 gap-8">
        <div className="flex items-center justify-between">
          <h4 className="uppercase font-semibold text-2xl lg:text-5xl 2xl:text-7xl">
            LA MEJOR CALIDAD
          </h4>
          <img src="/assets/Recurso 4.webp" alt="logo variation" className="h-12" />
        </div>
        <hr className="w-full border border-blue-900/40" />
        <div>
          <p className=" text-xl lg:text-2xl">
            En "Carbón los Leños", nos enorgullecemos de producir un carbón de la más alta calidad,
            donde cada pieza es meticulosamente seleccionada para asegurar el tamaño perfecto.
          </p>
        </div>
        <hr className="w-full border border-blue-900/40" />
        <div className="flex items-center">
          <div className="flex flex-col  gap-8 w-10/12 mx-auto">
            {" "}
            <p>
              Nuestro carbón se caracteriza por su facilidad para encender y mantener la llama,
              haciendo de cada asado una experiencia sencilla y placentera. Además, nuestro producto
              se distingue por su gran poder calórico y energético, garantizando un rendimiento
              óptimo en cada uso, con una emisión casi nula de chispas, lo que lo hace más seguro y
              confiable para todo tipo de encuentros al aire libre.
            </p>
            <p>
              Pero lo que verdaderamente diferencia a nuestro carbón es el sabor único que aporta a
              los alimentos, gracias a la cuidadosa selección de maderas de primera calidad
              utilizadas en su producción. Este toque distintivo asegura que cada asado conserve los
              sabores más auténticos y deliciosos, proporcionando no solo calor por un largo periodo
              de tiempo, sino también una experiencia culinaria inigualable.{" "}
            </p>
          </div>
          <img src="/assets/Recurso 3.webp" alt="black charcoal picture" />
        </div>
      </div>
    </div>
  );
};
export default BannerCalidad;
