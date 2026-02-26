"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const {
    showCart,
    setShowCart,
    cart,
    total,
    currency,
    removeFromCart,
    formatPrice,
  } = useContext(CartContext);

  return (
    <AnimatePresence>
      {showCart && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowCart(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Sidebar panel */}
          <motion.aside
            key="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-glams-pink" />
                <h2 className="font-playfair text-xl font-bold text-glams-charcoal tracking-wide">
                  Your Bag
                </h2>
                <span className="bg-glams-pink text-white text-xs font-poppins font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              </div>
              <button
                onClick={() => setShowCart(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-glams-charcoal" />
              </button>
            </div>

            {/* ── Item list ── */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200" />
                  <p className="font-playfair text-xl text-glams-charcoal/50">
                    Your bag is empty
                  </p>
                  <p className="font-poppins text-xs text-glams-charcoal/40 uppercase tracking-widest">
                    Add something luxurious
                  </p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-2 font-poppins text-xs font-bold uppercase tracking-widest text-glams-pink border-b border-glams-pink pb-0.5 hover:opacity-70 transition-opacity"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    className="flex gap-4 group"
                  >
                    {/* Product thumbnail */}
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0 bg-glams-butter">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Product info */}
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-playfair font-bold text-glams-charcoal text-sm">
                            {item.name}
                          </p>
                          <p className="font-poppins text-[10px] uppercase tracking-widest text-glams-charcoal/50 mt-0.5">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-300 hover:text-glams-pink"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <p className="font-poppins text-sm font-bold text-glams-pink">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* ── Order summary + CTA ── */}
            {cart.length > 0 && (
              <div className="px-6 py-6 border-t border-gray-100 space-y-4 bg-white">
                {/* Summary rows */}
                <div className="space-y-2">
                  <div className="flex justify-between font-poppins text-xs text-glams-charcoal/60 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between font-poppins text-xs text-glams-charcoal/60 uppercase tracking-widest">
                    <span>Shipping</span>
                    <span className="text-glams-pink">
                      Calculated at checkout
                    </span>
                  </div>
                  <div className="flex justify-between font-playfair font-bold text-glams-charcoal text-base pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout button */}
                <button className="relative overflow-hidden w-full group bg-glams-charcoal text-white font-poppins text-xs font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-3 transition-all duration-300">
                  <span className="absolute inset-0 bg-glams-pink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <button
                  onClick={() => setShowCart(false)}
                  className="w-full font-poppins text-xs uppercase tracking-widest text-glams-charcoal/50 hover:text-glams-charcoal transition-colors duration-200 text-center"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
