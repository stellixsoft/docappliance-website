import { NextResponse, type NextRequest } from "next/server";

/**
 * One deployment serves both domains:
 *   www.docappliance.com   -> service site (app/(service))
 *   sales.docappliance.com -> store (app/store), same paths as today
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  if (host.startsWith("sales.")) {
    const url = req.nextUrl.clone();
    url.pathname = `/store${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next|api|media|favicon).*)"] };
