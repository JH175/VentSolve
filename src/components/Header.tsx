import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/img/logo.svg';

export default function Header() {
  return (
    <div className='p-10 flex justify-evenly items-center'>
      <Link href='/'>
        <div className='flex items-center'>
          {/* <Image src={logo} width={100} alt='site logo, a black beetle' /> */}
          <h1 className='text-2xl'>dungBeetle</h1>
        </div>
      </Link>
      <nav>
        <ul className='flex gap-5'>
          <li>Sign In</li>
          <li>Register</li>
        </ul>
      </nav>
    </div>
  );
}
