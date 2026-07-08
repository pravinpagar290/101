"use client";

import CardNav from "@/components/ui/CardNav";
import Link from "next/link";

export function Header() {
  const items = [
    {
      label: "Training",
      bgColor: "var(--color-surface-alt)", 
      textColor: "var(--color-on-surface)",
      links: [
        { label: "Disciplines", href: "#disciplines" },
        { label: "Coaches", href: "#coaches" }
      ]
    },
    {
      label: "Locations", 
      bgColor: "var(--color-surface-alt)",
      textColor: "var(--color-on-surface)",
      links: [
        { label: "Institutes", href: "#institutes" },
      ]
    },
    {
      label: "Membership",
      bgColor: "var(--color-surface-alt)", 
      textColor: "var(--color-on-surface)",
      links: [
        { label: "Shop", href: "#shop" },
      ]
    }
  ];

  const logo = (
    <Link href="/" className="font-black text-2xl tracking-tight text-on-surface hover:opacity-80 transition-opacity">
      101
    </Link>
  );

  return (
    <header className="z-50 w-full relative h-[100px]">
      <CardNav
        logo={logo}
        items={items}
        baseColor="rgba(255, 255, 255, 0.85)"
        buttonBgColor="var(--color-accent-start)"
        buttonTextColor="#fff"
        menuColor="var(--color-on-surface)"
        ctaText="Find Your Coach"
      />
    </header>
  );
}
