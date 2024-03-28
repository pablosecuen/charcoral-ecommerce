"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "./cart-provider";
import Script from "next/script";
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-5324826d-e655-4124-82b8-f50b8fd84b63", {
  locale: "es-PE",
});

const MainProvider = ({ children }: any) => {
  return (
    <>
      <Script src="https://sdk.mercadopago.com/js/v2" strategy="beforeInteractive" />
      <CartProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </CartProvider>
    </>
  );
};

export default MainProvider;
