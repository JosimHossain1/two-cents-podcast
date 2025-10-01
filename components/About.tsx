import { Mic2, Target, Users, Zap } from 'lucide-react';
import React from 'react';
import { Card } from './ui/card';

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main className='pt-16'>
        <section className='bg-gradient-to-br from-black to-gray-900 text-white py-16'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-5xl font-bold mb-4'>
              About <span className='text-yellow-400'>2 Cents</span>
            </h1>
            <p className='text-xl text-gray-300'>
              Raw conversations about building, marketing, and growing
              businesses
            </p>
          </div>
        </section>

        <section className='py-12'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <Card className='p-8 mb-8'>
              <h2 className='text-3xl font-bold mb-4'>Our Story</h2>
              <div className='prose max-w-none text-gray-600'>
                <p className='mb-4'>
                  2 Cents Podcast started as a simple idea: bring together the
                  smartest minds in business, marketing, and startups for
                  honest, no-BS conversations about what really works.
                </p>
                <p className='mb-4'>
                  Hosted by <strong>Nafees Salim</strong> and{' '}
                  <strong>Sazzad Ahsan</strong>, we dive deep into the
                  strategies, failures, and wins that shape modern
                  entrepreneurship. Every episode is packed with actionable
                  insights you can use in your own business.
                </p>
                <p>
                  Whether you&apos;re building your first startup, scaling a
                  marketing team, or just curious about the business world, 2
                  Cents gives you the perspectives and tactics you need to
                  succeed.
                </p>
              </div>
            </Card>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
              <Card className='p-6'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Target className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Our Mission</h3>
                <p className='text-gray-600'>
                  To democratize access to world-class business knowledge
                  through authentic conversations with people who&apos;ve been
                  there, done that.
                </p>
              </Card>

              <Card className='p-6'>
                <div className='bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Zap className='h-6 w-6 text-black' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Our Approach</h3>
                <p className='text-gray-600'>
                  No fluff, no corporate speak. Just real conversations about
                  real challenges and how to overcome them with practical,
                  actionable strategies.
                </p>
              </Card>
            </div>

            <Card className='p-8 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='bg-black w-16 h-16 rounded-full flex items-center justify-center'>
                  <Mic2 className='h-8 w-8 text-yellow-400' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold'>Join the Conversation</h3>
                  <p className='text-black/80'>New episodes every week</p>
                </div>
              </div>
              <p className='mb-4'>
                Subscribe on your favorite platform and never miss an episode.
                Got feedback or want to be a guest? We&apos;d love to hear from
                you.
              </p>
            </Card>
          </div>
        </section>

        <section className='py-12 bg-white'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold mb-8 text-center'>
              Meet the Hosts
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='p-6 text-center'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center'>
                  <Users className='h-12 w-12 text-black' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Nafees Salim</h3>
                <p className='text-gray-600 mb-4'>
                  Co-host with a passion for dissecting business models and
                  uncovering what makes companies tick. Brings a strategic lens
                  to every conversation.
                </p>
              </Card>

              <Card className='p-6 text-center'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center'>
                  <Users className='h-12 w-12 text-black' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Sazzad Ahsan</h3>
                <p className='text-gray-600 mb-4'>
                  Co-host focused on growth, marketing, and the human side of
                  building businesses. Always asking the questions that matter.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
