# Typography Guidelines

Consistency in typography is key to maintaining the refined, intentional aesthetic of Roshni Studio. This document defines the global standards for text size, leading (line height), and letter spacing (tracking).

## Core Principles

- **Leading (Line-Height)**: Use tight leading for headings (`leading-[1.1]`) and generous leading for body text (`leading-relaxed`).
- **Tracking (Letter-Spacing)**: Use wider tracking for metadata and labels (`tracking-widest`) to enhance legibility and modern feel.
- **Font Weight**: Preference for `font-light` or `font-thin` for long-form body text and `font-light` or `font-medium` for headings.

---

## Typography Scale

### Headings (Serif - Cormorant)

| Level          | Desktop (md+) | Mobile     | Leading         | Usage                                                 |
| :------------- | :------------ | :--------- | :-------------- | :---------------------------------------------------- |
| **Hero H1**    | `text-6xl`    | `text-5xl` | `leading-[1.1]` | Main landing page hero section.                       |
| **Section H2** | `text-5xl`    | `text-4xl` | `leading-[1.1]` | Primary section headings (Philosophy, Projects, etc). |
| **Display H2** | `text-6xl`    | `text-4xl` | `leading-[1.1]` | High-impact CTA sections.                             |
| **Label H3**   | `text-3xl`    | `text-2xl` | `leading-snug`  | Component titles, quotes, and pillars.                |

### Body & UI (Sans - Inter)

| Type              | Scale       | Leading           | Weight        | Usage                                    |
| :---------------- | :---------- | :---------------- | :------------ | :--------------------------------------- |
| **Intro/Lead**    | `text-lg`   | `leading-relaxed` | `font-light`  | Philosophy intro or secondary hero text. |
| **Standard Body** | `text-base` | `leading-relaxed` | `font-light`  | Primary paragraph text and descriptions. |
| **Small Copy**    | `text-sm`   | `leading-normal`  | `font-normal` | UI elements, buttons, and navigation.    |
| **Micro/Meta**    | `text-xs`   | `leading-none`    | `font-light`  | Labels, locations, and timestamps.       |

---

## Specialized Styles

- **Decorative Numbers**: Use `text-5xl` with `font-mono` and `opacity-40` for decorative IDs (e.g., "01.").
- **Labels (Badge)**: Use `tracking-widest` and `uppercase` for small contextual labels.
- **Testimonial Quotes**: Use `font-serif`, `text-xl md:text-2xl`, and `leading-snug`.
- **Architectural Metadata**: Use `font-mono`, `text-[10px]`, `tracking-[0.2em]`, and `uppercase`.

## Fonts

- **Serif**: `Cormorant` (`--font-serif`) - Used for all headings and elegant highlights.
- **Sans**: `Inter` (`--font-sans`) - Used for body copy, buttons, and navigation.
- **Mono**: `Space Mono` (`--font-mono`) - Used for technical metadata and IDs.
