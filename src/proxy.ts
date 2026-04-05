import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback_secret_for_development_only_please_change'
);

export default async function proxy(request: NextRequest) {
  const adminCookie = request.cookies.get('admin_token')?.value;

  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin') && !isLoginPage;

  if (isAdminRoute) {
    if (!adminCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    try {
      await jwtVerify(adminCookie, JWT_SECRET);
      return NextResponse.next();
    } catch (e) {
      // Invalid token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
