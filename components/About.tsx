import { Target, Zap } from 'lucide-react';
import React from 'react';
import { Card } from './ui/card';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-black px-16' id='about'>
      <section className='bg-gradient-to-br from-black to-gray-900 text-white pt-10 pb-5'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl font-bold mb-4'>
            About <span className='text-yellow-400'>2 Cents Podcast</span>
          </h1>
          <p className='text-gray-300'>
            Raw conversations about building, marketing, and growing businesses
          </p>
        </div>
      </section>

      <section className='py-12 flex justify-center'>
        <div className='w-[40%] mx-auto overflow-hidden relative'>
          <Image
            alt='About 2 Cents Podcast'
            src='/logo.png'
            width={1920}
            height={1080}
            className='w-full h-fit object-cover rounded-2xl'
          />
        </div>
        <div className='w-[60%] mx-auto px-4 sm:px-6 lg:px-8'>
          <Card className='py-4 px-6 mb-8 bg-amber-50'>
            <h2 className='text-3xl font-bold'>Our Story</h2>
            <div className='prose max-w-none text-gray-600'>
              <p className='mb-4'>
                2 Cents Podcast started as a simple idea: bring together the
                smartest minds in business, marketing, and startups for honest,
                no-BS conversations about what really works.
              </p>
              <p className='mb-4'>
                Hosted by <strong>Nafees Salim</strong> and{' '}
                <strong>Sazzad Ahsan</strong>, we dive deep into the strategies,
                failures, and wins that shape modern entrepreneurship. Every
                episode is packed with actionable insights you can use in your
                own business.
              </p>
            </div>
          </Card>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <Card className='p-6 bg-amber-50'>
              <div className='flex items-center gap-4'>
                <span className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center gap-2'>
                  <Target className='h-6 w-6 text-black' />
                </span>
                <h3 className='text-xl font-bold'>Our Mission</h3>
              </div>
              <p className='text-gray-600'>
                To democratize access to world-class business knowledge through
                authentic conversations with people who&apos;ve been there, done
                that.
              </p>
            </Card>

            <Card className='p-6 bg-amber-50'>
              <div className='flex items-center gap-4'>
                <span className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center gap-2'>
                  <Zap className='h-6 w-6 text-black' />
                </span>
                <h3 className='text-xl font-bold'>Our Approach</h3>
              </div>
              <p className='text-gray-600'>
                No fluff, no corporate speak. Just real conversations about real
                challenges and how to overcome them with practical, actionable
                strategies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-12 text-white'>
        <div>
          <div className='max-w-4xl mx-auto mb-8'>
            <h1 className='text-5xl font-bold mb-4 text-center'>
              Meet Our<span className='text-yellow-400'> Hosts</span>
            </h1>
            <p className='text-center text-gray-300'>
              Get to know the voices behind the mic.
            </p>
          </div>

          <Image
            src='/channel_banner.jpg'
            alt='Nafees Salim and Sazzad Hossain'
            width={1920}
            height={1080}
            className='w-full h-fit object-cover rounded-2xl'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            <div className=' text-white bg-transparent border-none px-10'>
              <h3 className='text-2xl font-bold mb-2 text-center'>Sazzad Ahsan</h3>
              <p className='text-gray-300 mb-4'>
                Sazzad Hossain, host of the 2 Cents Podcast, is a Business Development expert with 11+ years of experience in brand growth and transformation. He specializes in Brand Consultancy, Storytelling, and Content Strategy.
              </p>
              <p className='text-gray-300'>Alhamdulillah, his leadership has driven successful brand transformations, boosting engagement and market share across diverse industries.</p>
            </div>
            <div className=' bg-transparent border-none px-10 text-white'>
              <h3 className='text-2xl font-bold mb-2 text-center'>Nafees Salim</h3>
              <p className='text-gray-300 mb-4'>
               Nafees Salim, host of the 2 Cents Podcast, is an entrepreneur, digital strategist, and educator from Bangladesh. He is the founder and CEO of Impact Academy, empowering youth with skills and creating career opportunities.
              </p>
              <p className='text-gray-300'>Through the podcast, he shares insights from industry leaders, inspiring aspiring professionals and driving growth and innovation in Bangladesh.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
