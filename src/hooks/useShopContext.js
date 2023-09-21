import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

export const useShopContext = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw Error("useShopContext must be used inside a ShopContext Provider.");
  }
  return context;
};
