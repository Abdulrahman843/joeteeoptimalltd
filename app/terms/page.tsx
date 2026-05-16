import type { Metadata } from "next"
import { site, mailHref } from "../../lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms governing cleaning services provided by ${site.name} to customers in the United Kingdom.`,
  alternates: { canonical: "/terms" }
}

export default function TermsPage() {
  return (
    <main className="container py-16 max-w-3xl prose prose-slate">
      <h1>Terms &amp; Conditions</h1>
      <p>
        <strong>Last updated:</strong> 16 May 2026
      </p>
      <p>
        These terms govern the cleaning services provided by {site.legalName}
        (&quot;we&quot;, &quot;us&quot;) to you (&quot;the customer&quot;). By booking a service you
        agree to these terms. They are governed by the laws of England and Wales.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide residential and commercial cleaning across the UK, including
        end of tenancy, deep cleaning, move-in/move-out, after-builders, Airbnb
        turnovers, janitorial, and regular maintenance. The scope of any
        particular job is agreed in writing (email, message, or signed quote)
        before work begins.
      </p>

      <h2>2. Quotes and pricing</h2>
      <ul>
        <li>
          Quotes are based on the information you provide. If the property
          condition or size materially differs on arrival, we may revise the
          price after notifying you.
        </li>
        <li>
          Prices are in GBP and inclusive of VAT where applicable.
        </li>
        <li>
          Recurring services may be paused or cancelled with at least 48 hours&apos;
          written notice.
        </li>
      </ul>

      <h2>3. Bookings</h2>
      <p>
        A booking is confirmed once we send a written confirmation. Access to the
        property at the agreed time is the customer&apos;s responsibility. If we
        cannot access the property within 30 minutes of the start time, a
        call-out fee may apply.
      </p>

      <h2>4. Payment</h2>
      <p>
        Payment terms are agreed at the time of booking. For end of tenancy and
        one-off cleans, payment is due on completion unless otherwise agreed.
        Late payments may incur interest at the statutory rate under the Late
        Payment of Commercial Debts (Interest) Act 1998.
      </p>

      <h2>5. Cancellation and rescheduling</h2>
      <ul>
        <li>Free cancellation more than 48 hours before the scheduled start.</li>
        <li>Within 24–48 hours: 50% of the quoted price.</li>
        <li>Within 24 hours or on the day: 100% of the quoted price.</li>
      </ul>

      <h2>6. Satisfaction guarantee</h2>
      <p>
        If you are not satisfied with the work, you must notify us within 48
        hours of completion. We will return to address the issue at no extra
        cost. The guarantee does not cover damage caused by pre-existing
        conditions or by parties not employed by us.
      </p>

      <h2>7. Our responsibilities</h2>
      <ul>
        <li>We will carry out the agreed scope with reasonable care and skill.</li>
        <li>Our cleaners are vetted, trained, and supervised.</li>
        <li>We carry public liability insurance.</li>
      </ul>

      <h2>8. Your responsibilities</h2>
      <ul>
        <li>Provide accurate information about the property and its condition.</li>
        <li>Secure or remove fragile, valuable, or sensitive items before we arrive.</li>
        <li>Ensure utilities (water, electricity) are available on the day.</li>
      </ul>

      <h2>9. Damage and claims</h2>
      <p>
        Any claim for loss or damage must be reported in writing within 48 hours
        of the service. Our liability is limited to the cost of repair or
        replacement of the affected item, and in any case to the value of the
        services provided, except where liability cannot be limited by law.
      </p>

      <h2>10. Health, safety, and access</h2>
      <p>
        We may decline or pause work where conditions are unsafe (e.g. severe
        biohazards, structural risk). We will discuss alternatives where
        possible.
      </p>

      <h2>11. Privacy</h2>
      <p>
        We process personal data in line with our Privacy Policy.
      </p>

      <h2>12. Consumer rights</h2>
      <p>
        Nothing in these terms limits your statutory rights under the Consumer
        Rights Act 2015 or the Consumer Contracts (Information, Cancellation and
        Additional Charges) Regulations 2013.
      </p>

      <h2>13. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales and disputes
        are subject to the exclusive jurisdiction of the English courts.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a href={mailHref}>{site.email}</a> or call {site.phoneDisplay}.
      </p>
    </main>
  )
}
