"use client";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <section className="py-28 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}

          <div className="relative group overflow-hidden rounded-xl">
            <img
              src="/images/lightabout.png"
              alt="Engineers"
              className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 text-sm tracking-wide text-gray-200">
              Engineering Reliable Infrastructure
            </div>
          </div>

          {/* RIGHT TEXT */}

          <div>
            <span className="text-sm uppercase tracking-widest text-[var(--secondary)]">
              About PROSOTECH
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Engineering Digital and Energy Infrastructure
            </h2>

            <p className="text-gray-400 mt-8 leading-relaxed">
              PROSOTECH is an engineering company based in Bujumbura delivering
              integrated telecommunications, IT infrastructure, cybersecurity, ,
              preventive maintenance, renewable energy and technical training
              solutions. Our mission is to design and operate reliable, scalable
              systems that support modern organizations and critical
              infrastructure.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              We combine deep engineering expertise with strong field experience
              to deploy high-performance infrastructure, ensure system
              reliability through preventive maintenance, and empower teams
              through practical technical training programs in IT, digital tools
              and operational technologies.
            </p>

            {/* KEY POINTS */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-sm">
              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  Telecom Engineering
                </h4>
                <p className="text-gray-400 mt-2">
                  Network infrastructure and connectivity systems.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  IT Systems
                </h4>
                <p className="text-gray-400 mt-2">
                  Secure and scalable enterprise digital infrastructure.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  Cybersecurity
                </h4>
                <p className="text-gray-400 mt-2">
                  Protection of digital assets and mission-critical systems.
                </p>
              </div>
              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  Preventive Maintenance
                </h4>
                <p className="text-gray-400 mt-2">
                  Ensuring reliability and performance of critical systems.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  Renewable Energy
                </h4>
                <p className="text-gray-400 mt-2">
                  Solar energy solutions for reliable infrastructure.
                </p>
              </div>

              <div className="border border-white/10 p-5 rounded-lg">
                <h4 className="text-[var(--secondary)] font-semibold">
                  Technical Training
                </h4>
                <p className="text-gray-400 mt-2">
                  Practical IT and digital skills training for teams and
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
