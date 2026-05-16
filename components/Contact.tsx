"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Github, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

const FORMSPREE_ID = "xkoewopo";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

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

  const contactLinks = [
    { icon: <Mail size={18} />, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <Github size={18} />, label: "GitHub", value: siteConfig.github.replace("https://", ""), href: siteConfig.github },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: siteConfig.linkedin.replace("https://", ""), href: siteConfig.linkedin },
  ];

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "120px 24px", background: "#0a0a0a", borderTop: "1px solid #111" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <span className="section-label reveal">Contact</span>
        <h2 className="section-title reveal reveal-d1">Let&apos;s work together</h2>
        <p className="section-sub reveal reveal-d2">
          I&apos;m actively looking for junior developer, cloud, and IT roles — and always open to interesting projects. Reach out and let&apos;s talk.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginTop: "56px" }} className="contact-grid">
          <div>
            {contactLinks.map((item, i) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={`reveal reveal-d${i + 1} contact-row`} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 0", borderBottom: "1px solid var(--border)", transition: "border-color 0.2s" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(132,78,238,0.08)", border: "1px solid rgba(132,78,238,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--purple)" }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</p>
                  <p style={{ color: "var(--text)", fontSize: "0.9rem", fontWeight: 500, marginTop: "2px" }}>{item.value}</p>
                </div>
              </a>
            ))}
            <p className="reveal reveal-d4" style={{ color: "var(--muted2)", fontSize: "0.85rem", marginTop: "28px", display: "flex", alignItems: "center", gap: "6px" }}>
              <MapPin size={14} style={{ color: "var(--purple)" }} />
              {siteConfig.location} — open to remote &amp; hybrid roles
            </p>
          </div>

          <div className="reveal reveal-d2">
            {state.succeeded ? (
              <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "12px", padding: "40px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e" }}>
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 style={{ color: "var(--text)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>Message sent!</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>Thanks for reaching out. I&apos;ll get back to you within a day or two.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <label htmlFor="name" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted2)" }}>Name</label>
                    <input id="name" name="name" type="text" placeholder="Jane Smith" required className="form-input" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="form-error" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <label htmlFor="email" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted2)" }}>Email</label>
                    <input id="email" name="email" type="email" placeholder="jane@company.com" required className="form-input" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <label htmlFor="subject" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted2)" }}>Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="Job opportunity / Project idea / Just saying hi" className="form-input" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <label htmlFor="message" style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--muted2)" }}>Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about the role, project, or whatever's on your mind..." required className="form-input" style={{ resize: "vertical", minHeight: "130px" }} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
                </div>
                <button type="submit" disabled={state.submitting} style={{ background: state.submitting ? "#444" : "var(--purple)", color: "#fff", border: "none", padding: "14px 28px", borderRadius: "9px", fontWeight: 700, fontSize: "0.9rem", fontFamily: "inherit", cursor: state.submitting ? "wait" : "pointer", transition: "all 0.2s", width: "100%" }}>
                  {state.submitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}