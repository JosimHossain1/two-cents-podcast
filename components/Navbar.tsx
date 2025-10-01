'use client';

import Link from 'next/link';
import { Mic as Mic2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className='border-b bg-white/80 backdrop-blur-md fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <Link href='/' className='flex items-center space-x-2 group'>
            <div className='bg-yellow-400 p-2 rounded-lg group-hover:bg-yellow-500 transition-colors'>
              <Mic2 className='h-6 w-6 text-black' />
            </div>
            <span className='font-bold text-xl'>2 Cents</span>
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/episodes'
              className='text-sm font-medium hover:text-yellow-500 transition-colors'
            >
              Episodes
            </Link>
            <Link
              href='/clips'
              className='text-sm font-medium hover:text-yellow-500 transition-colors'
            >
              Clips
            </Link>
            <Link
              href='/about'
              className='text-sm font-medium hover:text-yellow-500 transition-colors'
            >
              About
            </Link>
            <Link
              href='/sponsors'
              className='text-sm font-medium hover:text-yellow-500 transition-colors'
            >
              Sponsors
            </Link>
            <Link
              href='/contact'
              className='text-sm font-medium hover:text-yellow-500 transition-colors'
            >
              Contact
            </Link>
          </div>

          <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold'>
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  );
}
