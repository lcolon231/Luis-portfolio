import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const links = [
    { icon: <Github size={15} />, href: siteConfig.github, label: "GitHub" },
    { icon: <Linkedin size={15} />, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: <Mail size={15} />, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 24px" }}>
      <div style={{
        maxWidth: "1160px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "20px",
      }}>
        <p style={{ color: "#333", fontSize: "0.82rem" }}>
          Built by <span style={{ color: "var(--purple)" }}>{siteConfig.name}</span>
          &nbsp;·&nbsp; {siteConfig.location} &nbsp;·&nbsp; 2025
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="footer-link"
              style={{ display: "flex", alignItems: "center", gap: "6px", color: "#333", fontSize: "0.82rem", transition: "color 0.2s" }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
