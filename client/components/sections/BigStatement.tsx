"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";

export function BigStatement() {
  const words = ["Strength.", "Discipline.", "Results."];
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center justify-center gap-2"
        >
          {words.map((word, idx) => (
            <motion.h2
              key={idx}
              variants={item}
              className="text-[64px] font-bold leading-none tracking-tighter md:text-[96px] lg:text-[120px]"
            >
              {idx === 2 ? (
                <span className="text-transparent bg-clip-text bg-[image:var(--background-image-accent-gradient)]">{word}</span>
              ) : (
                word
              )}
            </motion.h2>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
