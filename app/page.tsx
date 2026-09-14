import Link from "next/link";
import Quiz from "@/components/Quiz";
import { miniTestQuestions } from "@/lib/questions";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900">
        Demo build — placeholder content, not Ronald&apos;s real question bank. For internal
        preview only.
      </div>

      <h1 className="mt-6 text-3xl font-bold text-neutral-900">
        Ronald&apos;s Driving School — VID Test Prep
      </h1>
      <p className="mt-2 text-neutral-600">
        Pass your provisional licence test with confidence. Try a free sample below — no signup
        needed.
      </p>

      <div className="mt-8">
        <Quiz title="Free 10-question mini test" questions={miniTestQuestions} />
      </div>

      <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">Want the full mock exam?</h2>
        <p className="mt-1 text-neutral-600">
          Sign in to unlock full mock exams with explanations, diagram questions, and video
          lessons.
        </p>
        <Link
          href="/login"
          className="mt-4 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800"
        >
          Student login
        </Link>
      </div>
    </main>
  );
}
