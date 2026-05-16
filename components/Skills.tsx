"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/lib/data";

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      style={{
        padding: "120px 24px",
        background: "#0a0a0a",
        borderTop: "1px solid #111",
        borderBottom: "1px solid #111",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div style={{ marginBottom: "52px" }}>
          <span className="section-label reveal">Technical Skills</span>
          <h2 className="section-title reveal reveal-d1">What I work with</h2>
          <p className="section-sub reveal reveal-d2">
            A full-stack skill set spanning development, cloud, networking, and security — built
            through coursework, personal projects, and running a real IT business.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "16px",
        }}>
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal reveal-d${Math.min(i + 1, 5)} skill-card`}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "12px", padding: "22px",
                transition: "border-color 0.25s, transform 0.25s",
              }}
            >
              <p style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em",
                textTransform: "uppercase", color: "var(--purple)", marginBottom: "14px",
              }}>
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
