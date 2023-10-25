import { useEffect, useState } from "react";
import { useCartItemType } from "../context/useCart";

export const useLocalStore = (key: string, initialValue: any) => {
  const [value, setValue] = useState<useCartItemType[]>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
};
