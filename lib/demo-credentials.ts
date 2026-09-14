// Client-safe constant, split out of lib/auth.ts so the login form (a
// Client Component) doesn't pull in the server-only "next/headers" import.
export const DEMO_CREDENTIALS = {
  email: "student@demo.com",
  password: "driveme2026",
};
