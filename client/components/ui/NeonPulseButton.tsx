"use client";

import { useEffect, useRef, useState } from "react";
import "./NeonPulseButton.css";
import { cn } from "@/lib/utils";

interface NeonPulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function NeonPulseButton({ children, className, ...props }: NeonPulseButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={cn("neon-pulse-btn", isPaused && "is-paused", className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
