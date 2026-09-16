"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { DEMO_CREDENTIALS } from "@/lib/demo-credentials";

export default function DemoLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    const data = new FormData(event.currentTarget);
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), password: data.get("password") }),
      });
      if (!response.ok) {
        setError("Invalid demo credentials. Use the pre-filled student account.");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Could not connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return <>
    <p>Demo account only. No real student information is stored. Credentials are pre-filled.</p>
    <form onSubmit={submit}>
      <label>Email<input name="email" type="email" required autoComplete="username" defaultValue={DEMO_CREDENTIALS.email} /></label>
      <label>Password<input name="password" type="password" required autoComplete="current-password" defaultValue={DEMO_CREDENTIALS.password} /></label>
      {error && <p role="alert">{error}</p>}
      <button className="orange" disabled={loading}>{loading ? "Signing in…" : "Sign in ↗"}</button>
    </form>
  </>;
}
