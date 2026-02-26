"use client";

import React from "react";
import ViewBtn from "./ViewBtn";
import { motion } from "framer-motion";

const Headers = ({ title, description, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 sm:pb-0"
    >
      <div className="pb-4 sm:pb-10">
        <h2 className="">{title}</h2>
        <p>{description}</p>
      </div>
      <ViewBtn BtnText={text} />
    </motion.div>
  );
};

export default Headers;
