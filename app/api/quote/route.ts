import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const required = ["name", "phone", "email", "address", "service"]
  for (const k of required) {
    if (!data[k]) return NextResponse.json({ ok: false, error: "missing" }, { status: 400 })
  }
  const user = process.env.BREVO_SMTP_USER
  const pass = process.env.BREVO_SMTP_PASS
  const from = process.env.LEADS_FROM_EMAIL
  const to = process.env.LEADS_TO_EMAIL
  if (!user || !pass || !from || !to) return NextResponse.json({ ok: false, error: "env" }, { status: 500 })
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: { user, pass }
  })
  await transporter.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: "New Cleaning Quote Request",
    text: [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Address: ${data.address}`,
      `Service: ${data.service}`,
      `Notes: ${data.notes || ""}`
    ].join("\n")
  })
  return NextResponse.json({ ok: true })
}
