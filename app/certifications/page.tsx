'use client';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Cert = { title: string; src: string };

const tileIn = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.35, ease: 'easeOut' } }),
};

function Grid({ items }: { items: Cert[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <motion.article
          key={c.src + i}
          variants={tileIn}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.12, ease: 'easeOut' } }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md ring-1 ring-inset ring-white/5 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={c.src}
              alt={c.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={i < 6}
            />
          </div>
          <h3 className="mt-3 line-clamp-2 text-sm font-medium text-zinc-100">{c.title}</h3>
        </motion.article>
      ))}
    </div>
  );
}

/**
 * ORDERING RULE:
 * 1) Top vendor credentials (Oracle, Docker, Google, UIUC, O’Reilly, etc.)
 * 2) Strong professional / university courses
 * 3) Internal & compliance / awareness
 *
 * (I skipped the two personal photos IMG_6878/6879; add them if you want.)
 */

/* 1) TOP CREDENTIALS */
const CERTS_TOP: Cert[] = [
  { title: 'OCI 2024 — Generative AI Professional (Badge)', src: '/images/OCI2024GAIOCP.jpg' },
  { title: 'OCI 2024 — Data Science Professional (Badge)', src: '/images/OCI2024DSOCP.jpg' },
  { title: 'Oracle ML using Autonomous Databases — Associate (2024) (Badge)', src: '/images/OMLADB2024CA.jpg' },
  { title: 'Java SE: Programming II — Oracle', src: '/images/JavaCert_page1.png' },

  // Use ONE per credential to avoid duplicates (badge vs. certificate page).
  { title: 'OCI — Generative AI Professional (Certificate page)', src: '/images/GenAI_page1.png' },
  { title: 'OCI — Data Science Professional (Certificate page)', src: '/images/DataScienceProf_page1.png' },

  { title: 'Docker Foundations Professional Certificate', src: '/images/CertificateOfCompletion_Docker Foundations Professional Certificate_page1.png' },
  { title: 'Google — Foundations of Cybersecurity (Coursera)', src: '/images/Google Foundations of Cybersecurity Coursera HXC4OTPPOSZ7_page1.png' },
  { title: 'Google — Data Foundations', src: '/images/Google Data Foundations Certificate FIEPO426YQ6A_page1.png' },
  { title: 'UIUC — Object-Oriented Data Structures in C++', src: '/images/Object Oriented Data Structures in CPP by UIUC_page1.png' },
  { title: 'UIUC — IoT Devices', src: '/images/UIUC_IoT_Certificate_CUO6HVI9BIIB_page1.png' },
  { title: 'O’Reilly — System Design Fundamentals', src: '/images/system-design-fundamentals.png' },

  { title: 'Google — Network Architecture', src: '/images/NetworkArchitectureCertificate39GZVIO6PSMV_page1.png' },
  { title: 'Unix & Linux Essentials', src: '/images/LinuxUnix_page1.png' },

  { title: 'OCI Foundations Associate (Badge)', src: '/images/OCIF2023CA.jpg' },
  { title: 'OCI Foundations Associate (Certificate)', src: '/images/OCIFoundationsAssociate_page1.png' },
  { title: 'OCI AI Services — Completion Certificate', src: '/images/OCI_AI_Services_Completion_Certificate_page1.png' },
  { title: 'OCI Infrastructure Workshop', src: '/images/OCI Infrastructure Workshop_page1.png' },
  { title: 'OCI — Intro Certification', src: '/images/OCI intro cert_page1.png' },
];

/* 2) PROFESSIONAL / UNIVERSITY COURSES */
const CERTS_PRO: Cert[] = [
  { title: 'Practical GitHub Copilot', src: '/images/CertificateOfCompletion_Practical GitHub Copilot_page1.png' },
  { title: 'Career Essentials in GitHub (Professional Certificate)', src: '/images/CertificateOfCompletion_Career Essentials in GitHub Professional Certificate_page1.png' },
  { title: 'Deep Learning: Model Optimization & Tuning', src: '/images/CertificateOfCompletion_Deep Learning Model Optimization and Tuning_page1.png' },
  { title: 'Building Web APIs with ASP.NET Core in .NET 6', src: '/images/CertificateOfCompletion_Building Web APIs with ASP.NET Core in .NET 6_page1.png' },
  { title: 'C and .NET — Essential Training', src: '/images/CertificateOfCompletion_C and .NET Essential Training_page1.png' },

  { title: 'AIOps Fundamentals — Exam Certificate', src: '/images/AIOPs_Fundamentals_Certificate_Exam_page1.png' },
  { title: 'AIOps Fundamentals', src: '/images/AIOPs_Fundamentals_Certificate_page1.png' },

  { title: 'AI Explained — CS4i Course', src: '/images/CS4i_AI_Explained_Course_page1.png' },
  { title: 'Consulting Solutions for AI — Course Certificate', src: '/images/Consulting Solutions for AI Course Certificate_page1.png' },
  { title: 'GIU — AI Feature Roadmaps Course Certificate', src: '/images/GIU AI Feature Roadmaps Course Certificate_page1.png' },

  // Keep one of the Financial Modeling dupes:
  { title: 'Financial Modeling & Forecasting Financial Statements', src: '/images/CertificateOfCompletion_Financial Modeling and Forecasting Financial Statements_page1.png' },

  { title: 'Oracle AI Advantage — Course Certificate', src: '/images/Oracle AI Advantage Course Certificate_page1.png' },
  { title: 'Oracle Machine Learning (Course/Badge)', src: '/images/OracleMachineLearning_page1.png' },

  { title: 'Introduction to Cybersecurity (Badge)', src: '/images/Introduction_to_Cybersecurity_Badge20241122-28-9i0073_page1.png' },
  { title: 'Introduction to Cybersecurity', src: '/images/introduction-to-cybersecurity.png' },

  { title: 'CLMS Certificate', src: '/images/clmsCertificate_page1.png' },
  { title: 'Project Management — Associate', src: '/images/ProjectManagementAssociate_page1.png' },
  { title: 'Oracle Unified Method — Level 1', src: '/images/OUM Level 1_page1.png' },
];

/* 3) INTERNAL / COMPLIANCE / AWARENESS (collapsed UI) */
const CERTS_COMPLIANCE: Cert[] = [
  { title: 'Information Security Awareness — Consulting', src: '/images/ConsultingInfoSecurityAwareness_page1.png' },
  { title: 'Global Compliance Training — FY26', src: '/images/Global Compliance Training FY26 Certificate_page1.png' },
  { title: 'Global Compliance', src: '/images/globalComplaince_page1.png' },
  { title: 'Global Product Security', src: '/images/GlobalProductSecurity_page1.png' },
  { title: 'Information Protection Awareness', src: '/images/INFOpROTECTIONaWARENESS_page1.png' },
  { title: 'Software Security Assurance', src: '/images/softwareSecurityAssurance_page1.png' },
  { title: 'GBU Security Incident Response', src: '/images/GBU Security Incident Response_page1.png' },
  { title: 'Insider Trading', src: '/images/Insider Trading_page1.png' },
  { title: 'Conflicts of Interest', src: '/images/conflictsOfInterests_page1.png' },
  { title: 'Code of Ethics', src: '/images/code of ethics_page1.png' },
  { title: 'Global Antitrust & Competition Law', src: '/images/Global anti trust and competetion law_page1.png' },

  { title: 'OSSA Refresher', src: '/images/OSSA Refresher_page1.png' },
  { title: 'OWLS Certificate', src: '/images/OWLSCert_page1.png' },
  { title: 'ORM Certificate', src: '/images/ORMCertificate20241122-27-o2rk8y_page1.png' },
  { title: 'Telecom ORM Certificate', src: '/images/TelecomORMCertificate20240209-29-mb5cl7_page1.png' },

  { title: 'Oracle Guided Learning — Project Management (OGL)', src: '/images/AchievedObjectivesProjectManagementOGL_page1.png' },
  { title: 'OGL Project Management CFA (Badge)', src: '/images/OGLPMCFA.jpg' },

  // Misc / external general certs
  { title: 'Cybrary Certificate', src: '/images/cybrary certificate1_page1.png' },
  { title: 'Cybrary Certificate (2)', src: '/images/cybrary certificate2_page1.png' },
  { title: 'Workspace Conduct / HR', src: '/images/workspcharr_page1.png' },

  // Keep one GitJam-type item here
  { title: 'Code Jam 1A', src: '/images/codeJam1A_page1.png' },

  // AMCAT (leave both if you’d like both visible)
  { title: 'Software Developer Trainee — AMCAT (Badge)', src: '/images/SDTraineeAMCAT.jpg' },
  { title: 'Software Developer Trainee — AMCAT (Badge 2)', src: '/images/SDTraineeAMCAT0.jpg' },
];

export default function CertificationsPage() {
  return (
    <div>
      <Nav />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">Certifications</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Ordered by: vendor credentials first, then strong professional/university courses, followed by
          internal & general.
        </p>

        {/* 1) Top credentials */}
        <h2 className="mt-8 text-lg font-medium tracking-tight text-zinc-200">Top Credentials</h2>
        <Grid items={CERTS_TOP} />

        {/* 2) Professional / University */}
        <h2 className="mt-10 text-lg font-medium tracking-tight text-zinc-200">Professional & University Courses</h2>
        <Grid items={CERTS_PRO} />

        {/* 3) Internal / Compliance (collapsible) */}
        <details className="mt-10">
          <summary className="cursor-pointer text-lg font-medium tracking-tight text-zinc-200 hover:opacity-90">
            Internal & Misc. (tap to expand)
          </summary>
          <Grid items={CERTS_COMPLIANCE} />
        </details>

        <p className="mt-8 text-xs text-zinc-500">
            Will be updating soon
        </p>
      </main>

      <Footer />
    </div>
  );
}
