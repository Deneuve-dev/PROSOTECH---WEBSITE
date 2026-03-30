import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1629] text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Company */}
        <div className="flex items-center">
          <img
            src="images/prosotechlogo.jpg"
            alt="PROSOTECH Logo"
            className="h-20 md:h-40 object-contain  opacity-90 hover:opacity-100 transition"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#clients" className="hover:text-white transition">
                Clients
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-[var(--secondary)]" />
              <span>
                SKA Business Center Building <br />
                Quartier Asiatique <br />
                Bujumbura, Burundi
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[var(--secondary)]" />
              <span>+257 79493801</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[var(--secondary)]" />
              <span>prosotechnology@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © PROSOTECH. All rights reserved.
      </div>
    </footer>
  );
}
