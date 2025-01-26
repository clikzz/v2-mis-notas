'use client';

import { useRouter } from 'next/navigation';
import { login } from '@/app/actions';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { useEffect } from 'react';
import { createClient } from '@/lib/client';

export default function LoginPage() {
  const router = useRouter();
  const { session } = useSupabaseSession();
  const supabase = createClient();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const handleLogin = async (formData: FormData) => {
    await login(formData);
    // Forzar una actualización de la sesión después del inicio de sesión
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      router.push('/dashboard');
    }
  };

  return (
    <form action={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button type="submit">Log in</button>
    </form>
  );
}
