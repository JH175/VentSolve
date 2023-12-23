'use client';

import Image from 'next/image';
import GoogleProviderLogo from '@/assets/images/GoogleProvider.png';
import TwitterProviderLogo from '@/assets/images/TwitterProvider.png';
import AppleProviderLogo from '@/assets/images/AppleProvider.png';
import LinkedInProviderLogo from '@/assets/images/LinkedInProvider.png';
import FacebookProviderLogo from '@/assets/images/FacebookProvider.png';
import GitHubProviderLogo from '@/assets/images/GitHubProvider.png';
import ProviderButton from '../_components/ProviderButton';
import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex w-[25rem] flex-col items-center gap-5 rounded-md border bg-white p-5 drop-shadow-md'>
        <p className='text-2xl'>Sign in to VentSolve</p>
        <p className='text-center text-lg'>
          Vent problems and find solutions in the global war on pain points.
        </p>
        <p className='text-center'>Sign in with:</p>
        <div className='flex gap-2'>
          <ProviderButton provider='github'>
            <Image
              src={GoogleProviderLogo}
              alt='Sign in with Google.'
              width={200}
            />
          </ProviderButton>
          <ProviderButton provider='github'>
            <Image
              src={TwitterProviderLogo}
              alt='Sign in with Twitter.'
              width={20}
            />
          </ProviderButton>
          <ProviderButton provider='github'>
            <Image src={AppleProviderLogo} alt='Sign in with Apple.' />
          </ProviderButton>
          <ProviderButton provider='github'>
            <Image
              src={LinkedInProviderLogo}
              alt='Sign in with LinkedIn.'
              width={30}
            />
          </ProviderButton>
          <ProviderButton provider='github'>
            <Image
              src={FacebookProviderLogo}
              alt='Sign in with Facebook.'
              width={30}
            />
          </ProviderButton>
          <ProviderButton provider='github'>
            <Image
              src={GitHubProviderLogo}
              alt='Sign in with GitHub.'
              width={30}
            />
          </ProviderButton>
        </div>
      </div>
    </div>
  );
}
