"use client";

export default function Clients() {
  return (
    <section className="py-28 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}

        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Trusted By Organizations
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            PROSOTECH provides engineering services to organizations that
            require reliable telecommunications, IT infrastructure and energy
            systems.
          </p>
        </div>

        {/* CLIENT LOGOS */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-80">
          {/* KCB */}

          <div className="flex justify-center group">
            <img
              src="/images/kcblogo.svg"
              alt="KCB Bank"
              className="h-12 grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* placeholders for future clients */}

          <div className="flex justify-center opacity-40">
            <div className="h-10 w-24 border border-white/20 rounded-md"></div>
          </div>

          <div className="flex justify-center opacity-40">
            <div className="h-10 w-24 border border-white/20 rounded-md"></div>
          </div>

          <div className="flex justify-center opacity-40">
            <div className="h-10 w-24 border border-white/20 rounded-md"></div>
          </div>

          <div className="flex justify-center opacity-40">
            <div className="h-10 w-24 border border-white/20 rounded-md"></div>
          </div>
        </div>

        {/* FEATURED CLIENT CASE */}

        <div className="mt-24 border border-white/10 rounded-xl p-10 bg-white/[0.02]">
          <span className="text-sm uppercase tracking-wide text-[var(--secondary)]">
            Featured Client Project
          </span>

          <h3 className="text-2xl font-semibold mt-3">
            Preventive Maintenance – KCB Bank Burundi
          </h3>

          <p className="text-gray-400 mt-6 max-w-3xl leading-relaxed">
            PROSOTECH carried out preventive maintenance operations across all
            branches of <strong>KCB Bank Burundi</strong>, ensuring the
            reliability and operational continuity of telecommunications and IT
            infrastructure systems supporting banking operations.
          </p>
        </div>
      </div>
    </section>
  );
}
