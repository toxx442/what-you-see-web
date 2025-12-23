"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstagramFeed, InstagramSectionHeader } from "@/components/instagram-feed";
import { placeholderPosts } from "@/lib/instagram";

const highlights = [
  {
    title: "Immersive Live Visuals",
    description:
      "Bold lighting, projection mapping, and staging that transforms any space into a living story.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Curated Events",
    description:
      "From intimate gatherings to full-scale productions, designed and delivered end-to-end.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Creative Collaborations",
    description:
      "Working with artists, brands, and venues across Australia to bring unique visions to life.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
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
                What you see{" "}
                <span className="block bg-gradient-to-r from-orange-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                  is only the beginning.
                </span>
              </h1>

              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                What You See crafts modern entertainment experiences — shows,
                visuals, and atmospheres that live where nightlife, art, and
                culture meet.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button>Book an Experience</Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost">View Recent Work</Button>
                </Link>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Based in Australia · Available for shows, collaborations &
                installations.
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

                  {/* Visual placeholder - replace with actual image */}
                  <div className="flex-1 flex items-center justify-center my-6">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-orange-500 to-fuchsia-500 opacity-80 blur-xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-orange-500 to-fuchsia-500 shadow-lg shadow-orange-500/50" />
                      </div>
                    </div>
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
