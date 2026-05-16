"use client";

import { useEffect, useRef } from "react";
import { Code2, Shield, Monitor, Server } from "lucide-react";

const pillars = [
  {
    icon: <Code2 size={18} />,
    title: "Software Development",
    desc: "Full-stack apps with Next.js, TypeScript, FastAPI, and REST APIs — focused on practical, deployable products.",
  },
  {
    icon: <Shield size={18} />,
    title: "Cybersecurity",
    desc: "DNS hardening, email authentication (SPF/DKIM/DMARC), endpoint protection, and external vulnerability scanning.",
  },
  {
    icon: <Monitor size={18} />,
    title: "Cloud Infrastructure",
    desc: "AWS hands-on: VPC design, IAM policies, EC2 with Auto Scaling, CloudWatch monitoring, and RDS deployments.",
  },
  {
    icon: <Server size={18} />,
    title: "Networking & IT",
    desc: "VLANs, firewall rules, DNS/DHCP, VPNs — deployed on real hardware including Ubiquiti environments.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: "120px 24px", background: "var(--bg)" }}
    >
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "80px", alignItems: "start",
        maxWidth: "1160px", margin: "0 auto",
      }} className="about-grid">

        {/* Copy */}
        <div>
          <span className="section-label reveal">About</span>
          <h2 className="section-title reveal reveal-d1" style={{ marginBottom: "28px" }}>
            Developer first.<br />
            <span style={{ color: "#333" }}>IT operator second.</span>
          </h2>
          <p className="reveal reveal-d2" style={{ color: "#5c5c5c", fontSize: "0.975rem", lineHeight: 1.85, marginBottom: "18px" }}>
            I&apos;m <strong style={{ color: "#888", fontWeight: 600 }}>Luis Alberto Colón</strong> — a software developer
            and IT professional finishing my Master&apos;s in Information Technology at the University of West Florida.
            I write code that solves real problems, and I understand the infrastructure it runs on.
          </p>
          <p className="reveal reveal-d3" style={{ color: "#5c5c5c", fontSize: "0.975rem", lineHeight: 1.85, marginBottom: "18px" }}>
            Through founding{" "}
            <span style={{ color: "var(--purple-light)", fontWeight: 600 }}>NodeLink Technologies LLC</span>,
            I&apos;ve designed IT support systems, built MSP workflows from scratch, and developed tools that
            real businesses depend on — giving me the kind of production experience most junior developers
            don&apos;t have until year three on the job.
          </p>
          <p className="reveal reveal-d4" style={{ color: "#5c5c5c", fontSize: "0.975rem", lineHeight: 1.85 }}>
            My edge: I can ship full-stack features{" "}
            <span style={{ color: "var(--muted2)", fontStyle: "italic" }}>and</span>{" "}
            reason about cloud architecture, network security, and system constraints.
            I don&apos;t need to be walked through how production environments work — I&apos;ve built and maintained them.
          </p>
        </div>

        {/* Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-d${i + 1} pillar-card`}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "12px", padding: "20px",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "rgba(132,78,238,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--purple)", marginBottom: "12px",
              }}>
                {p.icon}
              </div>
              <h3 style={{ color: "var(--text)", fontSize: "0.85rem", fontWeight: 700, marginBottom: "7px" }}>{p.title}</h3>
              <p style={{ color: "#505050", fontSize: "0.78rem", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
