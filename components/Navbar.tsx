"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          transition: "background 0.3s, border-color 0.3s",
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          Luis<span style={{ color: "var(--purple)" }}>.</span>dev
        </a>

        <nav
          style={{ display: "flex", alignItems: "center", gap: "32px" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                fontWeight: 500,
                position: "relative",
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--purple)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "7px",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--purple-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--purple)")
            }
          >
            Resume
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--muted2)",
            cursor: "pointer",
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "13px 0",
                borderBottom: "1px solid var(--border)",
                color: "var(--muted2)",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "var(--purple)",
              color: "#fff",
              padding: "11px 22px",
              borderRadius: "8px",
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
