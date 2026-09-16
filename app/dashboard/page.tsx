import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Preview from '../preview/page';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect('/login');
  return <Preview initialView="student" signedIn />;
}
