"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstagramFeed, InstagramSectionHeader } from "@/components/instagram-feed";
import { placeholderPosts } from "@/lib/instagram";

const highlights = [
  {
    title: "Event Curation & Promotion",
    description: "High-energy concerts, festivals, and club nights that sell out and set the tone for Afrobeats in Australia.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Artist Tours & Management",
    description: "Bringing international talent to Australian stages—handling routing, promotion, and unforgettable live moments.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Community & Culture",
    description: "Spaces that celebrate African and diaspora sounds—building community through shared musical experiences.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const tours = [
  {
    title: "Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard, Melbourne",
    lineup: "Asake, King Promise, BNXN (fka Buju) + more",
    note: "Sold-out; described as a historic night for Melbourne.",
  },
  {
    title: "Bien Alusa — “Why Are You Topless” Tour",
    date: "May 3, 2024",
    venue: "Corner Hotel, Richmond",
    lineup: "Bien Alusa (Sauti Sol)",
    note: "Grammy-winning songwriter live in Melbourne.",
  },
  {
    title: "Nviiri the Storyteller — Australia Tour",
    date: "Nov 2023",
    venue: "Perth · Sydney · Adelaide · Melbourne · Brisbane",
    lineup: "Nviiri the Storyteller",
    note: "Debut multi-city Australian tour.",
  },
  {
    title: "Hype Town Melbourne",
    date: "Jun 2024",
    venue: "52 Albert Rd, South Melbourne",
    lineup: "Deklack, Sosa, Trece, Glow",
    note: "High-energy club night spotlighting top DJs.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
                  Australia • Entertainment • Visual
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Australia’s home for immersive entertainment experiences.
              </h1>

              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                What You See AU curates sold-out festivals, tours, and club nights—bridging international talent with Australian audiences and crafting cultural moments that last.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button>Book an Experience</Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost">View Tours & Events</Button>
                </Link>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Melbourne-based • Entertainment • Live music • Culture
              </p>
            </motion.div>

            {/* Hero visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-orange-500/30 via-fuchsia-500/20 to-transparent blur-2xl" />
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl">
                <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">
                      What You See
                    </span>
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                      Live Set • Visual
                    </span>
                  </div>

                  {/* Visual: pulsating dim blur light */}
                  <div className="flex-1 flex items-center justify-center my-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Soft background glow */}
                      <motion.div
                        className="absolute h-40 w-40 sm:h-52 sm:w-52 rounded-full bg-gradient-to-tr from-orange-500/20 via-fuchsia-500/15 to-transparent blur-3xl"
                        animate={{
                          scale: [1, 1.08, 1],
                          opacity: [0.25, 0.45, 0.25],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Inner dim core */}
                      <motion.div
                        className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-tr from-orange-400/25 via-fuchsia-400/25 to-slate-900/60 blur-md"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Highlight
                    </p>
                    <p className="text-xl font-semibold text-white leading-snug">
                      A room lit like a thought you haven&apos;t had yet.
                    </p>
                    <p className="text-sm text-slate-400">
                      Glimpses from recent nights, projections and immersive
                      rooms — curated live on{" "}
                      <a
                        href="https://www.instagram.com/whatyouseeau/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 underline underline-offset-4"
                      >
                        Instagram
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Snapshot Section */}
      <section className="border-t border-slate-800/60 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-3 lg:items-start"
          >
            <div className="space-y-4 lg:col-span-1">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Company Profile</p>
              <h2 className="text-3xl font-bold text-white">
                What You See AU — premier cultural curator for live entertainment in Australia.
              </h2>
              <p className="text-slate-400">
                We produce high-energy concerts, festivals, and club nights; manage artist tours; and build communities around African and diaspora sounds.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
              {[
                "Event Curation & Promotion",
                "Artist Tours & Management",
                "Cultural Community Building",
                "Brand & Venue Partnerships",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-5 text-slate-200 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-t border-slate-800/60 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Creating unforgettable moments through light, sound, and space.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-fuchsia-500/20 text-orange-400 group-hover:from-orange-500/30 group-hover:to-fuchsia-500/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours & Festivals Section */}
      <section className="border-t border-slate-800/60 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">Flagship Shows</p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Recent Tours & Festivals</h3>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
              Historic, sold-out, and community-building nights that connect international talent with Australian fans.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {tours.map((tour, idx) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm hover:border-orange-500/50 hover:shadow-orange-500/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-300">{tour.date}</p>
                    <h4 className="mt-2 text-xl font-semibold text-white">{tour.title}</h4>
                    <p className="text-sm text-slate-300 mt-1">{tour.venue}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-400">{tour.lineup}</p>
                <p className="mt-2 text-sm text-slate-500">{tour.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <InstagramSectionHeader />
          <InstagramFeed posts={placeholderPosts.slice(0, 9)} variant="masonry" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800/60 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to create something unforgettable?
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Whether it&apos;s a show, an installation, or a collaboration —
              let&apos;s make it happen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
              <Link href="/work">
                <Button variant="ghost">See Our Work</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
