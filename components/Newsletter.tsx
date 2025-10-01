import React from 'react';
import { Button } from './ui/button';

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;
