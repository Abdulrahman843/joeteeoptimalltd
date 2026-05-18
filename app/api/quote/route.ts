import { NextRequest, NextResponse } from "next/server"
import { buildTransport, buildEmailHtml, buildEmailText, QuoteData } from "../../../lib/email"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const REQUIRED: (keyof QuoteData)[] = ["name", "phone", "email", "address", "service"]

const ALLOWED_SERVICES = new Set([
  "Residential",
  "Commercial",
  "End of Tenancy",
  "Move-in / Move-out",
  "Airbnb Turnover",
  "Post-construction",
  "Janitorial",
  "Regular Maintenance",
  "Deep Cleaning"
])

export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 })
  }

  // Honeypot — bots fill this hidden field, humans don't
  if (body._hp) {
    return NextResponse.json({ ok: true })
  }

  // Validate required fields
  for (const field of REQUIRED) {
    if (!body[field]?.trim()) {
      return NextResponse.json({ error: `missing_${field}` }, { status: 422 })
    }
  }

  if (!EMAIL_RE.test(body.email?.trim())) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 })
  }

  if (!ALLOWED_SERVICES.has(body.service?.trim())) {
    return NextResponse.json({ error: "invalid_service" }, { status: 422 })
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ error: "smtp_not_configured" }, { status: 503 })
  }

  const data: QuoteData = {
    name:    body.name.trim(),
    phone:   body.phone.trim(),
    email:   body.email.trim().toLowerCase(),
    address: body.address.trim(),
    service: body.service.trim(),
    notes:   body.notes?.trim() ?? ""
  }

  try {
    const transport = buildTransport()
    await transport.sendMail({
      from:    process.env.SMTP_FROM ?? `"Joetee Optimal Ltd" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_TO ?? "booking@joeteeoptimal.co.uk",
      replyTo: `"${data.name}" <${data.email}>`,
      subject: "New Cleaning Quote Request – Joetee Optimal Ltd",
      text:    buildEmailText(data),
      html:    buildEmailHtml(data)
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[quote/send]", err)
    return NextResponse.json({ error: "send_failed" }, { status: 500 })
  }
}
