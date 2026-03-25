"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    {
      value: 12,
      suffix: "+",
      label: "Years Engineering Experience",
    },
    {
      value: 120,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      value: 35,
      suffix: "+",
      label: "Enterprise Clients",
    },
    {
      value: 99.9,
      suffix: "%",
      label: "System Reliability",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-28">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
      >
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="text-5xl md:text-6xl font-bold text-[var(--primary)] tracking-tight">
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.value === 99.9 ? 1 : 0}
                />
              )}

              {stat.suffix}
            </div>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-[200px] mx-auto">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
