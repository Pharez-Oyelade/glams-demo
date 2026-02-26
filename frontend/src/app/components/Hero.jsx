"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: image travels ±15% relative to its container as you scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-glams-butter flex flex-col"
    >
      {/* ── Main editorial grid ── */}
      <div className="relative flex flex-col md:flex-row flex-1 pt-20 md:pt-24 pb-8 px-4 sm:px-8 md:px-10 lg:px-20 md:gap-2 items-end">
        {/* ── Left: hero image ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1.3, ease: "easeOut" }}
          className="
            relative
            w-full md:w-[45%]
            h-[90vw] sm:h-[80vw] md:h-[calc(100vh-7rem)]
            rounded-tr-[3rem] rounded-bl-[3rem]
            overflow-hidden
            mt-5 mb-10 md:my-0
            shadow-[0_32px_80px_-10px_rgba(0,0,0,0.18)]
          "
        >
          {/* Image moves independently inside the clipped container = true parallax */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-[150%]"
          >
            <Image
              src="/glams_bg.jpg"
              alt="Glams Wardrobe – Hero"
              sizes="(max-width: 768px) 100vw, 45vw"
              fill
              className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1.3s] ease-out"
              priority
            />
          </motion.div>

          {/* subtle gradient vignette at bottom of image */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* floating craft badge */}
          <div
            className="
              absolute bottom-6 left-6
              bg-white/90 backdrop-blur-md
              px-5 py-3
              rounded-full
              flex items-center gap-3
              shadow-lg
            "
          >
            <span className="w-2 h-2 rounded-full bg-glams-pink animate-pulse" />
            <span className="font-poppins text-xs font-semibold tracking-widest uppercase text-glams-charcoal">
              Handmade in Nigeria
            </span>
          </div>
        </motion.div>

        {/* ── Right: editorial text panel ── */}
        <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col px-3 sm:px-5 md:px-10 lg:px-20 gap-7 pb-4 md:pb-10">
          {/* eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.3, ease: "easeOut" }}
            className="
              font-poppins text-glams-gold
              text-xs sm:text-sm
              uppercase tracking-[0.3em]
              flex items-center gap-3
            "
          >
            <span className="inline-block w-8 h-px bg-glams-gold" />
            Handmade in Lagos, worn globally
          </motion.span>

          {/* large display title – shown on ALL screens, sized responsively */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.3, ease: "easeOut" }}
            className="
              font-playfair font-bold leading-[0.9]
              text-[clamp(3.5rem,8vw,8rem)]
              text-glams-charcoal
              w-full
            "
          >
            THE{" "}
            <span
              className="
                text-glams-pink
                italic
                relative
                
              "
            >
              GLAMS
            </span>
            <br />
            WARDROBE
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.3, ease: "easeOut" }}
            className="font-poppins text-glams-charcoal/70 text-sm sm:text-base leading-relaxed max-w-sm"
          >
            Experience the fusion of authentic Nigerian craftsmanship and
            contemporary luxury. Our latest drop features structured
            silhouettes, bold prints, and timeless elegance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button
              className="
                relative overflow-hidden
                bg-glams-charcoal text-white
                px-8 py-3
                text-xs font-poppins font-bold tracking-widest uppercase
                cursor-pointer
                group
                transition-all duration-300
              "
            >
              {/* animated fill on hover */}
              <span
                className="
                  absolute inset-0 bg-glams-pink
                  translate-x-[-101%] group-hover:translate-x-0
                  transition-transform duration-300 ease-in-out
                "
              />
              <span className="relative z-10">Shop Now</span>
            </button>

            <button
              className="
                relative
                px-8 py-3
                text-xs font-poppins font-bold tracking-widest uppercase
                text-glams-charcoal
                cursor-pointer
                border-b-2 border-glams-charcoal
                hover:border-glams-pink hover:text-glams-pink
                transition-colors duration-300
              "
            >
              Explore
            </button>
          </motion.div>

          {/* stats strip */}
          {/* <div className="flex gap-8 pt-2 border-t border-black/10">
            {[
              { value: "500+", label: "Pieces crafted" },
              { value: "40+", label: "Countries" },
              { value: "8 yrs", label: "Heritage" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-playfair text-2xl sm:text-3xl font-bold text-glams-charcoal">
                  {value}
                </span>
                <span className="font-poppins text-[10px] uppercase tracking-widest text-glams-charcoal/50">
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      {/* <div className="w-full overflow-hidden border-y border-black/8 bg-glams-charcoal py-3">
        <div className="flex gap-0 animate-[marquee_22s_linear_infinite] whitespace-nowrap w-max">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-playfair italic text-white/80 text-sm tracking-widest px-8"
            >
              Handcrafted Luxury &nbsp;·&nbsp; Nigerian Heritage &nbsp;·&nbsp;
              Global Style &nbsp;·&nbsp; New Drop 2025 &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
