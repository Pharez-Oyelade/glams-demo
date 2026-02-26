"use client";

import React from "react";
import ViewBtn from "./ViewBtn";
import { motion } from "framer-motion";

const Headers = ({ title, description, text, tag }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-8 sm:pb-10"
    >
      <div>
        <span className="font-poppins text-glams-gold text-xs uppercase tracking-[0.3em] flex items-center gap-3 mb-3">
          <span className="inline-block w-6 h-px bg-glams-gold" />
          {tag}
        </span>
        <h2 className="font-playfair font-bold text-[clamp(1.8rem,4vw,3rem)] text-glams-charcoal leading-tight">
          {title}
        </h2>
        {description && (
          <p className="font-poppins text-glams-charcoal/60 text-sm sm:text-base mt-2 max-w-md leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {text && (
        <div className="shrink-0">
          <ViewBtn BtnText={text} />
        </div>
      )}
    </motion.div>
  );
};

export default Headers;
