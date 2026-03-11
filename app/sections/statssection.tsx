"use client";

import { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 60);

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className="bg-[#0B1220] text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div>
          <div className="text-4xl font-semibold text-[var(--secondary)]">
            <Counter target={120} />
          </div>
          <p className="text-gray-400 mt-2 text-sm">Projects Delivered</p>
        </div>

        <div>
          <div className="text-4xl font-semibold text-[var(--secondary)]">
            <Counter target={20} />
          </div>
          <p className="text-gray-400 mt-2 text-sm">Systems Installed</p>
        </div>

        <div>
          <div className="text-4xl font-semibold text-[var(--secondary)]">
            <Counter target={24} />
          </div>
          <p className="text-gray-400 mt-2 text-sm">Critical Infrastructures</p>
        </div>

        <div>
          <div className="text-4xl font-semibold text-[var(--secondary)]">
            <Counter target={99} />
          </div>
          <p className="text-gray-400 mt-2 text-sm">Network Reliability %</p>
        </div>
      </div>
    </section>
  );
}
