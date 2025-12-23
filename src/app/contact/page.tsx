"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500/20 to-fuchsia-500/20 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
                Contact
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s design the night.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              For bookings, collaborations, or ideas that don&apos;t fit in a
              form, reach out below. We&apos;re based in Australia and available
              for select shows, installations, and one-off experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Get in touch
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  We typically respond within 24-48 hours. For urgent enquiries,
                  reach out via Instagram DM.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-fuchsia-500/20 text-orange-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500 mb-1">
                      Location
                    </p>
                    <p className="text-slate-200">Australia</p>
                    <p className="text-sm text-slate-400">
                      Available nationwide for events
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-fuchsia-500/20 text-orange-400">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500 mb-1">
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/whatyouseeau/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      @whatyouseeau
                    </a>
                    <p className="text-sm text-slate-400">
                      DMs open for quick enquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="pt-6 border-t border-slate-800">
                <h3 className="text-sm font-semibold text-white mb-4">
                  What we offer
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Live Shows",
                    "Installations",
                    "Brand Activations",
                    "Festival Visuals",
                    "Club Residencies",
                    "Collaborations",
                  ].map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
            >
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="type"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="">Select an option</option>
                    <option value="show">Show / Event</option>
                    <option value="installation">Installation</option>
                    <option value="brand">Brand Activation</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="date"
                      className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                    >
                      Preferred Date (optional)
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="location"
                      className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                    >
                      Location (optional)
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="City or venue"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project — the date, location, capacity, and what you're imagining..."
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Enquiry
                </Button>

                <p className="text-center text-xs text-slate-500">
                  We&apos;ll get back to you within 24-48 hours.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
