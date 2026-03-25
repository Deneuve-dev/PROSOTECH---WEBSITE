"use client";

import {
  Wifi,
  Server,
  ShieldCheck,
  Sun,
  Wrench,
  GraduationCap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Telecom Infrastructure",
      icon: Wifi,
      description:
        "Deployment and maintenance of telecom infrastructure including network equipment, fiber optics, and communication systems.",
    },
    {
      title: "IT Systems Integration",
      icon: Server,
      description:
        "Design and integration of enterprise IT systems to ensure efficient, secure, and scalable operations.",
    },
    {
      title: "Cybersecurity Solutions",
      icon: ShieldCheck,
      description:
        "Implementation of modern cybersecurity practices to protect networks, data, and digital infrastructures.",
    },
    {
      title: "Renewable Energy Systems",
      icon: Sun,
      description:
        "Engineering and deployment of solar and hybrid renewable energy systems for reliable and sustainable power supply.",
    },
    {
      title: "Preventive Maintenance",
      icon: Wrench,
      description:
        "Professional maintenance programs to ensure operational continuity and reliability of critical systems.",
    },
    {
      title: "Technical Training",
      icon: GraduationCap,
      description:
        "Training programs for companies to strengthen employees' digital skills including computer basics, office tools (Word, Excel, PowerPoint), internet usage, and digital communication.",
    },
  ];
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
