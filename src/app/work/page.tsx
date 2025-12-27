"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

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
    id: "takeover-brothers-2024",
    title: "Takeover Brothers — Australia Tour 2024",
    date: "Nov 29 - Dec 7, 2024",
    venue: "Melbourne · Sydney · Brisbane · Adelaide · Perth",
    city: "National",
    lineup: "DJ Kym NickDee · DJ Moh Spice",
    note: "Five-city tour bringing the Takeover Brothers energy across Australia.",
    tag: "Tour",
    accent: "from-red-500 via-orange-500 to-yellow-400",
    image: "/takeover-brothers.jpg",
    details: "Multi-city DJ tour featuring DJ Kym NickDee and DJ Moh Spice, produced by What You See AU in partnership with Create Entertainment and MOB.",
  },
  {
    id: "joe-mfalme-2024",
    title: "DJ Joe Mfalme — Live in Melbourne",
    date: "Jul 2, 2024",
    venue: "TBA",
    city: "Melbourne",
    lineup: "DJ Joe Mfalme",
    note: "Tickets on Eventbrite (link in bio). Unforgettable night of electrifying beats and non-stop fun.",
    tag: "DJ Set",
    accent: "from-cyan-400 via-blue-500 to-purple-500",
    image: "/joe-mfalme.jpg",
    details: "High-energy DJ set by DJ Joe Mfalme. Secure your tickets on Eventbrite and get ready to groove.",
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
    details: "Full live set with live band support; BNXN's first Melbourne festival headline under What You See AU.",
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
];

function EventCard({ event, index, onClick }: { event: EventItem; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects with smooth values
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);
  
  return (
    <motion.article
      ref={cardRef}
      style={{ y, scale, opacity, rotate }}
      className="sticky top-32"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
        className="group relative mx-auto max-w-4xl cursor-pointer"
        onClick={onClick}
      >
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-slate-800/60 bg-slate-900 shadow-2xl transition-all duration-500 hover:border-orange-500/50 hover:shadow-orange-500/20">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-slate-900">
              {event.image ? (
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    style={{ objectPosition: 'center center' }}
                    quality={85}
                    priority={index < 3}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </motion.div>
              ) : (
                <div className={`h-full w-full bg-gradient-to-br ${event.accent}`} />
              )}
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <span className="rounded-full bg-slate-900/90 backdrop-blur-md border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-lg">
                  {event.tag}
                </span>
              </motion.div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="relative p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-950">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-5"
              >
                {/* Date */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
                  <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-bold">
                    {event.date}
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-l from-orange-500/50 to-transparent" />
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-orange-100 transition-colors">
                  {event.title}
                </h2>
                
                {/* Location */}
                <div className="flex items-center gap-3 text-slate-300">
                  <motion.svg
                    className="w-5 h-5 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </motion.svg>
                  <span className="font-medium">{event.city}</span>
                </div>
                
                {/* Lineup */}
                <p className="text-slate-400 leading-relaxed">
                  {event.lineup}
                </p>
                
                {/* Note */}
                <p className="text-sm text-slate-500 italic border-l-2 border-orange-500/30 pl-4">
                  {event.note}
                </p>
                
                {/* Details Button */}
                {event.details && (
                  <div className="pt-4">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-orange-400 hover:text-orange-300 font-bold transition-colors"
                    >
                      <span>Explore Details</span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-tr-full" />
        </div>
      </motion.div>
    </motion.article>
  );
}

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
                Our Work
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
      {/* Stacked Cards with Parallax */}
      <section className="border-t border-slate-800/60 relative bg-slate-950 overflow-hidden">
        {/* Animated Gradient Background Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          animate={{
            background: [
              "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(14,165,233,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(34,197,94,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(249,115,22,0.2) 50%, transparent 100%)",
            ],
            scale: [1, 1.2, 1.1, 1],
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          animate={{
            background: [
              "radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(249,115,22,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(14,165,233,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(34,197,94,0.2) 50%, transparent 100%)",
            ],
            scale: [1, 1.15, 1.05, 1],
            x: [0, -80, 50, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          animate={{
            background: [
              "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(249,115,22,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(249,115,22,0.3) 0%, rgba(34,197,94,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(14,165,233,0.2) 50%, transparent 100%)",
              "radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 100%)",
            ],
            scale: [1, 1.3, 1.1, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="mx-auto max-w-5xl px-4 py-32 sm:px-6 lg:px-8 relative z-10">
          <div className="relative space-y-32">
            {events.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onClick={() => event.details && setExpandedId(event.id)}
              />
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

      {/* Modal for details */}
      <AnimatePresence>
        {expandedEvent && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedId(null)}
            />
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl pointer-events-auto">
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
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
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
