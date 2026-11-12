import { NextResponse } from "next/server";

/**
 * Newsletter sign-up in the footer.
 * TODO (backend phase): add the address to the email marketing list (Mailchimp, Klaviyo, etc.).
 */
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email ?? "")) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  console.info("[newsletter] sign-up", { email: data.email });
  return NextResponse.json({ ok: true });
}
