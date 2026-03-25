"use client";

const projects = [
  {
    title: "Fiber Network Deployment",
    category: "Telecom Infrastructure",
    description:
      "Design and deployment of high-capacity fiber optic networks to support enterprise communication and data transmission.",
    image: "/images/portfolioimges/lightIT.png",
  },
  {
    title: "Solar Energy System Installation",
    category: "Renewable Energy",
    description:
      "Implementation of solar power infrastructure to ensure reliable energy supply for telecom and IT systems.",
    image: "/images/portfolioimges/lightsolarporf.png",
  },
  {
    title: "Secure Data Infrastructure",
    category: "Cybersecurity",
    description:
      "Deployment of secure server architecture and advanced protection mechanisms for mission-critical systems.",
    image: "/images/portfolioimges/lightserver1.png",
  },
];

export default function Portfolio() {
  return (
    <section className="py-28 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Selected infrastructure projects delivered by PROSOTECH in
            telecommunications, IT systems and renewable energy.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-14 items-center group ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* HOVER LIGHT EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>

              {/* TEXT */}
              <div>
                <span className="text-sm text-[var(--secondary)] uppercase tracking-wide">
                  {project.category}
                </span>

                <h3 className="text-3xl font-semibold mt-3">{project.title}</h3>

                <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                {/* CTA PREMIUM */}
                <a
                  href="/contact#consultation"
                  className="relative inline-flex items-center gap-4 mt-8 px-6 py-3 rounded-md border border-white/20 overflow-hidden group"
                >
                  {/* BACKGROUND ANIMATION */}
                  <span className="absolute inset-0 bg-[var(--secondary)] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                  {/* TEXT */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Discuss a Similar Project
                  </span>

                  {/* ARROW */}
                  <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
