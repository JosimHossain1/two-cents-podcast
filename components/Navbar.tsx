'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
  const links = [
    { href: '#episodes', label: 'Episodes' },
    { href: '#clips', label: 'Clips' },
    { href: '#about', label: 'About' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ];

 

  return (
    <nav className='border-b  bg-yellow-50/10 backdrop-blur-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link href='/' className='flex items-center space-x-2 group'>
            <Image
              src='/logo.png'
              alt='2 Cents Podcast Logo'
              width={40}
              height={40}
              className='h-10 w-10 rounded'
            />
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm font-medium text-white hover:text-yellow-500 transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold'>
            Sponsor
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
