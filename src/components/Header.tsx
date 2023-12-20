'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className='flex items-center justify-evenly p-10'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-orange-500'>VentSolve</h1>
        </div>
      </Link>
      <nav>
        {isSignedIn ? (
          <ul className='flex items-center gap-5'>
            <li className='hover:text-orange-600'>
              <a href='/dash'>Dashboard</a>
            </li>
            <li>User Button</li>
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
