import FormularioContacto from "@/app/global-components/form/formulario-contacto";

const Contacto = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto min-h-screen  md:mt-16 animate-fadeIn">
      <div className="w-full h-[30vh] border bg-contacto bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <h2 className="uppercase text-6xl text-white tracking-widest font-semibold">contacto</h2>
      </div>
      <FormularioContacto />
    </div>
  );
};
export default Contacto;
