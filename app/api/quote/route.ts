import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  return NextResponse.json({ ok: false, error: "smtp_disabled" }, { status: 501 })
}
