'use client';

import { SWRConfig } from 'swr';

interface Ownprops {
  children: React.ReactNode;
}

export default function SWRConfigContext({ children }: Ownprops) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      {children}
    </SWRConfig>
  );
}
