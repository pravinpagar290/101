# INSTRUCTIONS.md — Fitness App Homepage Build

## Prompt for IDE Agent

Build a single-page, **light-mode** marketing homepage for a fitness
coaching app. Visual language should follow the "Google Antigravity
homepage" aesthetic (minimal, neutral, motion-forward, one accent
gradient). Content structure and section rhythm should take inspiration
from https://coachsportifecublens.com/ (a premium personal-training
studio site) — big split-letter headlines, video/hero imagery, social
proof strip, service cards, testimonials, pricing, FAQ accordion, closing
CTA. Product positioning/feature set should take inspiration from
https://future.co/ (Future) — a 1-on-1 human-coach fitness app: users get
matched with a real coach, receive a custom program, check in async via
chat/video, and train through a companion mobile app. Do not copy any
text, images, or copy verbatim from any reference site — use them only
as structural/visual/positioning inspiration.

## Product Context

This is not a generic gym-membership site — it's the marketing homepage
for an app-based, human-coach-matching fitness product (Future-style):

- Core value prop: "Get matched with a real coach who builds and adjusts
  your program over time" — not a static workout library.
- Primary CTA throughout is a short quiz/survey flow ("Find Your Coach" /
  "Take the 1-Minute Quiz"), not a generic "Sign Up."
- Secondary CTA is "Download the App" (with App Store / Google Play
  badges + a QR code in the footer, like Future's).
- The product has three pillars to communicate somewhere in the page:
  1. **A real coach** builds your program (not a generic algorithm).
  2. **A companion app** for logging workouts, messaging your coach, and
     tracking progress.
  3. **Ongoing adaptation** — the plan evolves based on check-ins,
     recovery, and progress, not a fixed template.
- Include one section resembling Future's "personalized roadmap" card —
  a mock member profile summarizing schedule availability, equipment
  access, experience level, injury notes, and goals, to visually
  communicate personalization.
- Include one "coach check-in" moment — a chat-bubble or video-call style
  UI snippet showing an async message from a coach (e.g. feedback after a
  workout), to sell the "never train alone" pillar.

---

## 1. Tech Stack (agent should pick one, default = A)

- **A. React + Tailwind CSS** (recommended) — component-based, easiest to
  make interactive/animated pieces reusable.
- **B. Plain HTML/CSS/JS** — acceptable if the project explicitly needs
  zero build tooling.
- Use **Framer Motion** (if React) or **native CSS scroll-driven
  animations / IntersectionObserver** (if plain HTML) for scroll reveals.
- Font: load **Inter Tight** (Google Fonts or self-hosted variable font)
  as the primary typeface for everything — headings and body.

## 2. Design Tokens

### Color (light mode only)

| Token | Value | Usage |
|---|---|---|
| `--surface` | `#ffffff` | Page background |
| `--surface-alt` | `#f5f6f7` | Alternating section background |
| `--on-surface` | `#1a1b1e` | Primary text (near-black, not pure black) |
| `--on-surface-muted` | `#5f6368` | Secondary/body text |
| `--border` | `#e5e7eb` | Card borders, dividers |
| `--accent-start` | `#ff5a1f` | Gradient start (warm orange — energy, effort) |
| `--accent-end` | `#00c2b2` | Gradient end (teal — health, recovery) |
| `--accent-gradient` | `linear-gradient(90deg, var(--accent-start), var(--accent-end))` | CTA underlines, highlighted words, progress rings |

Keep the palette **90% neutral / black-on-white**; the orange→teal
gradient is a single sparing accent (button hover states, one highlighted
word per headline, active nav indicator, chart/ring accents) — never a
full-section background.

### Typography

- Font family: `"Inter Tight", sans-serif` everywhere.
- Display / H1: 56–96px, weight 600–700, tight letter-spacing (`-0.02em`).
- H2 (section titles): 36–48px, weight 600.
- Body: 16–18px, weight 400–500, line-height 1.5–1.6.
- Small/label text (eyebrows, badges): 12–13px, uppercase, letter-spacing
  `0.08em`, weight 600, muted color.

### Spacing / Layout

- Max content width: 1200px, centered, 24–32px side padding on mobile.
- Section vertical padding: 96–140px desktop, 56–72px mobile.
- 8px base spacing scale (8/16/24/32/48/64/96).
- Border radius: 16–24px on cards/buttons (soft, modern, not sharp).

## 3. Page Structure (top to bottom)

1. **Sticky header** — logo (left), nav links (center/right: Features,
   Programs, Pricing, FAQ), primary CTA button ("Start Free Trial")
   top-right. Background turns from transparent to white+shadow on
   scroll.

2. **Hero section**
   - Eyebrow label ("AI-Powered Coaching" or similar), then a large
     headline where **one phrase types itself in** (typewriter/clip-text
     reveal, exactly like Antigravity's headline effect) and one word in
     the headline is rendered with the accent gradient.
   - Subheadline (1–2 lines, muted color).
   - Two CTAs: primary (solid, gradient hover) + secondary (ghost/outline,
     "Watch Demo").
   - Right or background: an **interactive animated visual** — e.g. an
     abstract particle ring, a pulsing heart-rate/activity-ring graphic,
     or a stat dashboard mockup that subtly reacts to cursor position
     (parallax tilt or particle drift following the pointer, same idea as
     Antigravity's cursor-reactive hero).
   - Below the fold of the hero: a thin strip of **social proof** —
     star rating + review count + a horizontally auto-scrolling marquee
     of small logos/icons (partner gyms, "as featured in," or workout
     category tags), looping infinitely, pausing on hover.

3. **Stats / trust bar** — 3–4 numbers in a row (e.g. "10k+ members,"
   "4.9★ rating," "50+ programs," "24/7 support"), each number counts up
   from 0 when scrolled into view.

4. **Feature/Services section**
   - Section eyebrow + H2.
   - 3–5 cards in a responsive grid (Personal Coaching, AI Workout Plans,
     Nutrition Tracking, Progress Analytics, Community Challenges).
   - Each card: icon, title, 1-sentence description, subtle border,
     lifts slightly (translateY + shadow) on hover.

5. **"Big statement" split-text section** — a large, almost full-width
   headline (e.g. "Strength. Discipline. Results.") where each word/line
   is its own block that fades/slides in independently as it enters the
   viewport, echoing the Essor Fitness "Bien-être / Santé" stacked
   letter treatment, but rebuilt with original copy.

6. **How it works** — 3-step horizontal or vertical timeline (Sign Up →
   Get Your Plan → Track Progress), each step reveals with a slide-up +
   fade animation as it scrolls into view, connected by a thin animated
   line/progress path that fills as you scroll.

7. **Testimonials** — auto-scrolling horizontal marquee (or draggable
   carousel) of testimonial cards: avatar, name, 2–3 line quote, star
   rating. Pause on hover/focus; keyboard-navigable if using a carousel.

8. **Pricing section** — 3 plan cards (e.g. Basic / Pro / Elite),
   monthly/annual toggle switch (animated slider), one plan visually
   highlighted as "Most Popular" with the accent gradient border/badge.

9. **FAQ accordion** — 6–8 questions, single-open or multi-open
   accordion, smooth height animation (use `grid-template-rows: 0fr/1fr`
   trick or Framer Motion `AnimatePresence`, not abrupt display:none).

10. **Closing CTA band** — full-width section, bold headline, single
    prominent CTA button, optionally the same particle/ring visual from
    the hero at smaller scale for visual bookending.

11. **Footer** — logo, short tagline, link columns (Product, Company,
    Legal), social icons, small print. Keep it simple and neutral —
    no dark footer; stay in light mode throughout.

## 4. Required Interactive / Animated Elements (be explicit in code)

- [ ] Header background/opacity transition on scroll.
- [ ] Hero headline typewriter/clip-text reveal on load.
- [ ] Cursor-reactive hero visual (particles, ring, or parallax tilt).
- [ ] Infinite auto-scrolling logo marquee (CSS `@keyframes translate`
      loop or JS-free CSS animation), pause-on-hover.
- [ ] Count-up number animation for stats bar (trigger via
      IntersectionObserver / `whileInView`).
- [ ] Scroll-triggered fade/slide-up reveals for every major section
      (`@starting-style` + transition, or Framer Motion `whileInView`).
- [ ] Card hover lift + shadow transition on feature/pricing/testimonial
      cards.
- [ ] Animated pricing toggle (monthly/annual) with sliding thumb.
- [ ] Smooth-height FAQ accordion expand/collapse.
- [ ] All animations respect `prefers-reduced-motion: reduce` — provide a
      static fallback (no motion, content just present) for users who
      have that OS setting enabled.

## 5. Accessibility & Performance Notes

- Maintain WCAG AA contrast for all text on white/`--surface-alt`
  backgrounds (avoid using `--on-surface-muted` for body copy under
  16px).
- All interactive elements (accordion, carousel, toggle) must be
  keyboard-operable and have visible focus states.
- Marquees/carousels need a pause control or must pause on
  hover/focus — don't force continuous motion on users who can't stop it.
- Lazy-load below-the-fold images; keep the hero visual lightweight
  (SVG/CSS/Canvas rather than a large video if possible, for fast LCP).
- Respect `prefers-reduced-motion` globally (see above).

## 6. Deliverables Expected From the Agent

1. Fully responsive homepage (mobile / tablet / desktop breakpoints).
2. Componentized code (if React: separate components per section).
3. A `README.md` explaining how to run the project locally.
4. Placeholder copy and stock-style imagery/icons only — no scraped
   content from either reference site.