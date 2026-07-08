"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      desc: "For those who want a static plan to follow on their own.",
      monthlyPrice: 49,
      annualPrice: 39,
      features: ["Custom monthly workout plan", "App access for logging", "Video exercise library", "Email support"],
      highlighted: false,
    },
    {
      name: "Pro",
      desc: "1-on-1 coaching, adaptive planning, and full accountability.",
      monthlyPrice: 199,
      annualPrice: 149,
      features: ["Dedicated human coach", "Weekly plan adjustments", "Unlimited chat & video form review", "Nutrition macro guidance", "Priority support"],
      highlighted: true,
    },
    {
      name: "Elite",
      desc: "The ultimate athlete experience with real-time feedback.",
      monthlyPrice: 349,
      annualPrice: 299,
      features: ["Everything in Pro", "Daily plan adjustments", "Live monthly video calls", "Wearable data deep-dives", "Custom meal planning"],
      highlighted: false,
    },
  ];

  return (
    <section id="shop" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface-muted">
            The Shop
          </span>
          <h2 className="text-[36px] font-semibold tracking-tight md:text-[48px] mb-6">
            Memberships & Passes
          </h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-on-surface" : "text-on-surface-muted")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-surface-alt p-1 ring-1 ring-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface"
              aria-label="Toggle annual pricing"
            >
              <motion.div
                className="h-6 w-6 rounded-full bg-[image:var(--background-image-accent-gradient)] shadow-sm"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ marginLeft: isAnnual ? "24px" : "0px" }}
              />
            </button>
            <span className={cn("text-sm font-medium flex items-center gap-2", isAnnual ? "text-on-surface" : "text-on-surface-muted")}>
              Annually <span className="text-[10px] uppercase tracking-wider bg-accent-start/10 text-accent-start px-2 py-1 rounded-full font-bold">Save 25%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card 
                className={cn(
                  "relative flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-2",
                  plan.highlighted ? "border-2 border-transparent bg-clip-border [background-image:linear-gradient(var(--color-surface),var(--color-surface)),var(--background-image-accent-gradient)] [background-origin:border-box] shadow-xl" : "border-border shadow-sm"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--background-image-accent-gradient)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-on-surface-muted mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-on-surface-muted">/mo</span>
                </div>
                
                <Button 
                  variant={plan.highlighted ? "primary" : "outline"} 
                  className="mb-8 w-full"
                >
                  Get Started
                </Button>
                
                <ul className="flex flex-col gap-4 mt-auto">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-start" />
                      <span className="text-on-surface-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
