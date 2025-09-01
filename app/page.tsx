"use client";
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { CONTACT } from "../components/content";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Download,
  Award,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE =
  "https://raw.githubusercontent.com/Shr3yash/Shr3yash//main/imgs/Suits.png";
const MotionImage = motion(Image);

// ---------- Shared UI ----------
function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-4"
      >
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
        <div className="mt-8 grid gap-6">{children}</div>
      </motion.div>
    </section>
  );
}

const TONES: Record<string, string> = {
  indigo: "from-indigo-500/25 to-cyan-400/25",
  purple: "from-fuchsia-500/20 to-violet-400/20",
  emerald: "from-emerald-500/20 to-teal-400/20",
  amber: "from-amber-400/20 to-rose-400/20",
};

function GlassTile({
  children,
  tone = "indigo",
  size = "md",
}: {
  children: React.ReactNode;
  tone?: keyof typeof TONES;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "sm"
      ? { a: "h-40 w-40", b: "h-40 w-40" }
      : size === "lg"
      ? { a: "h-72 w-72", b: "h-80 w-80" }
      : { a: "h-56 w-56", b: "h-64 w-64" };
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group relative transform-gpu overflow-hidden rounded-2xl border border-zinc-200/60 shadow-sm dark:border-zinc-700/60 will-change-transform"
      whileHover={
        reduce
          ? undefined
          : { y: -6, scale: 1.03, boxShadow: "0px 18px 60px rgba(0,0,0,0.18)" }
      }
      transition={
        reduce
          ? undefined
          : { type: "spring", stiffness: 420, damping: 28, mass: 0.6 }
      }
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ x: -18 }}
          animate={{ x: 18 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 7 }}
          className={`absolute -top-10 -left-8 ${dims.a} rounded-full bg-gradient-to-tr ${TONES[tone]} blur-2xl`}
        />
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: -16 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 8 }}
          className={`absolute -bottom-10 -right-6 ${dims.b} rounded-full bg-gradient-to-tr ${TONES[tone]} blur-2xl`}
        />
      </div>
      {/* glass card */}
      <div className="relative z-10 rounded-2xl bg-white/70 p-5 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition-colors duration-200 group-hover:bg-white/75 dark:bg-zinc-900/60 dark:supports-[backdrop-filter]:bg-zinc-900/50 dark:group-hover:bg-zinc-900/65">
        {children}
      </div>
    </motion.article>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500" />
      <span>{children}</span>
    </li>
  );
}

// Links map for "More Projects"
const MORE_LINKS: Record<string, string> = {
  "Hybrid Emergency Audio Analyzer":
    "https://github.com/Shr3yash/Hybrid-Emergency-Audio-Analyzer",
  CarBMI: "https://github.com/Shr3yash/CarBMI",
  R3ND3R: "https://github.com/Shr3yash/R3ND3R",
  RollBall: "https://github.com/Shr3yash/RollBall",
  EmbedroW: "https://github.com/Shr3yash/EmbedroW",
  FireCart: "https://firecartv2.netlify.app/",
  CryptOpus: "https://cryptopus.netlify.app/",
};

// ---------- Page ----------
export default function HomePage() {
  return (
    <div>
      <Nav />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold tracking-tight md:text-5xl"
            >
              Shreyash S. Bhatkar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-3 text-zinc-600 dark:text-zinc-400"
            >
              Computer Engineer • Software Developer • AI/ML • Cloud-Native
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6"
            >
              <GlassTile tone="indigo" size="sm">
                <p className="text-zinc-800 dark:text-zinc-100">
                  {" "}
                  We engineers are not solely computer scientists, philosophers,
                  physicists, or analysts. We are a mosaic of our knowledge,
                  applying what we know like painting with colors we have on our
                  palette, to blend into one masterpiece. A solution.
                </p>
                <footer className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {" "}
                  A solution that reflects who we are.
                </footer>
              </GlassTile>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              I build reliable systems and applied ML solutions. Below are
              selected projects and a quick peek at my experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                Featured Projects
              </a>
              <a
                href="#experience"
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                Work Experience
              </a>
              <a
                href="#publications"
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                Publications & Patents
              </a>
              <a
                href={CONTACT.resumeUrl}
                download
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* iOS-y dynamic card with your image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-zinc-100 via-white to-zinc-50 shadow-xl dark:border-zinc-700/60 dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
              {/* ambient glows */}
              <div className="absolute inset-0">
                <motion.div
                  initial={{ x: -20 }}
                  animate={{ x: 20 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 6,
                  }}
                  className="absolute -top-10 left-10 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30 blur-2xl"
                />
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: -20 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 7,
                  }}
                  className="absolute bottom-0 right-6 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-emerald-400/20 blur-2xl"
                />
              </div>

              {/* content layer with inner padding = visible edge */}
              <motion.div
                className="relative z-10 grid h-full place-items-center p-5 sm:p-6"
                whileHover="hover"
              >
                {/* image box fills the padded area */}
                <div className="relative h-full w-full">
                  {/* IMPORTANT: use fill + object-contain so any image fits fully */}
                  <MotionImage
                    src={HERO_IMAGE}
                    alt="Portrait"
                    fill
                    priority
                    className="rounded-2xl object-contain opacity-90 shadow-2xl ring-1 ring-white/20 dark:ring-zinc-700/40"
                    /* prevent blurriness on small assets while scaling up */
                    sizes="(max-width: 768px) 88vw, 400px"
                    variants={{ hover: { scale: 1.035, y: -4 } }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 28,
                      mass: 0.6,
                    }}
                  />
                </div>

                {/* glossy sheen sweep on hover (match inner box width/rounding) */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 grid place-items-center"
                  initial={false}
                  variants={{ hover: { transition: { staggerChildren: 0 } } }}
                >
                  <motion.div
                    className="h-[70%] w-[calc(100%-2.5rem)] sm:w-[calc(100%-3rem)] overflow-hidden rounded-2xl"
                    initial={{ x: "-120%" }}
                    variants={{ hover: { x: "120%" } }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                      background:
                        "linear-gradient(75deg, rgba(255,255,255,0) 35%, rgba(255,255,255,.18) 50%, rgba(255,255,255,0) 65%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Work Experience"
        subtitle="A quick glance at my professional background."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tile -> /blog */}
          <a href="/blog" className="block" aria-label="Open blog">
            <GlassTile tone="indigo">
              <h3 className="text-lg font-semibold">
                Oracle India — Associate Consultant
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Jul 2023 – Present
              </p>
              <div className="mt-3">
                <h4 className="font-medium">
                  Java Developer — Batelco (Jan 2025 – Present)
                </h4>
                <ul className="mt-2 space-y-2">
                  <Bullet>
                    Architected 30+ Java/Kotlin microservices and REST endpoints
                    on OCI.
                  </Bullet>
                  <Bullet>
                    Built LangChain + Cohere docs agent to reduce API onboarding
                    time by ~40%.
                  </Bullet>
                  <Bullet>
                    Optimized REST/gRPC with 5G core (NRF, PCF) & Wi-Fi control;
                    throughput +37%, latency −12% (Prometheus).
                  </Bullet>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-medium">
                  Full-Stack — PPC Retail (Jul 2023 – Dec 2024)
                </h4>
                <ul className="mt-2 space-y-2">
                  <Bullet>
                    6+ reusable BRM opcodes; ~35% increase in billable
                    profit/allocated resource.
                  </Bullet>
                  <Bullet>
                    13+ billable solutions using OJET & Node.js; module load time
                    −23%.
                  </Bullet>
                  <Bullet>
                    SSR/serverless with 30+ reusable APIs; backend load −17%
                    (Prometheus).
                  </Bullet>
                </ul>
              </div>
            </GlassTile>
          </a>

          {/* Tile -> /blog */}
          <a href="/blog" className="block" aria-label="Open blog">
            <GlassTile tone="emerald">
              <h3 className="text-lg font-semibold">
                Nibha Tech — AI Research Intern
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Dec 2022 – May 2023
              </p>
              <ul className="mt-3 space-y-2">
                <Bullet>
                  30k+ feature vectors over 25 years of data; SARIMA + MACD +
                  Bollinger + SHAP.
                </Bullet>
                <Bullet>
                  GANs for synthetic data; Backtrader for backtests; MLflow
                  benchmarks — 96.2% normal / 76.03% stress.
                </Bullet>
                <Bullet>
                  Integrated 15GB+ pipelines; real-time prediction APIs.
                </Bullet>
              </ul>
            </GlassTile>
          </a>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Selected work with outcomes & tech details."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED.map((p, i) => {
            const href = p.repo || p.demo;
            return (
              <div
                key={i}
                className={href ? "cursor-pointer" : undefined}
                onClick={() => {
                  if (href) window.open(href, "_blank", "noopener,noreferrer");
                }}
                aria-label={href ? `Open ${p.name}` : undefined}
                role={href ? "link" : undefined}
              >
                <GlassTile
                  tone={(["indigo", "purple", "emerald", "amber"] as const)[
                    i % 4
                  ]}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="flex gap-2 text-xs">
                      {p.repo && (
                        <a
                          className="rounded-lg p-2 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60"
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Github icon removed to avoid duplicate import, keep link text */}
                          Repo
                        </a>
                      )}
                      {p.demo && (
                        <a
                          className="rounded-lg p-2 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60"
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {(p.points ?? []).length ? (
                      (p.points as string[]).map((b, k) => (
                        <li key={k} className="text-sm text-zinc-300">
                          {b}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-zinc-300">
                        {(p as any).blurb}
                      </li>
                    )}
                  </ul>
                </GlassTile>
              </div>
            );
          })}
        </div>
      </Section>

      {/* MORE PROJECTS (compact) */}
      <Section
        id="more"
        title="More Projects"
        subtitle="A few more experiments & apps."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {MORE.map((p, i) => {
            const href = MORE_LINKS[p.title as keyof typeof MORE_LINKS];
            const tile = (
              <GlassTile
                key={i}
                tone={(["emerald", "purple", "indigo", "amber"] as const)[
                  i % 4
                ]}
                size="sm"
              >
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.desc}
                </p>
              </GlassTile>
            );
            return href ? (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="block"
                aria-label={`Open ${p.title}`}
              >
                {tile}
              </a>
            ) : (
              tile
            );
          })}
        </div>
      </Section>

      {/* PUBLICATION & LINKS */}
      <Section id="publications" title="Publication & Patents">
        <GlassTile tone="purple">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-medium">
                {" "}
                Forest Fire Detection and Prediction via RCNN (ICEPTP’22,
                Lisbon)
              </div>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Custom RCNN (PyTorch), 10k+ images with OpenCV augmentation;
                97.3% mAP; introduced ‘RTH Index’; Kafka + Flink streaming
                pipeline.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/shr3yash/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Shr3yash"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </GlassTile>
        <GlassTile tone="purple">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-medium">
                {" "}
                “Stun-Shoe” women’s-safety wearable – Indian Provisional Patent
                App. No. 2025/XXXXXX, filed Mar 2025 (full spec in preparation)
              </div>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300"></p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/shr3yash/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Shr3yash"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </GlassTile>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Find More"
        subtitle="Suggestions, feedback, or just say hi."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <GlassTile tone="indigo">
            <form
              method="POST"
              action="https://formspree.io/f/movnvbnr"
              className="grid gap-3"
              accept-charset="UTF-8"
            >
              {/* visible fields */}
              <input
                required
                name="name"
                placeholder="Name"
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                rows={5}
                className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
              />

              {/* helpers (optional but recommended) */}
              <input
                type="hidden"
                name="_subject"
                value="New message — shr3yash.github.io"
              />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              {/* redirect to a local thank-you page after submit */}
              <input
                type="hidden"
                name="_next"
                value="https://shr3yash.github.io/thanks"
              />

              <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
                Send Message
              </button>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                This form is powered by Formspree. You can also email me
                directly at 12shreyashh@gmail.com.
              </p>
            </form>
          </GlassTile>

          <GlassTile tone="emerald">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <a
                  className="underline hover:opacity-80"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="underline hover:opacity-80"
                  href={`tel:${CONTACT.phone.replace(/\\s/g, "")}`}
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  className="underline hover:opacity-80"
                  href={CONTACT.resumeUrl}
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </GlassTile>
        </div>
      </Section>
    </div>
  );
}

// ===== Data (self-contained so you can copy just this file) =====
const FEATURED = [
  {
    name: "Patent Project : Stun Shoe (Low-Power IoT Wearable for Women’s Safety)",
    repo: "https://github.com/Shr3yash/OPEHS",
    demo: "https://github.com/Shr3yash/OPEHS", // add demo link
    points: [
      "Piezo-triboelectric energy harvesting ~10–50 mW/stride (bench-verified).",
      "ARM-M0 + BLE board (32 kB) powering non-lethal actuator from EDLC + Li-Po hybrid stack.",
      "Captured 40k+ footfall samples (FlexiForce + Data Logger) for training.",
      "On-device RL (DQN/PPO) classifies routine vs high-risk; 93% F1; triggers only if risk > 0.8.",
      "Indian Provisional Patent App. No. 2025/XXXXXX — filed Mar 2025 (full spec in preparation).",
    ],
  },
  {
    name: "Real-time Cloud Performance Analytics & Optimization App",
    repo: "",
    demo: "https://github.com/Shr3yash/PEP",
    points: [
      "Python Flask (CORS) ingesting 8+ GB real-time logs; Spark MLlib predictive analytics.",
      "+22% resource efficiency; downtime −15%; OJET + Node.js dashboard with −33% load time.",
      "Deployed on Oracle Cloud (OKE) for scalability and performance.",
    ],
  },
  {
    name: "Forest Fire Detection & Prediction via RCNN (Publication)",
    repo: "https://www.researchgate.net/publication/367713706_Forest_Fire_Detection_and_Prediction_from_image_processing_using_RCNN",
    demo: "https://www.researchgate.net/publication/367713706_Forest_Fire_Detection_and_Prediction_from_image_processing_using_RCNN",
    points: [
      "10k+ images with OpenCV augmentation; custom RCNN in PyTorch achieving 97.3% mAP.",
      "Novel “RTH Index” blending humidity, temperature & visual cues for stratification.",
      "Kafka + Flink pipeline for real-time anomaly detection.",
    ],
  },
  {
    name: "Real-time Bus Route Detection for the Visually Impaired",
    repo: "https://github.com/Shr3yash/Bus-Route-Detection-and-Classification",
    demo: "https://github.com/Shr3yash/Bus-Route-Detection-and-Classification",
    points: [
      "6.5k+ images; SIFT/ORB yielding 500k+ descriptors; deep CNNs (ResNet).",
      "UMAP/t-SNE for dimensionality reduction; custom Tesseract OCR for route numbers.",
      "93.5% accuracy with optimized feature extraction.",
    ],
  },
];

const MORE = [
  {
    title: "Performance Evaluation and Prediction Tool (PEP)",
    desc: "Evaluates product performance, predicts challenges, and highlights improvement areas with scenario forecasts.",
  },
  {
    title: "Hybrid Emergency Audio Analyzer",
    desc: "Emergency audio interaction analysis and categorization.",
  },
  {
    title: "CarBMI",
    desc: "DL study: carbohydrate intake vs. workout and physical performance.",
  },
  {
    title: "R3ND3R",
    desc: "3D model rendering desktop app with Blender-authored supershapes (Python core).",
  },
  {
    title: "eSKIMo",
    desc: "Text skimmer & labeling tool (TensorFlow + React).",
  },
  {
    title: "CryptOpus",
    desc: "Web3 NFT/Crypto market interactions with a ledger of transactions.",
  },
  {
    title: "BuRD",
    desc: "Bus Route Detector & Classifier for visually impaired users.",
  },
  {
    title: "Black Box",
    desc: "UV sterilizer box with stepper-mounted absorbent; BT control via Arduino.",
  },
  {
    title: "FireCart",
    desc: "Full shopping app: cart, checkout, and typed forms; transactions ready.",
  },
  {
    title: "EmbedroW",
    desc: "t-SNE / UMAP / PCA projector for custom datasets (see demo in repo).",
  },
  {
    title: "Spacebar (Coming Soon)",
    desc: "Self-learning shuttle that learns to land autonomously.",
  },
  {
    title: "Motion DA",
    desc: "Browser-based motion capture driving a live animated character.",
  },
  {
    title: "EdibleInsight",
    desc: "Food classification ML aiming to outperform DEEPFOOD (2016).",
  },
  { title: "RollBall", desc: "Endless-runner game built with Pygame." },
];
