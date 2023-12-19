import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='flex justify-center'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-orange-500 hover:bg-orange-600',
          },
        }}
      />
    </div>
  );
}
