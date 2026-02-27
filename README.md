# Joetee Optimal Limited — Cleaning Services Website

A responsive, professional website for Joetee Optimal Limited built with Next.js 14, TypeScript, and Tailwind CSS. It features conversion‑focused pages, a blog, and a lead capture quote form powered by Formspree. Designed to be low‑maintenance: no database and deployable on Vercel free tier.

## Features
- Responsive layout with accessible UI
- Pages: Home, Services, Our Work, About, Blogs, Contact
- Blog articles with clean headings, paragraphs, and CTA to the quote form
- Lead capture without a backend using Formspree
- Optional SMTP serverless route (disabled by default)
- Simple branding with editable SVG logo

## Tech Stack
- Next.js 14 App Router, TypeScript
- Tailwind CSS
- Formspree for form handling (no database)
- Vercel for hosting

## Local Development
Prerequisites: Node 18+ and npm.

```bash
npm install
npm run dev
# open http://localhost:3000/
```

### Environment Variables (local)
Create `.env.local` at the project root:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```
Replace the URL with your Formspree endpoint. Do not commit `.env.local` to Git.

## Project Structure
- App layout and global styles: [app/layout.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/layout.tsx), [app/globals.css](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/globals.css)
- Navbar and footer: [components/Navbar.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/components/Navbar.tsx), [components/Footer.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/components/Footer.tsx)
- Quote form (Formspree submit): [components/QuoteForm.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/components/QuoteForm.tsx)
- Blog posts data: [app/blogs/posts.ts](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/blogs/posts.ts)
- Blog listing and article page: [app/blogs/page.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/blogs/page.tsx), [app/blogs/[slug]/page.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/blogs/%5Bslug%5D/page.tsx)
- SMTP route (disabled): [app/api/quote/route.ts](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/api/quote/route.ts)
- Logo: [public/logo.svg](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/public/logo.svg)

## Deployment to Vercel
1. Push the repository to GitHub.
2. In Vercel, create a New Project and import the repo.
3. Add the environment variable:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
   - Add to Production (and Preview if you use previews).
4. Deploy and test the live URL by submitting the quote form.

## Customization
- Update phone, email, hours, and CTA targets in [components/Footer.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/components/Footer.tsx), [components/Navbar.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/components/Navbar.tsx), and [app/contact/page.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/contact/page.tsx).
- Edit services copy and hero content in [app/page.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/page.tsx) and [app/services/page.tsx](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/services/page.tsx).
- Replace the logo in [public/logo.svg](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/public/logo.svg).
- Add or revise blog content in [app/blogs/posts.ts](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/blogs/posts.ts).

## SMTP (Optional)
If you prefer email‑only serverless (instead of Formspree):
- Set these on Vercel:
  - `BREVO_SMTP_USER`, `BREVO_SMTP_PASS`, `LEADS_FROM_EMAIL`, `LEADS_TO_EMAIL`
- Verify SPF/DKIM/DMARC in your DNS for the sender domain.
- Re‑enable the SMTP logic inside [app/api/quote/route.ts](file:///c:/Users/energ/Documents/trae_projects/JoeeteeOptimalLtd/app/api/quote/route.ts). The current route is intentionally stubbed to avoid build issues when SMTP is not configured.

## Notes
- `.gitignore` excludes `node_modules`, build outputs, and env files.
- Node 18+ recommended for compatibility with Next.js 14.

## License
Copyright © 2026 Joetee Optimal Limited. All rights reserved.
