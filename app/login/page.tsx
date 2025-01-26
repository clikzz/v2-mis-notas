'use client';

import { useRouter } from 'next/navigation';
import { login } from '@/app/actions';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { session } = useSupabaseSession();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
    </form>
  );
}
