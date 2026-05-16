"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "100px 24px 60px",
      }}
    >
      {/* Purple radial glow */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(132,78,238,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>

        {/* Availability badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(132,78,238,0.08)",
          border: "1px solid rgba(132,78,238,0.22)",
          borderRadius: "100px", padding: "6px 16px",
          marginBottom: "36px",
          animation: "fadeIn 0.5s ease both",
        }}>
          <span style={{
            width: "6px", height: "6px", background: "#22c55e",
            borderRadius: "50%",
            boxShadow: "0 0 0 3px rgba(34,197,94,0.18)",
            animation: "pulseDot 2.5s ease-in-out infinite",
          }} />
          <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--purple-light)", letterSpacing: "0.06em" }}>
            Open to Junior Developer &amp; IT Roles
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 5.5rem)",
          fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1,
          marginBottom: "12px",
          animation: "fadeUp 0.6s ease 0.1s both",
        }}>
          Hi, I&apos;m{" "}
          <span style={{
            background: "linear-gradient(130deg, var(--purple) 0%, var(--purple-light) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Luis
          </span>.
        </h1>

        {/* Role */}
        <p style={{
          fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
          fontWeight: 700, letterSpacing: "-0.025em",
          color: "#555", marginBottom: "28px",
          animation: "fadeUp 0.6s ease 0.2s both",
        }}>
          {siteConfig.role}
        </p>

        {/* Subheading */}
        <p style={{
          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          color: "#5a5a5a", lineHeight: 1.8,
          maxWidth: "580px", margin: "0 auto 44px",
          animation: "fadeUp 0.6s ease 0.3s both",
        }}>
          I build practical software for security, automation, and cloud infrastructure —
          combining full-stack development with real-world experience running IT systems
          for businesses. Currently finishing my MSIT and looking for my next challenge.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "52px",
          animation: "fadeUp 0.6s ease 0.4s both",
        }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
          <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Download Resume ↗
          </a>
        </div>

        {/* Socials */}
        <div style={{
          display: "flex", gap: "24px", justifyContent: "center",
          animation: "fadeUp 0.6s ease 0.5s both",
        }}>
          {[
            { icon: <Github size={17} />, href: siteConfig.github, label: "GitHub" },
            { icon: <Linkedin size={17} />, href: siteConfig.linkedin, label: "LinkedIn" },
            { icon: <Mail size={17} />, href: `mailto:${siteConfig.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ display: "flex", alignItems: "center", gap: "7px", color: "#3a3a3a", fontSize: "0.85rem", fontWeight: 500 }}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        style={{
          position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
          color: "#2a2a2a", transition: "color 0.2s",
        }}
        className="scroll-hint"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>

    </section>
  );
}
