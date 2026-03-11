"use client";

import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1220] text-white">
      {/* Subtle engineering grid background */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Engineering
            <span className="block text-[var(--secondary)]">
              Reliable Infrastructure
            </span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            Telecommunications, IT systems, cybersecurity and renewable energy
            solutions engineered to support modern organizations and
            mission-critical infrastructure.
          </p>

          <div className="flex gap-6 flex-wrap">
            <button className="bg-[var(--secondary)] px-8 py-4 rounded-md font-medium hover:scale-[1.03] transition shadow-lg">
              Explore Services
            </button>

            <button className="border border-gray-500 px-8 py-4 rounded-md hover:bg-white hover:text-black transition">
              Request Consultation
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <HeroSlider />
      </div>
    </section>
  );
}
