import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../active-link/ActiveLink';

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const navItems = [
  { path: '/pricing', title: 'Pricing' },
  { path: '/contact', title: 'Contact' },
  { path: '/about', title: 'About' },
];

export const Navbar = async () => {
  await temporalAsync();

  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded shadow-xl'>
      <Link className='flex flex-1 items-center' href='/'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>

      {navItems.map((item, index) => (
        <ActiveLink key={'nav_' + index} {...item} />
      ))}
    </nav>
  );
};
