"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { Activity, Dumbbell, CalendarCheck, MessageCircle, Utensils, Target } from "lucide-react";

function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function ProductShowcase() {
  const stats = [
    { label: "Members", value: 10000, suffix: "+" },
    { label: "Rating", value: 4.9, suffix: "★" },
    { label: "Programs", value: 50, suffix: "+" },
    { label: "Support", value: 24, suffix: "/7" },
  ];

  const disciplines = [
    { title: "Strength & Conditioning", description: "Build foundational power and resilience.", link: "#", icon: Dumbbell },
    { title: "HIIT & Cardio", description: "Max heart rate bursts for elite stamina.", link: "#", icon: Activity },
    { title: "Yoga & Mobility", description: "Enhance range of motion and joint health.", link: "#", icon: CalendarCheck },
    { title: "CrossFit", description: "High-intensity functional movements.", link: "#", icon: Target },
    { title: "Nutrition Coaching", description: "Fuel your body for optimal performance.", link: "#", icon: Utensils },
    { title: "Recovery & Rehab", description: "Bounce back faster with active recovery.", link: "#", icon: MessageCircle },
  ];

  return (
    <section id="disciplines" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
      {/* Stats Bar */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 border-b border-t border-border py-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-[image:var(--background-image-accent-gradient)] mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-on-surface-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface-muted">
            Explore Disciplines
          </span>
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-tight tracking-tight mb-6">
            Find your focus. <br />
            <span className="text-transparent bg-clip-text bg-[image:var(--background-image-accent-gradient)]">Master your craft.</span>
          </h2>
        </div>

        {/* Disciplines Grid */}
        <HoverEffect items={disciplines} />
      </div>
    </section>
  );
}
