"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Neon Echo",
    location: "Sydney",
    type: "Live Show",
    year: "2025",
    description:
      "Immersive lighting and projection mapping for a late-night headline set at a warehouse venue.",
    tags: ["Projection", "Live", "Nightlife"],
  },
  {
    id: 2,
    title: "Soft Focus",
    location: "Melbourne",
    type: "Gallery Takeover",
    year: "2025",
    description:
      "A room-scale installation blending projection, spatial sound, and atmospheric haze.",
    tags: ["Installation", "Gallery", "Immersive"],
  },
  {
    id: 3,
    title: "Pulse",
    location: "Brisbane",
    type: "Festival Visual",
    year: "2024",
    description:
      "Real-time reactive visuals synced to live DJ sets across multiple stages.",
    tags: ["Festival", "Reactive", "Live"],
  },
  {
    id: 4,
    title: "Still Life",
    location: "Perth",
    type: "Brand Activation",
    year: "2024",
    description:
      "A bespoke visual experience for a luxury brand launch event.",
    tags: ["Brand", "Commercial", "Event"],
  },
  {
    id: 5,
    title: "Afterglow",
    location: "Adelaide",
    type: "Club Residency",
    year: "2024",
    description:
      "Ongoing visual design for a nightclub's monthly showcase series.",
    tags: ["Club", "Residency", "Nightlife"],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500/15 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-300">
                Work
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Selected nights & rooms.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A snapshot of shows, installations, and collaborations. Each
              project is crafted to feel like a place you can only visit once.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-fuchsia-500/50 hover:bg-slate-900/80 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-xl font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                        {project.title}
                      </h2>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 sm:flex-col sm:items-end sm:text-right text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500 mb-1">
                        Location
                      </p>
                      <p className="text-slate-300">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-500 mb-1">
                        Year
                      </p>
                      <p className="text-slate-300">{project.year}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800/60 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-slate-400">
              We&apos;d love to hear about it. Let&apos;s create something
              together.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
