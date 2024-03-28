"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import EditItemQuantityButton from "./edit-item-quantity-button";
import Link from "next/link";
import DeleteItemButton from "./delete-item-button";
import Image from "next/image";

import { useCart } from "@/app/providers/cart-provider";
import OpenCart from "./Open-cart";
import { toast } from "sonner";

export default function Cart() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    state: { cart },
    dispatch,
    calculateTotal,
  } = useCart();

  console.log(cart);

  const deleteItem = (itemId: string) => {
    try {
      dispatch({ type: "DELETE_ITEM", payload: itemId });
      toast.success("Producto eliminado del carrito");
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
      toast.error("Error al eliminar el producto del carrito");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div onClick={onOpen}>
        {" "}
        <OpenCart cart={cart} />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        placement="auto"
        motionProps={{
          variants: {
            enter: {
              x: "0px",
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
            exit: {
              x: "100%",
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        classNames={{
          wrapper: " lg:max-w-[100vw] max-w-[100vw] ",
          base: "-right-1 md:-right-2 lg:top-0 absolute mt-16 h-[91vh] bg-white -top-1 lg:h-[92vh] rounded-none ",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-4 ml-4">Carrito</ModalHeader>
              <ModalBody>
                {!cart || cart.length === 0 ? (
                  <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                    <ShoppingCartIcon className="h-16" />
                    <p className="mt-6 text-center text-2xl font-bold">Tu carrito esta vacio</p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                    <ul className="flex-grow overflow-auto py-4 max-h-[60vh]">
                      {cart?.map((item: any, i: any) => {
                        const image = item.img;
                        return (
                          <li
                            key={i}
                            className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                          >
                            <div className="relative flex w-full flex-row justify-between px-1 py-4">
                              <div className="absolute z-40 -mt-2 ml-[55px]">
                                <DeleteItemButton item={item} onDelete={deleteItem} />
                              </div>
                              <Link
                                href={`/shop/${item.title}`}
                                onClick={onClose}
                                className="z-30 flex flex-row space-x-4"
                              >
                                <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                  <Image
                                    className="h-full w-full object-contain"
                                    width={64}
                                    height={64}
                                    alt={item.title}
                                    src={image}
                                  />
                                </div>

                                <div className="flex flex-1 flex-col text-base ">
                                  <span className="leading-tight">{item.title}</span>
                                  <span className="leading-tight opacity-60 text-sm ">
                                    Detalles: {item.description}
                                  </span>
                                </div>
                              </Link>
                              <div className="flex h-16 flex-col justify-between">
                                <div className="text-center ">${item.price}</div>
                                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                  <EditItemQuantityButton item={item} type="minus" />
                                  <p className="w-6 text-center">
                                    <span className="w-full text-sm ">{item.quantity}</span>
                                  </p>
                                  <EditItemQuantityButton item={item} type="plus" />
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="py-4 text-sm ">
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Envio</p>
                        <p className="text-right">Calculado en la seccion de pagos</p>
                      </div>
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Total</p>
                        <div className="tracking-widest">$ {calculateTotal}</div>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Link href="/checkout">
                  <Button color="primary" onPress={onClose}>
                    Ir a pagar productos
                  </Button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
