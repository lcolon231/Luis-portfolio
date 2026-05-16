# Luis Alberto Colón — Portfolio

Personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
luis-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Page — assembles sections
│   ├── globals.css       # Global styles + CSS variables
│   ├── sitemap.ts        # Auto-generated sitemap.xml
│   └── robots.ts         # Auto-generated robots.txt
│
├── components/           # All section components
├── lib/
│   └── data.ts           # ← All content lives here
└── public/
    ├── resume.pdf        # ← Your resume
    └── favicon.ico       # ← Your favicon
```

---

## Editing Content

**All content lives in `lib/data.ts`.** Update that single file to change projects, skills, experience, education, or contact info.

---

## Production Checklist

Before going live, make sure:

- [ ] `lib/data.ts` — replaced all `yourusername` placeholders with real handles
- [ ] `public/resume.pdf` — your actual resume is in the `public/` folder
- [ ] `public/favicon.ico` — your favicon is in `public/` (use [favicon.io](https://favicon.io) to generate one)
- [ ] `app/layout.tsx` — update `siteUrl` to your real domain after Vercel assigns one
- [ ] `app/sitemap.ts` and `app/robots.ts` — same domain update
- [ ] Contact form — set up Formspree (see below) or leave it falling back to mailto

---

## Working Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) (free, no backend needed).

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL (looks like `https://formspree.io/f/xyzabc123`)
3. Locally: copy `.env.example` to `.env.local` and paste the endpoint
4. On Vercel: add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` as an environment variable in project settings

Without Formspree configured, the form falls back to opening the user's email client with prefilled content — still functional, just less polished.

---

## Deploying to Vercel

### Option A — Connect GitHub (recommended)

1. Push your code to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → click **Add New → Project**
3. Import your repo → Vercel auto-detects Next.js
4. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under Environment Variables (optional)
5. Click **Deploy** — done in ~60 seconds

Every push to `main` auto-deploys.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts.

### Custom Domain

1. Buy a domain (Namecheap, Cloudflare, etc.)
2. In your Vercel project: **Settings → Domains → Add**
3. Update DNS records as Vercel instructs
4. Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
5. Push the change

---

## Verifying Build Before Deploy

```bash
npm run build
npm run start
```

If `npm run build` completes without errors, Vercel will deploy successfully.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS modules
- **Icons:** Lucide React
- **Hosting:** Vercel
- **Form Handling:** Formspree (or mailto fallback)
