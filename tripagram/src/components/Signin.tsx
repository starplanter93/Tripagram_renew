import { ClientSafeProvider, signIn } from 'next-auth/react';

interface Ownprops {
  providers: Record<string, ClientSafeProvider>;
}

export default function Signin({ providers }: Ownprops) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
