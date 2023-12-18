import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='flex justify-center'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-green-500 hover:bg-green-400',
          },
        }}
      />
    </div>
  );
}
