"use client";

import { useState } from "react";
import FloatingShareButton from "@/components/FloatingShareButton";

/* ─── Data ─── */

const SKILLS = {
  languages: {
    label: "Languages",
    color: "" as const,
    items: [
      "Java",
      "C# (.NET)",
      "Python",
      "JavaScript / TypeScript",
      "SQL",
      "KQL",
      "PHP",
    ],
  },
  cloud: {
    label: "Cloud Infrastructure",
    color: "purple" as const,
    items: [
      "Azure Cosmos DB",
      "Azure Redis",
      "Azure Storage",
      "Service Fabric",
      "Azure ML",
      "AI Foundry",
      "AWS DynamoDB",
      "AWS SQS",
      "AWS Lambda",
      "AWS S3",
      "Google Cloud Storage",
      "Microsoft Substrate",
      "IaC",
    ],
  },
  architecture: {
    label: "Architecture & Tools",
    color: "green" as const,
    items: [
      "Kubernetes",
      "Docker",
      "Kafka",
      "Spring Boot",
      "React",
      "Jenkins",
      "Grafana",
    ],
  },
  ai: {
    label: "AI & Concepts",
    color: "cyan" as const,
    items: [
      "LLM Integration",
      "Semantic Search",
      "High Availability",
      "Quality of Service",
      "Distributed Systems Design",
      "Observability",
      "Engineering Leadership",
    ],
  },
};

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
] as const;

/* ─── Component ─── */

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("experience");

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* ────── Header ────── */}
      <header className="header-gradient border-b" style={{ borderColor: "var(--glass-border)" }}>
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-5">
              {/* Gradient avatar ring */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-18 h-18 md:w-22 md:h-22 rounded-full p-[2px] overflow-hidden"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/avatar.jpg"
                      alt="Janmejaya Das"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 8%" }}
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
                  className="text-2xl md:text-3xl font-bold gradient-text leading-tight"
                >
                  Janmejaya Das
                </h1>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <h2
                    className="text-sm md:text-base font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Software Engineer
                  </h2>
                  <span className="whisper-badge hidden sm:inline-block" title="Open to Staff / Principal roles">
                    · staff / principal
                  </span>
                </div>
                <p
                  className="mt-2 text-xs md:text-sm max-w-xl leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  13+ years driving backend architecture, cloud migrations, AI/LLM integration &amp; engineering leadership at scale
                </p>
              </div>
            </div>

            {/* Right: CTA links */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="/JanmejayaDas-2026.pdf"
                download
                className="px-4 py-2 text-xs font-semibold rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--gradient-primary)",
                  color: "#0b0f1a",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                ↓&ensp;Resume PDF
              </a>
              <a
                href="mailto:janmejaya.das1@gmail.com"
                className="glass-card px-4 py-2 text-xs font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                ✉&ensp;Email
              </a>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-4 py-2 text-xs font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                in&ensp;LinkedIn
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
              <a
                href="mailto:janmejaya.das1@gmail.com"
                className="glass-card w-9 h-9 flex items-center justify-center text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                ✉
              </a>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card w-9 h-9 flex items-center justify-center"
                style={{ color: "var(--text-secondary)" }}
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
      <main className="max-w-5xl mx-auto px-4 py-12">
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

          <div className="relative mt-8 pl-12 space-y-10">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* ── Microsoft People Skills ── */}
            <article className="relative animate-fade-in-up stagger-1">
              <div className="timeline-dot current" />
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
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
                <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-cyan)" }}>▸</span>
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Architectural Scalability &amp; Migration:</strong>{" "}
                      Led the scalability architecture for vast-scale user-side features post-General Availability. Architected and executed the critical migration from Microsoft Substrate to native Azure infrastructure, modernizing the stack and reducing operational overhead.
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
                      Acted as the technical and operational anchor for an 18-person IDC organization during a critical leadership transition. Directly mentored 5 engineers while monitoring 10 others, maintaining team velocity and morale.
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
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
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
                <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Engineered the service modernization for 50+ microservices in Intune, driving the transformation of Stateful services into a robust Stateless architecture.</span>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-blue)" }}>▸</span>
                    <span>Refactored 20+ components across multiple microservices to shift the storage layer from in-memory to persistent framework, freeing up over 300 TB of memory.</span>
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
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
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
                <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <li className="flex gap-2">
                    <span style={{ color: "var(--accent-purple)" }}>▸</span>
                    <span>Architected and executed the decoupling of a monolithic registration web service into modular components — UI, backend microservices, AWS Lambda, and SQS — improving scalability and maintainability.</span>
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
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
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
                <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
              <div className="glass-card p-6">
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([key, category]) => (
              <div key={key} className="glass-card p-6 animate-fade-in-up">
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
                            : "var(--accent-blue)",
                  }}
                >
                  {category.label}
                </h3>
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
            <div className="glass-card p-6 animate-fade-in-up stagger-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
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
            </div>

            <div className="glass-card p-6 animate-fade-in-up stagger-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    Bachelor of Technology in IT
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
                title: "Cross-Team Impact",
                text: "Recognized across multiple teams and services for leading large-scale migrations and driving service modernization with impactful technical expertise.",
              },
              {
                title: "Microsoft Recognition",
                text: "Delivered critical components and resolved complex issues, earning recognition from senior Microsoft colleagues.",
              },
              {
                title: "Documentation Excellence",
                text: "Received accolades for creating onboarding documents that enabled faster, smoother integration with fewer mistakes, and for assisting team members and others in resolving unknown issues.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`glass-card p-6 animate-fade-in-up stagger-${i + 1}`}
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
        </section>
      </main>

      {/* ────── Footer ────── */}
      <footer className="footer-gradient py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold gradient-text">Janmejaya Das</h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Senior Software Engineer
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:janmejaya.das1@gmail.com"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                janmejaya.das1@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/janmejaya-das"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
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
