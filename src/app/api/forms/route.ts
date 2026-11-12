import { NextResponse } from "next/server";

/**
 * Receives the "Send Us A Message" forms on the location and contact pages.
 * TODO (backend phase): verify reCAPTCHA, then email the right location / save to CRM.
 */
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.email) return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
  console.info("[forms] submission", { type: data.type, email: data.email });
  return NextResponse.json({ ok: true });
}
