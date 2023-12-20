import GoogleProviderLogo from '@/assets/images/GoogleProvider.png';
import TwitterProviderLogo from '@/assets/images/TwitterProvider.png';
import AppleProviderLogo from '@/assets/images/AppleProvider.png';
import LinkedInProviderLogo from '@/assets/images/LinkedInProvider.png';
import FacebookProviderLogo from '@/assets/images/FacebookProvider.png';
import ProviderButton from '../_components/ProviderButton';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className='flex justify-center'>
      <div className='flex w-[25rem] flex-col items-center gap-5 rounded-md border bg-white p-5 drop-shadow-md'>
        <p className='text-2xl'>Sign up on VentSolve</p>
        <p className='text-center text-lg'>
          Vent problems and find solutions in the global war on pain points.
        </p>
        <p className='text-center'>Continue with:</p>
        <div className='flex gap-2'>
          <ProviderButton>
            <Image
              src={GoogleProviderLogo}
              alt='Sign in with Google.'
              width={200}
            />
          </ProviderButton>
          <ProviderButton>
            <Image
              src={TwitterProviderLogo}
              alt='Sign in with Twitter.'
              width={20}
            />
          </ProviderButton>
          <ProviderButton>
            <Image src={AppleProviderLogo} alt='Sign in with Apple.' />
          </ProviderButton>
          <ProviderButton>
            <Image
              src={LinkedInProviderLogo}
              alt='Sign in with Apple.'
              width={30}
            />
          </ProviderButton>
          <ProviderButton>
            <Image
              src={FacebookProviderLogo}
              alt='Sign in with Apple.'
              width={30}
            />
          </ProviderButton>
        </div>
      </div>
    </div>
  );
}
