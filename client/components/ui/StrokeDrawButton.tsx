"use client";

import { useEffect, useRef, useState } from "react";
import "./StrokeDrawButton.css";
import { cn } from "@/lib/utils";

interface StrokeDrawButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function StrokeDrawButton({ children, className, ...props }: StrokeDrawButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={btnRef}
      className={cn("stroke-draw-btn", className)}
      type="button"
      {...props}
    >
      <svg className="stroke-draw-btn__svg" preserveAspectRatio="none" aria-hidden="true">
        <rect 
          className="stroke-draw-btn__rect" 
          x="1" 
          y="1" 
          width="calc(100% - 2px)" 
          height="calc(100% - 2px)" 
          rx="20"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
