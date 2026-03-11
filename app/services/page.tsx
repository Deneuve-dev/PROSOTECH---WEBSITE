"use client";

import {
  Server,
  RadioTower,
  ShieldCheck,
  Sun,
  Network,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Telecom Infrastructure",
    description:
      "Design and deployment of reliable telecom networks, fiber systems and communication infrastructure.",
    icon: RadioTower,
  },
  {
    title: "Secure IT Systems",
    description:
      "Implementation of enterprise IT architectures, servers, and resilient data infrastructures.",
    icon: Server,
  },
  {
    title: "Cybersecurity",
    description:
      "Protection of digital assets through advanced security architecture and threat monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "Renewable Energy",
    description:
      "Solar and hybrid energy systems designed to power critical infrastructure sustainably.",
    icon: Sun,
  },
  {
    title: "Network Engineering",
    description:
      "Advanced network design, routing architecture and performance optimization.",
    icon: Network,
  },
  {
    title: "Consulting & Integration",
    description:
      "Technical consulting and integration of complex telecom and IT ecosystems.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Engineering Services
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            PROSOTECH provides advanced telecommunications, IT systems,
            cybersecurity and renewable energy infrastructure designed for
            reliability, performance and long-term scalability.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition duration-500"
              >
                {/* Icon */}
                <div className="mb-6 text-[var(--secondary)]">
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--secondary)]/40 transition duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
