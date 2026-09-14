// DEMO-ONLY MOCK AUTH.
//
// This is NOT how the real product will work. Real build swaps this whole
// file for Supabase Auth (email/password + session via @supabase/ssr) — see
// README.md §2 Architecture. Every other file imports from here, not from
// a specific auth provider, so that swap should only touch this file plus
// the two route handlers in app/api/login and app/api/logout.

import { cookies } from "next/headers";
import { DEMO_CREDENTIALS } from "./demo-credentials";

const SESSION_COOKIE = "demo_session";

export { DEMO_CREDENTIALS };

export async function createSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, "demo-student", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<{ userId: string } | null> {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;
  if (!value) return null;
  return { userId: value };
}
