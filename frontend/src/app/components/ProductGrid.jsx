"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/cartContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProductGrid = ({ products = [] }) => {
  const { addToCart, formatPrice } = useContext(CartContext);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
    >
      {products.map((product) => (
        <motion.div
          variants={itemVariants}
          key={product.id}
          className="group flex flex-col"
        >
          {/* Image wrapper */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-glams-blush aspect-3/4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Top actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Heart className="w-4 h-4 text-glams-pink" />
              </button>
            </div>

            {/* Quick add — slides up from bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-glams-charcoal text-white font-poppins text-[11px] font-semibold uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-glams-pink transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="pt-3.5 flex flex-col gap-1">
            {/* Category + Colors row */}
            <div className="flex items-center justify-between">
              <span className="font-poppins text-[10px] uppercase tracking-widest text-glams-charcoal/50">
                {product.category}
              </span>
              <div className="flex items-center gap-1">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-white ring-offset-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Name */}
            <p className="font-poppins text-sm sm:text-[15px] text-glams-charcoal font-medium leading-snug">
              {product.name}
            </p>

            {/* Price */}
            <p className="font-poppins text-sm font-bold text-glams-pink mt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
