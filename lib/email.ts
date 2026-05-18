import nodemailer from "nodemailer"

export interface QuoteData {
  name: string
  phone: string
  email: string
  address: string
  service: string
  notes: string
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function buildTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
}

export function buildEmailHtml(d: QuoteData): string {
  const notesRow = d.notes
    ? `<tr>
        <td valign="top" style="padding:12px 0;width:140px;">
          <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Notes</span>
        </td>
        <td valign="top" style="padding:12px 0 12px 20px;">
          <p style="font-size:14px;color:#374151;margin:0;line-height:1.7;white-space:pre-wrap;">${esc(d.notes)}</p>
        </td>
      </tr>`
    : ""

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Quote Request – Joetee Optimal Ltd</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px;">
  <tr><td>
  <table width="600" cellpadding="0" cellspacing="0" align="center"
         style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.09);">

    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#0f766e 0%,#115e59 100%);padding:32px 40px;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#99f6e4;letter-spacing:.1em;text-transform:uppercase;">Joetee Optimal Ltd</p>
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">New Cleaning Quote Request</h1>
        <p style="margin:10px 0 0;font-size:13px;color:#ccfbf1;">bookings@joeteeoptimal.co.uk &nbsp;·&nbsp; joeteeoptimal.co.uk</p>
      </td>
    </tr>

    <!-- Alert banner -->
    <tr>
      <td style="background:#f0fdf4;border-bottom:1px solid #d1fae5;padding:14px 40px;">
        <p style="margin:0;font-size:13px;color:#065f46;font-weight:600;">
          ⚡&nbsp; New customer enquiry received. Please reply within 2 hours.
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:36px 40px 0;">
        <p style="margin:0 0 24px;font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.08em;text-transform:uppercase;border-bottom:2px solid #f3f4f6;padding-bottom:10px;">
          Customer Details
        </p>
        <table width="100%" cellpadding="0" cellspacing="0">

          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;width:140px;">
              <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Name</span>
            </td>
            <td style="padding:12px 0 12px 20px;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:15px;color:#111827;font-weight:700;">${esc(d.name)}</span>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Phone</span>
            </td>
            <td style="padding:12px 0 12px 20px;border-bottom:1px solid #f3f4f6;">
              <a href="tel:${esc(d.phone)}" style="font-size:14px;color:#0f766e;font-weight:700;text-decoration:none;">${esc(d.phone)}</a>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Email</span>
            </td>
            <td style="padding:12px 0 12px 20px;border-bottom:1px solid #f3f4f6;">
              <a href="mailto:${esc(d.email)}" style="font-size:14px;color:#0f766e;font-weight:700;text-decoration:none;">${esc(d.email)}</a>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Property</span>
            </td>
            <td style="padding:12px 0 12px 20px;border-bottom:1px solid #f3f4f6;">
              <span style="font-size:14px;color:#111827;">${esc(d.address)}</span>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 0;${d.notes ? "border-bottom:1px solid #f3f4f6;" : ""}">
              <span style="font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:.04em;">Service</span>
            </td>
            <td style="padding:12px 0 12px 20px;${d.notes ? "border-bottom:1px solid #f3f4f6;" : ""}">
              <span style="display:inline-block;background:#0f766e;color:#ffffff;font-size:12px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:.03em;">
                ${esc(d.service)}
              </span>
            </td>
          </tr>

          ${notesRow}

        </table>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td style="padding:32px 40px;">
        <a href="mailto:${esc(d.email)}?subject=Re%3A%20Cleaning%20Quote%20Request%20%E2%80%93%20Joetee%20Optimal%20Ltd"
           style="display:inline-block;background:#0f766e;color:#ffffff;font-size:14px;font-weight:700;padding:14px 28px;border-radius:8px;text-decoration:none;letter-spacing:.02em;">
          Reply to ${esc(d.name)} &rarr;
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#f9fafb;border-top:1px solid #f3f4f6;padding:20px 40px;">
        <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.7;">
          Submitted via the quote form at <strong style="color:#6b7280;">joeteeoptimal.co.uk</strong><br />
          Joetee Optimal Ltd &nbsp;·&nbsp; 86-90 Paul Street, London EC2A 4NE &nbsp;·&nbsp; Registered in England &amp; Wales
        </p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>
</body>
</html>`
}

export function buildEmailText(d: QuoteData): string {
  return `NEW CLEANING QUOTE REQUEST – JOETEE OPTIMAL LTD
================================================

Name:     ${d.name}
Phone:    ${d.phone}
Email:    ${d.email}
Property: ${d.address}
Service:  ${d.service}
${d.notes ? `\nNotes:\n${d.notes}\n` : ""}
------------------------------------------------
Reply directly to this email to contact the customer.
Submitted via joeteeoptimal.co.uk
Joetee Optimal Ltd · 86-90 Paul Street, London EC2A 4NE
`
}
