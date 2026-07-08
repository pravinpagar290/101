"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, ShieldCheck } from "lucide-react";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: "101 Performance Center",
      desc: "Our flagship facility in downtown. Fully equipped with competition-grade Eleiko plates and sports science testing equipment.",
      icon: Building2,
    },
    {
      title: "The Iron Vault",
      desc: "Specialized for powerlifting and strongman. Open 24/7 for our members to hit PRs on their own schedule.",
      icon: MapPin,
    },
    {
      title: "Zenith Recovery Lounge",
      desc: "Dedicated to active recovery and physical therapy. Features cold plunges and infrared saunas.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="institutes" className="bg-surface py-24 lg:py-32" ref={containerRef}>
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface-muted">
            Our Locations
          </span>
          <h2 className="text-[36px] font-semibold tracking-tight md:text-[48px]">
            Partner Institutes
          </h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 h-full w-[2px] bg-border md:-translate-x-1/2" />
          <motion.div
            className="absolute left-[23px] md:left-1/2 top-0 w-[2px] bg-[image:var(--background-image-accent-gradient)] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-6 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-surface bg-on-surface shadow-sm" />

                  <div className="ml-16 md:ml-0 md:w-5/12 text-left">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt">
                      <Icon className="h-6 w-6 text-on-surface" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{step.title}</h3>
                    <p className="text-on-surface-muted leading-relaxed text-lg">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
