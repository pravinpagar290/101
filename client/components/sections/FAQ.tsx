"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from a regular workout app?",
    a: "Unlike apps that give you a static template, 101 pairs you with a real human coach. They build a custom program based on your unique goals, schedule, and equipment, and they adjust it weekly based on your feedback and progress."
  },
  {
    q: "Do I need access to a full gym?",
    a: "Not at all. Your coach designs your program around whatever equipment you have available—whether that's a fully equipped commercial gym, a couple of dumbbells at home, or just your own body weight."
  },
  {
    q: "How often will I talk to my coach?",
    a: "You can message your coach anytime through the app. They typically respond within a few hours and will do a formal check-in and plan adjustment once a week."
  },
  {
    q: "What if I travel or go on vacation?",
    a: "Just let your coach know! They can adapt your plan for hotel gyms, bodyweight hotel room workouts, or even schedule active recovery days so you can enjoy your time off without losing momentum."
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. Our monthly plans are completely flexible. You can pause or cancel your subscription at any time directly from your account settings."
  },
  {
    q: "Is nutrition coaching included?",
    a: "Basic macro guidance and accountability are included in the Pro tier. If you need a fully custom meal plan and daily diet monitoring, we recommend the Elite tier."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-[36px] font-semibold tracking-tight md:text-[48px]">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="rounded-3xl bg-surface p-6 shadow-sm md:p-10">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.q}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.a}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
