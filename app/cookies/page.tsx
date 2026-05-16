import type { Metadata } from "next"
import Link from "next/link"
import { site, mailHref } from "../../lib/site"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar technologies on its website.`,
  alternates: { canonical: "/cookies" }
}

export default function CookiesPage() {
  return (
    <main className="container py-16 max-w-3xl prose prose-slate">
      <h1>Cookie Policy</h1>
      <p>
        <strong>Last updated:</strong> 16 May 2026
      </p>
      <p>
        This Cookie Policy explains how {site.legalName} uses cookies and
        similar technologies on {site.url}. It should be read alongside our{" "}
        <Link href="/privacy">Privacy Policy</Link>. It reflects the requirements
        of the Privacy and Electronic Communications Regulations (PECR) and the
        UK GDPR.
      </p>

      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They are widely used to make websites work, improve performance,
        and provide information to site owners.
      </p>

      <h2>2. Cookies we use</h2>
      <p>
        We aim to keep cookie use to a minimum. We do not run advertising or
        third-party analytics on this site at this time.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential session cookies</td>
            <td>Vercel (host)</td>
            <td>
              Required for the site to load, route requests, and protect against
              abuse.
            </td>
            <td>Session</td>
          </tr>
          <tr>
            <td>Form submission cookies</td>
            <td>Formspree</td>
            <td>
              Set only when you submit the quote form, to prevent spam and abuse.
            </td>
            <td>Up to 30 days</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Managing cookies</h2>
      <p>
        Most browsers let you block or delete cookies via their settings. Please
        note that blocking essential cookies may prevent the site from working
        correctly.
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-gb/microsoft-edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>4. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        reflected on this page with a new &quot;Last updated&quot; date.
      </p>

      <h2>5. Contact</h2>
      <p>
        Questions about cookies? Email{" "}
        <a href={mailHref}>{site.email}</a>.
      </p>
    </main>
  )
}
