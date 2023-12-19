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
          <>
            <a href='/dash'>Dashboard</a>
            <UserButton
              afterSignOutUrl='/'
              signInUrl={`${process.env.BASE_URL}/sign-in`}
              showName={true}
            />
          </>
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
