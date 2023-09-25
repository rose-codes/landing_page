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

  const getCartSubtotal = () => {
    let subtotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) => product.id === parseInt(item)
        );
        subtotal += cartItems[item] * itemInfo.price;
      }
    }
    return subtotal;
  };

  const addToCart = (itemId) => {
    setCartItems((cart) => ({ ...cart, [itemId]: cart[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((cart) => ({
      ...cart,
      [itemId]: cart[itemId] > 0 ? cart[itemId] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newCount, itemId) => {
    setCartItems((cart) => ({
      ...cart,
      [itemId]: newCount,
    }));
  };

  const getItemsInCartCount = () => {
    let itemsCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        itemsCount += cartItems[item];
      }
    }
    return itemsCount;
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        updateCartItemCount,
        getCartSubtotal,
        getItemsInCartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
