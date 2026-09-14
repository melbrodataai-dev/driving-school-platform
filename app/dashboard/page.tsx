import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { mockExamQuestions } from "@/lib/questions";
import Quiz from "@/components/Quiz";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">Your dashboard</h1>
        <LogoutButton />
      </div>

      <section className="mb-8 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-neutral-900">Sample lesson video</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Placeholder clip (CC0, MDN sample) — real lesson footage goes here once Ronald&apos;s
          videos are uploaded to Bunny Stream.
        </p>
        <video
          className="mt-3 w-full rounded-lg"
          controls
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-neutral-900">
          Full mock exam (with diagram question)
        </h2>
        <Quiz title="Mock exam" questions={mockExamQuestions} />
      </section>
    </main>
  );
}
