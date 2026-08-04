import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { senha } = await req.json()

    if (!senha) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    if (senha === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ ok: true })
      // Cookie HttpOnly — não acessível via JavaScript
      response.cookies.set('admin_auth', process.env.ADMIN_PASSWORD, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 8, // 8 horas
        path: '/',
      })
      return response
    }

    return NextResponse.json({ ok: false }, { status: 401 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true })
  response.cookies.delete('admin_auth')
  return response
}
