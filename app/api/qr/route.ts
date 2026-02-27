import { NextRequest } from "next/server"
// @ts-ignore
import QRCode from "qrcode"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const data = searchParams.get("data") || "https://joeteeoptimalltd.vercel.app/"
  const fmt = (searchParams.get("fmt") || "png").toLowerCase()
  try {
    if (fmt === "svg") {
      const svg = await QRCode.toString(data, {
        type: "svg",
        margin: 0,
        color: { dark: "#111111", light: "#ffffff" }
      })
      return new Response(svg, {
        headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=31536000, immutable" }
      })
    } else {
      const buf = await QRCode.toBuffer(data, {
        type: "png",
        margin: 0,
        color: { dark: "#111111", light: "#ffffff" },
        width: 512
      })
      return new Response(buf, {
        headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=31536000, immutable" }
      })
    }
  } catch {
    return new Response("QR generation failed", { status: 500 })
  }
}
