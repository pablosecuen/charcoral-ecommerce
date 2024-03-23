"use client";
import { useCart } from "@/app/providers/cart-provider";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

import clsx from "clsx";
import { toast } from "sonner";

interface EditItemQuantityButtonProps {
  item: any;
  type: "plus" | "minus";
}

export default function EditItemQuantityButton({ item, type }: EditItemQuantityButtonProps) {
  const { dispatch } = useCart();
  const handleQuantityChange = () => {
    if (type === "plus" && item) {
      const newQuantity = item.quantity ? item.quantity + 1 : 1;
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId: item.id, quantity: newQuantity } });
      toast.success("Sumado al carrito");
    } else if (type === "minus" && item && item.quantity && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch({ type: "UPDATE_QUANTITY", payload: { productId: item.id, quantity: newQuantity } });
      toast.success("Restado del carrito");
    }
  };

  return (
    <button
      aria-label={type === "plus" ? "Increase item quantity" : "Reduce item quantity"}
      onClick={handleQuantityChange}
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "ml-auto": type === "minus",
        }
      )}
    >
      {type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
