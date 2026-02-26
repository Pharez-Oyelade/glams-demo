"use client";

import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-10 lg:px-20">
      {/* Background – charcoal with subtle pattern */}
      <div className="absolute inset-0 bg-glams-charcoal" />

      {/* Decorative circles */}
      {/* <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-glams-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-glams-gold/10 blur-3xl pointer-events-none" /> */}

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins text-glams-gold text-xs uppercase tracking-[0.3em] flex items-center gap-3"
        >
          <span className="inline-block w-6 h-px bg-glams-gold" />
          Stay in the loop
          <span className="inline-block w-6 h-px bg-glams-gold" />
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playfair font-bold text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight"
        >
          Join the <span className="text-glams-pink italic">Glams</span> Circle
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-poppins text-white/60 text-sm sm:text-base max-w-md leading-relaxed"
        >
          Be first to receive new arrivals, exclusive drops, and private styling
          invitations — straight to your inbox.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-2"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 font-poppins text-sm rounded-full px-5 py-3.5 outline-none focus:border-glams-pink focus:bg-white/15 transition-all duration-300"
          />
          <button className="relative overflow-hidden bg-glams-pink text-white font-poppins text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full cursor-pointer group shrink-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,30,99,0.4)]">
            <span className="absolute inset-0 bg-glams-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full" />
            <span className="relative z-10">Subscribe</span>
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-poppins text-white/30 text-xs"
        >
          Join 2,000+ fashion lovers. No spam, ever.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;
