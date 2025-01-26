'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function UserMenu() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex items-center gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Seleccionar opción" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Opción 1</SelectItem>
          <SelectItem value="option2">Opción 2</SelectItem>
          <SelectItem value="option3">Opción 3</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleSignOut}>Cerrar sesión</Button>
    </div>
  );
}
