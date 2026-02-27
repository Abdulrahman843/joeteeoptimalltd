import { NextRequest } from "next/server"
import QRCode from "qrcode"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const data = searchParams.get("data") || "https://joeteeoptimalltd.vercel.app/"
  try {
    const svg = await QRCode.toString(data, {
      type: "svg",
      margin: 0,
      color: { dark: "#111111", light: "#ffffff" }
    })
    return new Response(svg, {
      headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=31536000, immutable" }
    })
  } catch (e) {
    return new Response("<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><text x='10' y='64'>QR error</text></svg>", {
      headers: { "Content-Type": "image/svg+xml" },
      status: 500
    })
  }
}
