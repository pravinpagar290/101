"use client"

import { Star, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type ProfileCardProps = {
  name: string
  role: string
  status: "online" | "offline" | "away"
  avatar: string
  tags?: string[]
  isVerified?: boolean
  followers?: number
  availability?: string
  expertise?: string[]
  coachingStyle?: string[]
  loves?: string[]
  pastExperience?: string
}

export function ProfileCard({ name, role, status, avatar, tags = [], isVerified, followers, availability, expertise = [], coachingStyle = [], loves = [], pastExperience }: ProfileCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-surface p-6 w-80 shadow-[12px_12px_24px_rgba(0,0,0,0.05),-12px_-12px_24px_rgba(255,255,255,0.8)] transition-all duration-500 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.08),-20px_-20px_40px_rgba(255,255,255,1)] hover:scale-105 hover:-translate-y-2 shrink-0 border border-border/30 h-[420px] flex flex-col cursor-pointer">
      
      {/* Top Bar: Availability */}
      <div className="absolute left-4 top-4 z-30 flex items-center justify-between right-4 pointer-events-none">
        {availability && (
          <span className="bg-surface-alt/80 backdrop-blur-sm text-on-surface text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-border">
            {availability}
          </span>
        )}
      </div>

      {/* FRONT OF CARD */}
      <div className="transition-opacity duration-300 flex flex-col h-full group-hover:opacity-0 group-hover:pointer-events-none">
      
      {/* Status indicator with pulse animation */}
      <div className="absolute right-4 top-4 z-10">
        <div className="relative">
          <div
            className={cn(
              "h-3 w-3 rounded-full border-2 border-surface transition-all duration-300 group-hover:scale-125",
              status === "online"
                ? "bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                : status === "away"
                  ? "bg-amber-500"
                  : "bg-gray-400",
            )}
          ></div>
          {status === "online" && (
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-30"></div>
          )}
        </div>
      </div>

      {/* Verified badge with bounce animation */}
      {isVerified && (
        <div className="absolute right-4 top-10 z-10">
          <div className="rounded-full bg-[image:var(--background-image-accent-gradient)] p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(255,90,31,0.5)]">
            <Star className="h-3 w-3 fill-white text-white" />
          </div>
        </div>
      )}

      {/* Profile Photo with enhanced hover effects */}
      <div className="mb-4 flex justify-center relative z-10 mt-6">
        <div className="relative group-hover:animate-pulse">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-surface-alt p-1 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.05),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all duration-500 group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.08),inset_-8px_-8px_16px_rgba(255,255,255,1)] group-hover:scale-110">
            <img
              src={avatar}
              alt={name}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Glowing ring on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-accent-start opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Profile Info with slide-up animation */}
      <div className="text-center relative z-10 flex-1 flex flex-col justify-between pt-2">
        <div>
          <h3 className="text-lg font-semibold text-on-surface transition-colors duration-300 group-hover:text-accent-start">
            {name}
          </h3>
          <p className="mt-0.5 text-xs text-on-surface-muted transition-colors duration-300 group-hover:text-on-surface">
            {role}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-2.5 flex justify-center gap-1.5 flex-wrap">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-surface-alt/80 text-on-surface-muted text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-border/40">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Expertise Focus Area preview */}
        {expertise.length > 0 && (
          <div className="mt-4 border-t border-border/40 pt-3 text-center">
            <span className="text-[9px] font-black text-on-surface-muted uppercase tracking-widest block mb-1">Focus Areas</span>
            <p className="text-[11px] text-on-surface-muted/90 leading-tight font-medium max-w-[220px] mx-auto line-clamp-2">
              {expertise.slice(0, 2).join(" · ")}
            </p>
          </div>
        )}

        {/* Followers / Stats */}
        {followers && (
          <div className="mt-4 pt-3 border-t border-border/40 flex justify-between items-center text-[11px] text-on-surface-muted">
            <span className="font-semibold">Rating: 4.9/5</span>
            <span className="font-bold text-accent-start bg-accent-start/5 px-2 py-0.5 rounded-full">
              {(followers / 1000).toFixed(1)}k Athletes
            </span>
          </div>
        )}
      </div>
      </div>

      {/* BACK OF CARD (Detailed Info) */}
      <div className={cn(
        "absolute inset-0 bg-surface/95 backdrop-blur-md p-6 pt-16 z-20 flex flex-col gap-4 overflow-y-auto transition-all duration-300 custom-scrollbar opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
      )}>
        {expertise.length > 0 && (
          <div>
            <h4 className="text-[10px] font-bold text-on-surface-muted uppercase tracking-wider mb-2">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {expertise.map((item, i) => (
                <span key={i} className="text-sm font-medium text-on-surface">{item}</span>
              ))}
            </div>
          </div>
        )}

        {coachingStyle.length > 0 && (
          <div>
            <h4 className="text-[10px] font-bold text-on-surface-muted uppercase tracking-wider mb-2">Coaching Style</h4>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {coachingStyle.map((item, i) => (
                <span key={i} className="text-sm font-medium text-on-surface">{item}</span>
              ))}
            </div>
          </div>
        )}

        {loves.length > 0 && (
          <div>
            <h4 className="text-[10px] font-bold text-on-surface-muted uppercase tracking-wider mb-2">Loves</h4>
            <ul className="space-y-1">
              {loves.map((item, i) => (
                <li key={i} className="text-sm text-on-surface leading-snug">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {pastExperience && (
          <div className="mt-auto pt-4 border-t border-border">
            <h4 className="text-lg font-bold text-on-surface mb-1">{name}</h4>
            <p className="text-xs text-on-surface-muted leading-relaxed">
              Previously: {pastExperience}
            </p>
          </div>
        )}
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl border border-accent-start/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"></div>
    </div>
  )
}
