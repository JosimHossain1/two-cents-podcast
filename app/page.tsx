'use client';

import About from '@/components/About';
import BusinessInsight from '@/components/Business-Insight';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact'; 
import Sponsor from '@/components/Sponsor';
export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <BusinessInsight />
      <Sponsor />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}
