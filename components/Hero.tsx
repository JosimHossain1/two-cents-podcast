import React from 'react'
import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
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
  )
}

export default Hero