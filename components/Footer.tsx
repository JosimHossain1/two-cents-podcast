import Link from 'next/link';
import { Youtube, Music, Apple } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-black text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-yellow-400 text-lg mb-4'>
              2 Cents Podcast
            </h3>
            <p className='text-gray-400 text-sm'>
              Business, marketing, startups, and productivity conversations with
              industry leaders.
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/episodes'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link
                  href='/clips'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  Clips
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/sponsors'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-400 hover:text-yellow-400 transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Listen On</h4>
            <div className='flex space-x-4'>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-yellow-400 transition-colors'
              >
                <Youtube className='h-6 w-6' />
              </a>
              <a
                href='https://spotify.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-yellow-400 transition-colors'
              >
                <Music className='h-6 w-6' />
              </a>
              <a
                href='https://podcasts.apple.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-yellow-400 transition-colors'
              >
                <Apple className='h-6 w-6' />
              </a>
            
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} 2 Cents Podcast. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
