import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='flex justify-center'>
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
