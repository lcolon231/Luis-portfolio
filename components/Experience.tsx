"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background: "#0a0a0a",
        borderTop: "1px solid #111",
        borderBottom: "1px solid #111",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <span className="section-label reveal">Experience</span>
        <h2 className="section-title reveal reveal-d1">Where I&apos;ve worked</h2>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "72px", marginTop: "56px" }} className="exp-grid">

          {/* Sidebar */}
          <div className="exp-sidebar reveal">
            <p style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: "4px" }}>
              {experience.company}
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.8rem", fontWeight: 500, marginBottom: "20px" }}>
              {experience.location}
            </p>
            <span style={{
              display: "inline-block",
              background: "rgba(132,78,238,0.1)", border: "1px solid rgba(132,78,238,0.22)",
              color: "var(--purple-light)", fontSize: "0.72rem", fontWeight: 700,
              padding: "4px 12px", borderRadius: "100px", letterSpacing: "0.06em",
              textTransform: "uppercase", marginBottom: "16px",
            }}>
              Founder
            </span>
            <p style={{ color: "#3a3a3a", fontSize: "0.78rem", fontWeight: 500 }}>{experience.period}</p>
          </div>

          {/* Detail */}
          <div>
            <h3 className="reveal reveal-d1" style={{ color: "var(--text)", fontSize: "1.4rem", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "20px" }}>
              {experience.role}
            </h3>
            <p className="reveal reveal-d2" style={{ color: "#575757", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "28px" }}>
              {experience.summary}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className={`reveal reveal-d${Math.min(i + 2, 5)}`}
                  style={{ display: "flex", gap: "12px", color: "#575757", fontSize: "0.88rem", lineHeight: 1.7 }}
                >
                  <span style={{
                    display: "block", flexShrink: 0,
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: "var(--purple)", marginTop: "9px",
                  }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
