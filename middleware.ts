import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('luxs_admin_auth')?.value === 'true'
  const isLoginPage = request.nextUrl.pathname.startsWith('/login')
  const isAdminPage = request.nextUrl.pathname.startsWith('/adr')

  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/adr', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/adr/:path*', '/login'],
}
