# Site Architecture Map

> **Last updated:** June 23, 2026
>
> This is a structural diagram of every page on the Spirit Weekend 2026 site.
> Each element has a unique bracket ID so we can reference specific areas
> in conversation (e.g. "change the text in [H-1a-4]").
>
> **To update:** Prompt Agent Smith with _"Update the architecture map."_

---

## All Pages — Shared Chrome

Rendered by `src/app/layout.tsx`. The `<Header>` and `<Footer>` wrap every
route inside a `.site-shell` > `<main>` structure.

```
┌─────────────────────────────────────────────────────────────────┐
│ [HDR] HEADER (Header.tsx, on every page)                        │
│  ┌─────────────────────────────────┐  ┌────────────────────────┐ │
│  │ [HDR-1] Site Title link → "/"   │  │ [HDR-2] Nav Links      │ │
│  │  [HDR-1a] mark                  │  │ Home · About ·         │ │
│  │  "Spirit Weekend 2026"          │  │ Schedule · Contact     │ │
│  │  [HDR-1b] meta                  │  │                        │ │
│  │  "Sat 08/15 & Sun 08/16, 2026" │  │                        │ │
│  └─────────────────────────────────┘  └────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

                    [ PAGE CONTENT — see below ]

┌─────────────────────────────────────────────────────────────────┐
│ [FTR] FOOTER (Footer.tsx, on every page)                        │
│  ┌───────────────────────────────┐  ┌──────────────────────────┐│
│  │ [FTR-1] Site title + location │  │ [FTR-2] "Spirit Weekend" ││
│  │  & date line (Sandisfield,    │  │  credit line             ││
│  │  MA · Sat 08/15 & Sun 08/16)  │  │                          ││
│  └───────────────────────────────┘  └──────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

Color theme is hardcoded to **Frontier** via `data-theme="frontier"` on the
`<html>` element in `layout.tsx`. `ThemeToggle` component is unused.

---

## Shared Content Blocks

These two components are reused across multiple pages.

### [BNR] BANNER SECTION (BannerSection.tsx)

Appears at the **top** of Home, About, Schedule, and Contact (not on 404).

```
┌─────────────────────────────────────────────────────────────────┐
│ [BNR] BANNER (full-bleed image: /Spirit_Weekend_Fire.jpg)       │
│  [BNR-1] Background image, object-fit: cover (fixed)           │
└─────────────────────────────────────────────────────────────────┘
```

### [REG] REGISTRATION SECTION (RegistrationSection.tsx)

Appears at the **bottom** of Home, About, Schedule, and Contact (not on 404).

```
┌─────────────────────────────────────────────────────────────────┐
│ [REG] REGISTRATION SECTION                                      │
│  [REG-1] Eyebrow "Register"                                     │
│  [REG-2] h2 "Secure Your Spot"                                  │
│  [REG-3] Description (Sterling graduates only · limited spots)  │
│  [REG-4] "Pay Here" button → buytickets.at (same tab)           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 1 — HOME ( / ) — `src/app/page.tsx`

Layout: `[BNR]` → `[H-0]` image pair → `[H-1]` hero → `[REG]`

```
┌─────────────────────────────────────────────────────────────────┐
│ [BNR] BANNER (shared — see above)                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [H-0] HOME IMAGE PAIR (max-width 780px, centered)              │
│ ┌──────────────────────────────┐  ┌─────────────────────────┐   │
│ │ [H-0a] Three_Vikings.JPG     │  │ [H-0b] Three_Douche_    │   │
│ │  alt: "Three douche bags -   │  │  Bags.JPG               │   │
│ │   Kellerman's ides"          │  │  alt: "Three vikings"   │   │
│ └──────────────────────────────┘  └─────────────────────────┘   │
│  Stacks vertically below 600px                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [H-1] HERO SECTION                                             │
│ ┌──────────────────────────────────┐  ┌───────────────────────┐ │
│ │ [H-1a] HERO COPY (left column)   │  │ [H-1b] HERO PANEL     │ │
│ │                                  │  │       (right aside)   │ │
│ │  [H-1a-1] Eyebrow                │  │  [H-1b-1] "At a       │ │
│ │  "Spirit Weekend 2026"           │  │   glance" label       │ │
│ │                                  │  │                       │ │
│ │  [H-1a-2] h1 "Spirit Weekend     │  │  [H-1b-2] Date fact   │ │
│ │   2026"                          │  │   (Aug 15–16)         │ │
│ │                                  │  │                       │ │
│ │  [H-1a-3] Hero description text  │  │  [H-1b-3] Place fact  │ │
│ │   (legacy / 400 acres / 2-day    │  │   (Sandisfield, MA)   │ │
│ │    camping experience)           │  │                       │ │
│ │                                  │  │  [H-1b-4] Cost fact   │ │
│ │  [H-1a-4] HERO BUTTONS           │  │   ($100)              │ │
│ │   [H-1a-4a] "View the Schedule"  │  │                       │ │
│ │   [H-1a-4b] "About the Weekend"  │  │  [H-1b-5] Context     │ │
│ │   [H-1a-4c] "Contact the Team"   │  │   fact ("I am a       │ │
│ │                                  │  │   fucking Sterling    │ │
│ │                                  │  │   Man!")              │ │
│ └──────────────────────────────────┘  └───────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [REG] REGISTRATION SECTION (shared — see above)                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 2 — ABOUT ( /about ) — `src/app/about/page.tsx`

Layout: `[BNR]` → `[A-1]`/`[A-2]`/`[A-3]` inside `<Section>` → `[REG]`

```
┌─────────────────────────────────────────────────────────────────┐
│ [BNR] BANNER (shared)                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [A-1] SECTION HEADING                                           │
│  [A-1a] Eyebrow "About"                                         │
│  [A-1b] h2 "What to Expect"                                    │
│  [A-1c] Intro text (Sterling principles · 400 acres)           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [A-2] EDITORIAL GRID                                            │
│ ┌────────────────────────────────────┐  ┌─────────────────────┐ │
│ │ [A-2a] EDITORIAL LEAD (article)    │  │ [A-2b] NOTE         │ │
│ │  h3 "Purpose" + paragraph          │  │ (article)           │ │
│ │                                    │  │ h3 "Sterling Men's  │ │
│ │                                    │  │  Weekend Graduates  │ │
│ │                                    │  │  ONLY!" + paragraph │ │
│ └────────────────────────────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [A-3] RULE LIST                                                 │
│                                                                 │
│  [A-3a] ── Group heading: "What to Bring" ──                    │
│  ┌──────────────────────┬──────────────────────────────────┐    │
│  │ [A-3b-L]             │ [A-3b-R] h3 "The List"           │    │
│  │ "Highly Recommended" │  camping gear <ul> (tent,        │    │
│  │                      │  sleeping bag, chair, etc.)      │    │
│  └──────────────────────┴──────────────────────────────────┘    │
│                                                                 │
│  [A-3c] ── Group heading: "Additionally" ──                     │
│  ┌──────────────────────┬──────────────────────────────────┐    │
│  │ [A-3d-L]             │ [A-3d-R] h3 "The Short List"     │    │
│  │ "Do Your Best"       │  landscaping / tools paragraph   │    │
│  │                      │  (chainsaw, loppers, etc.)       │    │
│  └──────────────────────┴──────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [REG] REGISTRATION SECTION (shared)                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 3 — SCHEDULE ( /schedule ) — `src/app/schedule/page.tsx`

Layout: `[BNR]` → `[S-1]`/`[S-2]` inside `<Section>` → `[REG]`

Schedule rows are driven by data in `src/data/schedule.ts` and grouped at
runtime by the day prefix of each item's `time` field.

```
┌─────────────────────────────────────────────────────────────────┐
│ [BNR] BANNER (shared)                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [S-1] SECTION HEADING                                           │
│  [S-1a] Eyebrow "Schedule"                                      │
│  [S-1b] h2 "General Spirit Weekend Schedule"                    │
│  [S-1c] Intro text (food · competition · FIRE · final Circle)  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [S-2] DAY GROUPS (mapped from grouped schedule data)           │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ [S-2a] SATURDAY BLOCK                                     │  │
│  │  [S-2a-0] Day heading (eyebrow + h3 "Saturday Schedule") │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │ [S-2a-1] 07:00 AM · Registration · Admin Table      │  │  │
│  │  │ [S-2a-2] 08:00 AM · Breakfast · Mess Area           │  │  │
│  │  │ [S-2a-3] 09:00 AM · Circle Up · Fire Circle         │  │  │
│  │  │ [S-2a-4] 09:30 AM–08:00 PM · Day's Events           │  │  │
│  │  │ [S-2a-5] 09:00 PM+ · Jokes and Cigars · Fire Circle │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ [S-2b] SUNDAY BLOCK                                       │  │
│  │  [S-2b-0] Day heading (eyebrow + h3 "Sunday Schedule")   │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │ [S-2b-1] 07:00 AM · Reveille (has image: Revere)    │  │  │
│  │  │ [S-2b-2] 08:00 AM · Breakfast · Mess Area           │  │  │
│  │  │ [S-2b-3] 09:00 AM · Circle Up · Fire Circle         │  │  │
│  │  │ [S-2b-4] 09:30 AM–12:30 PM · Final Comp / Strike    │  │  │
│  │  │ [S-2b-5] 12:30–1:30 PM · Passing of the Rock        │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Note: rows with an `image` field render a [S-2x-img] thumbnail │
│  (240×160) and carry the `.has-image` modifier class.           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [REG] REGISTRATION SECTION (shared)                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 4 — CONTACT ( /contact ) — `src/app/contact/page.tsx`

Layout: `[BNR]` → `[C-1]`/`[C-2]` inside `<Section>` → `[REG]`

```
┌─────────────────────────────────────────────────────────────────┐
│ [BNR] BANNER (shared)                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [C-1] SECTION HEADING                                           │
│  [C-1a] Eyebrow "Contact"                                       │
│  [C-1b] h2 "Questions? Get in touch."                           │
│  [C-1c] Intro text                                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [C-2] CONTACT LAYOUT                                            │
│ ┌─────────────────────────────┐  ┌────────────────────────────┐ │
│ │ [C-2a] CONTACT COPY         │  │ [C-2b] CONTACT FORM        │ │
│ │  (left column)              │  │  (Formspree POST)          │ │
│ │                             │  │                            │ │
│ │  [C-2a-1] Paragraph         │  │  [C-2b-0] Hidden _next     │ │
│ │                             │  │   redirect field           │ │
│ │  [C-2a-2] RULE LIST compact │  │  [C-2b-1] Name field       │ │
│ │   [C-2a-2a] Email row       │  │  [C-2b-2] Email field      │ │
│ │    (robkellerman@… /        │  │  [C-2b-3] Message textarea │ │
│ │     derek.ottman@…)         │  │  [C-2b-4] "Send Message"   │ │
│ │   [C-2a-2b] Response Time   │  │   submit button            │ │
│ │   [C-2a-2c] Refunds row     │  │                            │ │
│ └─────────────────────────────┘  └────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [REG] REGISTRATION SECTION (shared)                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 5 — NOT FOUND ( /not-found ) — `src/app/not-found.tsx`

No banner or registration section — just a single `<Section>`.

```
┌─────────────────────────────────────────────────────────────────┐
│ [NF-1] SECTION HEADING                                          │
│  [NF-1a] Eyebrow "Page Not Found"                               │
│  [NF-1b] h2 "That page does not exist"                          │
│  [NF-1c] Intro text                                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ [NF-2] CALLOUT                                                  │
│  [NF-2a] Paragraph text                                         │
│  [NF-2b] "Return Home" button → "/"                             │
│  [NF-2c] Inline link to /schedule                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page 6 — THANK YOU ( /thank-you ) — `src/app/thank-you/page.tsx`

Post-payment landing page. No banner, no registration section — intentionally
minimal to feel distinct from all other pages. Destination of the TicketTaylor
post-purchase redirect (`https://spiritweekend.net/thank-you`).

```
┌─────────────────────────────────────────────────────────────────┐
│ [TY-1] THANK-YOU CARD (centered, max-width 32rem)              │
│  [TY-1a] Eyebrow "Registration Complete"                        │
│  [TY-1b] h1 "You're in, Brother."                               │
│  [TY-1c] Subtext "Check your email for your order              │
│           confirmation."                                        │
│  [TY-1d] ACTIONS                                                │
│   [TY-1d-1] "View the Schedule" button → /schedule             │
│   [TY-1d-2] "Return Home" button → /                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Reference

| Component             | File                                     | Used by                          |
| --------------------- | ---------------------------------------- | -------------------------------- |
| `Header`              | `src/components/Header.tsx`              | Layout (all pages)               |
| `Footer`              | `src/components/Footer.tsx`              | Layout (all pages)               |
| `ThemeToggle`         | `src/components/ThemeToggle.tsx`         | **unused** (theme hardcoded)     |
| `Container`           | `src/components/Container.tsx`           | Header, Footer, Section, etc.    |
| `Section`             | `src/components/Section.tsx`             | About, Schedule, Contact, 404    |
| `BannerSection`       | `src/components/BannerSection.tsx`       | Home, About, Schedule, Contact   |
| `RegistrationSection` | `src/components/RegistrationSection.tsx` | Home, About, Schedule, Contact   |
| `Button`              | `src/components/Button.tsx`              | Home, Contact, 404, Thank You    |
| `scheduleItems`       | `src/data/schedule.ts`                   | Schedule page                    |
```
