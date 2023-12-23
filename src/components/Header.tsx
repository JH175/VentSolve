import Link from 'next/link';
import { auth } from '@/auth';
import SignOut from './SignOut';

export default async function Header() {
  const session = await auth();

  return (
    <div className='flex items-center justify-evenly p-10'>
      <Link href='/'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-orange-500'>VentSolve</h1>
        </div>
      </Link>
      <nav>
        {session ? (
          <ul className='flex items-center gap-5'>
            <li className='hover:text-orange-600'>
              <a href='/dash'>Dashboard</a>
            </li>
            <li>
              <SignOut />
            </li>
          </ul>
        ) : (
          <ul className='flex gap-5'>
            <li className='hover:text-orange-600'>
              <a href='/signin'>Sign In</a>
            </li>
            <li className='hover:text-orange-600'>
              <a href='/signup'>Register</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
