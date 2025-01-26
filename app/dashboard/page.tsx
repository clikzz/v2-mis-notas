'use client';

import Link from 'next/link';
import { createClient } from '@/lib/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function checkUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push('/login');
      } else {
        setUserEmail(data.user.email ?? null);
      }
    }
    checkUser();
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {userEmail}</p>
      <Link href="/">Home</Link>
    </div>
  );
}
