"use client";
import Image from "next/image";
import Link from "next/link";
import svg from "@../../../public/vercel.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products: any = [
  {
    id: 1,
    type: "carbon",
    title: "carbon 8kilos",
    descripcion: "asdasdasd",
    img: svg,
  },
  {
    id: 2,
    type: "carbon",
    title: "carbon 5kilos",
    descripcion: "asdasdasd",
    img: svg,
  },
  {
    id: 3,
    type: "carbon 3",
    title: "carbon 12kilos",
    descripcion: "asdasdasd",
    img: svg,
  },
  {
    id: 4,
    type: "accesorios",
    title: "arrancador fuego",
    descripcion: "asdasdasd",
    img: svg,
  },
  {
    id: 5,
    type: "accesorios",
    title: "arrancador x10",
    descripcion: "asdasdasd",
    img: svg,
  },
];
function ProductsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        dots: true,
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className=" flex flex-col md:max-w-[90vw] max-w-[80dvw]  gap-10 md:pt-10 lg:max-w-[80vw] mx-auto ">
      <Slider {...settings}>
        {products?.map((product: any) => (
          <div key={product.id} className="w-[80vw] mx-auto overflow-hidden max-w-[280px]">
            <Link className=" h-full overflow-x-hidden  " href={`/product/${product.title}`}>
              <article className="rounded-md w-full  h-full  px-2 md:px-0 pb-6">
                <Image
                  src={product.img}
                  alt={product.title}
                  className="h-96 mb-1 object-cover w-full"
                  priority={true}
                  height={0}
                  width={150}
                />
                <p className="text-md lg:text-md mt-8 font-semibold text-black">{product.title}</p>
                <button className="bg-blue-600 text-white p-2 px-4 w-full rounded-md hover:bg-blue-700 hover:translate-y-[3px] transition duration-300 shadow-md shadow-black/40 hover:shadow-sm">
                  Agregar al Carrito
                </button>
              </article>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProductsCarousel;

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-black rounded-full !text-black h-4  fill-black `}
      onClick={onClick}
    ></button>
  );
}

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-black  rounded-full !text-black h-4  fill-black `}
      onClick={onClick}
    ></button>
  );
}
