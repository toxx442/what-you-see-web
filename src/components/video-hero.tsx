"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

// Declare YouTube types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoHeroProps {
  videoId: string;
  variant?: "fullscreen" | "overlay" | "split";
}

export function VideoHero({ videoId, variant = "overlay" }: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const playerRef = useRef<any>(null);
  const hasPlayedOnce = useRef(false);
  const loopInterval = useRef<NodeJS.Timeout | null>(null);
  const isInitialized = useRef(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Scroll-based animations (slowed by 10%)
  const videoScale = useTransform(scrollYProgress, [0, 1.1], [1.05, 1.2]); // Start bigger, slower progression
  const videoOpacity = useTransform(scrollYProgress, [0, 0.55, 1.1], [1, 0.8, 0.3]); // Slowed fade
  const scrollBlur = useTransform(scrollYProgress, [0, 0.5, 1.1], [0, 10, 20]); // Blur increases as you scroll
  const contentY = useTransform(scrollYProgress, [0, 1.1], [0, -110]); // Slowed parallax
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]); // Slowed fade
  const overlayOpacity = useTransform(scrollYProgress, [0, 1.1], [0.6, 0.9]); // Slowed overlay
  
  // Load YouTube IFrame API and setup custom loop
  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
    
    return () => {
      // Cleanup
      if (loopInterval.current) {
        clearInterval(loopInterval.current);
        loopInterval.current = null;
      }
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore destroy errors
        }
      }
      isInitialized.current = false;
    };
  }, []);
  
  const onPlayerReady = (event: any) => {
    playerRef.current = event.target;
    // Mute and play
    event.target.mute();
    event.target.playVideo();
    // Fade in after a brief moment
    setTimeout(() => setIsVideoLoaded(true), 500);
  };
  
  const onPlayerStateChange = (event: any) => {
    const player = event.target;
    
    // When video starts playing for the first time
    if (event.data === window.YT?.PlayerState?.PLAYING && !hasPlayedOnce.current) {
      hasPlayedOnce.current = true;
      
      // Wait for video to reach 22 seconds, then start looping
      loopInterval.current = setInterval(() => {
        try {
          if (!player || typeof player.getCurrentTime !== 'function') {
            return;
          }
          
          const currentTime = player.getCurrentTime();
          
          // Start blur transition at 21.5 seconds
          if (currentTime >= 21.5 && currentTime < 22) {
            // Gradually increase blur
            const progress = (currentTime - 21.5) / 0.5; // 0 to 1 over 0.5 seconds
            setBlurAmount(progress * 8); // Max 8px blur
          }
          // If we've passed 22 seconds or reached the end, jump back to 7 seconds
          else if (currentTime >= 22 || currentTime < 7) {
            if (typeof player.seekTo === 'function') {
              player.seekTo(7, true);
            }
            // Gradually reduce blur after seek
            setTimeout(() => setBlurAmount(0), 50);
          }
          // Ensure blur is 0 during normal playback
          else if (currentTime >= 7 && currentTime < 21.5) {
            if (blurAmount !== 0) setBlurAmount(0);
          }
        } catch (error) {
          console.error('Error in video loop:', error);
        }
      }, 50); // Check every 50ms for smoother transitions
    }
  };
  
  const initializePlayer = (elementId: string) => {
    // Prevent duplicate initialization
    if (isInitialized.current) return;
    
    try {
      if (window.YT && window.YT.Player) {
        const element = document.getElementById(elementId);
        if (!element) {
          setTimeout(() => initializePlayer(elementId), 100);
          return;
        }
        
        isInitialized.current = true;
        const player = new window.YT.Player(elementId, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
        playerRef.current = player;
      } else {
        // Retry if YT is not loaded yet
        setTimeout(() => initializePlayer(elementId), 100);
      }
    } catch (error) {
      console.error('Error initializing YouTube player:', error);
      isInitialized.current = false;
    }
  };

  if (variant === "fullscreen") {
    useEffect(() => {
      const playerId = 'youtube-player-fullscreen';
      const timer = setTimeout(() => {
        initializePlayer(playerId);
      }, 100);
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <section ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Video Background with scroll animations */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: videoScale }}
        >
          {/* Scroll blur wrapper */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              width: "110vw",
              height: "61.875vw",
              minHeight: "110vh",
              minWidth: "195.547vh",
              opacity: videoOpacity,
              filter: scrollBlur,
            }}
          >
            {/* Loop blur wrapper */}
            <div
              style={{
                width: "100%",
                height: "100%",
                filter: `blur(${blurAmount}px)`,
                transition: "filter 0.3s ease-out",
              }}
            >
              {/* Loading placeholder */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 bg-slate-950 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full mx-auto"
                    />
                    <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">Loading Experience</p>
                  </div>
                </div>
              )}
              
              {/* YouTube player with fade in */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoLoaded ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ width: "100%", height: "100%" }}
              >
                <div
                  id="youtube-player-fullscreen"
                  className="relative overflow-hidden"
                  style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  <style jsx>{`
                    #youtube-player-fullscreen :global(iframe) {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                    }
                  `}</style>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Dynamic gradient overlay that intensifies on scroll */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Content with parallax effect */}
        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ y: contentY, opacity: contentOpacity }}
              className="space-y-8"
            >
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 backdrop-blur-sm"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.5 }}
              >
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
                  Australia • Entertainment • Visual
                </span>
              </motion.div>

              <motion.h1 
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                What You See AU
              </motion.h1>

              <motion.p 
                className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Australia's home for immersive entertainment experiences.
              </motion.p>

              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link href="/contact">
                  <Button className="transform transition-transform hover:scale-105">Book an Experience</Button>
                </Link>
                <Link href="/work">
                  <Button variant="ghost" className="transform transition-transform hover:scale-105">View Tours & Events</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator with enhanced animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ opacity: contentOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="relative overflow-hidden">
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
                Australia's home for immersive entertainment experiences.
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

            {/* Video card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-orange-500/30 via-fuchsia-500/20 to-transparent blur-2xl" />
              <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&enablejsapi=1&fs=0&iv_load_policy=3&disablekb=1&rel=0`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  onLoad={() => setIsVideoLoaded(true)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default: overlay variant with scroll effects
  useEffect(() => {
    const playerId = 'youtube-player-overlay';
    const timer = setTimeout(() => {
      initializePlayer(playerId);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Video Background with parallax */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ scale: videoScale }}
      >
        {/* Scroll blur wrapper */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ 
            width: "110vw",
            height: "61.875vw",
            minHeight: "110vh",
            minWidth: "195.547vh",
            opacity: videoOpacity,
            filter: scrollBlur,
          }}
        >
          {/* Loop blur wrapper */}
          <div
            style={{
              width: "100%",
              height: "100%",
              filter: `blur(${blurAmount}px)`,
              transition: "filter 0.3s ease-out",
            }}
          >
            {/* Loading placeholder */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-slate-950 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-orange-500/30 border-t-orange-500 rounded-full"
                />
              </div>
            )}
            
            {/* YouTube player with fade in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoLoaded ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ width: "100%", height: "100%" }}
            >
              <div
                id="youtube-player-overlay"
                className="relative overflow-hidden"
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <style jsx>{`
                  #youtube-player-overlay :global(iframe) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                `}</style>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-950/70" />
        {/* Dynamic gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Content with parallax */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-3xl space-y-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 backdrop-blur-sm"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
              Australia • Entertainment • Visual
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Australia's home for immersive entertainment experiences.
          </motion.h1>

          <motion.p 
            className="text-lg text-slate-200 leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            What You See AU curates sold-out festivals, tours, and club nights—bridging international talent with Australian audiences and crafting cultural moments that last.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/contact">
              <Button className="transform transition-transform hover:scale-105">Book an Experience</Button>
            </Link>
            <Link href="/work">
              <Button variant="ghost" className="transform transition-transform hover:scale-105">View Tours & Events</Button>
            </Link>
          </motion.div>

          <motion.p 
            className="text-xs uppercase tracking-[0.2em] text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Melbourne-based • Entertainment • Live music • Culture
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
