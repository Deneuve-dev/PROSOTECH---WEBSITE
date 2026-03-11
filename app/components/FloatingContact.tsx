"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, Plus } from "lucide-react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const phone = "25779493801";
  const message =
    "Hello PROSOTECH, I would like information about your services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* OPTIONS */}

      {open && (
        <>
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            <Phone size={20} />
            <span className="text-sm font-medium">Call</span>
          </a>

          {/* Email */}
          <a
            href="mailto:prosotechnology@gmail.com"
            className="flex items-center gap-3 bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            <Mail size={20} />
            <span className="text-sm font-medium">Email</span>
          </a>
        </>
      )}

      {/* MAIN BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-16 h-16 bg-[var(--secondary)] text-white rounded-full shadow-xl hover:scale-110 transition"
      >
        <Plus
          size={30}
          className={`transition-transform ${open ? "rotate-45" : ""}`}
        />
      </button>
    </div>
  );
}
