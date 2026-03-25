"use client";

import HeroSlider from "./HeroSlider";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1220] text-white">
      {/* GRID BACKGROUND */}
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

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            {/* PRIMARY BUTTON */}
            <a
              href="services"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold text-white bg-gradient-to-r from-[var(--secondary)] to-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)] active:scale-95"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              {/* glow effect */}
              <span className="absolute inset-0 rounded-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="/contact#consultation"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-semibold border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0B1220] hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              Request Consultation
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <HeroSlider />
      </div>
    </section>
  );
}
