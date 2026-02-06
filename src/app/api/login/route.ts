
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === 'admin@webku.com' && password === '123456') {
    const res = NextResponse.json({ success: true });
    res.cookies.set('login', 'true', { httpOnly: true, path: '/', maxAge: 60*60*24 });
    return res;
  }

  return NextResponse.json({ success: false, message: 'Email atau password salah' }, { status: 401 });
}
