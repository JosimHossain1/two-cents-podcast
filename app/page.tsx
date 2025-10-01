'use client';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, TrendingUp, Users, Briefcase } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <main className='pt-16'>
        <section className='relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 overflow-hidden'>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZEQjcxMyIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
            <div className='text-center max-w-4xl mx-auto'>
              <div className='inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6'>
                <span className='text-yellow-400 text-sm font-medium'>
                  New episodes every week
                </span>
              </div>

              <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
                Your <span className='text-yellow-400'>2 Cents</span> on
                Business & Growth
              </h1>

              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                Join Nafees & Sazzad for raw, unfiltered conversations with
                entrepreneurs, marketers, and innovators who are building the
                future.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8'
                >
                  <Play className='mr-2 h-5 w-5' />
                  Listen Now
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
                >
                  View All Episodes
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <Card className='p-8 border-2 hover:border-yellow-400 transition-all hover:shadow-lg'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Briefcase className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Business Insights</h3>
                <p className='text-gray-600'>
                  Deep dives into strategies that actually work in today&amp;s
                  market.
                </p>
              </Card>

              <Card className='p-8 border-2 hover:border-yellow-400 transition-all hover:shadow-lg'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <TrendingUp className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Growth Marketing</h3>
                <p className='text-gray-600'>
                  Learn from marketers who&apos;ve scaled brands from zero to
                  millions.
                </p>
              </Card>

              <Card className='p-8 border-2 hover:border-yellow-400 transition-all hover:shadow-lg'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Startup Stories</h3>
                <p className='text-gray-600'>
                  Real stories from founders who&apos;ve been through the
                  trenches.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className='py-20 bg-black text-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold mb-4'>Never Miss an Episode</h2>
            <p className='text-gray-300 text-lg mb-8'>
              Subscribe to get weekly insights delivered straight to your inbox
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-400'
              />
              <Button className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8'>
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
