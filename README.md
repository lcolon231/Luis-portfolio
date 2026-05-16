# Luis Alberto Colón — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://vercel.com)

My personal portfolio site — a modern, dark-mode, fully responsive showcase of projects, skills, and experience built with the latest web stack.

🔗 **Live site:** [luis-portfolio.vercel.app](https://luis-portfolio.vercel.app)

---

## About

I'm a software developer and IT professional finishing my Master's in Information Technology at the University of West Florida. I founded [NodeLink Technologies LLC](https://nodelinktechnologies.com), an MSP serving small businesses and medical offices in the Tampa Bay area.

This site is both a portfolio and a working example of how I build things: practical, well-structured, and shipped end-to-end.

---

## Features

- 🎨 Modern dark-mode design with purple accent and smooth scroll animations
- 📱 Fully responsive across mobile, tablet, and desktop
- ⚡ Static-generated for fast load times (~113 KB first load JS)
- 📬 Working contact form via Formspree
- 🔍 SEO-optimized with sitemap, robots.txt, and OpenGraph metadata
- ♿ Semantic HTML and keyboard-navigable
- 🧹 Single-file content management — edit everything from `lib/data.ts`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| Icons | Lucide React |
| Forms | @formspree/react |
| Hosting | Vercel |
| CI/CD | Auto-deploy via GitHub integration |

---

## Featured Projects

### 🔒 NodeLink SMB Security Posture Scanner
A web-based security audit tool that scans company domains for external vulnerabilities (SPF/DKIM/DMARC, SSL/TLS, exposed ports, DNS hygiene) and generates a branded PDF report.
**Stack:** Next.js, TypeScript, Node.js, DNS lookups, PDF generation

### ⛓️ Blockchain Audit Log for SMB Security Compliance
A blockchain-based audit logging system that gives small businesses an immutable, tamper-evident record of security events — designed to help SMBs meet HIPAA / SOC 2 compliance without enterprise SIEM costs.
**Stack:** Solidity, Hardhat, MetaMask, Alchemy

*(See the [Projects section](https://luis-portfolio.vercel.app/#projects) of the site for the full list.)*

---

## Getting Started Locally

```bash
# Clone
git clone https://github.com/yourusername/luis-portfolio.git
cd luis-portfolio

# Install
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
luis-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Page composition
│   ├── globals.css       # Styles + CSS variables
│   ├── sitemap.ts        # Auto-generated sitemap.xml
│   └── robots.ts         # Auto-generated robots.txt
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── lib/
│   └── data.ts           # All site content
│
└── public/
    └── resume.pdf
```

---

## Customizing Content

Everything is in **`lib/data.ts`** — projects, skills, experience, education, and contact info. No hunting through components.

---

## Build & Deploy

```bash
# Production build (verify before pushing)
npm run build

# Start production server locally
npm run start
```

Connected to Vercel via GitHub — every push to `main` auto-deploys.

---

## Contact

- **Email:** [luis@nodelinktechnologies.com](mailto:luis@nodelinktechnologies.com)
- **LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **Location:** Tampa, Florida

Open to junior software developer, cloud, and cybersecurity roles. Reach out via the form on the site or directly by email.

---

## License

Personal portfolio — feel free to use the structure as inspiration, but please don't copy content directly. ✌️
