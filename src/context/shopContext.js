import { createContext, useState } from "react";
import { PRODUCTS } from "../pages/shop/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((cart) => ({ ...cart, [itemId]: cart[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((cart) => ({
      ...cart,
      [itemId]: cart[itemId] > 0 ? cart[itemId] - 1 : 0,
    }));
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={{ addToCart, removeFromCart, cartItems }}>
      {children}
    </ShopContext.Provider>
  );
}
