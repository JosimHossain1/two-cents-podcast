import React from 'react'
import { Card } from './ui/card'
import { Briefcase, TrendingUp, Users } from 'lucide-react'

const BusinessInsight = () => {
  return (
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
  )
}

export default BusinessInsight