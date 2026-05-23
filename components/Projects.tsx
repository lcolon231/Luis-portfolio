"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "120px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: "16px",
          marginBottom: "52px",
        }}>
          <div>
            <span className="section-label reveal">Projects</span>
            <h2 className="section-title reveal reveal-d1">Things I&apos;ve built</h2>
          </div>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-d2"
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--muted)", fontSize: "0.85rem", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <Github size={15} />
            View all on GitHub ↗
          </a>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((project, i) => (
            <div
              key={project.number}
              className={`reveal reveal-d${Math.min(i + 1, 5)} project-card ${project.featured ? "featured" : ""}`}
              style={{
                background: project.featured ? "rgba(132,78,238,0.04)" : "var(--surface)",
                border: project.featured ? "1px solid rgba(132,78,238,0.18)" : "1px solid var(--border)",
                borderRadius: "16px",
                padding: "32px 36px",
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                gap: "28px",
                alignItems: "start",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              {/* Number */}
              <span style={{
                fontSize: "2.2rem", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1,
                color: project.featured ? "rgba(132,78,238,0.35)" : "#1e1e1e",
                fontVariantNumeric: "tabular-nums",
              }}>
                {project.number}
              </span>

              {/* Content */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "5px" }}>
                  <span style={{ color: "var(--text)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
                    {project.title}
                  </span>
                  {project.featured && (
                    <span style={{
                      background: "rgba(132,78,238,0.12)", border: "1px solid rgba(132,78,238,0.25)",
                      color: "var(--purple-light)", fontSize: "0.6rem", fontWeight: 800,
                      padding: "3px 9px", borderRadius: "100px", letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <p style={{ color: "var(--purple)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "12px" }}>
                  {project.tagline}
                </p>
                <p style={{ color: "#555", fontSize: "0.88rem", lineHeight: 1.78, marginBottom: "18px", maxWidth: "680px" }}>
                  {project.description}
                </p>

                {project.keyFeatures && (
                  <div style={{ marginBottom: "18px" }}>
                    <p style={{ color: "var(--text)", fontSize: "0.75rem", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Key Features</p>
                    <ul style={{ paddingLeft: "18px", margin: 0 }}>
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} style={{ color: "#666", fontSize: "0.82rem", marginBottom: "4px", lineHeight: 1.5 }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      background: "#131313", border: "1px solid var(--border)",
                      color: "#616161", fontSize: "0.72rem", fontWeight: 600,
                      padding: "4px 10px", borderRadius: "4px", fontFamily: "monospace",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <Github size={15} /> GitHub
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
