import { ReactNode, createContext, useContext, useState } from "react";

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
  const [cart, setCart] = useState<useCartItemType[]>([]);
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
      }}
    >
      {children}
    </CartCreate.Provider>
  );
};

export { UseCartProvider, useCart };
