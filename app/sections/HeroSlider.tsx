"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  const slides = [
    { image: "/images/lightower.png", label: "Telecom Infrastructure" },
    { image: "/images/lightdatacenter.png", label: "Secure IT Systems" },
    { image: "/images/lightsolar.png", label: "Renewable Energy" },
    { image: "/images/lightcables.png", label: "Cybersecurity Solutions" },
  ];

  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (dir: number) => {
    setCurrent([(current + dir + slides.length) % slides.length, dir]);
  };

  const slide = slides[current];

  return (
    <div className="relative w-full h-[420px] md:h-[520px]">
      {/* 🔲 OUTER FRAME (PREMIUM) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />

      {/* 🧱 INNER CONTAINER */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* SLIDE */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.label}
            initial={{ opacity: 0, scale: 1.1, x: direction * 120 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1.05, x: -direction * 120 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) paginate(1);
              if (info.offset.x > 100) paginate(-1);
            }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* ✨ LIGHT REFLECTION */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />

        {/* 🏷️ LABEL */}
        <motion.div
          key={slide.label}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-6 left-6"
        >
          <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-lg border border-white/10">
            <p className="text-xs tracking-[0.25em] text-gray-300 uppercase">
              Service
            </p>
            <h3 className="text-xl font-semibold text-white">{slide.label}</h3>
          </div>
        </motion.div>

        {/* ⬅️➡️ CHEVRONS (TOUJOURS VISIBLES) */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={() => paginate(-1)}
            className="bg-black/40 backdrop-blur-md border border-white/10 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white/10 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="bg-black/40 backdrop-blur-md border border-white/10 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white/10 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-5 right-6 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent([i, i > current ? 1 : -1])}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-[var(--secondary)]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
