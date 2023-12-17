import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: 'bg-green-500 hover:bg-green-400',
          },
        }}
      />
    </div>
  );
}
