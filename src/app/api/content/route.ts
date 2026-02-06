
import { NextResponse } from 'next/server';

let content = "Halo, ini konten awal!";

export async function GET() {
  return NextResponse.json({ content });
}

export async function POST(req: Request) {
  const { newContent } = await req.json();
  content = newContent;
  return NextResponse.json({ success: true, content });
}
