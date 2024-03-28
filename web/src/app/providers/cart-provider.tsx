"use client";
import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { toast } from "sonner";

interface CartState {
  cart: any[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: any }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "SET_INITIAL_CART"; payload: any };

const initialCartState: CartState = {
  cart: JSON.parse(localStorage.getItem("Cart") || "[]"),
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCartAdd = [...state.cart];
      const existingProductIndexAdd = existingCartAdd.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (existingProductIndexAdd !== -1) {
        toast.error("Producto ya se encuentra en el carrito");
        return state;
      } else {
        const updatedCartAdd = [...existingCartAdd, action.payload];
        toast.success("Producto agregado al carrito");
        return { ...state, cart: updatedCartAdd };
      }

    case "DELETE_ITEM":
      const updatedCartAfterDelete = state.cart.filter((item) => item.id !== action.payload);
      toast.success("Producto eliminado del carrito");
      return { ...state, cart: updatedCartAfterDelete };

    case "CLEAR_CART":
      toast.success("Carrito restaurado");
      localStorage.removeItem("Cart");
      return { ...state, cart: [] };

    case "UPDATE_QUANTITY":
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
      );
      toast.success("Cantidad actualizada");
      localStorage.setItem("Cart", JSON.stringify(updatedCartQuantity));
      return { ...state, cart: updatedCartQuantity };

    case "SET_INITIAL_CART":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};
interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  calculateTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);


  useEffect(() => {
    const storedCartString = localStorage.getItem("Cart");
    if (storedCartString) {
      const parsedCart = JSON.parse(storedCartString);
      dispatch({ type: "SET_INITIAL_CART", payload: parsedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const calculateTotal = useMemo(() => {
    return state.cart.reduce(
      (total, product) => total + product.price * (product.quantity ?? 1),
      0
    );
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
