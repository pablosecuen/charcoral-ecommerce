/* eslint-disable @next/next/no-img-element */

const BannerSponsor = () => {
  return (
    <div className="w-full mx-auto flex justify-center bg-sponsor3 bg-cover bg-no-repeat bg-center items-center h-[50vh] md:h-[30vh]  overflow-hidden relative">
      {/*      <img
        src="/assets/separador1920.jpg"
        alt="logo-asador"
        className="object-fill absolute contrast-75 saturate-150"
      /> */}

      <h3 className="uppercase font-semibold tracking-widest md:text-3xl text-xl text-center  text-white z-10 ">
        sponsor oficial del asador argentino
      </h3>
    </div>
  );
};

export default BannerSponsor;
