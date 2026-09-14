import { NextRequest, NextResponse } from "next/server";
import { createSession, DEMO_CREDENTIALS } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    await createSession();
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    { ok: false, error: "Invalid demo credentials." },
    { status: 401 }
  );
}
