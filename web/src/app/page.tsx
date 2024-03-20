import BannerHistoria from "./global-components/banner/banner-historia";
import ProductsCarousel from "./global-components/carousel/products-carousel";
import MainSlider from "./global-components/slider/main-slider";
import BannerBricketas from "./global-components/banner/banner-bricketas";


export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-between ">
      <MainSlider />
      <h2 className="text-xl uppercase text-blue-600 border-b-4 border-blue-600 pb-2 font-bold tracking-widest md:mt-20">
        NUEVO SHOPP ONLINE
      </h2>
      <ProductsCarousel />
      <BannerHistoria />
      <BannerBricketas />

    </main>
  );
}
