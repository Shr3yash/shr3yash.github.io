'use client';

import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ---------- Motion & shared UI ----------
const popHover = {
  whileHover: { y: -2, scale: 1.02, transition: { duration: 0.12, ease: 'easeOut' } },
  whileTap: { scale: 0.995, transition: { duration: 0.06 } },
};

const tileIn = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.35, ease: 'easeOut' } }),
};

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <h1 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function GlassTile({
  i = 0,
  children,
  className = '',
}: {
  i?: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={tileIn}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={popHover.whileHover}
      whileTap={popHover.whileTap}
      className={[
        'group relative mb-6 rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
        'backdrop-blur-md transition-[transform,box-shadow,filter] duration-150 will-change-transform',
        'ring-1 ring-inset ring-white/5 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)]',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-150 group-hover:before:opacity-100',
        className,
      ].join(' ')}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-[radial-gradient(120px_60px_at_20%_0%,rgba(56,189,248,0.18),transparent),radial-gradient(120px_60px_at_80%_0%,rgba(168,85,247,0.18),transparent)] opacity-60" />
      {children}
    </motion.article>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
      {children}
    </span>
  );
}

// External links for certificates (every cert points here)
const LINKEDIN_CERTS = 'https://www.linkedin.com/in/shr3yash/details/certifications/';
const DRIVE_CERTS =
  'https://drive.google.com/drive/u/0/folders/1ofbHjfmKS_kJK6YaNbJGsnDAWvSjAFBS';

// Optional highlight names (all link to LinkedIn; each also shows a Drive link)
const certHighlights = [
  'OCI 2024 — Data Science Professional',
  'OCI 2024 — Generative AI Professional',
  'Docker Foundations Professional',
  'O’Reilly — System Design Fundamentals',
  'UIUC — Object-Oriented Data Structures in C++',
  'UIUC — IoT Devices',
  'Google — Network Architecture',
  'Google — Foundations of Cybersecurity',
];

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <Nav />

      <main className="relative mx-auto min-h-[70vh] w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* casual header intro */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-100">Blog</h1>
          <p className="mt-1 text-sm text-zinc-400">
            A running log of what I’m building, learning, and occasionally over-engineering. If you’re here : hi! this is the human side of the resume.
          </p>
        </div>

        {/* Work & what I'm up to */}
        <Section
          id="work"
          title="Work & what I’m up to"
          subtitle="Notes from the trenches : microservices, observability, and a soft spot for clean APIs."
        >
          <GlassTile i={0}>
            <h2 className="text-lg font-semibold text-zinc-100">Oracle ~ Associate Consultant</h2>
            <p className="mt-1 text-sm text-zinc-400">Jul 2023 – Present • Pune, India</p>
            <div className="prose prose-invert mt-3 max-w-none text-zinc-300">
              <p>
                Day-to-day, I live in Java/Kotlin microservices on OCI. Think REST + gRPC, a lot of tracing, and the
                occasional “why is this one pod special?” mystery. I like turning paths into boring ones, the sort
                that never page you at 3am.
              </p>
              <p>
                On the Batelco side (Jan ’25 →), I’ve been shaping <strong>30+ services</strong>, tightening interfaces
                into the 5G core (NRF, PCF) and Wi-Fi control plane, and rolling them out with <strong>Helm + Istio</strong>.
                Prometheus says we’re at <strong>+37% throughput</strong> and <strong>−12% latency</strong>. I’ll take it.
              </p>
              <p>
                Earlier (PPC Retail), I worked full-stack with <strong>OJET + Node.js</strong>, wrote <strong>reusable BRM
                opcodes</strong>, stood up SSR/serverless flows with <strong>30+ APIs</strong>, and shaved load everywhere
                I could. I also documented obsessively, enough that new folks saved ~<strong>160 hours</strong> getting
                onboarded.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>Java • Kotlin • gRPC</Badge>
                <Badge>OCI • Helm • Istio</Badge>
                <Badge>Prometheus/Grafana</Badge>
                <Badge>OJET • Node.js</Badge>
              </div>
            </div>
          </GlassTile>

          <GlassTile i={1}>
            <h2 className="text-lg font-semibold text-zinc-100">Research internship (Nibha Tech)</h2>
            <p className="mt-1 text-sm text-zinc-400">Dec 2022 – May 2023 • Nashik, India</p>
            <div className="prose prose-invert mt-3 max-w-none text-zinc-300">
              <p>
                I helped build a national mutual funds performance tool; biggish time-series (25 years), sensible
                features (&gt;30k vectors), and models that behave under stress. The goal was practicality: explainable
                signals (<strong>SHAP</strong>), guarded optimism (<strong>GAN</strong> augmentation), and benchmarks we
                could defend (<strong>MLflow</strong>).
              </p>
              <p>
                TL;DR: <strong>96.2%</strong> in normal regimes, <strong>76.03%</strong> in simulated crises, plus
                real-time APIs the advisors actually used.
              </p>
            </div>
          </GlassTile>
        </Section>

        {/* Interests — personal, casual */}
        <Section id="interests" title="Interests (tech & otherwise)" subtitle="Stuff I keep circling back to.">
          <GlassTile i={2}>
            <div className="prose prose-invert max-w-none text-zinc-300">
              <p className="mb-2">
                <strong>Systems & reliability:</strong> clean interfaces, noisy graphs, and the satisfaction of turning a
                flaky path into a boring one. Observability is a feature.
              </p>
              <p className="mb-2">
                <strong>ML that ships:</strong> agents that read docs so humans don’t have to; models that explain
                themselves; sensible guardrails. (Yes, I like LangChain when it’s scoped well.)
              </p>
              <p className="mb-2">
                <strong>Edge & embedded:</strong> low-power tricks, RL on tiny footprints, energy harvesting; making
                small devices surprisingly opinionated.
              </p>
              <p>
                <strong>Non-tech:</strong> chess, swimming, cricket, pickup basketball; planting trees with community folks;
                the kinds of weekends that smell like soil and sunscreen.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>API design</Badge>
                <Badge>Perf tuning</Badge>
                <Badge>GenAI agents</Badge>
                <Badge>Time-series</Badge>
                <Badge>Embedded RL</Badge>
              </div>
            </div>
          </GlassTile>
        </Section>

        {/* Certificates — all links go to LinkedIn + Drive */}
        <Section
          id="certifications"
          title="Certificates"
          subtitle="Full list lives on LinkedIn; raw files live in Drive. Highlights below link to the same."
        >
          <GlassTile i={3}>
            {/* action buttons */}
            <div className="flex flex-wrap gap-2">
              <Link
                href={LINKEDIN_CERTS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10"
              >
                View all on LinkedIn
              </Link>
              <Link
                href={DRIVE_CERTS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 hover:bg-white/10"
              >
                Browse Drive folder
              </Link>
            </div>

            {/* chips that all redirect to LinkedIn, each with a tiny Drive link */}
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {certHighlights.map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  <Link
                    href={LINKEDIN_CERTS}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sky-300 hover:underline"
                  >
                    {label}
                  </Link>
                  <Link
                    href={DRIVE_CERTS}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-400 hover:underline"
                  >
                    Drive copy
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              Any specific credential ID or PDF, both links above have everything in one place.
            </p>
          </GlassTile>
        </Section>

        {/* Community & volunteering — short + human */}
        <Section id="community" title="Community & volunteering">
          <GlassTile i={4}>
            <div className="prose prose-invert max-w-none text-zinc-300">
              <p className="mb-2">
                <strong>GDSC (VIT Pune), Team Head:</strong> ~130 hours of sessions on ML, Flutter, Web3; a lot of Q&A,
                a lot of “it depends.”
              </p>
              <p className="mb-2">
                <strong>Ekasutram:</strong> wrote 100+ problems, ran ML workshops, and generally encouraged people to try
                one more idea than they planned to.
              </p>
              <p className="mb-2">
                <strong>Mentorship:</strong> helped 70+ freshmen find their footing, the best metric is when you’re
                no longer needed.
              </p>
              <p className="mb-0">
                <strong>Team Green / NSS / NGO “We Listen” / NCC:</strong> trees, teaching, and a bit of drill; the
                discipline sticks, and so do the habits.
              </p>
            </div>
          </GlassTile>
        </Section>

        {/* A small "Now" note to match your nav vibe */}
        <Section id="now" title="Now (Aug 2025)">
          <GlassTile i={5}>
            <div className="prose prose-invert max-w-none text-zinc-300">
              <p className="mb-2">
                Tuning microservices around 5G control-plane edges, experimenting with leaner doc-reading agents for
                onboarding, and writing fewer but clearer internal notes.
              </p>
              <p className="mb-0">
                If you’re reading this and want a deeper dive, I’m happy to share design docs or
                experiment logs, the interesting parts are always in the trade-offs.
              </p>
            </div>
          </GlassTile>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
