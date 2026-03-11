"use client";

import { useEffect, useState } from "react";

const slides = [
  { image: "/images/lightower.png", label: "Telecom Infrastructure" },
  { image: "/images/lightdatacenter.png", label: "Secure IT Systems" },
  { image: "/images/lightsolar.png", label: "Renewable Energy" },
  { image: "/images/lightcables.png", label: "Cybersecurity Solutions" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleMove = (e: any) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    setOffset({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
      className="relative w-full h-[420px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ${
            i === index
              ? "opacity-100 translate-x-0 blur-0"
              : "opacity-0 translate-x-10 blur-sm"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.label}
            style={{
              transform: `translate(${offset.x}px,${offset.y}px) scale(1.05)`,
            }}
            className="w-full h-full object-cover transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-6 left-6 text-lg font-medium tracking-wide">
            {slide.label}
          </div>
        </div>
      ))}
    </div>
  );
}
