// cart context
"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  const formatPrice = (amount, locale = "en-NG", currency = "NGN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const getCartCount = () => {
    return cart.length;
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        addToCart,
        formatPrice,
        removeFromCart,
        getCartCount,
        showCart,
        setShowCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
