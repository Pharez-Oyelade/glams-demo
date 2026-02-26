"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ViewBtn from "./ViewBtn";

const categories = [
  { name: "Dresses", image: "/glams_bg.jpg", count: "24 pieces" },
  { name: "Skirts", image: "/skirts.jpg", count: "18 pieces" },
  { name: "Bubus", image: "/glams_bg.jpg", count: "12 pieces" },
  { name: "Bottoms", image: "/skirts.jpg", count: "15 pieces" },
];

const Categories = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-10 lg:px-20 overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
      >
        <div>
          <span className="font-poppins text-glams-gold text-xs uppercase tracking-[0.3em] flex items-center gap-3 mb-3">
            <span className="inline-block w-6 h-px bg-glams-gold" />
            Browse by style
          </span>
          <h2 className="font-playfair font-bold text-[clamp(2rem,5vw,3.5rem)] leading-tight text-glams-charcoal">
            Shop by <span className="text-glams-pink italic">Category</span>
          </h2>
        </div>
        <div className="shrink-0">
          <ViewBtn BtnText="View All" />
        </div>
      </motion.div>

      {/* Category cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="group relative cursor-pointer"
          >
            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl aspect-3/4">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="font-poppins text-white/70 text-[10px] sm:text-xs uppercase tracking-widest mb-1">
                  {category.count}
                </p>
                <h3 className="font-playfair text-white font-bold text-lg sm:text-xl leading-tight">
                  {category.name}
                </h3>
              </div>

              {/* Hover pill */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-glams-pink text-white text-[10px] font-poppins font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Shop
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
