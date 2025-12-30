"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { InstagramFeed, InstagramSectionHeader } from "@/components/instagram-feed";
import { placeholderPosts } from "@/lib/instagram";
import { VideoHero } from "@/components/video-hero";

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
    title: "Takeover Brothers — Australia Tour 2024",
    date: "Nov 29 - Dec 7, 2024",
    venue: "Melbourne · Sydney · Brisbane · Adelaide · Perth",
    lineup: "DJ Kym NickDee · DJ Moh Spice",
    note: "Five-city national tour bringing the Takeover Brothers energy across Australia.",
  },
  {
    title: "Melbourne Afrobeats Festival",
    date: "Oct 20, 2024",
    venue: "The Timber Yard, Melbourne",
    lineup: "Asake, King Promise, BNXN (fka Buju)",
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
];


export default function HomePage() {
  return (
    <>
      {/* Video Hero Section */}
      <VideoHero videoId="1e9nxh3vfa8" variant="fullscreen" />

      {/* Company Snapshot Section */}
      <section className="border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-orange-50/30 via-white to-purple-50/30 dark:bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 lg:grid-cols-3 lg:items-start"
          >
            <div className="space-y-4 lg:col-span-1">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-600 dark:text-orange-300 font-semibold">Company Profile</p>
              <h2 className="text-3xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                What You See AU — premier cultural curator for live entertainment in Australia.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
                  className="rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-4 py-5 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 dark:hover:border-slate-700 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-white via-neutral-50/50 to-white dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
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
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all duration-300 hover:border-orange-400/60 hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-purple-50/50 dark:hover:bg-slate-900/80 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-fuchsia-500/10 text-orange-600 dark:text-orange-400 group-hover:from-orange-500/20 group-hover:to-fuchsia-500/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours & Festivals Section - Carousel */}
      <section className="border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-purple-50/30 via-neutral-50 to-orange-50/30 dark:bg-slate-900/40 overflow-hidden">
        <div className="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-6xl mx-auto"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-orange-600 dark:text-orange-300 font-semibold">Flagship Shows</p>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent sm:text-4xl">Recent Tours & Festivals</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Historic, sold-out, and community-building nights that connect international talent with Australian fans.
            </p>
          </motion.div>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {tours.map((tour, idx) => (
                <motion.div
                  key={tour.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group flex-shrink-0 w-[320px] sm:w-[380px] snap-center"
                >
                  <div className="relative h-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-lg transition-all duration-300 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-[1.03] hover:-translate-y-2 backdrop-blur-sm">
                    {/* Decorative gradient corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-transparent rounded-bl-full" />
                    
                    {/* Content */}
                    <div className="relative space-y-4">
                      {/* Date badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                        <svg className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs uppercase tracking-[0.25em] text-orange-600 dark:text-orange-300 font-medium">{tour.date}</p>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-100 transition-colors">
                        {tour.title}
                      </h4>
                      
                      {/* Venue */}
                      <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <svg className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-sm">{tour.venue}</p>
                      </div>
                      
                      {/* Lineup */}
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tour.lineup}</p>
                      </div>
                      
                      {/* Note */}
                      <p className="text-xs text-slate-500 dark:text-slate-500 italic">{tour.note}</p>
                      
                      {/* Hover indicator */}
                      <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-semibold">
                          <span>View Details</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll hint */}
            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
                ← Swipe to explore more →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <InstagramSectionHeader />
          <InstagramFeed posts={placeholderPosts.slice(0, 9)} variant="masonry" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-br from-orange-50/50 via-white to-purple-50/50 dark:from-slate-900/50 dark:to-slate-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-purple-100/20 dark:from-orange-900/10 dark:to-purple-900/10" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-orange-800 to-slate-900 dark:from-white dark:via-orange-100 dark:to-white bg-clip-text text-transparent sm:text-4xl">
              Ready to create something unforgettable?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
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
