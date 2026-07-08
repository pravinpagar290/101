"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full" style={{ minHeight: "100svh" }}>
      {/* Full-screen background — dark gradient overlaid to mirror future.co */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        {/* Ambient animated rings */}
        <div className="pointer-events-none absolute inset-0 z-20 opacity-20">
          <MagicRings
            color="#ff5a1f"
            colorTwo="#00c2b2"
            ringCount={5}
            speed={0.8}
            attenuation={12}
            lineThickness={1.5}
            baseRadius={0.4}
            radiusStep={0.09}
            scaleRate={0.08}
            opacity={1}
            blur={0}
            noiseAmount={0.03}
            rotation={0}
            ringGap={1.8}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse
            mouseInfluence={0.08}
            hoverScale={1.05}
            parallax={0.03}
            clickBurst={true}
          />
        </div>
        {/* Background image — athletic/fitness theme */}
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2400&q=80"
          alt="Athlete training"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Scrollable content on top */}
      <div className="relative z-10 -mt-[100svh] flex min-h-screen w-full flex-col">
        {/* Hero copy */}
        <div className="flex flex-col items-center justify-start gap-6 px-6 pb-10 pt-[130px] text-center lg:pt-[160px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            <Star className="h-3 w-3 fill-current text-amber-400" />
            <span>Rated 4.9 · 10,000+ Members</span>
          </div>

          {/* Headline */}
          <h1 className="max-w-[700px] text-center font-black leading-none tracking-tight text-white text-[2.6rem] lg:text-[5.5rem]">
            Personal training,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a1f] to-[#00c2b2]">
              reimagined.
            </span>
          </h1>

          {/* Sub */}
          <p className="max-w-md text-center text-base font-normal leading-relaxed text-white/80 lg:text-[1.1rem]">
            Dedicated coaching and support to help you train for what&apos;s next.
            Built by <span className="font-bold text-white">101</span>.
          </p>

          {/* CTA */}
          <div className="mt-2 flex flex-col items-center gap-3">
            <Link
              href="#coaches"
              className="group relative flex h-[52px] items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 text-base font-bold text-[#1a1b1e] shadow-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <span className="relative z-10">Find Your Coach</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {/* Glow aura */}
              <div className="absolute inset-0 rounded-2xl opacity-60 blur-[18px] bg-gradient-to-r from-[rgba(161,196,119,0.8)] via-[rgba(255,121,73,0.8)] to-[rgba(133,174,255,0.8)]" />
            </Link>
            <p className="text-sm font-medium text-white/70">
              <span className="font-bold text-white">$50 first month,</span> then $199/month. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Spacer to let the hero image breathe */}
        <div className="flex-1" />

        {/* Bottom scroll indicator */}
        <div className="flex flex-col items-center pb-10 gap-2">
          <div className="h-12 w-[1px] bg-gradient-to-b from-white/0 to-white/40" />
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">Scroll</span>
        </div>
      </div>
    </section>
  );
}
