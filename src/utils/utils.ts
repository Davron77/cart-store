import { useCartItemType } from "../context/useCart";

export const checkCart = (id: number, items: useCartItemType[]) => {
  return items?.some((item) => item?.id === id);
};
