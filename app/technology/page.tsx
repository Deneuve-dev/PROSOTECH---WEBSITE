"use client";

import { Cpu, Network, Server, ShieldCheck, Sun, Database } from "lucide-react";

const technologies = [
  {
    title: "Telecom Networks",
    description:
      "Design and deployment of modern telecommunications infrastructure including fiber, wireless and enterprise connectivity.",
    icon: Network,
  },
  {
    title: "IT Infrastructure",
    description:
      "Enterprise-grade IT architecture, server systems and resilient digital infrastructure.",
    icon: Server,
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced security architecture to protect data, networks and critical systems.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud & Data Systems",
    description:
      "Modern data storage solutions, distributed systems and scalable computing infrastructure.",
    icon: Database,
  },
  {
    title: "Renewable Energy Systems",
    description:
      "Solar and hybrid energy infrastructure designed to power modern telecommunications and IT networks.",
    icon: Sun,
  },
  {
    title: "Advanced Computing",
    description:
      "High-performance computing systems supporting modern digital and engineering environments.",
    icon: Cpu,
  },
];

export default function Technology() {
  return (
    <section className="py-28 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}

        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Technology & Expertise
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Our engineering teams combine advanced telecommunications, IT
            infrastructure, cybersecurity and renewable energy expertise to
            build reliable and scalable systems.
          </p>
        </div>

        {/* Technology grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition duration-500"
              >
                {/* Icon */}

                <div className="mb-6 text-[var(--secondary)]">
                  <Icon size={34} />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover border glow */}

                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--secondary)]/40 transition duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
