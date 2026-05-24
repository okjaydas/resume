"use client";

import { useState, useEffect, useRef } from "react";
import FloatingShareButton from "@/components/FloatingShareButton";
import MatrixRain from "@/components/MatrixRain";

/* ─── Data ─── */

const SKILLS = {
  leadership: {
    label: "Architecture & Leadership",
    tagline: "How I think",
    color: "amber" as const,
    items: [
      "Distributed Systems Design",
      "High Availability",
      "Migration Strategy",
      "Technical Governance",
      "Observability",
      "Quality of Service",
      "Engineering Mentorship",
    ],
  },
  cloud: {
    label: "Cloud & Data",
    tagline: "What I build on",
    color: "purple" as const,
    items: [
      "Azure Cosmos DB",
      "Azure Redis",
      "Azure Storage",
      "AWS DynamoDB",
      "AWS SQS",
      "AWS Lambda",
      "AWS S3",
      "Google Cloud Storage",
      "Microsoft Substrate",
    ],
  },
  platform: {
    label: "Platform & DevOps",
    tagline: "How I ship",
    color: "green" as const,
    items: [
      "Kubernetes",
      "Docker",
      "Kafka",
      "Service Fabric",
      "Spring Boot",
      "React",
      "Jenkins",
      "Spinnaker",
      "Grafana",
      "IaC",
    ],
  },
  ai: {
    label: "AI & Machine Learning",
    tagline: "What I'm integrating",
    color: "cyan" as const,
    items: [
      "LLM Integration",
      "Semantic Search",
      "Azure ML",
      "AI Foundry",
      "Azure Cognitive Search",
    ],
  },
  languages: {
    label: "Languages",
    tagline: "What I write in",
    color: "" as const,
    items: [
      "Java",
      "C# (.NET)",
      "Python",
      "JavaScript / TypeScript",
      "SQL",
      "KQL",
    ],
  },
};

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
] as const;

/* ─── CountUp ─── */

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-xl xl:text-2xl font-bold gradient-text">
      {display}{suffix}
    </span>
  );
}

/* ─── Component ─── */

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("experience");

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* ────── Header ────── */}
      <header className="header-gradient border-b" style={{ borderColor: "var(--glass-border)" }}>
        <MatrixRain />
        <div
          className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12 py-10 md:py-14 xl:py-16 2xl:py-20 relative z-10"
          style={{
            background: "rgba(11,15,26,0.3)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            borderRadius: "20px",
            margin: "0 auto",
            border: "1px solid rgba(99,102,241,0.08)",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-5">
              {/* Gradient avatar ring */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-22 h-22 md:w-40 md:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 rounded-full p-[2px] overflow-hidden"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/avatar.jpg"
                      alt="Janmejaya Das"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 15%", aspectRatio: "1 / 1" }}
                    />
                  </div>
                </div>
                {/* Online dot */}
                <span
                  className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{
                    background: "#22c55e",
                    borderColor: "var(--bg-primary)",
                    boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  }}
                />
              </div>

              <div>
                <h1
                  className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold gradient-text leading-tight"
                  style={{ textShadow: "0 0 12px rgba(129,140,248,0.25), 0 0 24px rgba(52,217,232,0.1)" }}
                >
                  Janmejaya Das
                </h1>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <h2
                    className="text-sm md:text-base xl:text-lg font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Software Engineer
                  </h2>
                  <span className="whisper-badge hidden sm:inline-block" title="Open to Staff / Principal roles" style={{ color: "var(--accent-cyan)", opacity: 0.85 }}>
                    · staff / principal
                  </span>
                </div>
                <p
                  className="mt-2 text-xs md:text-sm xl:text-base max-w-xl xl:max-w-2xl 2xl:max-w-3xl leading-relaxed"
                  style={{ color: "var(--text-secondary)", textShadow: "0 0 8px rgba(0,0,0,0.6)" }}
                >
                  13+ years architecting high-throughput distributed systems and leading cross-functional engineering teams. Specializing in multi-region cloud migrations, AI/LLM integration, and scaling backend infrastructure at enterprise scale.
                </p>
              </div>
            </div>

            {/* Right: CTA links */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="/JanmejayaDas-2026.pdf"
                download
                className="header-cta-btn px-5 py-2.5 xl:px-6 xl:py-3 text-xs xl:text-sm font-semibold rounded-2xl transition-all duration-300"
                style={{
                  background: "#f59e0b",
                  color: "#0b0f1a",
                  boxShadow: "0 0 10px rgba(245,158,11,0.2), 0 0 20px rgba(245,158,11,0.1)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#fbbf24"; e.currentTarget.style.boxShadow = "0 0 14px rgba(245,158,11,0.35), 0 0 28px rgba(245,158,11,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "#f59e0b"; e.currentTarget.style.boxShadow = "0 0 10px rgba(245,158,11,0.2), 0 0 20px rgba(245,158,11,0.1)"; }}
              >
                ↓&ensp;Resume PDF
              </a>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText("janmejaya.das1@gmail.com");
                  const btn = e.currentTarget;
                  const original = btn.innerHTML;
                  btn.innerHTML = "✓&ensp;Copied!";
                  setTimeout(() => { btn.innerHTML = original; }, 1500);
                }}
                className="glass-card px-4 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer"
                style={{ color: "var(--text-secondary)", border: "none" }}
              >
                ✉&ensp;Email
              </button>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-4 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-medium transition-all duration-300 flex items-center gap-1.5"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0A66C2"; e.currentTarget.style.boxShadow = "0 0 12px rgba(10,102,194,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Mobile links */}
            <div className="flex md:hidden gap-2">
              <a
                href="/JanmejayaDas-2026.pdf"
                download
                className="w-9 h-9 flex items-center justify-center text-sm font-bold rounded-full"
                style={{
                  background: "var(--gradient-primary)",
                  color: "#0b0f1a",
                }}
              >
                ↓
              </a>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText("janmejaya.das1@gmail.com");
                  const btn = e.currentTarget;
                  const original = btn.innerHTML;
                  btn.innerHTML = "✓";
                  setTimeout(() => { btn.innerHTML = original; }, 1500);
                }}
                className="glass-card w-9 h-9 flex items-center justify-center text-sm cursor-pointer"
                style={{ color: "var(--text-secondary)", border: "none" }}
              >
                ✉
              </button>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-9 h-9 flex items-center justify-center transition-all duration-300"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0A66C2"; e.currentTarget.style.boxShadow = "0 0 12px rgba(10,102,194,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ────── Main ────── */}
      <main className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12 py-12 xl:py-16 2xl:py-20">
        {/* Impact Stats */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xl:gap-4">
            {[
              { value: 13, suffix: "+", label: "Years of Engineering" },
              { value: 50, suffix: "+", label: "Microservices Modernized" },
              { value: 300, suffix: "+TB", label: "Infrastructure Optimized" },
              { value: 35, suffix: "+", label: "Engineers Led & Mentored" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card px-4 py-3 xl:px-5 xl:py-4 text-center"
                style={{ opacity: 0.85 }}
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <nav
          className="flex flex-wrap justify-center mb-10 border-b"
          style={{ borderColor: "var(--glass-border)" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* ─── Experience ─── */}
        <section className={activeTab === "experience" ? "block" : "hidden"}>
          <h2 className="section-heading" style={{ color: "var(--text-primary)" }}>
            Professional Experience
          </h2>

          <div className="relative mt-8 pl-12 xl:pl-16 space-y-10 xl:space-y-12">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* ── Microsoft People Skills ── */}
            <article className="relative animate-fade-in-up stagger-1">
              <div className="timeline-dot current" />
              <div className="glass-card p-6 xl:p-8 2xl:p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      Microsoft
                    </h3>
                    <p className="text-sm" style={{ color: "var(--accent-cyan)" }}>
                      Senior Software Engineer (Acting Lead) · People Skills Team
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono whitespace-nowrap px-2 py-0.5 rounded"
                    style={{ color: "var(--accent-cyan)", background: "rgba(34,211,238,0.08)" }}
                  >
                    Feb 2025 — Present
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm xl:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Architectural Scalability &amp; Migration:</strong>{" "}
                      Led the scalability architecture for vast-scale user-side features post-General Availability. Quantified the long-term operational cost of remaining on Microsoft Substrate and drove stakeholder alignment to migrate to native Azure infrastructure — trading short-term feature velocity for durable scalability and significantly reduced operational overhead.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>AI/LLM Integration Leadership:</strong>{" "}
                      Spearheaded the engineering coordination for LLM-based Skills Inferencing. Aligned technical strategy and execution between US and IDC counterparts, ensuring seamless AI model integration into the core product.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>System Optimization:</strong>{" "}
                      Redesigned highly distributed scheduled job processing systems to reliably handle exponential user growth and massive data throughput post-GA.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Organizational Leadership:</strong>{" "}
                      Engineered the operational and technical strategy for an 18-person organization. Standardized cross-border development workflows between US/IDC teams, accelerating feature deployment cycles and resolving systemic technical silos.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Engineering Leadership &amp; Talent Development:</strong>{" "}
                      Formalized an engineering mentorship program resulting in the successful promotion of 2 high-potential engineers to the next seniority level. Directed end-to-end evaluation, technical onboarding, and career integration for 2 interns, achieving a 100% full-time conversion rate. Established a sustainable mentorship framework that raised team engineering standards and reduced time-to-proficiency for new hires.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Quality &amp; Governance:</strong>{" "}
                      Served as the mandatory architectural and code reviewer for all IDC team deliverables, establishing strict engineering standards and ensuring zero degradation in deployment quality.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            {/* ── Microsoft Intune ── */}
            <article className="relative animate-fade-in-up stagger-2">
              <div className="timeline-dot" />
              <div className="glass-card p-6 xl:p-8 2xl:p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      Microsoft
                    </h3>
                    <p className="text-sm" style={{ color: "var(--accent-blue)" }}>
                      Senior Software Engineer · Intune Service Modernization
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono whitespace-nowrap px-2 py-0.5 rounded"
                    style={{ color: "var(--text-muted)", background: "rgba(99,102,241,0.06)" }}
                  >
                    Dec 2022 — Jan 2025
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm xl:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Architected and led the service modernization of 50+ microservices, converting stateful legacy systems to stateless architectures. Justified the investment to product stakeholders by quantifying imminent scalability risks — achieving a 300TB reduction in memory consumption through core storage pattern refactoring and unblocking the Switzerland region expansion.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Implemented runtime configuration deployment, improving flexibility and faster updates while optimizing indexing workflows for better performance and cost savings.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Enabled the global onboarding of all microservices and the monolith to the new Switzerland region.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Mentored a team of 5, led onboarding sessions for new joiners, facilitated knowledge-sharing workshops, and developed PoCs including Azure Cognitive Search integrations.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* ── Amazon ── */}
            <article className="relative animate-fade-in-up stagger-3">
              <div className="timeline-dot" />
              <div className="glass-card p-6 xl:p-8 2xl:p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      Amazon
                    </h3>
                    <p className="text-sm" style={{ color: "var(--accent-purple)" }}>
                      Software Development Engineer · Seller Registration &amp; KYC
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono whitespace-nowrap px-2 py-0.5 rounded"
                    style={{ color: "var(--text-muted)", background: "rgba(168,85,247,0.06)" }}
                  >
                    Aug 2021 — Nov 2022
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm xl:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-purple)" }}>▸</span>
                    <span>Led the architectural transition from monolith to modular microservices for global registration systems, enabling independent scalability and reducing blast radius for critical KYC workflows.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-purple)" }}>▸</span>
                    <span>Automated the deployment stack setup for 11 existing services, enabling seamless one-click rollouts to new AWS regions, significantly reducing manual effort and deployment time.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-purple)" }}>▸</span>
                    <span>Designed and implemented the Dormancy Reactivation and Lifetime Verification flow for sellers across multiple products, including Sell-On-Amazon and Seller-Wallet.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* ── Razorpay ── */}
            <article className="relative animate-fade-in-up stagger-4">
              <div className="timeline-dot" />
              <div className="glass-card p-6 xl:p-8 2xl:p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                      Razorpay
                    </h3>
                    <p className="text-sm" style={{ color: "#f59e0b" }}>
                      Software Engineer · Payment Apps Team
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono whitespace-nowrap px-2 py-0.5 rounded"
                    style={{ color: "var(--text-muted)", background: "rgba(245,158,11,0.06)" }}
                  >
                    Dec 2019 — Aug 2021
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-sm xl:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "#f59e0b" }}>▸</span>
                    <span>Developed merchant-facing payment features using Java and GoLang, reducing response times by a factor of seven.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "#f59e0b" }}>▸</span>
                    <span>Spearheaded CI/CD implementation with Spinnaker, Docker, and Kubernetes.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* ── Earlier Experience ── */}
            <article className="relative animate-fade-in-up stagger-5">
              <div className="timeline-dot" />
              <div className="glass-card p-6 xl:p-8 2xl:p-10">
                <details>
                  <summary
                    className="text-lg font-bold cursor-pointer select-none"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Earlier Experience&ensp;
                    <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                      2013 – 2019
                    </span>
                  </summary>

                  <div className="mt-6 space-y-6">
                    {/* Ivy Comptech */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                            Ivy Comptech
                          </h4>
                          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                            Subsidiary of Entain (formerly GVC Holdings) · Senior Software Engineer
                          </p>
                        </div>
                        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          Mar 2019 — Dec 2019
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li className="flex gap-2">
                          <span style={{ color: "var(--text-muted)" }}>▸</span>
                          <span>Optimized KYC workflows and offline user updates, ensuring compliance and system stability (User Flow Game Portal).</span>
                        </li>
                      </ul>
                    </div>

                    {/* Oracle */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                            Oracle
                          </h4>
                          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                            Senior Applications Engineer · Work-Life &amp; GRC
                          </p>
                        </div>
                        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          Nov 2015 — Mar 2019
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li className="flex gap-2">
                          <span style={{ color: "var(--text-muted)" }}>▸</span>
                          <span>Designed and developed a microservices-based application for on-premise and cloud environments; led development from scratch as a principal team member.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Infosys */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                            Infosys
                          </h4>
                          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                            Systems / Test Engineer
                          </p>
                        </div>
                        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                          Apr 2013 — Aug 2015
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <li className="flex gap-2">
                          <span style={{ color: "var(--text-muted)" }}>▸</span>
                          <span>Automated testing and developed ETL tools, cutting costs and enhancing data integrity in interchange systems.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className={activeTab === "skills" ? "block" : "hidden"}>
          <h2 className="section-heading" style={{ color: "var(--text-primary)" }}>
            Core Proficiencies
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {Object.entries(SKILLS).map(([key, category]) => (
              <div key={key} className="glass-card p-6 xl:p-8 animate-fade-in-up">
                <h3
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{
                    color:
                      category.color === "purple"
                        ? "var(--accent-purple)"
                        : category.color === "green"
                          ? "#22c55e"
                          : category.color === "cyan"
                            ? "var(--accent-cyan)"
                            : category.color === "amber"
                              ? "#f59e0b"
                              : "var(--accent-blue)",
                  }}
                >
                  {category.label}
                </h3>
                {category.tagline && (
                  <p
                    className="text-xs mb-4 -mt-2"
                    style={{ color: "var(--text-muted)", fontStyle: "italic", opacity: 0.7 }}
                  >
                    {category.tagline}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className={`skill-pill ${category.color}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section className={activeTab === "education" ? "block" : "hidden"}>
          <h2 className="section-heading" style={{ color: "var(--text-primary)" }}>
            Education
          </h2>

          <div className="mt-8 space-y-6">
            <div className="glass-card p-6 xl:p-8 animate-fade-in-up stagger-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                    M.Tech in Software Systems (IoT)
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    BITS Pilani — Work Integrated
                  </p>
                </div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ color: "var(--text-muted)", background: "rgba(99,102,241,0.06)" }}
                >
                  2024 — 2026
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-cyan)" }}>▸</span>{" "}
                  Pursued full-time alongside a Senior Software Engineer role at Microsoft, demonstrating commitment to continuous technical growth.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-cyan)" }}>▸</span>{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Capstone Project:</strong>{" "}
                  Flood Water Management in Urban Areas — applied IoT sensor networks and real-time data pipelines to model urban flood scenarios.
                </p>
                <p className="text-xs leading-relaxed mt-1" style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                  Elected IoT specialization to broaden systems thinking beyond pure software into hardware-software boundary design.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 xl:p-8 animate-fade-in-up stagger-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg xl:text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                    Bachelor of Technology in Information Technology
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Biju Patnaik University of Technology, Rourkela
                  </p>
                </div>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ color: "var(--text-muted)", background: "rgba(99,102,241,0.06)" }}
                >
                  2008 — 2012
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-blue)" }}>▸</span>{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Capstone Project:</strong>{" "}
                  Semantic Search Engine — built a search system leveraging semantic analysis to improve result relevance beyond keyword matching.
                </p>
                <p className="text-xs leading-relaxed mt-1" style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
                  A foundation that came full circle — now integrating semantic search and LLM-powered inferencing at enterprise scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Achievements ─── */}
        <section className={activeTab === "achievements" ? "block" : "hidden"}>
          <h2 className="section-heading" style={{ color: "var(--text-primary)" }}>
            Recognitions &amp; Achievements
          </h2>

          <div className="mt-8 space-y-6">
            {[
              {
                title: "Architectural Anchor & System Strategy",
                text: "Recognized by Principal engineering leadership (L64/L65) for deep systemic expertise and authoring rigorous, alignment-driving design documentation. Consistently praised for tackling complex, highly ambiguous problem spaces and establishing a shared architectural vision across distributed domains.",
              },
              {
                title: "Organizational Capability Multiplier",
                text: "Consistently highlighted in 360-degree feedback as the primary technical \u201cgo-to\u201d and organizational unblocker. Acknowledged for scaling overall team velocity by fostering an approachable mentorship culture and drastically reducing the time-to-resolution for critical, cross-team blockers.",
              },
              {
                title: "Technical Governance & Quality Excellence",
                text: "Commended for institutionalizing strict engineering standards through proactive and highly insightful code reviews. Recognized for seeing beyond localized bug fixes to identify systemic bottlenecks and prevent architectural drift before it reaches production.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`glass-card p-6 xl:p-8 animate-fade-in-up stagger-${i + 1}`}
                style={{
                  borderLeft: "3px solid",
                  borderImage: "var(--gradient-primary) 1",
                }}
              >
                <h3 className="font-semibold mb-2 gradient-text text-base">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── 360° Engineering Perspectives ── */}
          <h3
            className="section-heading mt-16"
            style={{ color: "var(--text-primary)", fontSize: "1.15rem" }}
          >
            360° Engineering Perspectives
          </h3>
          <p
            className="text-xs mt-1 mb-8"
            style={{ color: "var(--text-muted)", fontStyle: "italic" }}
          >
            Excerpts from formal peer and leadership evaluations (Microsoft, 2023–2026).
          </p>

          <div className="space-y-6">
            {[
              {
                topic: "On Architectural Leadership & System Design",
                quote:
                  "\u201cJanmejaya serves as the architectural anchor for our most complex microservice domains. He tackles highly ambiguous problem spaces with rigorous, clear design documentation. His ability to establish a shared architectural vision across distributed US and India teams prevents downstream failures before a single line of code is written.\u201d",
                attribution: "— Principal Software Engineer (L65)",
              },
              {
                topic: "On Technical Governance & Code Quality",
                quote:
                  "\u201cHis code reviews are essentially a masterclass in technical governance. People rely heavily on his insights because he doesn\u2019t just point out localized bugs; he identifies systemic bottlenecks and prevents architectural drift. He single-handedly raised the engineering baseline for our entire organization.\u201d",
                attribution: "— Senior Software Engineer (Peer)",
              },
              {
                topic: "On Mentorship & Team Velocity",
                quote:
                  "\u201cAn incredible mentor and a true organizational unblocker. Despite owning massive technical scope, he remains the most approachable \u2018go-to\u2019 engineer on the floor. He has a unique ability to break down complex backend migrations, radically reducing the time-to-proficiency for new hires and junior developers.\u201d",
                attribution: "— Software Engineer (Mentee)",
              },
              {
                topic: "On Execution & Cross-Team Alignment",
                quote:
                  "\u201cWhen a critical, cross-team migration is blocked, Janmejaya is the person who untangles the dependencies. He proactively identifies risks, bridges the communication gap between isolated teams, and ensures we hit our strict SLA commitments with zero production regressions.\u201d",
                attribution: "— Senior Engineering Manager",
              },
            ].map((item, i) => (
              <div
                key={item.topic}
                className={`glass-card p-6 xl:p-8 animate-fade-in-up stagger-${i + 1}`}
                style={{
                  borderLeft: "3px solid",
                  borderImage:
                    i % 2 === 0
                      ? "linear-gradient(180deg, var(--accent-cyan), var(--accent-blue)) 1"
                      : "linear-gradient(180deg, var(--accent-purple), var(--accent-blue)) 1",
                }}
              >
                <h4
                  className="text-sm font-semibold uppercase tracking-wider mb-3"
                  style={{ color: i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-purple)" }}
                >
                  {item.topic}
                </h4>
                <blockquote
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--text-secondary)", fontStyle: "italic" }}
                >
                  {item.quote}
                </blockquote>
                <p
                  className="text-xs font-mono"
                  style={{ color: "var(--text-muted)", opacity: 0.85 }}
                >
                  {item.attribution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ────── Footer ────── */}
      <footer className="footer-gradient py-10">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 xl:px-8 2xl:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold gradient-text">Janmejaya Das</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Senior Software Engineer
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText("janmejaya.das1@gmail.com");
                  const btn = e.currentTarget;
                  btn.textContent = "✓ Copied!";
                  setTimeout(() => { btn.textContent = "janmejaya.das1@gmail.com"; }, 1500);
                }}
                className="text-sm transition-colors cursor-pointer"
                style={{ color: "var(--text-muted)", background: "none", border: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                janmejaya.das1@gmail.com
              </button>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-all duration-300 flex items-center gap-1.5"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0A66C2"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div
            className="mt-6 text-center text-xs"
            style={{ color: "var(--text-muted)", opacity: 0.6 }}
          >
            © {new Date().getFullYear()} Janmejaya Das
          </div>
        </div>
      </footer>

      <FloatingShareButton />
    </div>
  );
}
