"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  "Telecom Infrastructure",
  "Renewable Energy Systems",
  "Cybersecurity Protection",
  "IT Network Solutions",
  "Critical Power Systems",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={services[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full text-[var(--secondary)]"
        >
          {services[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
