'use client';
import { SessionProvider } from 'next-auth/react';

interface Ownprops {
  children: React.ReactNode;
}

export default function AuthContext({ children }: Ownprops) {
  return <SessionProvider>{children}</SessionProvider>;
}
