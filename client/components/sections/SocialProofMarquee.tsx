"use client";

import { Star } from "lucide-react";

const logos = [
  "Esquire", "Men's Health", "TechCrunch", "GQ", "Forbes", "Vogue", "Wired"
];

export function SocialProofMarquee() {
  return (
    <section className="w-full border-b border-t border-border bg-surface py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 lg:flex-row lg:px-8">
        <div className="flex shrink-0 items-center gap-3">
          <div className="flex gap-1 text-accent-start">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-sm font-medium text-on-surface">
            4.9/5 from 10k+ members
          </p>
        </div>
        
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max min-w-full animate-marquee items-center justify-around gap-12 py-2 hover:[animation-play-state:paused]">
            {/* Group 1 */}
            {logos.map((logo, idx) => (
              <div key={idx} className="text-xl font-bold text-on-surface-muted/40">
                {logo}
              </div>
            ))}
            {/* Group 2 for seamless looping */}
            {logos.map((logo, idx) => (
              <div key={`dup-${idx}`} className="text-xl font-bold text-on-surface-muted/40">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
