"use client";
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { toast } from "sonner";

interface CartState {
  cart: any[];
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: any }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } };

const initialCartState: CartState = {
  cart: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
        toast.success("Sumada 1 unidad al carrito");
        return { ...state, cart: updatedCart };
      } else {
        toast.success("Producto agregado al carrito");
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case "DELETE_ITEM":
      const updatedCart = state.cart.filter((item) => item.id !== action.payload);
      toast.success("Producto eliminado del carrito");
      return { ...state, cart: updatedCart };
    case "CLEAR_CART":
      toast.success("Carrito restaurado");
      return { ...state, cart: [] };
    case "UPDATE_QUANTITY":
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cart: updatedCartQuantity };
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
    let storedCart = storedCartString ? JSON.parse(storedCartString) : [];
    if (storedCart.length === 0) {
      localStorage.setItem("Cart", JSON.stringify(storedCart));
    } else {
      dispatch({ type: "ADD_TO_CART", payload: storedCart });
    }
  }, []);

  const calculateTotal = useMemo(() => {
    return state.cart.reduce(
      (total, product) => total + product.precio * (product.quantity ?? 1),
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
