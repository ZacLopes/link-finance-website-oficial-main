import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname.startsWith("/_next/static/") ||
    request.nextUrl.pathname.startsWith("/_next/image/")
  ) {
    response.headers.set("Cache-Control", "public, max-age=31536000, immutable")
    response.headers.set("X-Content-Type-Options", "nosniff")
    response.headers.set("Access-Control-Allow-Origin", "*")
  }

  if (request.nextUrl.pathname.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  }

  if (request.nextUrl.pathname === "/images/wall-street-prep-horizontal.png") {
    return NextResponse.redirect(new URL("/images/partners/wall-street-prep-horizontal.png", request.url))
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images|favicon\\.ico|favicon-\\d+x\\d+\\.png|favicon-linkfinance\\.png|manifest\\.json|robots\\.txt|sitemap\\.xml).*)",
    "/images/:path*",
    "/api/:path*",
    "/_next/static/:path*",
    "/_next/image/:path*",
  ],
}
