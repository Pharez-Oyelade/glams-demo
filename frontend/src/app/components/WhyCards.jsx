"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Earth, ScissorsLineDashed } from "lucide-react";

const cards = [
  {
    Icon: Palette,
    title: "Authentic Fabrics",
    description:
      "Sourced directly from local artisans, our fabrics tell a story of heritage and quality that machines cannot replace.",
    accent: "Craft",
    number: "01",
  },
  {
    Icon: Earth,
    title: "Worldwide Shipping",
    description:
      "From Lagos to London, New York to Nairobi. We ensure your piece arrives in pristine condition via DHL.",
    accent: "Global",
    number: "02",
  },
  {
    Icon: ScissorsLineDashed,
    title: "Custom Tailoring",
    description:
      "Luxury is fit. Provide your measurements for a bespoke fit that celebrates your unique silhouette.",
    accent: "Bespoke",
    number: "03",
  },
];

const WhyCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8 mt-2">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          className="group relative bg-white border border-gray-100 hover:border-glams-pink/40 rounded-2xl p-7 sm:p-8 overflow-hidden transition-all duration-400 hover:shadow-[0_16px_48px_-8px_rgba(233,30,99,0.12)]"
        >
          {/* Large background number */}
          <span className="absolute top-4 right-5 font-playfair font-bold text-[5rem] leading-none text-gray-100 group-hover:text-glams-blush transition-colors duration-400 select-none pointer-events-none">
            {card.number}
          </span>

          {/* Icon */}
          <div className="relative z-10 mb-5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-glams-butter group-hover:bg-glams-pink/10 transition-colors duration-300">
              <card.Icon
                className="w-5 h-5 text-glams-pink"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Eyebrow accent */}
          <span className="relative z-10 font-poppins text-glams-gold text-[10px] uppercase tracking-[0.25em] mb-2 block">
            {card.accent}
          </span>

          {/* Title */}
          <h3 className="relative z-10 font-playfair text-xl sm:text-2xl font-bold text-glams-charcoal mb-3 leading-tight">
            {card.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 font-poppins text-sm text-glams-charcoal/60 leading-relaxed">
            {card.description}
          </p>

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-glams-pink to-glams-gold transition-all duration-500 ease-out" />
        </motion.div>
      ))}
    </div>
  );
};

export default WhyCards;
