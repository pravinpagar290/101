"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Coaches", href: "#coaches" },
  { label: "Disciplines", href: "#disciplines" },
  { label: "Institutes", href: "#institutes" },
  { label: "Shop", href: "#shop" },
];

export function SlidingPillNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [glideStyle, setGlideStyle] = useState({ width: 0, transform: "translateX(0px)" });
  const navRef = useRef<HTMLDivElement>(null);

  const updateGlide = (index: number) => {
    if (!navRef.current) return;
    const btns = navRef.current.querySelectorAll(".pill-btn");
    const btn = btns[index] as HTMLElement;
    if (btn) {
      setGlideStyle({
        width: btn.offsetWidth,
        // The glide element starts at left: 5px, so we subtract 5 from the button's offsetLeft
        transform: `translateX(${btn.offsetLeft - 5}px)`
      });
    }
  };

  useEffect(() => {
    // Initial size calculation
    // Wait a brief moment for fonts to render to ensure accurate offsetWidth
    const timer = setTimeout(() => {
      requestAnimationFrame(() => updateGlide(activeIndex));
    }, 50);
    
    // Handle window resize
    const handleResize = () => updateGlide(activeIndex);
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  return (
    <div 
      ref={navRef}
      className="relative flex gap-[2px] p-[5px] bg-surface border border-border rounded-full shadow-sm"
    >
      <div 
        className="absolute top-[5px] left-[5px] h-[calc(100%-10px)] rounded-full bg-accent-start/10 border border-accent-start/30 shadow-[0_0_15px_-3px_rgba(255,90,31,0.3)] z-0"
        style={{
          width: glideStyle.width ? `${glideStyle.width}px` : "auto",
          transform: glideStyle.transform,
          transition: "transform 440ms cubic-bezier(0.34, 1.56, 0.64, 1), width 440ms cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      />
      {NAV_LINKS.map((link, idx) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => setActiveIndex(idx)}
          className={cn(
            "pill-btn relative z-10 px-[17px] py-[9px] text-[14px] font-semibold rounded-full transition-colors duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            activeIndex === idx ? "text-accent-start" : "text-on-surface-muted hover:text-on-surface"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
