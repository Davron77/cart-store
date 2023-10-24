import { ReactNode, createContext, useContext, useState } from "react";

interface UseCartProviderType {
  children: ReactNode;
}

interface useCartType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
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
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartCreate.Provider value={{ isOpen, openCart, closeCart }}>
      {children}
    </CartCreate.Provider>
  );
};

export { UseCartProvider, useCart };
