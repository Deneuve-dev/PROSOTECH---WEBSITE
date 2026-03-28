"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu open ✅ FIXED
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto"; // ✅ now returns void
    };
  }, [open]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0B1220]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO ONLY */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/prosologo.png"
            alt="Prosotech Logo"
            width={120}
            height={40}
            priority
            className="object-contain h-15 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="/contact#consultation"
          className="hidden md:block bg-[var(--secondary)] px-5 py-2 rounded-md text-white text-sm hover:scale-105 transition"
        >
          Consultation
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#0F172A]/95 backdrop-blur-xl border-r border-white/10 z-50 transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          {/* MOBILE HEADER */}
          <div className="flex justify-between items-center mb-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/prosologo.png"
                alt="Prosotech Logo"
                width={110}
                height={35}
                className="object-contain h-8 w-auto"
              />
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* NAV LINKS */}
          <nav className="flex flex-col gap-6 text-gray-300 text-lg">
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="mt-auto">
            <a
              href="/contact#consultation"
              onClick={() => setOpen(false)}
              className="block text-center bg-[var(--secondary)] py-4 rounded-md font-medium text-white hover:scale-[1.02] transition"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}
    </header>
  );
}
