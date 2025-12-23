"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  venue: string;
  city: string;
  lineup: string;
  note: string;
  tag: string;
  accent: string;
  image?: string;
  details?: string;
};

const events: EventItem[] = [
  {
    id: "asake-2024",
    title: "Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard",
    city: "Melbourne",
    lineup: "Asake · King Promise · BNXN (Buju) · Kenny2Play · Kily Safari · Mozatti · Miss Nancy · KZEE Bickame",
    note: "Sold out • Called a historic night for the city.",
    tag: "Festival",
    accent: "from-orange-500 via-fuchsia-500 to-sky-400",
    details:
      "Flagship festival delivering a historic, sold-out night in Melbourne, uniting Afrobeats headliners with local DJs and hosts. Produced end-to-end by What You See AU.",
  },
  {
    id: "bnxn-2024",
    title: "BNXN (Buju) — Live at Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard",
    city: "Melbourne",
    lineup: "BNXN headlining set with live band & DJ support.",
    note: "Fan-favourite performance; anchored the festival night.",
    tag: "Headliner",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    image: "/bnxn.jpg",
    details: "Full live set with live band support; BNXN’s first Melbourne festival headline under What You See AU.",
  },
  {
    id: "kingpromise-2024",
    title: "King Promise — Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard",
    city: "Melbourne",
    lineup: "King Promise main-stage performance.",
    note: "Delivered crowd anthems that amplified the night.",
    tag: "Headliner",
    accent: "from-emerald-400 via-teal-400 to-sky-400",
    image: "/king-promise.jpg",
    details: "A high-energy main-stage performance featuring fan favourites; coordinated hospitality, promo, and production by What You See AU.",
  },
  {
    id: "djshinski-2024",
    title: "DJ Shinski — Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard",
    city: "Melbourne",
    lineup: "High-energy DJ set keeping the floor packed.",
    note: "Signature mix bridging Afrobeats and club energy.",
    tag: "DJ Set",
    accent: "from-purple-500 via-indigo-500 to-cyan-400",
    image: "/dj-shinski.png",
    details: "Prime-time DJ set that bridged Afrobeats and club hits, keeping the festival floor moving between headliners.",
  },
  {
    id: "bien-2024",
    title: "Bien Alusa — “Why Are You Topless” Tour",
    date: "May 3, 2024",
    venue: "Corner Hotel",
    city: "Richmond (Melbourne)",
    lineup: "Bien Alusa (Sauti Sol)",
    note: "Grammy-winning songwriter in an intimate headline show.",
    tag: "Tour",
    accent: "from-fuchsia-500 via-amber-400 to-orange-500",
    image: "/bien-alusa.jpg",
  },
  {
    id: "nviiri-2023",
    title: "Nviiri the Storyteller — Australia Tour",
    date: "Nov 2023",
    venue: "Perth · Sydney · Adelaide · Melbourne · Brisbane",
    city: "National",
    lineup: "Nviiri the Storyteller",
    note: "Debut multi-city Australian run—five cities, five packed rooms.",
    tag: "Tour",
    accent: "from-sky-400 via-emerald-400 to-fuchsia-500",
    image: "/nviiri.jpg",
    details: "Five-city debut tour across Australia with full routing, promotion, and on-ground show management by What You See AU.",
  },
  {
    id: "hypetown-2024",
    title: "Hype Town Melbourne",
    date: "Jun 2024",
    venue: "52 Albert Rd",
    city: "South Melbourne",
    lineup: "Deklack · Sosa · Trece · Glow",
    note: "High-energy club night spotlighting top local DJs.",
    tag: "Club",
    accent: "from-violet-500 via-indigo-500 to-cyan-400",
  },
];

export default function WorkPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expandedEvent = events.find((e) => e.id === expandedId);
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
              Recent tours, festivals, and club nights.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              The moments we’ve curated across Australia—connecting international stars, DJs, and communities.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Timeline */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative overflow-hidden">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-[-80px] bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/12 blur-3xl" />

            <div className="relative space-y-10">
              {/* Rail */}
              <div className="absolute inset-y-0 left-3 w-px bg-slate-800/60" aria-hidden />

              {events.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative pl-10"
                >
                  {/* connector dot */}
                  <div className="absolute left-0 top-10 h-3 w-3 rounded-full bg-gradient-to-r from-orange-500 to-fuchsia-500 shadow-[0_0_12px_rgba(249,115,22,0.55)]" aria-hidden />

                  <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
                    <div className="p-6 sm:p-7 flex flex-col gap-5 md:flex-row md:items-start">
                      <div className="flex-1 space-y-3 order-2 md:order-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs uppercase tracking-[0.25em] text-orange-300">{event.date}</span>
                          <span className="rounded-full border border-slate-700/70 bg-slate-800/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
                            {event.tag}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-white leading-snug">{event.title}</h2>
                        <p className="text-sm text-slate-300">{event.venue} • {event.city}</p>
                        <p className="text-sm text-slate-300">{event.lineup}</p>
                        <p className="text-sm text-slate-500">{event.note}</p>

                        {event.details && (
                          <div className="pt-1 flex justify-start md:justify-end">
                            <button
                              onClick={() => setExpandedId(event.id)}
                              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 hover:text-orange-200 transition-colors"
                            >
                              Open details
                              <span aria-hidden>↗</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="relative w-full md:w-60 lg:w-72 h-48 md:h-56 overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900 shadow-lg order-1 md:order-2">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20rem"
                            className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105"
                            priority={event.id === "bien-2024"}
                          />
                        ) : (
                          <div
                            className={`h-full w-full bg-gradient-to-br ${event.accent} opacity-90`}
                            aria-hidden
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-100">
                            {event.tag}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-orange-200">
                          {event.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
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

      {/* Modal for details */}
      <AnimatePresence>
        {expandedEvent && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-orange-500 via-fuchsia-500 to-sky-400" />
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
                        {expandedEvent.date}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{expandedEvent.title}</h3>
                      <p className="text-sm text-slate-300">
                        {expandedEvent.venue} • {expandedEvent.city}
                      </p>
                    </div>
                    <button
                      onClick={() => setExpandedId(null)}
                      className="rounded-full border border-slate-700/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                    >
                      Close
                    </button>
                  </div>

                  {expandedEvent.image && (
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900">
                      <Image
                        src={expandedEvent.image}
                        alt={expandedEvent.title}
                        fill
                        sizes="100vw"
                        className="object-cover object-[50%_30%]"
                      />
                    </div>
                  )}

                  <p className="text-sm text-slate-200 leading-relaxed">{expandedEvent.details}</p>
                  <p className="text-sm text-slate-400">{expandedEvent.lineup}</p>
                  <p className="text-sm text-slate-500">{expandedEvent.note}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
