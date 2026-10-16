import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import PreviewExperience from "@/app/preview/PreviewExperience";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return <PreviewExperience initialView="exam" signedIn />;
}
