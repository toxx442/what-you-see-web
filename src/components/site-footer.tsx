import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-orange-500 to-fuchsia-500">
                <div className="absolute inset-1 rounded-full bg-slate-50 dark:bg-slate-950" />
                <div className="absolute inset-1.5 rounded-full bg-gradient-to-tr from-orange-500 to-fuchsia-500" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white">
                What You See
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Modern entertainment experiences, visual installations, and curated events across Australia.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              Based in Australia 🇦🇺
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
                Explore
              </h4>
              <nav className="flex flex-col gap-2">
                <Link href="/work" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Our Work
                </Link>
                <Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
                Connect
              </h4>
              <nav className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/whatyouseeau/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @whatyouseeau
                </a>
              </nav>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
                Bookings
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For shows, installations, and collaborations.
              </p>
              <Link
                href="/contact"
                className="inline-flex text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} What You See. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-600">
            Entertainment • Visual • Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
