import type { Metadata } from "next"
import Link from "next/link"
import { site, mailHref } from "../../lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects personal data under UK GDPR and the Data Protection Act 2018.`,
  alternates: { canonical: "/privacy" }
}

export default function PrivacyPage() {
  return (
    <main className="container py-16 max-w-3xl prose prose-slate">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> 16 May 2026
      </p>
      <p>
        {site.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
        your personal data. This policy explains how we collect, use, and safeguard
        information you provide when you visit{" "}
        <Link href="/">{site.url}</Link> or request our cleaning services. It is
        written to comply with the UK General Data Protection Regulation (UK GDPR)
        and the Data Protection Act 2018.
      </p>

      <h2>1. Who we are</h2>
      <p>
        The data controller is {site.legalName}, a company registered in England
        and Wales. You can contact us at{" "}
        <a href={mailHref}>{site.email}</a> or {site.phoneDisplay}.
      </p>

      <h2>2. What data we collect</h2>
      <ul>
        <li>Identity and contact data: name, phone number, email, property address.</li>
        <li>
          Service data: the service you request, preferred dates, and any notes
          you share about the property.
        </li>
        <li>
          Technical data: IP address, browser type, and basic device information
          collected by our hosting provider and form processor for security and
          analytics.
        </li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To prepare and send you a quote.</li>
        <li>To schedule and deliver the cleaning service you book.</li>
        <li>To send service-related communications (confirmations, reminders).</li>
        <li>To comply with legal, tax, and accounting obligations.</li>
      </ul>

      <h2>4. Legal basis</h2>
      <p>
        We rely on (a) your <em>consent</em> when you submit a quote form, (b)
        <em> performance of a contract</em> when we carry out a booked service,
        and (c) our <em>legitimate interests</em> in running and improving the
        business. You can withdraw consent at any time.
      </p>

      <h2>5. Sharing your data</h2>
      <p>
        We share data only with processors who help us run the website and
        service:
      </p>
      <ul>
        <li>
          <strong>Formspree</strong> — processes quote form submissions on our behalf.
        </li>
        <li>
          <strong>Vercel</strong> — hosts the website and serverless functions.
        </li>
      </ul>
      <p>
        We do not sell your personal data. We may disclose data if required by
        law, court order, or to protect our rights.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Some of our processors store data outside the UK. Where this happens, we
        rely on UK-approved safeguards such as the UK International Data Transfer
        Agreement or adequacy decisions.
      </p>

      <h2>7. How long we keep data</h2>
      <p>
        Quote enquiries are kept for up to 24 months. Records of completed jobs
        are kept for 6 years to meet tax and accounting requirements.
      </p>

      <h2>8. Your rights</h2>
      <p>Under UK GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request erasure where there is no legitimate reason to retain it.</li>
        <li>Object to or restrict processing.</li>
        <li>Request data portability.</li>
        <li>Withdraw consent at any time.</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href={mailHref}>{site.email}</a>.
      </p>

      <h2>9. Complaints</h2>
      <p>
        You have the right to lodge a complaint with the UK Information
        Commissioner&apos;s Office (ICO) at{" "}
        <a
          href="https://ico.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico.org.uk
        </a>
        .
      </p>

      <h2>10. Cookies</h2>
      <p>
        For details on the cookies we use, see our{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &quot;Last updated&quot;
        date at the top reflects the latest revision.
      </p>
    </main>
  )
}
