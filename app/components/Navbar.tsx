"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0B1220]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide">PROSOTECH</div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 text-sm text-gray-300">
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-[var(--secondary)] px-5 py-2 rounded-md text-sm hover:scale-105 transition">
          Consultation
        </button>
      </div>
    </header>
  );
}
