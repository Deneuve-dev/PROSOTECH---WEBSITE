"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Telecom Infrastructure",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const promise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    toast.promise(promise, {
      loading: "Sending request...",
      success: "✅ Consultation request sent successfully!",
      error: "❌ Failed to send. Try again.",
    });

    try {
      const res = await promise;

      if (res.ok) {
        setForm({
          name: "",
          email: "",
          company: "",
          service: "Telecom Infrastructure",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <PageTransition>
      <section className="py-28 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="max-w-2xl mb-16">
            <span className="text-sm uppercase tracking-widest text-[var(--secondary)]">
              Consultation
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4">
              Request Engineering Consultation
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Contact PROSOTECH to discuss telecommunications, IT
              infrastructure, cybersecurity, renewable energy or technical
              training projects.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-20">
            {/* LEFT SIDE */}
            <div className="space-y-10">
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="font-medium mt-2">
                  SKA Business Center Building
                  <br />
                  Quartier Asiatique
                  <br />
                  Bujumbura, Burundi
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium mt-2">prosotechnology@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Services</p>
                <p className="font-medium mt-2">
                  Telecom • IT Infrastructure • Cybersecurity • Renewable Energy
                  • Preventive Maintenance • Technical Training
                </p>
              </div>

              {/* MAP */}
              <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=SKA%20Business%20Center%20Bujumbura&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-[320px] border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full mt-2 bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full mt-2 bg-[#0F172A] text-white border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  >
                    <option>Telecom Infrastructure</option>
                    <option>IT Systems</option>
                    <option>Cybersecurity</option>
                    <option>Renewable Energy</option>
                    <option>Preventive Maintenance</option>
                    <option>Technical Training</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 bg-transparent border border-white/20 rounded-md px-4 py-3 focus:outline-none focus:border-[var(--secondary)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--secondary)] py-4 rounded-md font-medium hover:scale-[1.02] transition"
                >
                  {loading ? "Sending..." : "Send Consultation Request"}
                </button>

                {/* STATUS MESSAGE */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
