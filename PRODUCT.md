# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site generation with Vue support. Deploy to GitHub Pages initially; move to Cloudflare is planned only after the site is stable.

## Users

Primary: people who meet Krzysztof and want to know who he is and how to reach him:

- **Recruiters** evaluating him for backend, data, and AI engineering roles.
- **Colleagues and peers** from the industry, checking his work and credibility.
- **Personal acquaintances** he meets socially, who he wants to impress.

All three arrive wanting the same thing: a quick, credible picture of the person and an obvious way to get in touch. Recruiters and colleagues are the most demanding audience; the page should hold up under their scrutiny while still feeling personal.

## Product Purpose

A personal "whoami + contact" site: a single page that says who Krzysztof is and provides ways to contact him. Success means a visitor leaves knowing what he does and how to reach him.

The first real content is the whoami + contact page, available in English and Polish.

## Positioning

Stated in his CV (`../CV/src/header.tex`): a backend and data systems engineer with nearly three years of enterprise experience, owning delivery from requirements and domain modelling through production on Google Cloud. He builds secure, auditable systems and has led teams shipping large-scale data platforms and LLM-powered products.

Distinguishing specifics, from the CV: a five-person team that integrated a ~200 MW battery energy storage portfolio with Poland's balancing market; a GDPR-compliant Gemini pipeline processing 4,000 calls per month with zero security incidents; and a founded diagram-as-code SaaS (Diagramik.com) with LLM-driven editing.

## Operating Context

- Current role: Backend Developer at Axpo Polska sp. z o.o. (Warsaw, since January 2024).
- Founder and full-stack developer of Diagramik.com (remote, since January 2026).
- Based in Warsaw, Poland.
- Languages: Polish (native), English (C1, CAE).

## Capabilities and Constraints

- The page is a static artifact built with Astro and deployed through CI to GitHub Pages; it must stay portable to other static hosts.
- The intended domain is krzysztofwatras.pl.
- The initial GitHub workflow should protect `main`, allow squash merges only, and publish the static site through CI.
- The home route (`/`) is the English whoami page; `/pl/` is its Polish version. On an initial visit to an English route, browser language selects Polish for Polish-preferring visitors; an explicit language choice is remembered locally. Both routes remain directly accessible without JavaScript. Locale metadata, copy and static routes are structured so future languages can be added without a binary switch redesign; only English and Polish are offered now.
- A reusable profile sidebar stays on standard pages unless a page has a custom layout. It contains the circular portrait, name, social links, a See also area and a language picker anchored at its bottom. It remains a full-height rail on desktop and becomes a full-width profile header on tablet and phone, leaving the horizontal section navigation available at every size.
- Public contact channels: email, LinkedIn, and GitHub only. Do not publish the CV's phone number on the site.
- See also includes Diagramik and a local blog route (`/blog/`, `/pl/blog/`). The blog is only a coming-soon placeholder until actual content exists; do not imply posts have been published. Add other sites only when their URLs are confirmed. Internal section links point to real sections of the localized home page.

## Brand Commitments

- Name: Krzysztof Watras. Taglines and wording should stay consistent with the CV unless he changes them.
- The supplied cartoon portrait is the site's profile image. IBM Plex Sans and JetBrains Mono are the preferred font pairing. A light white, gold and red palette is preferred, with room to tune exact shades.

## Evidence on Hand

Source material is in `../CV/`:

- `../CV/src/header.tex`: name, tagline ("Backend, Data & AI Systems Engineer"), short bio, email (chris.watras@gmail.com), phone (+48 602 706 525), location (Warsaw), LinkedIn (krzysztof-watras), GitHub (ChrisW-priv).
- `../CV/src/experience.tex`: work history and selected projects.
- `../CV/src/skills.tex`: skill summaries and tech stack.
- `../CV/src/education.tex`: B.Sc. in Computer Science, Warsaw University of Technology (2021–2025), thesis on an LLM-powered personal assistant.
- `../CV/src/languages.tex`, `../CV/src/interests.tex`: languages; interests (endurance sports, hiking, strategy games, travel).

- `src/assets/profile-original.png`: user-supplied cartoon portrait, moved from `~/Downloads/profile.png`; the optimized, cropped site image is `public/images/profile.webp`.

Only email, LinkedIn and GitHub are approved for public contact. The CV's phone number is source material but is not approved for publication. Do not invent further content, testimonials, or claims beyond the CV.

## Product Principles

- Present the person accurately: every claim must trace to the CV or to something he confirms.
- Make the page credible to recruiters and colleagues while keeping it personal enough for social contexts.
- Make contacting him the clearest action on the page.
- Keep the site deployable as a static artifact, independent of its future hosting provider.
