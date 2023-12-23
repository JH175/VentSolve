'use client';

import { signIn } from 'next-auth/react';

type ProviderButtonProps = {
  children: React.ReactNode;
  provider: string;
};

export default function ProviderButton(props: ProviderButtonProps) {
  return (
    <button
      onClick={() => signIn(props.provider)}
      className='flex h-12 w-12 items-center justify-center border bg-white hover:drop-shadow-md'
    >
      {props.children}
    </button>
  );
}
