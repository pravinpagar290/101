"use client";

import { ProfileCard, type ProfileCardProps } from "@/components/ui/info-card";

const coaches: ProfileCardProps[] = [
  {
    name: "Alex M.",
    role: "Head of Strength",
    status: "online",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    tags: ["Elite", "Strength"],
    isVerified: true,
    followers: 12400,
    availability: "Limited Spots",
    expertise: ["General Strength Training", "Powerlifting", "Sports Performance"],
    coachingStyle: ["Results Oriented", "Supportive", "Even Keeled"],
    loves: ["Fueling body and soul with weightlifting, donuts and coffee", "Exploring new cities and cuisine traveling with my wife"],
    pastExperience: "Master trainer for a global fitness franchise and founder of a successful online coaching platform"
  },
  {
    name: "Sarah T.",
    role: "Endurance Specialist",
    status: "away",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    tags: ["Pro", "Cardio"],
    isVerified: true,
    followers: 8300,
    availability: "Accepting Clients",
    expertise: ["Endurance Training", "Marathon Prep", "Triathlon"],
    coachingStyle: ["Motivating", "Analytical", "Supportive"],
    loves: ["Morning runs by the lake", "Plant-based nutrition hacking"],
    pastExperience: "Former D1 Track Athlete and certified Ironman coach"
  },
  {
    name: "David K.",
    role: "Powerlifting Coach",
    status: "online",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
    tags: ["Elite", "Powerlifting"],
    isVerified: true,
    followers: 15200,
    availability: "Waitlist",
    expertise: ["Squat", "Bench", "Deadlift", "Meet Prep"],
    coachingStyle: ["Intense", "Technical", "Direct"],
    loves: ["Chalk", "Heavy metal", "Breaking PRs"],
    pastExperience: "National level powerlifter with 10+ years coaching experience"
  },
  {
    name: "Elena R.",
    role: "Mobility & Yoga",
    status: "offline",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    tags: ["Pro", "Yoga"],
    isVerified: false,
    followers: 5400,
    availability: "Limited Spots",
    expertise: ["Vinyasa", "Mobility for Lifters", "Injury Prevention"],
    coachingStyle: ["Calming", "Educational", "Laid Back"],
    loves: ["Matcha lattes", "Hiking with her golden retriever", "Meditation retreats"],
    pastExperience: "Physical therapist and 500-hour RYT yoga instructor"
  },
  {
    name: "James L.",
    role: "CrossFit Competitor",
    status: "online",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    tags: ["Elite", "CrossFit"],
    isVerified: true,
    followers: 19100,
    expertise: ["Olympic Weightlifting", "Gymnastics", "MetCon"],
    coachingStyle: ["High Energy", "Community Focused", "Results Oriented"],
    loves: ["Competing at local throwdowns", "Cold plunges", "Meal prepping"],
    pastExperience: "Head coach at a premier CrossFit affiliate and Regional competitor"
  }
];

export function Testimonials() {
  return (
    <section id="coaches" className="overflow-hidden bg-surface-alt py-24 lg:py-32">
      <div className="mb-16 text-center px-6">
        <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[0.08em] text-on-surface-muted">
          101 Coaches
        </span>
        <h2 className="text-[36px] font-semibold tracking-tight md:text-[48px]">
          Meet your <span className="text-transparent bg-clip-text bg-[image:var(--background-image-accent-gradient)]">Coaches</span>
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8">
        <div className="flex w-max min-w-full animate-marquee items-center gap-8 px-6 hover:[animation-play-state:paused]">
          {[...coaches, ...coaches].map((c, idx) => (
            <ProfileCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
