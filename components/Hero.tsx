import React from 'react';
import { Button } from './ui/button';
import { Play, Mic } from 'lucide-react';
import Link from 'next/link';
import { AiOutlineSpotify } from "react-icons/ai";
import { PiTiktokLogo } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  const socials = [
    {
      name: 'YouTube',
      icon: <RiYoutubeLine />,
      url: 'https://www.youtube.com/@2centspodcastofficial',
    },
    {
      name: 'Facebook',
      icon: <LuFacebook />,
      url: 'https://www.facebook.com/2centspodcastofficial',
    },
 
    {
      name: 'LinkedIn',
      icon: <CiLinkedin />,
      url: 'https://www.linkedin.com/company/2-cents-podcast/',
    },
    {
      name : 'TikTok',
      icon : <PiTiktokLogo />
,
      url : 'https://www.tiktok.com/@2centspodcast'
    },
    {
      name : 'Spotify',
      icon : <AiOutlineSpotify />,
      url : 'https://creators.spotify.com/pod/profile/nafees-salim'
    },
    
  ];



  return (
    <section className='relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 overflow-hidden'>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZEQjcxMyIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 relative'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6'>
            <span className='text-yellow-400 text-sm font-medium'>
              <Mic className='inline-block mr-2 h-4 w-4' />
              New episodes every week
            </span>
          </div>

          <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
            The biggest
            <span className='text-yellow-400'>Business Podcast </span>
            in Bangladesh!
          </h1>

          <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
            Talk about the Business | Marketing | Productivity | Wellness |
            Entrepreneurship.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/'>
              <Button
                size='lg'
                className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold  px-8 cursor-pointer'
              >
                <Play className=' h-5 w-5' />
                Listen Now
              </Button>
            </Link>
            <Button
              size='lg'
              className='border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10'
            >
              View All Episodes
            </Button>
          </div>
          {/* Social Media Icons */}

          <div className='flex justify-center items-center mt-8 bg-yellow-100/20 px-4 py-4 rounded-full w-fit mx-auto'>
            {socials.map((social) => (
              <Button
                key={social.name}
                variant='outline'
                size='icon'
                asChild
                className='rounded-full text-black border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all mx-1.5'
              >
                <a
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='h-10 w-10'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
