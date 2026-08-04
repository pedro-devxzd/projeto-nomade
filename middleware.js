import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Protege todas as rotas /admin exceto /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const auth = request.cookies.get('admin_auth')

    if (!auth || auth.value !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}
