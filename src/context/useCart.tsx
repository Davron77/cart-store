import { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStore } from "../hooks/useLocalStore";

interface UseCartProviderType {
  children: ReactNode;
}

interface useCartType {
  isOpen: boolean;
  items: useCartItemType[];
  totalCount: number;
  isEmpty: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (
    id: number,
    quantity: number,
    price: number,
    image: string,
    name: string,
    color: string
  ) => void;
  removeToCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getIteQuantity: (id: number) => number;
}

export interface useCartItemType {
  id: number;
  quantity: number;
  price: number;
  image: string;
  name: string;
  color: string;
}

const CartCreate = createContext<useCartType | undefined>(undefined);

const useCart = () => {
  const cart = useContext(CartCreate);

  if (cart === undefined) {
    throw new Error("Something wrong");
  }

  return cart;
};

const UseCartProvider: React.FC<UseCartProviderType> = ({ children }) => {
  const [cart, setCart] = useLocalStore("shopping-cart", []);
  const [isOpen, setIsOpen] = useState(false);

  const cartLength = cart.length;

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (
    id: number,
    quantity: number,
    price: number,
    image: string,
    name: string,
    color: string
  ) => {
    setCart((oldCart) => [
      ...oldCart,
      { id, quantity, price, image, name, color },
    ]);
  };

  const removeToCart = (id: number) => {
    const filter = cart.filter((item) => item?.id !== id);
    setCart(filter);
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updateItem = cart?.map((item) => {
      if (item?.id === id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setCart(updateItem);
  };

  const getIteQuantity = (id: number): number => {
    return cart.find((item) => item?.id === id)?.quantity || 0;
  };

  return (
    <CartCreate.Provider
      value={{
        isOpen,
        items: cart,
        isEmpty: Boolean(cartLength),
        totalCount: cartLength,
        openCart,
        closeCart,
        addToCart,
        removeToCart,
        updateQuantity,
        getIteQuantity,
      }}
    >
      {children}
    </CartCreate.Provider>
  );
};

export { UseCartProvider, useCart };
