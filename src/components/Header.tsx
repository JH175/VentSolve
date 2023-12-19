'use client';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const { isSignedIn } = useUser();
  return (
    <div className='p-10 flex justify-evenly items-center'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-orange-500'>VentSolve</h1>
        </div>
      </Link>
      <nav>
        {isSignedIn ? (
          <ul className='flex gap-5 items-center'>
            <li className='hover:text-orange-600'>
              <a href='/dash'>Dashboard</a>
            </li>
            <li>
              <UserButton
                afterSignOutUrl='/'
                signInUrl={`${process.env.BASE_URL}/sign-in`}
                showName={true}
              />
            </li>
          </ul>
        ) : (
          <ul className='flex gap-5'>
            <li className='hover:text-orange-600'>
              <a href='/sign-in'>Sign In</a>
            </li>
            <li className='hover:text-orange-600'>
              <a href='/sign-up'>Register</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
