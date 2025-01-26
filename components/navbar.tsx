'use client';

import Link from 'next/link';
import { useSupabaseSession } from '@/hooks/useSupabaseSession';
import { Button } from '@/components/ui/button';
import { MobileMenu } from './mobile-menu';
import { UserMenu } from './user-menu';

export function Navbar() {
  const { session, loading } = useSupabaseSession();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">Logo</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {session ? (
              <UserMenu />
            ) : (
              <>
                <Button variant="ghost" asChild className="mr-2">
                  <Link href="/login">Iniciar sesión</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Registrarse</Link>
                </Button>
              </>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <MobileMenu session={session} />
          </div>
        </div>
      </div>
    </nav>
  );
}
