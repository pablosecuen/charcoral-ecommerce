"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "./cart-provider";

const MainProvider = ({ children }: any) => {
  return (
    <CartProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </CartProvider>
  );
};

export default MainProvider;
