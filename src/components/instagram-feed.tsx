"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  InstagramPost,
  formatPostDate,
  truncateCaption,
} from "@/lib/instagram";

interface InstagramFeedProps {
  posts: InstagramPost[];
  variant?: "grid" | "masonry" | "carousel";
}

// Instagram icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Play icon for videos
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

// Carousel icon for albums
function CarouselIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

// Individual post card with artistic hover effects
function InstagramPostCard({
  post,
  index,
  size = "normal",
}: {
  post: InstagramPost;
  index: number;
  size?: "small" | "normal" | "large";
}) {
  const sizeClasses = {
    small: "aspect-square",
    normal: "aspect-square",
    large: "aspect-[4/5] sm:col-span-2 sm:row-span-2",
  };

  // Determine if this post should be featured (larger)
  const isFeatured = index === 0 || index === 4;
  const actualSize = isFeatured ? "large" : size;

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${sizeClasses[actualSize]}`}
    >
      {/* Image/Video thumbnail */}
      <div className="absolute inset-0">
        {/* Gradient placeholder while image loads or if no real image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
        
        {/* Artistic gradient overlay based on post index for variety */}
        <div
          className={`absolute inset-0 opacity-60 mix-blend-overlay ${
            index % 3 === 0
              ? "bg-gradient-to-br from-orange-500/40 to-fuchsia-500/40"
              : index % 3 === 1
              ? "bg-gradient-to-tr from-fuchsia-500/40 to-cyan-500/40"
              : "bg-gradient-to-bl from-orange-500/40 to-pink-500/40"
          }`}
        />

        {/* Actual image - shows when media_url starts with http (real Instagram images) */}
        {post.media_url.startsWith("http") && (
          <Image
            src={post.media_type === "VIDEO" && post.thumbnail_url ? post.thumbnail_url : post.media_url}
            alt={post.caption || "Instagram post"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
          />
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Media type indicator */}
      {(post.media_type === "VIDEO" || post.media_type === "CAROUSEL_ALBUM") && (
        <div className="absolute top-3 right-3 z-10">
          {post.media_type === "VIDEO" ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 backdrop-blur-sm text-white">
              <PlayIcon className="h-4 w-4" />
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 backdrop-blur-sm text-white">
              <CarouselIcon className="h-4 w-4" />
            </div>
          )}
        </div>
      )}

      {/* Content overlay - shows on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {/* Caption */}
        {post.caption && (
          <p className="text-sm text-white leading-relaxed mb-2 line-clamp-3">
            {truncateCaption(post.caption, isFeatured ? 150 : 80)}
          </p>
        )}

        {/* Meta info */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{formatPostDate(post.timestamp)}</span>
          <div className="flex items-center gap-1">
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>View on Instagram</span>
          </div>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/50 transition-colors duration-300" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_30px_rgba(249,115,22,0.15)]" />
    </motion.a>
  );
}

// Main feed component
export function InstagramFeed({ posts, variant = "masonry" }: InstagramFeedProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <InstagramIcon className="h-12 w-12 mx-auto text-slate-600 mb-4" />
        <p className="text-slate-400">No posts to display</p>
      </div>
    );
  }

  if (variant === "carousel") {
    return (
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {posts.map((post, index) => (
          <div key={post.id} className="flex-shrink-0 w-64 snap-center">
            <InstagramPostCard post={post} index={index} size="normal" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, index) => (
          <InstagramPostCard key={post.id} post={post} index={index} size="normal" />
        ))}
      </div>
    );
  }

  // Masonry-style layout with featured posts
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
      {posts.map((post, index) => (
        <InstagramPostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}

// Header component for Instagram sections
export function InstagramSectionHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-fuchsia-500 text-white">
            <InstagramIcon className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            From the Feed
          </h2>
        </div>
        <p className="text-slate-400">
          Moments, textures, and scenes from{" "}
          <a
            href="https://www.instagram.com/whatyouseeau/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline underline-offset-4"
          >
            @whatyouseeau
          </a>
        </p>
      </div>
      <a
        href="https://www.instagram.com/whatyouseeau/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-orange-500/50 hover:bg-slate-800 hover:text-white"
      >
        <InstagramIcon className="h-4 w-4" />
        Follow @whatyouseeau
      </a>
    </div>
  );
}
