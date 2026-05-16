"use client";

import { useEffect, useRef } from "react";
import { education } from "@/lib/data";

export default function Education() {
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
      id="education"
      ref={sectionRef}
      style={{ padding: "120px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <span className="section-label reveal">Education</span>
        <h2 className="section-title reveal reveal-d1">Academic background</h2>

        <div
          className="reveal reveal-d2"
          style={{
            marginTop: "52px",
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "16px", padding: "40px 40px 40px 44px",
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            gap: "40px", flexWrap: "wrap",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Purple left border accent */}
          <div style={{
            position: "absolute", top: 0, left: 0, width: "4px", height: "100%",
            background: "linear-gradient(to bottom, var(--purple), var(--purple-light))",
          }} />

          <div>
            <p style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: "6px" }}>
              {education.degree}
            </p>
            <p style={{ color: "var(--purple-light)", fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>
              {education.school}
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{education.detail}</p>

            {/* Courses */}
            <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
                Relevant Coursework
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {education.courses.map((course) => (
                  <span
                    key={course}
                    style={{
                      background: "var(--surface2)", border: "1px solid var(--border2)",
                      color: "#666", fontSize: "0.78rem", padding: "5px 12px", borderRadius: "5px",
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <span style={{
            background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
            color: "#22c55e", fontSize: "0.72rem", fontWeight: 700,
            padding: "6px 14px", borderRadius: "100px", letterSpacing: "0.08em",
            textTransform: "uppercase", whiteSpace: "nowrap",
          }}>
            {education.status}
          </span>
        </div>
      </div>
    </section>
  );
}
