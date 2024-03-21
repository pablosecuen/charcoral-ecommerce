import FormularioContacto from "@/app/global-components/form/formulario-contacto";

const Contacto = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto   md:mt-16 animate-fadeIn">
      <div className="w-full h-[30vh] border bg-contacto bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="uppercase text-6xl text-white tracking-widest font-semibold">contacto</h2>
      </div>
      <FormularioContacto />
      <div className="w-full max-w-screen-lg mx-auto mb-20">
        {" "}
        <hr className="w-full border-2 border-blue-900 my-4" />
        <div>
          <p className="text-xl text-blue-900 font-semibold">ALGUNA CONSULTA:</p>
          <p className="text-lg text-blue-900">contacto@carbonlosleños.com.ar</p>
        </div>
        <hr className="w-full border-2 border-blue-900 my-4" />
        <div>
          <p className="text-xl text-blue-900 font-semibold">Ubicación:</p>
          <p className="text-lg text-blue-900">Oficinas en Rosario y Tres Isletas</p>
        </div>
        <hr className="w-full border-2 border-blue-900 my-4" />
      </div>
    </div>
  );
};
export default Contacto;
