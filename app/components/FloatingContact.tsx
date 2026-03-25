"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: <MessageCircle size={20} />,
      link: "https://wa.me/25779493801",
      label: "WhatsApp",
    },
    {
      icon: <Phone size={20} />,
      link: "tel:+25779493801",
      label: "Call",
    },
    {
      icon: <Mail size={20} />,
      link: "mailto:prosotechnology@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ICONS */}
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className={`group flex items-center gap-3 px-4 py-3 rounded-full border border-white/10

  bg-[#0F172A]/90 backdrop-blur-md text-gray-300

  transition-all duration-500 ease-out

  ${
    open
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-6 scale-75 pointer-events-none"
  }

  hover:scale-105 hover:-translate-y-1
  hover:text-white
  hover:bg-[#1E293B]
  hover:border-[var(--secondary)]
  hover:shadow-[0_0_20px_rgba(255,165,0,0.25)]
`}
          style={{
            transitionDelay: open ? `${index * 120}ms` : "0ms",
          }}
        >
          {/* ICON */}
          <span className="transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </span>

          {/* LABEL */}
          <span className="text-sm tracking-wide transition-all duration-300 group-hover:translate-x-1">
            {item.label}
          </span>
        </a>
      ))}

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[var(--secondary)] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition duration-300"
      >
        {open ? "✕" : "+"}
      </button>
    </div>
  );
}
