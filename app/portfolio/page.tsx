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
        {/* Section Header */}

        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Selected infrastructure projects delivered by PROSOTECH in
            telecommunications, IT systems and renewable energy.
          </p>
        </div>

        {/* Projects */}

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-xl group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[360px] object-cover transform group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Text */}

              <div>
                <span className="text-sm text-[var(--secondary)] uppercase tracking-wide">
                  {project.category}
                </span>

                <h3 className="text-3xl font-semibold mt-3">{project.title}</h3>

                <p className="text-gray-400 mt-6 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <button className="mt-8 border border-white/20 px-6 py-3 rounded-md hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
